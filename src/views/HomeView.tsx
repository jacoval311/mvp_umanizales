import React, { useState } from 'react';
import { PageRoute } from '../types';
import { servicesData, sectorsData, caseStudiesData } from '../data/nexoData';
import { HeroExecutiveVisual } from '../components/HeroExecutiveVisual';
import { PurposeVisual } from '../components/PurposeVisual';
import { ClientLogos } from '../components/ClientLogos';
import { PreFooterCTA } from '../components/PreFooterCTA';
import { AnimatedSection, AnimatedItem } from '../components/AnimatedSection';
import { motion, AnimatePresence } from 'motion/react';
import {
  BarChart3,
  Target,
  Network,
  Settings2,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (route: PageRoute) => void;
  onSelectServiceDetail?: (serviceId: string) => void;
  onSelectSectorDetail?: (sectorId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectServiceDetail,
  onSelectSectorDetail
}) => {
  const [activeCaseId, setActiveCaseId] = useState<string>('la-colmena');

  const activeCase = caseStudiesData.find((c) => c.id === activeCaseId) || caseStudiesData[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'inteligencia-mercado':
        return <BarChart3 className="w-6 h-6 stroke-[1.5]" />;
      case 'estrategia-comercial':
        return <Target className="w-6 h-6 stroke-[1.5]" />;
      case 'desarrollo-canales':
        return <Network className="w-6 h-6 stroke-[1.5]" />;
      case 'implementacion':
        return <Settings2 className="w-6 h-6 stroke-[1.5]" />;
      case 'preparacion-expansion':
      default:
        return <ShieldCheck className="w-6 h-6 stroke-[1.5]" />;
    }
  };

  return (
    <div className="font-['Montserrat'] overflow-x-hidden">
      {/* =========================================================================
          1. HERO SECTION (Deep Navy #0B2545)
      ========================================================================= */}
      <section className="bg-[#0B2545] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden">
        {/* Subtle geometric grid backdrop */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Columna Izquierda: Mensaje Central con H1 font-semibold y leading refinado */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-xs uppercase tracking-[0.22em] text-sky-300 font-semibold block"
              >
                CONSULTORÍA ESTRATÉGICA COMERCIAL
              </motion.span>

              {/* H1 font-semibold para estética minimalista y de alto nivel */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.028em] text-white leading-[1.18] text-balance">
                Conectamos empresas con nuevas oportunidades de crecimiento.
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-2xl">
                En NEXO acompañamos a empresas en la identificación de oportunidades, el desarrollo de estrategias comerciales y la ejecución de acciones que impulsan su expansión.
              </p>

              {/* Botones de acción sobrios y de alto contraste */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('servicios');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B2545] bg-white hover:bg-[#F3F4F6] rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap active:scale-[0.98]"
                >
                  <span>Conoce nuestros servicios</span>
                  <ArrowRight className="w-4 h-4 text-[#0B2545]" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onNavigate('contacto');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-full transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Hablemos de tu empresa</span>
                </button>
              </div>

              {/* Trust signals */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-8 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0" />
                  <span>Diagnóstico inicial estructurado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0" />
                  <span>Enfoque en rentabilidad neta</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0" />
                  <span>Acompañamiento en campo</span>
                </div>
              </div>
            </motion.div>

            {/* Columna Derecha: Visual Ejecutivo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <HeroExecutiveVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. RESUMEN DE SERVICIOS (Fondo Neutro Estandarizado #F3F4F6)
      ========================================================================= */}
      <section className="bg-[#F3F4F6] py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header con H2 font-medium */}
          <AnimatedSection className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-[#2563EB] font-semibold block mb-2">
                QUÉ HACEMOS
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#0F172A]">
                Nuestros servicios
              </h2>
            </div>
            <p className="max-w-xl text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Ofrecemos un acompañamiento integral para que tu empresa pueda crecer de manera estructurada y sostenible.
            </p>
          </AnimatedSection>

          {/* 5 Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {servicesData.map((service, idx) => (
              <AnimatedItem key={service.id} delay={idx * 0.07}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="text-[#0B2545] mb-5 p-3 bg-[#F3F4F6] group-hover:bg-slate-200/70 rounded-xl w-fit transition-colors">
                      {getServiceIcon(service.id)}
                    </div>
                    <h3 className="text-base font-semibold text-[#0F172A] tracking-tight mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-400">
                      Fase {service.number}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectServiceDetail) onSelectServiceDetail(service.id);
                        onNavigate('servicios');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-xs font-semibold text-[#0B2545] group-hover:text-[#2563EB] inline-flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Ver más</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>

          {/* Enlace al pie de sección */}
          <AnimatedSection delay={0.2} className="mt-12 text-center">
            <button
              type="button"
              onClick={() => {
                onNavigate('servicios');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2545] hover:text-[#2563EB] transition-colors cursor-pointer group"
            >
              <span>Explorar todos los servicios a detalle</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* =========================================================================
          3. BANNER DE PROPÓSITO & CIFRAS CLAVE (Fondo Base #0B2545)
      ========================================================================= */}
      <section className="bg-[#0B2545] text-white py-20 lg:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Visual Izquierda: Fotografía de Emprendimiento Real */}
            <div className="lg:col-span-5">
              <AnimatedSection yOffset={24}>
                <PurposeVisual />
              </AnimatedSection>
            </div>

            {/* Contenido Derecha: Declaración & Métricas */}
            <div className="lg:col-span-7 space-y-8">
              <AnimatedSection delay={0.1}>
                <span className="text-xs uppercase tracking-[0.22em] text-sky-300 font-semibold block mb-3">
                  NUESTRO PROPÓSITO
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-tight">
                  Impulsamos el crecimiento de empresas con visión.
                </h2>
                <p className="mt-4 text-sm sm:text-base text-slate-200 font-light leading-relaxed">
                  Creemos en el potencial de los negocios y en las personas detrás de ellos. Por eso, trabajamos para generar conexiones, abrir oportunidades y construir estrategias que hagan posible un crecimiento real y sostenible.
                </p>
              </AnimatedSection>

              {/* Stats Clave Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/15">
                <AnimatedItem delay={0.15}>
                  <div className="space-y-1">
                    <span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight block">
                      +300
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      empresas asesoradas
                    </p>
                  </div>
                </AnimatedItem>

                <AnimatedItem delay={0.22}>
                  <div className="space-y-1">
                    <span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight block">
                      +10
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      sectores de experiencia
                    </p>
                  </div>
                </AnimatedItem>

                <AnimatedItem delay={0.3}>
                  <div className="space-y-1">
                    <span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight block">
                      100%
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      compromiso con el crecimiento
                    </p>
                  </div>
                </AnimatedItem>
              </div>

              <AnimatedSection delay={0.25} className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('nosotros');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white transition-colors cursor-pointer group"
                >
                  <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-white">
                    Conocer nuestra metodología y principios
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CASOS DE ÉXITO & RESULTADOS (Fondo Blanco)
      ========================================================================= */}
      <section className="bg-white py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-[#2563EB] font-semibold block mb-2">
                RESULTADOS
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#0F172A]">
                Casos de éxito
              </h2>
            </div>
            <p className="max-w-xl text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Conoce algunas de las empresas que han confiado en NEXO para fortalecer sus estrategias comerciales y alcanzar nuevos mercados.
            </p>
          </AnimatedSection>

          {/* Interactive Logos Bar */}
          <AnimatedSection delay={0.1} className="mb-8">
            <ClientLogos onSelectCase={setActiveCaseId} activeCaseId={activeCaseId} />
          </AnimatedSection>

          {/* Featured Case Study Panel */}
          <AnimatePresence mode="wait">
            {activeCase && (
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#F3F4F6] rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-xs mt-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs uppercase tracking-wider text-[#2563EB] font-semibold">
                        {activeCase.sector}
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="text-xs font-semibold text-slate-500">
                        Caso Documentado
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-[#0F172A]">
                      {activeCase.brand} — {activeCase.subtitle}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                      <div className="space-y-1.5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          El Desafío
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed font-normal">
                          {activeCase.challenge}
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0B2545]">
                          La Solución NEXO
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed font-normal">
                          {activeCase.solution}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <p className="text-xs text-slate-700 bg-white p-3.5 rounded-lg border border-slate-200 font-medium">
                        <strong className="text-[#0B2545]">Impacto tangible: </strong>
                        {activeCase.result}
                      </p>
                    </div>
                  </div>

                  {/* Metric Box */}
                  <div className="lg:col-span-4 bg-[#0B2545] text-white p-8 rounded-xl text-center space-y-2 border border-white/10 shadow-sm">
                    <span className="text-xs font-semibold uppercase tracking-widest text-sky-200 block">
                      Resultado Clave
                    </span>
                    <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-white block">
                      {activeCase.stat}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium">
                      {activeCase.statLabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* =========================================================================
          5. SECTORES DE ENFOQUE (Fondo Gris Estandarizado #F3F4F6)
      ========================================================================= */}
      <section className="bg-[#F3F4F6] py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-[#2563EB] font-semibold block mb-2">
              VERTICALES DE ESPECIALIZACIÓN
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#0F172A]">
              Sectores de experiencia
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              No creemos en soluciones genéricas. Adaptamos nuestros marcos estratégicos a las particularidades normativas y comerciales de cada industria.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectorsData.map((sector, idx) => (
              <AnimatedItem key={sector.id} delay={idx * 0.07}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl p-7 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                        Sector
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {sector.metrics[0].value} empresas
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-[#0F172A] mb-2 group-hover:text-[#0B2545] transition-colors">
                      {sector.name}
                    </h3>

                    <p className="text-xs font-semibold text-slate-600 mb-4 leading-normal">
                      {sector.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {sector.overview}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-600 font-medium">
                      {sector.metrics[1].label}: <strong className="text-[#0F172A]">{sector.metrics[1].value}</strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectSectorDetail) onSelectSectorDetail(sector.id);
                        onNavigate('sectores');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-xs font-semibold text-[#0B2545] group-hover:text-[#2563EB] inline-flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Ver sector</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}

            {/* CTA Box in Sectors Grid */}
            <AnimatedItem delay={sectorsData.length * 0.07}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#0B2545] rounded-xl p-7 text-white flex flex-col justify-between h-full border border-white/10 shadow-sm"
              >
                <div>
                  <span className="text-xs uppercase tracking-widest text-sky-300 font-semibold block mb-2">
                    ¿Tu industria no está listada?
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Consultoría a la medida
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                    Aplicamos metodologías rigurosas de inteligencia y go-to-market a sectores emergentes, manufactura y comercio especializado.
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('contacto');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#0B2545] bg-white hover:bg-[#F3F4F6] rounded-lg transition-colors cursor-pointer shadow-sm active:scale-[0.98]"
                  >
                    <span>Consultar factibilidad</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0B2545]" />
                  </button>
                </div>
              </motion.div>
            </AnimatedItem>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. PRE-FOOTER CTA
      ========================================================================= */}
      <AnimatedSection yOffset={20}>
        <PreFooterCTA onNavigate={onNavigate} />
      </AnimatedSection>
    </div>
  );
};
