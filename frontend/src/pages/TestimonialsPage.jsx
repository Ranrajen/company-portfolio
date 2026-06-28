import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection from '../components/sections/CtaSection';

const TestimonialsPage = () => {
  return (
    <main>
      {/* Page Header — matching PortfolioPage style */}
      <section className="section-padding" style={{ paddingTop: '140px' }}>
        <div className="container-custom text-center">
          <h1 className="animate-fade-in">
            Client <span className="gradient-text">Testimonials</span>
          </h1>
          <p className="mx-auto w-full" style={{ marginTop: '24px' }}>
            Real experiences from the organizations and partners we've helped grow.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <TestimonialsSection />

      {/* Call to Action */}
      <CtaSection />
    </main>
  );
};

export default TestimonialsPage;