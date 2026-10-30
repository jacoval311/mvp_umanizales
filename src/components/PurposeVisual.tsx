import React from 'react';

export const PurposeVisual: React.FC = () => {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200 group bg-[#0B2545]">
      {/* High-resolution entrepreneur photograph with aspect-ratio and object-cover */}
      <img
        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop"
        alt="Empresaria en entorno productivo agroindustrial y taller artesanal"
        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 select-none"
        loading="lazy"
        referrerPolicy="no-referrer"
      />

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/85 via-[#0B2545]/25 to-transparent pointer-events-none" />

      {/* Subtle overlay badge */}
      <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-slate-200/80 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2563EB]">Economía Real</span>
          <p className="text-xs font-semibold text-[#0F172A] mt-0.5">Empresas productivas con vocación de liderazgo</p>
        </div>
        <div className="text-right pl-3 border-l border-slate-200">
          <span className="text-xs font-semibold text-[#0B2545] block">Impacto</span>
          <span className="text-[10px] text-slate-600 font-medium">Medible & Sostenible</span>
        </div>
      </div>
    </div>
  );
};
