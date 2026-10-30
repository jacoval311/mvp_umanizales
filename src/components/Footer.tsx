import React from 'react';
import { PageRoute } from '../types';
import { Linkedin, Globe, Mail, Phone, MapPin, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B2545] text-slate-300 border-t border-white/10 pt-16 pb-12 font-['Montserrat']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand & Purpose (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-2xl font-semibold tracking-[0.22em] text-white uppercase block">
              NEXO
            </span>
            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold">
              Consultoría Estratégica Comercial & Desarrollo de Negocios
            </p>
            <p className="text-sm text-slate-300 font-light leading-relaxed max-w-sm">
              Acompañamos a organizaciones en la identificación de oportunidades, diseño de estrategias comerciales robustas y ejecución táctica para un crecimiento real y sostenible.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#0B2545] text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn Institucional"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:contacto@nexoconsultoria.com"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#0B2545] text-white flex items-center justify-center transition-colors"
                aria-label="Correo de Contacto"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('inicio');
                }}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#0B2545] text-white flex items-center justify-center transition-colors"
                aria-label="Portal Web"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('inicio')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('servicios')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Nuestros Servicios
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('nosotros')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Identidad & Nosotros
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('sectores')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sectores de Enfoque
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('contacto')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contacto Institucional
                </button>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Áreas de Práctica
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Inteligencia de mercado & data</li>
              <li>Estrategia comercial Go-to-Market</li>
              <li>Desarrollo de canales y retail</li>
              <li>Implementación táctica y KPIs</li>
              <li>Preparación para la expansión</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Sede Principal
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                <span>Distrito Financiero Corporativo, Torre Empresarial Piso 18</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-300 shrink-0" />
                <span>contacto@nexoconsultoria.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-300 shrink-0" />
                <span>+57 (1) 745-9200</span>
              </li>
              <li className="flex items-center gap-2.5 text-[11px] text-slate-500 pt-1">
                <Shield className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Protocolos de confidencialidad NDA estricto</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 NEXO Consultoría Estratégica. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6 text-slate-400 text-xs">
            <span>Privacidad Corporativa</span>
            <span>Términos de Servicio</span>
            <span>Código de Ética</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
