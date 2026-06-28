import Service from '../models/Service.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { validationResult } from 'express-validator';

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