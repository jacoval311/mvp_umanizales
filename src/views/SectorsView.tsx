import React, { useState } from 'react';
import { PageRoute } from '../types';
import { sectorsData } from '../data/nexoData';
import { PreFooterCTA } from '../components/PreFooterCTA';
import {
  Wheat,
  UtensilsCrossed,
  Briefcase,
  Cpu,
  Mountain,
  CheckCircle2,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

interface SectorsViewProps {
  onNavigate: (route: PageRoute) => void;
  initialSectorId?: string;
}

export const SectorsView: React.FC<SectorsViewProps> = ({ onNavigate, initialSectorId }) => {
  const [selectedSectorId, setSelectedSectorId] = useState<string>(initialSectorId || sectorsData[0].id);

  const activeSector = sectorsData.find((s) => s.id === selectedSectorId) || sectorsData[0];

  const getSectorIcon = (id: string) => {
    switch (id) {
      case 'agroindustria':
        return <Wheat className="w-5 h-5 stroke-[1.5]" />;
      case 'alimentos':
        return <UtensilsCrossed className="w-5 h-5 stroke-[1.5]" />;
      case 'servicios-profesionales':
        return <Briefcase className="w-5 h-5 stroke-[1.5]" />;
      case 'tecnologia':
        return <Cpu className="w-5 h-5 stroke-[1.5]" />;
      case 'turismo':
      default:
        return <Mountain className="w-5 h-5 stroke-[1.5]" />;
    }
  };

  return (
    <div className="font-['Montserrat']">
      {/* Hero Secundario con H1 font-semibold */}
      <section className="bg-[#0B2545] text-white pt-32 pb-20 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.22em] text-sky-300 font-semibold block">
              ESPECIALIZACIÓN SECTORIAL
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.028em] text-white leading-tight">
              Sectores de Enfoque y Experiencia Industrial
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
              Adaptamos nuestros marcos estratégicos y comerciales a las realidades regulatorias, canales de compra y dinámicas competitivas de cada sector.
            </p>
          </div>
        </div>
      </section>

      {/* Sector Navigation Tabs */}
      <section className="bg-white border-b border-slate-200 sticky top-[68px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            {sectorsData.map((sec) => {
              const isSelected = sec.id === activeSector.id;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => setSelectedSectorId(sec.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B2545] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#0B2545] hover:bg-[#F3F4F6]'
                  }`}
                >
                  {getSectorIcon(sec.id)}
                  <span>{sec.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Sector Deep Dive (Fondo Estandarizado #F3F4F6) */}
      <section className="bg-[#F3F4F6] py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-slate-200 shadow-xs space-y-12">
            {/* Header info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                  <span>Ficha Sectorial</span>
                  <span className="text-slate-300">·</span>
                  <span>Especialización NEXO</span>
                </div>
                <h2 className="text-3xl font-medium tracking-tight text-[#0F172A]">
                  {activeSector.name}
                </h2>
                <p className="text-base text-slate-600 font-medium">
                  {activeSector.tagline}
                </p>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => {
                  onNavigate('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B2545] hover:bg-[#2563EB] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
              >
                <span>Consultar caso {activeSector.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Overview */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Contexto y Enfoque de Intervención
              </h3>
              <p className="text-base text-slate-700 leading-relaxed max-w-4xl font-normal">
                {activeSector.overview}
              </p>
            </div>

            {/* 2-Column: Challenges vs Strategic Approach */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Desafíos del sector */}
              <div className="bg-[#F3F4F6] p-6 sm:p-8 rounded-xl border border-slate-200 space-y-4">
                <div className="flex items-center gap-2 text-[#0F172A]">
                  <AlertCircle className="w-5 h-5 text-slate-600" />
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#0F172A]">
                    Desafíos Típicos del Sector
                  </h4>
                </div>
                <ul className="space-y-3">
                  {activeSector.challenges.map((chal, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0 mt-2" />
                      <span>{chal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enfoque estratégico NEXO */}
              <div className="bg-[#F3F4F6] p-6 sm:p-8 rounded-xl border border-slate-200 space-y-4">
                <div className="flex items-center gap-2 text-[#0B2545]">
                  <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#0B2545]">
                    Enfoque Estratégico NEXO
                  </h4>
                </div>
                <ul className="space-y-3">
                  {activeSector.strategicApproach.map((appr, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-2" />
                      <span>{appr}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sector KPI Metrics */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Métricas del Sector
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {activeSector.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="bg-[#0B2545] text-white p-6 rounded-xl border border-white/10 space-y-1 shadow-xs">
                    <span className="text-3xl font-semibold text-white block">
                      {metric.value}
                    </span>
                    <p className="text-xs text-slate-200 font-medium">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Highlight */}
            <div className="p-6 rounded-xl bg-[#F3F4F6] border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#2563EB] block">
                  Caso Representativo
                </span>
                <p className="text-sm text-[#0F172A] font-medium mt-1">
                  {activeSector.caseHighlight}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  onNavigate('inicio');
                  window.scrollTo({ top: 1200, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#0B2545] hover:text-[#2563EB] whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Ver casos de éxito</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <PreFooterCTA onNavigate={onNavigate} />
    </div>
  );
};
