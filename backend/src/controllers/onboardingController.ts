import { Request, Response } from 'express';
import User from '../models/User';

// @desc    Get onboarding data
// @route   GET /api/onboarding/:userId
// @access  Private
export const getOnboardingData = async (req: any, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.params.userId).select('-password');

    if (user) {
      // If the user requesting doesn't match the userId parameter, and it's not an admin route,
      // it might be unauthorized, but for simplicity let's just check if req.user._id matches req.params.userId
      if (req.user._id.toString() !== req.params.userId) {
        res.status(401).json({ message: 'Not authorized' });
        return;
      }

      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// @desc    Create/Update onboarding data
// @route   PUT /api/onboarding/:userId
// @access  Private
export const updateOnboardingData = async (req: any, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.params.userId);

    if (user) {
      if (req.user._id.toString() !== req.params.userId) {
        res.status(401).json({ message: 'Not authorized' });
        return;
      }

      // Update fields based on what's provided in the request body
      user.gender = req.body.gender !== undefined ? req.body.gender : user.gender;
      user.dateOfBirth = req.body.dateOfBirth !== undefined ? req.body.dateOfBirth : user.dateOfBirth;
      user.height = req.body.height !== undefined ? req.body.height : user.height;
      user.weight = req.body.weight !== undefined ? req.body.weight : user.weight;
      user.activityLevel = req.body.activityLevel !== undefined ? req.body.activityLevel : user.activityLevel;
      user.fitnessGoals = req.body.fitnessGoals !== undefined ? req.body.fitnessGoals : user.fitnessGoals;
      user.avatar = req.body.avatar !== undefined ? req.body.avatar : user.avatar;
      user.username = req.body.username !== undefined ? req.body.username : user.username;
      user.bio = req.body.bio !== undefined ? req.body.bio : user.bio;
      user.notificationPreferences = req.body.notificationPreferences !== undefined ? req.body.notificationPreferences : user.notificationPreferences;

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        fullName: updatedUser.fullName,
        email: updatedUser.email,
        gender: updatedUser.gender,
        dateOfBirth: updatedUser.dateOfBirth,
        height: updatedUser.height,
        weight: updatedUser.weight,
        activityLevel: updatedUser.activityLevel,
        fitnessGoals: updatedUser.fitnessGoals,
        avatar: updatedUser.avatar,
        username: updatedUser.username,
        bio: updatedUser.bio,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// @desc    Create onboarding data
// @route   POST /api/onboarding
// @access  Private
// Normally POST is to create, but since the user is already registered in step 1,
// the onboarding steps are just updates. But we provide POST to satisfy the spec.
export const createOnboardingData = async (req: any, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.gender = req.body.gender || user.gender;
      user.dateOfBirth = req.body.dateOfBirth || user.dateOfBirth;
      user.height = req.body.height || user.height;
      user.weight = req.body.weight || user.weight;
      user.activityLevel = req.body.activityLevel || user.activityLevel;
      user.fitnessGoals = req.body.fitnessGoals || user.fitnessGoals;
      
      const updatedUser = await user.save();
      res.status(201).json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
