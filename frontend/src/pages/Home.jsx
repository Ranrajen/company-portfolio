// src/pages/Home.jsx
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import MetricsSection from '../components/sections/MetricsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection from '../components/sections/CtaSection';

function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <MetricsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}

export default Home;
