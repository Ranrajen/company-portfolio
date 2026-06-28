import { companyInfo } from '../data/company';
import ContactForm from '../components/ui/ContactForm';

export default function ContactPage() {
  return (
    <>
      <section className="section-padding" style={{ paddingTop: '140px' }}>
        <div className="container-custom text-center">
          <h1 className="animate-fade-in">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="w-full mx-auto" style={{ marginTop: '24px' }}>
            Ready to plan your next event? Let's start a conversation.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container-custom">
          <div className="grid-2-col" style={{ alignItems: 'start' }}>
            <div>
              <h2 style={{ marginBottom: '32px' }}>
                Get in <span className="gradient-text">Touch</span>
              </h2>

              <div className="space-y-6">
                <div className="glass-card" style={{ padding: '24px' }}>
                  <div className="flex items-start gap-4">
                    <div className="flex-center shrink-0 rounded-xl bg-brand-crimson/15" style={{ width: '48px', height: '48px' }}>
                      <svg className="w-6 h-6 text-brand-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Visit Us</h3>
                      <p className="text-white/45">{companyInfo.contact.address}</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '24px' }}>
                  <div className="flex items-start gap-4">
                    <div className="flex-center shrink-0 rounded-xl bg-brand-crimson/15" style={{ width: '48px', height: '48px' }}>
                      <svg className="w-6 h-6 text-brand-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Email</h3>
                      <p className="text-white/45">{companyInfo.contact.email}</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '24px' }}>
                  <div className="flex items-start gap-4">
                    <div className="flex-center shrink-0 rounded-xl bg-brand-crimson/15" style={{ width: '48px', height: '48px' }}>
                      <svg className="w-6 h-6 text-brand-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Call Us</h3>
                      <p className="text-white/45">{companyInfo.contact.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
