// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import Service from './models/Service.js';
// import Portfolio from './models/Portfolio.js';
// import User from './models/User.js';

// dotenv.config();

// const seedData = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('✅ Connected to MongoDB');

//     // Clear existing data
//     await Service.deleteMany();
//     await Portfolio.deleteMany();
//     await User.deleteMany();

//     // Create admin user
//     const admin = await User.create({
//       name: 'Admin User',
//       email: 'admin@outproindia.com',
//       password: 'admin123456',
//       role: 'admin'
//     });
//     console.log('✅ Admin user created');

//     // Insert services
//     const services = await Service.create([
//       {
//         title: 'End-to-End Event Management',
//         icon: '🏆',
//         shortDescription: 'Complete planning and execution from concept to final whistle for sports tournaments, corporate leagues, and adventure challenges.',
//         detailedDescription: 'We take ownership of every stage of your event, from the first concept sketch to the closing ceremony, so you get a single accountable partner instead of a dozen disconnected vendors.',
//         features: [
//           { title: 'Tournament planning & scheduling', description: 'Fixtures, brackets, and timelines built around your participants and venues.' },
//           { title: 'Venue selection & management', description: 'Site visits, bookings, and on-ground readiness checks before day one.' },
//           { title: 'Equipment & vendor coordination', description: 'Single point of contact across every supplier so nothing falls through the cracks.' },
//           { title: 'On-ground execution & operations', description: 'A dedicated crew running registration, flow, and timing on event day.' }
//         ],
//         benefits: [
//           'One accountable team instead of many vendors',
//           'Fewer last-minute surprises on event day',
//           'Clear timelines you can share with stakeholders'
//         ],
//         order: 1
//       },
//       {
//         title: 'Strategic Marketing & Brand Activations',
//         icon: '📊',
//         shortDescription: 'Creative campaigns, sponsorship management, and brand engagement strategies to maximize visibility and participation.',
//         detailedDescription: 'We help your event earn attention before it starts and stay memorable after it ends, pairing creative campaigns with sponsorship structures that make the numbers work for every partner.',
//         features: [
//           { title: 'Sponsorship acquisition & management', description: 'Packaging your event into sponsorship tiers brands actually want to buy.' },
//           { title: 'Brand activation campaigns', description: 'On-site moments designed to be shared, not just seen.' },
//           { title: 'Digital marketing & PR', description: 'Pre-event buzz and post-event coverage that extends your reach.' },
//           { title: 'Fan engagement strategies', description: 'Interactive touchpoints that keep participants and spectators involved.' }
//         ],
//         benefits: [
//           'Sponsorship packages that are easier to sell',
//           'More visibility before, during, and after the event',
//           'Content you can reuse across future campaigns'
//         ],
//         order: 2
//       },
//       {
//         title: 'Logistics & Operations',
//         icon: '📋',
//         shortDescription: 'Seamless coordination of venues, equipment, vendors, and all operational requirements for flawless event execution.',
//         detailedDescription: 'Behind every smooth event is a logistics plan nobody notices because nothing went wrong. That invisibility is the goal — and the result of careful planning before doors open.',
//         features: [
//           { title: 'Supply chain management', description: 'Equipment and materials arrive where they\'re needed, on schedule.' },
//           { title: 'Vendor coordination', description: 'Caterers, security, medics, and AV working from one shared plan.' },
//           { title: 'On-site logistics', description: 'Crowd flow, signage, and access points mapped out in advance.' },
//           { title: 'Safety & compliance', description: 'Permits, insurance, and on-ground safety protocols handled properly.' }
//         ],
//         benefits: [
//           'Lower risk of on-site operational failures',
//           'Faster setup and teardown',
//           'Documented compliance for stakeholders'
//         ],
//         order: 3
//       }
//     ]);
//     console.log(`✅ ${services.length} services created`);

//     // Insert portfolio items
//     const portfolio = await Portfolio.create([
//       {
//         title: 'RUFC Winter Cup 2026',
//         category: 'Football Tournament',
//         client: 'RUFC Sports Club',
//         description: 'End-to-end management of a professional football tournament with multiple teams and matches.',
//         image: '/images/rufc-winter-cup.jpg',
//         kpis: [
//           { label: 'Teams', value: '8' },
//           { label: 'Matches', value: '15' },
//           { label: 'Participants', value: '200+' }
//         ],
//         isFeatured: true,
//         date: new Date('2026-01-15')
//       },
//       {
//         title: 'UDAAN Sports Day',
//         category: 'Community Event',
//         client: 'Ashray Home Care',
//         description: 'A sports day event for Ashray Home Care, promoting inclusion and joy through sports.',
//         image: '/images/udaan-event.jpg',
//         kpis: [
//           { label: 'Children', value: '50+' },
//           { label: 'Activities', value: '10+' },
//           { label: 'Volunteers', value: '20+' }
//         ],
//         isFeatured: true,
//         date: new Date('2025-12-10')
//       },
//       {
//         title: 'Corporate League Tournament',
//         category: 'Corporate Event',
//         client: 'Multi-company consortium',
//         description: 'Professional sports league management for corporate teams, fostering teamwork and engagement.',
//         image: '/images/corporate-league.jpg',
//         kpis: [
//           { label: 'Teams', value: '12' },
//           { label: 'Sports', value: '6' },
//           { label: 'Companies', value: '8' }
//         ],
//         isFeatured: true,
//         date: new Date('2025-11-05')
//       }
//     ]);
//     console.log(`✅ ${portfolio.length} portfolio items created`);

//     console.log('\n🎉 Data seeded successfully!');
//     console.log(`\n📧 Admin Login:`);
//     console.log(`   Email: admin@outproindia.com`);
//     console.log(`   Password: admin123456`);

//     process.exit(0);
//   } catch (error) {
//     console.error('❌ Error seeding data:', error.message);
//     if (error.stack) {
//       console.error('Stack:', error.stack);
//     }
//     process.exit(1);
//   }
// };

// seedData();

// Add this to company.js
import { api } from '../lib/api';

export const fetchServices = async () => {
  const response = await api.getServices();
  return response.data;
};

export const fetchPortfolio = async () => {
  const response = await api.getPortfolio();
  return response.data;
};
