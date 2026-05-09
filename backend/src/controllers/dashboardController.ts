import { Request, Response } from 'express';
import User from '../models/User';

// @desc    Get dashboard data
// @route   GET /api/dashboard/:userId
// @access  Private
export const getDashboardData = async (req: any, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.params.userId).select('-password');

    if (user) {
      if (req.user._id.toString() !== req.params.userId) {
        res.status(401).json({ message: 'Not authorized' });
        return;
      }

      // Generate some mock data for the dashboard based on the user's goals or just static mock data
      const dashboardData = {
        stats: {
          caloriesBurned: { value: 1240, label: 'Calories Burned', trend: 12 },
          workoutsThisWeek: { value: 4, label: 'Workouts', trend: 1 },
          streakDays: { value: 7, label: 'Day Streak', trend: 0 },
          goalProgress: { value: 65, label: 'Goal Progress', trend: 5 },
        },
        todaysWorkout: {
          title: 'Full Body Power',
          progress: 33,
          exercises: [
            { id: '1', name: 'Barbell Squats', completed: true, sets: '3 sets x 10 reps' },
            { id: '2', name: 'Dumbbell Bench Press', completed: true, sets: '3 sets x 12 reps' },
            { id: '3', name: 'Pull-ups', completed: false, sets: '3 sets x 8 reps' },
            { id: '4', name: 'Plank', completed: false, sets: '3 sets x 60s' },
          ],
        },
        weeklyActivity: [
          { day: 'Mon', activeMinutes: 45 },
          { day: 'Tue', activeMinutes: 60 },
          { day: 'Wed', activeMinutes: 0 },
          { day: 'Thu', activeMinutes: 50 },
          { day: 'Fri', activeMinutes: 30 },
          { day: 'Sat', activeMinutes: 90 },
          { day: 'Sun', activeMinutes: 0 },
        ]
      };

      res.json(dashboardData);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
