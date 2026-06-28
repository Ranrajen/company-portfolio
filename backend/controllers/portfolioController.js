import Portfolio from '../models/Portfolio.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { validationResult } from 'express-validator';

export const getPortfolioItems = asyncHandler(async (req, res) => {
  const { category, featured, active, limit = 50 } = req.query;
  
  const filter = {};
  if (category) filter.category = category;
  if (featured === 'true') filter.isFeatured = true;
  if (active === 'true') filter.isActive = true;
  
  const portfolio = await Portfolio.find(filter)
    .sort({ date: -1 })
    .limit(parseInt(limit));
  
  res.status(200).json({
    success: true,
    count: portfolio.length,
    data: portfolio
  });
});

export const getPortfolioItem = asyncHandler(async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id);
  
  if (!portfolio) {
    return res.status(404).json({
      success: false,
      message: 'Portfolio item not found'
    });
  }
  
  res.status(200).json({
    success: true,
    data: portfolio
  });
});

export const getPortfolioBySlug = asyncHandler(async (req, res) => {
  const portfolio = await Portfolio.findOne({ slug: req.params.slug });
  
  if (!portfolio) {
    return res.status(404).json({
      success: false,
      message: 'Portfolio item not found'
    });
  }
  
  res.status(200).json({
    success: true,
    data: portfolio
  });
});

export const createPortfolioItem = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }
  
  const portfolio = await Portfolio.create(req.body);
  
  res.status(201).json({
    success: true,
    data: portfolio
  });
});

export const updatePortfolioItem = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }
  
  let portfolio = await Portfolio.findById(req.params.id);
  
  if (!portfolio) {
    return res.status(404).json({
      success: false,
      message: 'Portfolio item not found'
    });
  }
  
  portfolio = await Portfolio.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  
  res.status(200).json({
    success: true,
    data: portfolio
  });
});

export const deletePortfolioItem = asyncHandler(async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id);
  
  if (!portfolio) {
    return res.status(404).json({
      success: false,
      message: 'Portfolio item not found'
    });
  }
  
  await portfolio.deleteOne();
  
  res.status(200).json({
    success: true,
    message: 'Portfolio item deleted successfully'
  });
});
export const getPortfolioCategories = asyncHandler(async (req, res) => {
  const categories = await Portfolio.distinct('category');
  
  res.status(200).json({
    success: true,
    data: categories
  });
});

export const getFeaturedPortfolio = asyncHandler(async (req, res) => {
  const portfolio = await Portfolio.find({ isFeatured: true, isActive: true })
    .sort({ date: -1 })
    .limit(6);
  
  res.status(200).json({
    success: true,
    count: portfolio.length,
    data: portfolio
  });
});