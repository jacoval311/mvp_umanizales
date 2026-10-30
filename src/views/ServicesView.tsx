import React, { useState } from 'react';
import { PageRoute } from '../types';
import { servicesData, methodologyPhases } from '../data/nexoData';
import { PreFooterCTA } from '../components/PreFooterCTA';
import {
  BarChart3,
  Target,
  Network,
  Settings2,
  ShieldCheck,
  Check,
  ArrowRight,
  FileCheck
} from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (route: PageRoute) => void;
  initialServiceId?: string;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate, initialServiceId }) => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'inteligencia-mercado':
        return <BarChart3 className="w-7 h-7 stroke-[1.5]" />;
      case 'estrategia-comercial':
        return <Target className="w-7 h-7 stroke-[1.5]" />;
      case 'desarrollo-canales':
        return <Network className="w-7 h-7 stroke-[1.5]" />;
      case 'implementacion':
        return <Settings2 className="w-7 h-7 stroke-[1.5]" />;
      case 'preparacion-expansion':
      default:
        return <ShieldCheck className="w-7 h-7 stroke-[1.5]" />;
    }
  };

  return (
    <div className="font-['Montserrat']">
      {/* Hero Secundario con H1 font-semibold */}
      <section className="bg-[#0B2545] text-white pt-32 pb-20 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.22em] text-sky-300 font-semibold block">
              SOLUCIONES EMPRESARIALES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.028em] text-white leading-tight">
              Nuestras Áreas de Práctica y Consultoría
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
              Combinamos rigor analítico, experiencia de campo y metodología probada para estructurar el crecimiento comercial sostenible de su compañía.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Phase Methodology Section */}
      <section className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-[0.22em] text-[#2563EB] font-semibold block mb-2">
              CÓMO OPERAMOS
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#0F172A]">
              Metodología de Trabajo en 4 Fases
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mt-2 leading-relaxed">
              Un proceso disciplinado diseñado para diagnosticar con precisión, proyectar con rigor y ejecutar con seguimiento continuo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {methodologyPhases.map((phase, idx) => {
              const isSelected = selectedPhase === idx;
              return (
                <div
                  key={phase.phase}
                  onClick={() => setSelectedPhase(idx)}
                  className={`p-6 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#F3F4F6] border-[#0B2545] ring-2 ring-[#0B2545]/10 shadow-sm'
                      : 'bg-[#F3F4F6]/70 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-semibold text-[#0B2545]">
                      {phase.phase}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-600 bg-white px-2.5 py-1 rounded border border-slate-200">
                      {phase.duration}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-[#0F172A] mb-2">
                    {phase.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {phase.summary}
                  </p>

                  <ul className="space-y-2 border-t border-slate-200/80 pt-4">
                    {phase.actions.map((act, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detalle Exhaustivo de Servicios en Bloques Alternados (Fondo Estandarizado #F3F4F6) */}
      <section className="bg-[#F3F4F6] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.22em] text-[#2563EB] font-semibold block mb-2">
              CATÁLOGO DE SERVICIOS
            </span>
            <h2 className="text-3xl font-medium tracking-tight text-[#0F172A]">
              Detalle Integral de Nuestras Capacidades
            </h2>
          </div>

          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl p-8 lg:p-12 border border-slate-200 shadow-xs scroll-mt-28"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Left Column / Details */}
                  <div className={`space-y-6 ${isEven ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'}`}>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-[#F3F4F6] text-[#0B2545] rounded-xl">
                        {getServiceIcon(service.id)}
                      </div>
                      <div>
                        <span className="text-xs uppercase font-semibold tracking-widest text-[#2563EB]">
                          Área de Práctica {service.number}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-semibold text-[#0F172A]">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Scope bullets */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0B2545] mb-3">
                        Alcance & Actividades Principales
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.scope.map((item, i) => (
                          <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-slate-600 mr-2 flex items-center gap-1.5">
                        <FileCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                        Entregables formales:
                      </span>
                      {service.deliverables.map((del, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-xs text-slate-700 bg-[#F3F4F6] px-3 py-1 rounded-md border border-slate-200"
                        >
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column / Image & Metric Card */}
                  <div className={`space-y-6 ${isEven ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5'}`}>
                    {/* Consistent 16:9 aspect-ratio photograph with object-cover */}
                    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-xs border border-slate-200 group/img bg-slate-100">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-4 text-white text-xs font-semibold tracking-wide flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-300" />
                        <span>Área Especializada · {service.title}</span>
                      </div>
                    </div>

                    <div className="bg-[#0B2545] text-white p-7 rounded-xl border border-white/10 space-y-6 shadow-sm">
                      <div>
                        <span className="text-[10px] uppercase font-semibold tracking-widest text-sky-200 block mb-1">
                          Impacto Documentado
                        </span>
                        <h4 className="text-lg font-semibold text-white">
                          {service.impactMetric}
                        </h4>
                        <p className="text-xs text-slate-200 mt-2 font-light">
                          Resultados cuantitativos recopilados en auditorías de impacto sobre proyectos concluidos.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-white/10 border border-white/10 space-y-2">
                        <span className="text-xs font-semibold text-white block">
                          ¿Requiere este servicio?
                        </span>
                        <p className="text-xs text-slate-200 font-light">
                          Coordinamos una sesión exploratoria de 45 minutos para entender sus retos particulares.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          onNavigate('contacto');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#0B2545] bg-white hover:bg-[#F3F4F6] rounded-lg transition-colors cursor-pointer shadow-sm active:scale-[0.98]"
                      >
                        <span>Solicitar evaluación de {service.title.toLowerCase()}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#0B2545]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <PreFooterCTA onNavigate={onNavigate} />
    </div>
  );
};
