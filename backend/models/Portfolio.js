import mongoose from 'mongoose';
import slugify from 'slugify';

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Portfolio title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true,
    enum: ['Football Tournament', 'Community Event', 'Corporate Event', 'Sports Event', 'Adventure Tour', 'Festival', 'Custom']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  client: {
    type: String,
    trim: true,
    maxlength: [100, 'Client name cannot exceed 100 characters']
  },
  image: {
    type: String,
    required: [true, 'Image URL is required'],
    trim: true
  },
  gallery: [{
    type: String,
    trim: true
  }],
  kpis: [{
    label: {
      type: String,
      required: true,
      trim: true
    },
    value: {
      type: String,
      required: true,
      trim: true
    }
  }],
  date: {
    type: Date,
    default: Date.now
  },
  location: {
    type: String,
    trim: true
  },
  testimonial: {
    text: {
      type: String,
      trim: true,
      maxlength: [500, 'Testimonial cannot exceed 500 characters']
    },
    author: {
      type: String,
      trim: true
    },
    role: {
      type: String,
      trim: true
    }
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Create slug before saving
portfolioSchema.pre('save', function(next) {
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
portfolioSchema.index({ title: 'text', description: 'text', category: 'text' });

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
export default Portfolio;