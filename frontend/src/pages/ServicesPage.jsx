import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../lib/api';

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadServices = async () => {
      try {
        setLoading(true);
        const response = await api.getServices();
        setServices(response.data);
        setError(null);
      } catch (err) {
        console.error('Failed to load services:', err);
        setError('Failed to load services. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  if (loading) {
    return (
      <>
        <section className="section-padding" style={{ paddingTop: '140px' }}>
          <div className="container-custom text-center">
            <h1 className="animate-fade-in">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="w-full" style={{ marginTop: '24px' }}>
              Comprehensive event management solutions designed to transform
              your next tournament, fest, or activation.
            </p>
          </div>
        </section>
        <section className="section-padding" style={{ paddingTop: 0 }}>
          <div className="container-custom">
            <div className="grid-3-col">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass-card animate-pulse">
                  <div className="h-12 w-12 bg-brand-crimson/20 rounded mb-4"></div>
                  <div className="h-6 bg-white/10 rounded mb-4 w-3/4"></div>
                  <div className="h-4 bg-white/5 rounded mb-2 w-full"></div>
                  <div className="h-4 bg-white/5 rounded mb-2 w-full"></div>
                  <div className="h-4 bg-white/5 rounded mb-6 w-2/3"></div>
                  <div className="h-10 bg-brand-crimson/20 rounded w-1/3"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  if (error) {
    return (
      <>
        <section className="section-padding" style={{ paddingTop: '140px' }}>
          <div className="container-custom text-center">
            <h1 className="animate-fade-in">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="w-full" style={{ marginTop: '24px' }}>
              Comprehensive event management solutions designed to transform
              your next tournament, fest, or activation.
            </p>
          </div>
        </section>
        <section className="section-padding" style={{ paddingTop: 0 }}>
          <div className="container-custom text-center">
            <div className="glass-card max-w-2xl mx-auto">
              <div className="text-5xl mb-4">⚠️</div>
              <h3 className="text-xl mb-2 text-brand-crimson">
                Error Loading Services
              </h3>
              <p className="text-white/50">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-6 px-6 py-2 bg-brand-crimson text-white rounded-lg hover:bg-brand-crimson/90 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="section-padding" style={{ paddingTop: '140px' }}>
        <div className="container-custom text-center">
          <h1 className="animate-fade-in">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="w-full" style={{ marginTop: '24px' }}>
            Comprehensive event management solutions designed to transform your
            next tournament, fest, or activation.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container-custom">
          {services.length === 0 ? (
            <div className="text-center text-white/40">
              <p>No services available at the moment.</p>
            </div>
          ) : (
            <div className="grid-3-col">
              {services.map((service) => (
                <div
                  key={service._id || service.id}
                  className="glass-card card-hover"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4">
                    {service.shortDescription}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features &&
                      service.features.slice(0, 4).map((feature) => (
                        <li
                          key={feature.title}
                          className="text-white/50 text-sm flex items-start"
                        >
                          <span className="text-brand-crimson mr-2">•</span>{' '}
                          {feature.title}
                        </li>
                      ))}
                  </ul>
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-auto text-brand-crimson hover:text-red-400 font-medium inline-flex items-center smooth-transition"
                  >
                    View Details
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
