import React from 'react';

export const HeroExecutiveVisual: React.FC = () => {
  return (
    <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-[#0B2545]">
      {/* High-resolution corporate executive photograph with aspect-ratio and object-cover */}
      <img
        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
        alt="Directivo consultor en perspectiva panorámica"
        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 select-none"
        loading="eager"
        referrerPolicy="no-referrer"
      />

      {/* Atmospheric Overlays for optimal contrast and zero glare */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/60 via-transparent to-transparent pointer-events-none" />

      {/* Corporate floating metadata indicator with high contrast */}
      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0F1E32]/90 backdrop-blur-md border border-white/15 text-white flex items-center justify-between gap-4 shadow-lg">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-sky-200 font-semibold">Perspectiva Estratégica</p>
          <p className="text-sm font-medium text-slate-100">Visión de largo plazo y ejecución táctica</p>
        </div>
        <div className="shrink-0 flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 text-xs font-semibold text-slate-100 border border-white/10">
          <span>LATAM & Global</span>
        </div>
      </div>
    </div>
  );
};
