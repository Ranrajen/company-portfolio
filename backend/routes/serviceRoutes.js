import express from 'express';
import {
  getServices,
  getServiceBySlug,
  getServiceById,
  createService,
  updateService,
  deleteService,
  searchServices
} from '../controllers/serviceController.js';
import { validateService } from '../utils/validators.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getServices);
router.get('/search', searchServices);
router.get('/slug/:slug', getServiceBySlug);
router.get('/id/:id', getServiceById);

// Admin routes (protected)
router.post('/', protect, authorize('admin'), validateService, createService);
router.put('/:id', protect, authorize('admin'), validateService, updateService);
router.delete('/:id', protect, authorize('admin'), deleteService);

export default router;