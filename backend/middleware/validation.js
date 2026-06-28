import { body } from 'express-validator';

// Service validators
export const validateService = [
  body('title')
    .trim()
    .notEmpty().withMessage('Title is required')
    .isLength({ max: 100 }).withMessage('Title cannot exceed 100 characters'),
  body('icon')
    .trim()
    .notEmpty().withMessage('Icon is required'),
  body('shortDescription')
    .trim()
    .notEmpty().withMessage('Short description is required')
    .isLength({ max: 200 }).withMessage('Short description cannot exceed 200 characters'),
  body('detailedDescription')
    .trim()
    .notEmpty().withMessage('Detailed description is required')
    .isLength({ max: 2000 }).withMessage('Detailed description cannot exceed 2000 characters'),
  body('features')
    .optional()
    .isArray().withMessage('Features must be an array'),
  body('benefits')
    .optional()
    .isArray().withMessage('Benefits must be an array')
];

// Portfolio validators
export const validatePortfolio = [
  body('title')
    .trim()
    .notEmpty().withMessage('Title is required')
    .isLength({ max: 100 }).withMessage('Title cannot exceed 100 characters'),
  body('category')
    .trim()
    .notEmpty().withMessage('Category is required')
    .isIn(['Football Tournament', 'Community Event', 'Corporate Event', 'Sports Event', 'Adventure Tour', 'Festival', 'Custom'])
    .withMessage('Invalid category'),
  body('description')
    .trim()
    .notEmpty().withMessage('Description is required')
    .isLength({ max: 500 }).withMessage('Description cannot exceed 500 characters'),
  body('image')
    .trim()
    .notEmpty().withMessage('Image URL is required')
    .isURL().withMessage('Invalid image URL'),
  body('client')
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage('Client name cannot exceed 100 characters'),
  body('kpis')
    .optional()
    .isArray().withMessage('KPIs must be an array')
];

// Contact validators
export const validateContact = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name cannot exceed 100 characters'),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email'),
  body('phone')
    .optional()
    .trim()
    .matches(/^[0-9+\s-]{10,15}$/).withMessage('Please enter a valid phone number'),
  body('service')
    .trim()
    .notEmpty().withMessage('Service selection is required'),
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ max: 1000 }).withMessage('Message cannot exceed 1000 characters'),
  body('company')
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage('Company name cannot exceed 100 characters')
];

// Auth validators
export const validateRegister = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name cannot exceed 100 characters'),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email'),
  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('role')
    .optional()
    .isIn(['admin', 'editor', 'viewer']).withMessage('Invalid role')
];

export const validateLogin = [
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email'),
  body('password')
    .notEmpty().withMessage('Password is required')
];