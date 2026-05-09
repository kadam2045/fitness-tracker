import express from 'express';
import { getOnboardingData, updateOnboardingData, createOnboardingData } from '../controllers/onboardingController';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

router.route('/')
  .post(protect, createOnboardingData);

router.route('/:userId')
  .get(protect, getOnboardingData)
  .put(protect, updateOnboardingData);

export default router;
