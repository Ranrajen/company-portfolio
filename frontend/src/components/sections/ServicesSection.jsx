import { Link } from 'react-router-dom';
import { servicesData } from '../../data/company';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

function ServicesSection() {
  return (
    <section className="section-padding" id="services">
      <div className="container-custom">
        <SectionHeader
          badge="Our Services"
          title="What We Do Best"
          subtitle="Comprehensive sports and adventure event management services tailored to your needs."
        />

        <div className="grid-3-col mb-12">
          {servicesData.map((service) => (
            <div key={service.id} className="glass-card group">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-white/45 text-sm mb-4">{service.shortDescription}</p>
              <div className="space-y-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {service.features.slice(0, 3).map((feature) => (
                  <div key={feature.title} className="flex items-center gap-2 text-white/50 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-crimson shrink-0"></span>
                    {feature.title}
                  </div>
                ))}
              </div>
              <Link
                to={`/services/${service.slug}`}
                className="mt-auto text-brand-crimson text-sm font-medium hover:underline inline-flex items-center gap-1"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button to="/services" variant="outline" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
