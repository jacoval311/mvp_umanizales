import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { route: PageRoute; label: string }[] = [
    { route: 'inicio', label: 'Inicio' },
    { route: 'servicios', label: 'Servicios' },
    { route: 'nosotros', label: 'Nosotros' },
    { route: 'sectores', label: 'Sectores' },
    { route: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B2545]/95 backdrop-blur-md shadow-md border-b border-white/10 py-3.5'
          : 'bg-[#0B2545] py-5 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <button
            type="button"
            onClick={() => handleNavClick('inicio')}
            className="text-2xl font-semibold tracking-[0.22em] text-white hover:text-slate-100 transition-colors uppercase select-none font-['Montserrat'] whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            NEXO
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  type="button"
                  onClick={() => handleNavClick(item.route)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-300 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action CTA (High contrast, refined executive button) */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => handleNavClick('contacto')}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wider uppercase text-white hover:text-[#0B2545] bg-transparent hover:bg-white border border-white/80 rounded-full transition-all duration-200 shadow-xs cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Hablemos</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B2545] border-b border-white/10 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                type="button"
                onClick={() => handleNavClick(item.route)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#2563EB] text-white font-semibold'
                    : 'text-slate-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => handleNavClick('contacto')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0B2545] bg-white hover:bg-slate-100 transition-colors"
            >
              <span>Hablemos</span>
              <ArrowRight className="w-4 h-4 text-[#0B2545]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
