// src/data/company.js

export const companyInfo = {
  name: 'Outpro.India',
  tagline: 'We Plan. You Celebrate.',
  founded: 2025,
  headquarters: 'Jaipur, Rajasthan, India',
  description:
    'Outpro.India is a sports and adventure event management company born from a community of athletes and organizers in Jaipur. We deliver a premium, responsive corporate digital presence that builds credibility, supports lead generation, and seamlessly communicates our services, portfolio, and team capabilities.',
  mission:
    'To transform ideas into adrenaline-driven experiences that inspire participation, teamwork, and celebration through precision, creativity, and passion.',
  vision:
    "To become India's leading sports and event management company, creating memorable experiences and building strong sporting communities.",
  coreValues: [
    {
      title: 'Athlete-First Approach',
      description:
        'Deep understanding of sporting culture and participant needs',
    },
    {
      title: 'Professional Execution',
      description: 'Powered by data, design, and discipline',
    },
    {
      title: 'Strong Partnerships',
      description: 'Building networks with academies, brands, and institutions',
    },
    {
      title: 'Reliability & Transparency',
      description: 'Cost-effective delivery with clear communication',
    },
  ],
  contact: {
    email: 'outpro.india@gmail.com',
    phone: '+91 89572 39847',
    address: 'Jaipur, Rajasthan, India',
    website: 'https://www.instagram.com/outpro.india/',
  },
  stats: {
    eventsManaged: '10+',
    partnerships: '5+',
    teamSize: '2-10',
    citiesServed: 'Jaipur and expanding',
  },
  socialMedia: {
    instagram: 'https://www.instagram.com/outpro.india/',
    facebook: 'https://www.facebook.com/61583226593023/',
    linkedin: 'https://in.linkedin.com/company/outpro-india/',
  },
};

export const servicesData = [
  {
    id: 1,
    icon: '🏆',
    title: 'End-to-End Event Management',
    shortDescription:
      'Complete planning and execution from concept to final whistle for sports tournaments, corporate leagues, and adventure challenges.',
    detailedDescription:
      'We take ownership of every stage of your event, from the first concept sketch to the closing ceremony, so you get a single accountable partner instead of a dozen disconnected vendors.',
    slug: 'event-management',
    features: [
      {
        title: 'Tournament planning & scheduling',
        description:
          'Fixtures, brackets, and timelines built around your participants and venues.',
      },
      {
        title: 'Venue selection & management',
        description:
          'Site visits, bookings, and on-ground readiness checks before day one.',
      },
      {
        title: 'Equipment & vendor coordination',
        description:
          'Single point of contact across every supplier so nothing falls through the cracks.',
      },
      {
        title: 'On-ground execution & operations',
        description:
          'A dedicated crew running registration, flow, and timing on event day.',
      },
    ],
    benefits: [
      'One accountable team instead of many vendors',
      'Fewer last-minute surprises on event day',
      'Clear timelines you can share with stakeholders',
    ],
  },
  {
    id: 2,
    icon: '📊',
    title: 'Strategic Marketing & Brand Activations',
    shortDescription:
      'Creative campaigns, sponsorship management, and brand engagement strategies to maximize visibility and participation.',
    detailedDescription:
      'We help your event earn attention before it starts and stay memorable after it ends, pairing creative campaigns with sponsorship structures that make the numbers work for every partner.',
    slug: 'marketing-branding',
    features: [
      {
        title: 'Sponsorship acquisition & management',
        description:
          'Packaging your event into sponsorship tiers brands actually want to buy.',
      },
      {
        title: 'Brand activation campaigns',
        description: 'On-site moments designed to be shared, not just seen.',
      },
      {
        title: 'Digital marketing & PR',
        description:
          'Pre-event buzz and post-event coverage that extends your reach.',
      },
      {
        title: 'Fan engagement strategies',
        description:
          'Interactive touchpoints that keep participants and spectators involved.',
      },
    ],
    benefits: [
      'Sponsorship packages that are easier to sell',
      'More visibility before, during, and after the event',
      'Content you can reuse across future campaigns',
    ],
  },
  {
    id: 3,
    icon: '📋',
    title: 'Logistics & Operations',
    shortDescription:
      'Seamless coordination of venues, equipment, vendors, and all operational requirements for flawless event execution.',
    detailedDescription:
      'Behind every smooth event is a logistics plan nobody notices because nothing went wrong. That invisibility is the goal — and the result of careful planning before doors open.',
    slug: 'logistics-operations',
    features: [
      {
        title: 'Supply chain management',
        description:
          "Equipment and materials arrive where they're needed, on schedule.",
      },
      {
        title: 'Vendor coordination',
        description:
          'Caterers, security, medics, and AV working from one shared plan.',
      },
      {
        title: 'On-site logistics',
        description:
          'Crowd flow, signage, and access points mapped out in advance.',
      },
      {
        title: 'Safety & compliance',
        description:
          'Permits, insurance, and on-ground safety protocols handled properly.',
      },
    ],
    benefits: [
      'Lower risk of on-site operational failures',
      'Faster setup and teardown',
      'Documented compliance for stakeholders',
    ],
  },
  {
    id: 4,
    icon: '🏢',
    title: 'Corporate & Institutional Consulting',
    shortDescription:
      'Professional consulting for corporate leagues, institutional sports fests, team building, and sports program development.',
    detailedDescription:
      'For organizations building a recurring sports program rather than a one-off event, we consult on format, governance, and growth so the program survives past its first season.',
    slug: 'corporate-consulting',
    features: [
      {
        title: 'Corporate league management',
        description:
          'Structuring multi-team leagues that run smoothly across a full season.',
      },
      {
        title: 'Team building programs',
        description:
          'Sport-based activities designed around real team objectives.',
      },
      {
        title: 'Institutional sports fests',
        description:
          'Multi-day, multi-sport fests for schools, colleges, and institutions.',
      },
      {
        title: 'Sports program consulting',
        description:
          'Format, scheduling, and governance advice for ongoing programs.',
      },
    ],
    benefits: [
      "A program that's repeatable year over year",
      'Clear governance and scheduling structure',
      'Advice grounded in real on-ground experience',
    ],
  },
  {
    id: 5,
    icon: '📱',
    title: 'Digital Engagement & Social Media',
    shortDescription:
      'Social media campaigns, content creation, and community building initiatives to drive engagement and participation.',
    detailedDescription:
      'Your community lives online between events. We keep it active with content and campaigns that turn one-time participants into repeat ones.',
    slug: 'digital-engagement',
    features: [
      {
        title: 'Social media strategy',
        description:
          'A content calendar built around your event and registration timeline.',
      },
      {
        title: 'Content creation',
        description:
          'Photo, video, and copy that captures the energy of your events.',
      },
      {
        title: 'Community management',
        description: 'Responding to and growing your audience between events.',
      },
      {
        title: 'Campaign analytics',
        description: 'Clear reporting on what content drove registrations.',
      },
    ],
    benefits: [
      'A consistent online presence between events',
      'Content you can point sponsors to as proof of reach',
      "Data on what's actually driving sign-ups",
    ],
  },
  {
    id: 6,
    icon: '🤝',
    title: 'Strategic Partnerships',
    shortDescription:
      'Building networks with academies, brands, and institutions for mutual growth and creating value-driven collaborations.',
    detailedDescription:
      'Great events rarely happen alone. We connect you with academies, brands, and institutions whose goals line up with yours, so every partnership is built to last past a single event.',
    slug: 'strategic-partnerships',
    features: [
      {
        title: 'Partnership development',
        description:
          "Identifying and approaching partners who fit your event's audience.",
      },
      {
        title: 'Academy collaborations',
        description:
          'Direct lines into sports academies for participation and credibility.',
      },
      {
        title: 'Brand alliances',
        description: 'Aligning your event with brands that share its values.',
      },
      {
        title: 'Ecosystem building',
        description: 'Long-term relationships, not one-off transactions.',
      },
    ],
    benefits: [
      'Access to an existing network of academies and partners',
      'Partnerships built for repeat collaboration',
      'Less time spent cold-pitching on your own',
    ],
  },
];

export const portfolioData = [
  {
    id: 1,
    slug: 'rufc-winter-cup-2026',
    title: 'RUFC Winter Cup 2026',
    category: 'Football Tournament',
    client: 'RUFC Sports Club',
    description:
      'Complete end-to-end management of a high-tier football tournament, handling multi-team scheduling and live match operations.',
    image: '/images/rufc-winter-cup.jpg', // ✅ Fixed
    kpis: [
      { label: 'Teams', value: '8' },
      { label: 'Matches', value: '15' },
      { label: 'Participants', value: '200+' },
    ],
  },
  {
    id: 2,
    slug: 'udaan-sports-day',
    title: 'UDAAN Sports Day',
    category: 'Community Event',
    client: 'Ashray Home Care',
    description:
      'An inclusive community sports day curated for Ashray Home Care, fostering joy and engagement through custom activities.',
    image: '/images/udaan-event.jpg', // ✅ Already correct
    kpis: [
      { label: 'Children', value: '50+' },
      { label: 'Activities', value: '10+' },
      { label: 'Volunteers', value: '20+' },
    ],
  },
  {
    id: 3,
    slug: 'imsc-gym-box-cricket-championship',
    title: 'IMSC Gym Box Cricket Championship',
    category: 'Sports Event Management',
    client: 'IMSC Jaipur',
    description:
      'Managed and executed the IMSC Gym Box Cricket Championship in Jaipur, delivering end-to-end event operations.',
    image: '/images/gym-box-cricket.jpg', // ✅ Fixed
    kpis: [
      { label: 'Location', value: 'Jaipur' },
      { label: 'Format', value: '7+3 Box Cricket' },
      { label: 'Duration', value: '2 Days' },
    ],
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: 'ChallengeNex 2026',
    role: 'Fitness & Performance Event',
    content:
      'An amazing day of fitness, performance testing, and athletic challenges at Pink City Sports Academy. Athletic Performance Testing (APORTA), free sports physiotherapy consultation, exciting challenges, and expert guidance from Team ActiveNex.',
    rating: 5,
    image: '/images/testimonials/challengenex.jpg',
    video: '/videos/testimonials/challengenex.mp4',
  },
  {
    id: 2,
    name: 'T20 World Cup Screening',
    role: 'Fan Celebration Event',
    content:
      'An unforgettable night of cricket, cheers, and celebrations as fans came together to witness India\'s T20 World Cup victory at Ideal Multi Sports Club. Proudly managed and executed by Outpro.India.',
    rating: 5,
    image: '/images/testimonials/t20-celebration.jpg',
    video: '/videos/testimonials/t20-celebration.mp4',
  },
  {
    id: 3,
    name: 'RUFC U-16 vs BFC SS',
    role: 'Football Prediction Challenge',
    content:
      '10 goals. A penalty shootout. Pure chaos. The prediction challenge was off the charts! RUFC takes the win on pens (5-4). Outpro.India took the mic to the stands to see who really knows their football.',
    rating: 5,
    image: '/images/testimonials/rufc-prediction.jpg',
    video: '/videos/testimonials/rufc-prediction.mp4',
  },
  {
    id: 4,
    name: 'OutPro x FIFAPRO',
    role: 'Player Voice Initiative',
    content:
      'Talking football, talking future. These aren\'t just interviews — it\'s a voice for every player. OutPro x FIFAPRO bringing voices to the pitch.',
    rating: 5,
    image: '/images/testimonials/fifapro.jpg',
    video: '/videos/testimonials/fifapro.mp4',
  },
  {
    id: 5,
    name: 'Global Launch Partnership',
    role: 'Strategic Alliance',
    content:
      'Connecting live sports experiences with mentorship, learning, and real career opportunities, built to support talent beyond the game.',
    rating: 5,
    image: '/images/testimonials/global-launch.jpg',
    video: null,
  },
  {
    id: 6,
    name: 'UNLOX Academy',
    role: 'Strategic Partner',
    content:
      'A new chapter begins! Proud to join hands with UNLOX Academy to fuel passion, performance, and unforgettable adventures. Excited for what lies ahead.',
    rating: 5,
    image: '/images/testimonials/unlox-partnership.jpg',
    video: null, 
  },
];

export const teamData = [
  {
    id: 1,
    name: 'Founder & CEO',
    designation: 'Strategic Leadership',
    image: '/images/team/ceo.jpg',
    bio: 'Passionate sports enthusiast with 10+ years of experience in event management and sports operations.',
  },
  {
    id: 2,
    name: 'Head of Operations',
    designation: 'Operations Management',
    image: '/images/team/operations.jpg',
    bio: 'Expert in logistics and on-ground execution with a background in sports management.',
  },
  {
    id: 3,
    name: 'Marketing Director',
    designation: 'Brand & Marketing',
    image: '/images/team/marketing.jpg',
    bio: 'Creative strategist specializing in sports marketing and brand activations.',
  },
  {
    id: 4,
    name: 'Partnership Manager',
    designation: 'Business Development',
    image: '/images/team/partnerships.jpg',
    bio: 'Building strategic partnerships and collaborations across the sports ecosystem.',
  },
];

export const metricsData = [
  { value: '10+', label: 'Events Managed', icon: '📊' },
  { value: '5+', label: 'Partners', icon: '🤝' },
  { value: '2-10', label: 'Team Members', icon: '👥' },
  { value: '100%', label: 'Client Satisfaction', icon: '⭐' },
];

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

export const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Event Management', href: '/services/event-management' },
    { name: 'Marketing & Branding', href: '/services/marketing-branding' },
    { name: 'Logistics & Operations', href: '/services/logistics-operations' },
    { name: 'Corporate Consulting', href: '/services/corporate-consulting' },
  ],
};
