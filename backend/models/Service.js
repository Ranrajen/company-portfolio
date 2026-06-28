import mongoose from 'mongoose';
import slugify from 'slugify';

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Service title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  },
  icon: {
    type: String,
    required: [true, 'Icon is required'],
    trim: true,
    maxlength: [50, 'Icon name cannot exceed 50 characters']
  },
  shortDescription: {
    type: String,
    required: [true, 'Short description is required'],
    trim: true,
    maxlength: [200, 'Short description cannot exceed 200 characters']
  },
  detailedDescription: {
    type: String,
    required: [true, 'Detailed description is required'],
    trim: true,
    maxlength: [2000, 'Detailed description cannot exceed 2000 characters']
  },
  features: [{
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    }
  }],
  benefits: [{
    type: String,
    trim: true
  }],
  image: {
    type: String,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Create slug before saving
serviceSchema.pre('save', function(next) {
  if (this.isModified('title') || !this.slug) {
    this.slug = slugify(this.title, { 
      lower: true, 
      strict: true,
      remove: /[*+~.()'"!:@]/g
    });
  }
  next();
});

// Index for search
serviceSchema.index({ title: 'text', shortDescription: 'text', detailedDescription: 'text' });

const Service = mongoose.model('Service', serviceSchema);
export default Service;