import express from 'express';
import {
  getPortfolioItems,
  getPortfolioItem,
  getPortfolioBySlug,
  createPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem,
  getPortfolioCategories,
  getFeaturedPortfolio
} from '../controllers/portfolioController.js';
import { validatePortfolio } from '../utils/validators.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getPortfolioItems);
router.get('/categories', getPortfolioCategories);
router.get('/featured', getFeaturedPortfolio);
router.get('/slug/:slug', getPortfolioBySlug);
router.get('/:id', getPortfolioItem);

// Admin routes (protected)
router.post('/', protect, authorize('admin'), validatePortfolio, createPortfolioItem);
router.put('/:id', protect, authorize('admin'), validatePortfolio, updatePortfolioItem);
router.delete('/:id', protect, authorize('admin'), deletePortfolioItem);

export default router;