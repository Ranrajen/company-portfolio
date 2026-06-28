import Service from '../models/Service.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { validationResult } from 'express-validator';

// @desc    Get all services
// @route   GET /api/services
// @access  Public
export const getServices = asyncHandler(async (req, res) => {
  const { active, limit = 50, sort = 'order' } = req.query;
  
  const filter = {};
  if (active === 'true') filter.isActive = true;
  
  const services = await Service.find(filter)
    .sort(sort)
    .limit(parseInt(limit));
  
  res.status(200).json({
    success: true,
    count: services.length,
    data: services
  });
});

// @desc    Get single service by slug
// @route   GET /api/services/slug/:slug
// @access  Public
export const getServiceBySlug = asyncHandler(async (req, res) => {
  const service = await Service.findOne({ slug: req.params.slug });
  
  if (!service) {
    return res.status(404).json({
      success: false,
      message: 'Service not found'
    });
  }
  
  res.status(200).json({
    success: true,
    data: service
  });
});

// @desc    Get single service by ID
// @route   GET /api/services/id/:id
// @access  Public
export const getServiceById = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  
  if (!service) {
    return res.status(404).json({
      success: false,
      message: 'Service not found'
    });
  }
  
  res.status(200).json({
    success: true,
    data: service
  });
});

// @desc    Create a new service
// @route   POST /api/services
// @access  Private (Admin only)
export const createService = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }
  
  const service = await Service.create(req.body);
  
  res.status(201).json({
    success: true,
    data: service
  });
});

// @desc    Update a service
// @route   PUT /api/services/:id
// @access  Private (Admin only)
export const updateService = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }
  
  let service = await Service.findById(req.params.id);
  
  if (!service) {
    return res.status(404).json({
      success: false,
      message: 'Service not found'
    });
  }
  
  service = await Service.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  
  res.status(200).json({
    success: true,
    data: service
  });
});

// @desc    Delete a service
// @route   DELETE /api/services/:id
// @access  Private (Admin only)
export const deleteService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  
  if (!service) {
    return res.status(404).json({
      success: false,
      message: 'Service not found'
    });
  }
  
  await service.deleteOne();
  
  res.status(200).json({
    success: true,
    message: 'Service deleted successfully'
  });
});

// @desc    Search services
// @route   GET /api/services/search
// @access  Public
export const searchServices = asyncHandler(async (req, res) => {
  const { q } = req.query;
  
  if (!q) {
    return res.status(400).json({
      success: false,
      message: 'Search query is required'
    });
  }
  
  const services = await Service.find(
    { $text: { $search: q } },
    { score: { $meta: 'textScore' } }
  )
  .sort({ score: { $meta: 'textScore' } })
  .limit(20);
  
  res.status(200).json({
    success: true,
    count: services.length,
    data: services
  });
});