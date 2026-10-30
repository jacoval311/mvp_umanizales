import React from 'react';
import { ArrowRight, MessageSquareQuote } from 'lucide-react';
import { PageRoute } from '../types';

interface PreFooterCTAProps {
  onNavigate: (route: PageRoute) => void;
}

export const PreFooterCTA: React.FC<PreFooterCTAProps> = ({ onNavigate }) => {
  return (
    <section className="bg-[#0B2545] border-t border-b border-white/10 py-16 lg:py-20 text-white relative overflow-hidden">
      {/* Subtle geometric background lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-cta" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-cta)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white font-['Montserrat']">
              ¿Listo para llevar tu empresa al siguiente nivel?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Agendemos una sesión diagnóstica confidencial para evaluar oportunidades de crecimiento comercial e internacionalización.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => {
                onNavigate('contacto');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#0B2545] bg-white hover:bg-slate-100 rounded-full transition-all duration-200 shadow-md cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              <span>Contáctanos</span>
              <ArrowRight className="w-4 h-4 text-[#0B2545]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
