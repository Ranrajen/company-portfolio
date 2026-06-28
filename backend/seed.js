import mongoose from 'mongoose';
import dotenv from 'dotenv';

import Service from './models/Service.js';
import services from './data/services.js';

dotenv.config();

const seedServices = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Remove old services
    await Service.deleteMany();
    console.log('🗑️ Existing services deleted');

    // Insert new services
    await Service.insertMany(services);
    console.log(`✅ ${services.length} services inserted`);

    console.log('🎉 Database seeded successfully');

    process.exit(0);
  } catch (error) {
    console.error('❌ Seed failed');
    console.error(error);

    process.exit(1);
  }
};

seedServices();

// Add this to company.js
// import { api } from '../lib/api';

// export const fetchServices = async () => {
//   const response = await api.getServices();
//   return response.data;
// };

// export const fetchPortfolio = async () => {
//   const response = await api.getPortfolio();
//   return response.data;
// };
