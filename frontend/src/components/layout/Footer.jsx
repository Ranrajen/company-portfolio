// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import { companyInfo, footerLinks, navLinks } from '../../data/company';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 mt-auto">
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-xl font-extrabold tracking-tight">
              <span className="gradient-text">{companyInfo.name}</span>
            </Link>
            <p className="text-white/40 text-sm mt-4 leading-relaxed">
              {companyInfo.tagline}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={companyInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex-center rounded-full glass-dark hover:border-brand-crimson/40 smooth-transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={companyInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex-center rounded-full glass-dark hover:border-brand-crimson/40 smooth-transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M14 9h3V6h-3a4 4 0 00-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2a1 1 0 011-1z" />
                </svg>
              </a>
              <a
                href={companyInfo.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex-center rounded-full glass-dark hover:border-brand-crimson/40 smooth-transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 4h4v16H4V4zm6 0h4v2.2c.7-1.2 2.2-2.4 4.3-2.4 3.4 0 5.7 2.2 5.7 6.5V20h-4v-8.4c0-2-.8-3.2-2.5-3.2-1.4 0-2.5 1-2.9 2v9.6h-4V4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/45 text-sm hover:text-brand-crimson smooth-transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/45 text-sm hover:text-brand-crimson smooth-transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-white/45">
              <li>{companyInfo.contact.address}</li>
              <li>
                <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-brand-crimson smooth-transition">
                  {companyInfo.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`} className="hover:text-brand-crimson smooth-transition">
                  {companyInfo.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {year} {companyInfo.name}. All rights reserved.</p>
          <nav className="flex items-center gap-5">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="hover:text-white/60 smooth-transition">
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
