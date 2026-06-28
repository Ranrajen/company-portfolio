import express from 'express';
import {
  register,
  login,
  getMe,
  updateProfile,
  changePassword,
  forgotPassword
} from '../controllers/authController.js';
import { validateRegister, validateLogin } from '../utils/validators.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);
router.post('/forgot-password', forgotPassword);

// Protected routes
router.get('/me', protect, getMe);
router.put('/update', protect, updateProfile);
router.put('/password', protect, changePassword);

export default router;