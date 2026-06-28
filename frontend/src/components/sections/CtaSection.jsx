// src/components/sections/CtaSection.jsx
import { companyInfo } from '../../data/company';
import Button from '../ui/Button';

function CtaSection() {
  return (
    <section className="section-padding ">
      <div className="container-custom  ">
        {/* <div className="max-w-7xl mx-auto px-8 border-4 "> */}
        <div className="glass-card text-center max-w-3xl mx-auto translate-x-50">
          {/* <div className="max-w-3xl mx-auto bg-red-500 p-10"> */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your{' '}
            <span className="gradient-text">Next Event</span>?
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
            Let's collaborate to bring your vision to life. Get in touch with
            our team today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button to="/contact" variant="primary" size="lg">
              Get in Touch
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Button>
            <Button to="/portfolio" variant="outline" size="lg">
              View Our Work
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/40 text-sm">
            <a
              href={`mailto:${companyInfo.contact.email}`}
              className="hover:text-brand-crimson transition-colors"
            >
              {companyInfo.contact.email}
            </a>
            <a
              href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
              className="hover:text-brand-crimson transition-colors"
            >
              {companyInfo.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
