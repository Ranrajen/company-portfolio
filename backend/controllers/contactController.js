import Contact from '../models/Contact.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { validationResult } from 'express-validator';
import { sendContactEmail } from '../utils/email.js';

// @desc    Submit contact form
// @route   POST /api/contacts
// @access  Public
export const submitContact = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }
  
  // Add IP and user agent for tracking
  const contactData = {
    ...req.body,
    ipAddress: req.ip || req.connection.remoteAddress,
    userAgent: req.headers['user-agent']
  };
  
  const contact = await Contact.create(contactData);
  
  // Send email notification
  try {
    await sendContactEmail(contact);
  } catch (emailError) {
    console.error('Email sending failed:', emailError);
    // Don't fail the request if email fails
  }
  
  res.status(201).json({
    success: true,
    message: 'Contact form submitted successfully',
    data: {
      id: contact._id,
      name: contact.name,
      email: contact.email
    }
  });
});

// @desc    Get all contacts (Admin)
// @route   GET /api/contacts
// @access  Private (Admin only)
export const getContacts = asyncHandler(async (req, res) => {
  const { status, limit = 50, page = 1 } = req.query;
  
  const filter = {};
  if (status) filter.status = status;
  
  const skip = (parseInt(page) - 1) * parseInt(limit);
  
  const contacts = await Contact.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(parseInt(limit));
  
  const total = await Contact.countDocuments(filter);
  
  res.status(200).json({
    success: true,
    data: contacts,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      pages: Math.ceil(total / parseInt(limit))
    }
  });
});

// @desc    Get single contact
// @route   GET /api/contacts/:id
// @access  Private (Admin only)
export const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  
  if (!contact) {
    return res.status(404).json({
      success: false,
      message: 'Contact not found'
    });
  }
  
  res.status(200).json({
    success: true,
    data: contact
  });
});

// @desc    Update contact status
// @route   PUT /api/contacts/:id/status
// @access  Private (Admin only)
export const updateContactStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  
  if (!status || !['pending', 'read', 'replied', 'archived'].includes(status)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid status value'
    });
  }
  
  const contact = await Contact.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true, runValidators: true }
  );
  
  if (!contact) {
    return res.status(404).json({
      success: false,
      message: 'Contact not found'
    });
  }
  
  res.status(200).json({
    success: true,
    data: contact
  });
});

// @desc    Delete contact
// @route   DELETE /api/contacts/:id
// @access  Private (Admin only)
export const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  
  if (!contact) {
    return res.status(404).json({
      success: false,
      message: 'Contact not found'
    });
  }
  
  await contact.deleteOne();
  
  res.status(200).json({
    success: true,
    message: 'Contact deleted successfully'
  });
});

// @desc    Get contact stats
// @route   GET /api/contacts/stats
// @access  Private (Admin only)
export const getContactStats = asyncHandler(async (req, res) => {
  const total = await Contact.countDocuments();
  const pending = await Contact.countDocuments({ status: 'pending' });
  const read = await Contact.countDocuments({ status: 'read' });
  const replied = await Contact.countDocuments({ status: 'replied' });
  const archived = await Contact.countDocuments({ status: 'archived' });
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayCount = await Contact.countDocuments({
    createdAt: { $gte: today }
  });
  
  res.status(200).json({
    success: true,
    data: {
      total,
      pending,
      read,
      replied,
      archived,
      today: todayCount
    }
  });
});