import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { api } from '../lib/api';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadService = async () => {
      try {
        setLoading(true);
        const response = await api.getServiceBySlug(slug);
        setService(response.data);
        setError(null);
      } catch (err) {
        console.error('Failed to load service:', err);
        setError('Service not found');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadService();
    }
  }, [slug]);

  if (loading) {
    return (
      <section className="section-padding" style={{ paddingTop: '140px' }}>
        <div className="container-custom text-center">
          <div className="animate-pulse">
            <div className="h-16 w-16 bg-brand-crimson/20 rounded-full mx-auto mb-6"></div>
            <div className="h-10 bg-white/10 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-white/5 rounded w-full max-w-2xl mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <section className="section-padding" style={{ paddingTop: '140px' }}>
        <div className="container-custom text-center">
          <div className="text-6xl mb-6 animate-fade-in">{service.icon}</div>
          <h1 className="animate-slide-up">{service.title}</h1>
          <p
            className="max-w-3xl mx-auto animate-fade-in translate-x-45"
            style={{ marginTop: '24px' }}
          >
            {service.detailedDescription}
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container-custom">
          <h2 className="text-center section-gap-sm">
            Key <span className="gradient-text">Features</span>
          </h2>
          <div className="grid-2-col">
            {service.features &&
              service.features.map((feature) => (
                <div key={feature.title} className="glass-card">
                  <h3 className="text-xl mb-3 text-brand-crimson">
                    {feature.title}
                  </h3>
                  <p>{feature.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {service.benefits && service.benefits.length > 0 && (
        <section className="section-padding" style={{ paddingTop: 0 }}>
          <div className="container-custom">
            <h2 className="text-center section-gap-sm">Benefits</h2>
            <div className="grid-3-col">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4 glass-dark p-4 rounded-lg"
                >
                  <svg
                    className="w-6 h-6 text-brand-crimson shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-white/70 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        className="py-20"
        style={{
          background:
            'linear-gradient(to right, var(--color-brand-maroon), var(--color-brand-dark))',
        }}
      >
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-brand-crimson hover:bg-brand-crimson/90 text-white font-semibold rounded-lg smooth-transition"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
