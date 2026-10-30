import React from 'react';
import { PageRoute } from '../types';
import { principlesData, teamData } from '../data/nexoData';
import { PreFooterCTA } from '../components/PreFooterCTA';
import {
  Compass,
  CheckCircle2,
  Shield,
  Target,
  Award,
  Users,
  Linkedin,
  ArrowRight
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="font-['Montserrat']">
      {/* Hero Institucional con H1 font-semibold */}
      <section className="bg-[#0B2545] text-white pt-32 pb-20 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.22em] text-sky-300 font-semibold block">
              IDENTIDAD & PROPÓSITO
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.028em] text-white leading-tight">
              Estrategia, rigor y visión de negocio al servicio de su organización.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
              Nacimos para cerrar la brecha entre las recomendaciones teóricas de consultoría y los resultados comerciales medibles en la cuenta de resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Quiénes Somos & Misión / Visión con H2 font-medium */}
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.22em] text-[#2563EB] font-semibold block">
                QUIÉNES SOMOS
              </span>
              <h2 className="text-3xl font-medium tracking-tight text-[#0F172A]">
                Una firma consultora orientada a la economía productiva y real
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                En <strong>NEXO</strong> operamos como aliados estratégicos para empresas de mediana y gran envergadura. Reconocemos que las mejores ideas no valen nada sin un modelo de monetización sólido, canales de comercialización operativos y una fuerza comercial entrenada para ganar clientes.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Nuestro equipo combina experiencia directiva en firmas globales de consultoría estratégica de nivel Tier-1 con décadas de gestión ejecutiva en industrias complejas como la agroindustria, el consumo masivo, los servicios técnicos y la tecnología.
              </p>
            </div>

            {/* Misión y Visión Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#F3F4F6] p-8 rounded-2xl border border-slate-200 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B2545] text-white flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A]">Nuestra Misión</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Guiar a las organizaciones en el diseño y despliegue de estrategias comerciales y de mercado que aceleren su crecimiento rentable, fortalezcan sus capacidades internas y aseguren su sostenibilidad en el tiempo.
                </p>
              </div>

              <div className="bg-[#F3F4F6] p-8 rounded-2xl border border-slate-200 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A]">Nuestra Visión</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Ser la firma de consultoría estratégica y desarrollo de negocios de referencia en la región por nuestro rigor analítico, compromiso ético y capacidad probada de generar valor tangible en los negocios de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principios Rectores (Fondo Estandarizado #F3F4F6) */}
      <section className="bg-[#F3F4F6] py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-[#2563EB] font-semibold block mb-2">
              NUESTROS PILARES
            </span>
            <h2 className="text-3xl font-medium tracking-tight text-[#0F172A]">
              Principios Rectores
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              La base ética y metodológica sobre la cual construimos cada relación de asesoría empresarial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principlesData.map((principle) => (
              <div
                key={principle.id}
                className="bg-white p-7 rounded-xl border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider block mb-1">
                    Principio {principle.number}
                  </span>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {principle.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                    Compromiso NEXO:
                  </span>
                  <p className="text-xs text-slate-700 leading-normal">
                    {principle.commitment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo Directivo & Consejo Asesor */}
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-[#2563EB] font-semibold block mb-2">
                LIDERAZGO CONSULTOR
              </span>
              <h2 className="text-3xl font-medium tracking-tight text-[#0F172A]">
                Equipo Directivo
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-600">
              Socios y directores de práctica con involucramiento directo en cada encargo y proyecto de asesoría corporativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.map((member, i) => (
              <div
                key={i}
                className="bg-[#F3F4F6] rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-semibold text-lg mb-4 font-['Montserrat'] shadow-xs">
                    {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>

                  <h3 className="text-base font-semibold text-[#0F172A]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#2563EB] mt-0.5 mb-3">
                    {member.role}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {member.experience}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {member.credentials.map((cred, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[10px] font-medium bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <PreFooterCTA onNavigate={onNavigate} />
    </div>
  );
};
