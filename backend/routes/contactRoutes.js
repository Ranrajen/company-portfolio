import express from 'express';
import {
  submitContact,
  getContacts,
  getContact,
  updateContactStatus,
  deleteContact,
  getContactStats
} from '../controllers/contactController.js';
import { validateContact } from '../utils/validators.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Public route
router.post('/', validateContact, submitContact);

// Admin routes (protected)
router.get('/', protect, authorize('admin', 'editor'), getContacts);
router.get('/stats', protect, authorize('admin'), getContactStats);
router.get('/:id', protect, authorize('admin', 'editor'), getContact);
router.put('/:id/status', protect, authorize('admin', 'editor'), updateContactStatus);
router.delete('/:id', protect, authorize('admin'), deleteContact);

export default router;