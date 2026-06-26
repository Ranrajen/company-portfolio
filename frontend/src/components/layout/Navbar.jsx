// src/components/layout/Navbar.jsx
import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navLinks, companyInfo } from '../../data/company';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock background scroll while the mobile menu is open,
  // so the hero content behind it can't scroll into view / peek through.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300',
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      )}
    >
      <div className="container-custom h-full flex items-center justify-between">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 shrink-0"
        >
          <span className="text-xl md:text-2xl font-extrabold tracking-tight">
            <span className="gradient-text">{companyInfo.name}</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium smooth-transition hover:text-brand-crimson',
                  isActive ? 'text-brand-crimson' : 'text-white/70'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" variant="primary" size="sm">
            Get in Touch
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative z-50 flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav panel — now a solid full-screen overlay, not a translucent dropdown */}
      <div
        className={cn(
          'lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-zinc-950/98 backdrop-blur-xl',
          'transition-opacity duration-300 overflow-y-auto',
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="container-custom flex flex-col gap-1 py-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={closeMenu}
              className={({ isActive }) =>
                cn(
                  'px-2 py-3 rounded-lg text-base font-medium smooth-transition',
                  isActive
                    ? 'text-brand-crimson bg-white/5'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2">
            <Button
              to="/contact"
              variant="primary"
              size="md"
              onClick={closeMenu}
              className="w-full"
            >
              Get in Touch
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
