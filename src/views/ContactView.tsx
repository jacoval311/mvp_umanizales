import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  CheckCircle2,
  Send,
  Building,
  User,
  AlertCircle
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    sector: 'Agroindustria',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [ticketRef, setTicketRef] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'El nombre completo es requerido';
    if (!formData.company.trim()) newErrors.company = 'La empresa u organización es requerida';
    if (!formData.position.trim()) newErrors.position = 'El cargo o posición es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'El correo corporativo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingrese un formato de correo válido';
    }
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono o WhatsApp es requerido';
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = 'Por favor detalle su requerimiento o desafío comercial (mínimo 15 caracteres)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const generatedRef = 'NX-' + Math.floor(100000 + Math.random() * 900000);
      setTicketRef(generatedRef);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      company: '',
      position: '',
      email: '',
      phone: '',
      sector: 'Agroindustria',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="font-['Montserrat']">
      {/* Hero Secundario con H1 font-semibold */}
      <section className="bg-[#0B2545] text-white pt-32 pb-20 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.22em] text-sky-300 font-semibold block">
              CANAL CORPORATIVO
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.028em] text-white leading-tight">
              Inicie su Conversación Estratégica
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
              Atención directa y confidencial por parte de nuestros socios directores. Responderemos formalmente en un plazo máximo de 24 horas hábiles.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Information Grid (Fondo Estandarizado #F3F4F6) */}
      <section className="bg-[#F3F4F6] py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Lado Izquierdo: Información Institucional con H2 font-medium */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.22em] text-[#2563EB] font-semibold block mb-2">
                  CONTACTO DIRECTO
                </span>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#0F172A]">
                  Oficinas & Canales Formales
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                  Para consultas institucionales, alianzas o requerimientos de asesoría de alto nivel corporativo.
                </p>
              </div>

              {/* Canales */}
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="p-3 bg-[#F3F4F6] text-[#0B2545] rounded-lg shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Correo Corporativo
                    </h3>
                    <p className="text-sm font-semibold text-[#0F172A] mt-0.5">
                      contacto@nexoconsultoria.com
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Asuntos confidenciales y propuestas de asesoría
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="p-3 bg-[#F3F4F6] text-[#0B2545] rounded-lg shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Línea Ejecutiva
                    </h3>
                    <p className="text-sm font-semibold text-[#0F172A] mt-0.5">
                      +57 (1) 745-9200
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Lunes a Viernes · 8:00 AM – 6:00 PM (GMT-5)
                    </p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-start gap-4">
                  <div className="p-3 bg-[#F3F4F6] text-[#0B2545] rounded-lg shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Oficina Principal
                    </h3>
                    <p className="text-sm font-semibold text-[#0F172A] mt-0.5">
                      Distrito Financiero Corporativo
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Torre Empresarial, Piso 18 · Sala de Juntas NEXO
                    </p>
                  </div>
                </div>
              </div>

              {/* Protocolo de Confidencialidad */}
              <div className="bg-[#0B2545] text-white p-6 rounded-xl border border-white/10 space-y-3 shadow-xs">
                <div className="flex items-center gap-2.5 text-sky-200">
                  <Shield className="w-5 h-5" />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                    Compromiso de Confidencialidad
                  </h3>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-light">
                  Toda la información suministrada es tratada bajo estrictas normas de reserva profesional y protocolos de no divulgación (NDA). Nunca compartimos información comercial con terceros ni competidores.
                </p>
              </div>
            </div>

            {/* Lado Derecho: Formulario Formal */}
            <div className="lg:col-span-7 bg-white p-8 lg:p-10 rounded-2xl border border-slate-200 shadow-xs">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#F3F4F6] text-[#0B2545] mx-auto flex items-center justify-center border border-slate-200">
                    <CheckCircle2 className="w-8 h-8 text-[#2563EB]" />
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold block mb-1">
                      CONSULTA REGISTRADA CON ÉXITO
                    </span>
                    <h3 className="text-2xl font-semibold text-[#0F172A]">
                      Gracias por contactar a NEXO
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Hemos recibido los antecedentes de su empresa. Uno de nuestros socios directores revisará su solicitud y se pondrá en contacto en un plazo máximo de 24 horas hábiles.
                    </p>
                  </div>

                  <div className="bg-[#F3F4F6] p-4 rounded-xl border border-slate-200 max-w-sm mx-auto text-left text-xs space-y-1">
                    <p className="text-slate-600">
                      <strong className="text-[#0F172A]">Código de referencia:</strong> {ticketRef}
                    </p>
                    <p className="text-slate-600">
                      <strong className="text-[#0F172A]">Contacto:</strong> {formData.fullName} ({formData.company})
                    </p>
                    <p className="text-slate-600">
                      <strong className="text-[#0F172A]">Sector:</strong> {formData.sector}
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B2545] bg-[#F3F4F6] hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A]">
                      Formulario de Solicitud Estratégica
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Complete los campos para asignar al director de práctica correspondiente a su industria.
                    </p>
                  </div>

                  {/* Nombre y Cargo */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Ej. Roberto Morales"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0B2545]/15 transition-all ${
                          errors.fullName ? 'border-rose-500 ring-rose-200' : 'border-slate-300 focus:border-[#0B2545]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="position" className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">
                        Cargo / Posición *
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        placeholder="Ej. Gerente General / Director Comercial"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0B2545]/15 transition-all ${
                          errors.position ? 'border-rose-500 ring-rose-200' : 'border-slate-300 focus:border-[#0B2545]'
                        }`}
                      />
                      {errors.position && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.position}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Empresa y Sector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">
                        Empresa / Organización *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nombre de la empresa"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0B2545]/15 transition-all ${
                          errors.company ? 'border-rose-500 ring-rose-200' : 'border-slate-300 focus:border-[#0B2545]'
                        }`}
                      />
                      {errors.company && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.company}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="sector" className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">
                        Sector de interés
                      </label>
                      <select
                        id="sector"
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#0B2545] focus:ring-2 focus:ring-[#0B2545]/15 transition-all"
                      >
                        <option value="Agroindustria">Agroindustria</option>
                        <option value="Alimentos">Alimentos y Bebidas</option>
                        <option value="Servicios Profesionales">Servicios Profesionales</option>
                        <option value="Tecnología">Tecnología y Software</option>
                        <option value="Turismo">Turismo y Hospitalidad</option>
                        <option value="Manufactura">Manufactura & Industrial</option>
                        <option value="Otro">Otro sector</option>
                      </select>
                    </div>
                  </div>

                  {/* Correo y Teléfono */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">
                        Correo corporativo *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ejemplo@empresa.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0B2545]/15 transition-all ${
                          errors.email ? 'border-rose-500 ring-rose-200' : 'border-slate-300 focus:border-[#0B2545]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+57 300 000 0000"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0B2545]/15 transition-all ${
                          errors.phone ? 'border-rose-500 ring-rose-200' : 'border-slate-300 focus:border-[#0B2545]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5">
                      Requerimiento o Desafío Comercial *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describa brevemente la etapa actual de su empresa, el objetivo de crecimiento o el obstáculo que desea resolver..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0B2545]/15 transition-all resize-y ${
                        errors.message ? 'border-rose-500 ring-rose-200' : 'border-slate-300 focus:border-[#0B2545]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Botón de Envío con alto contraste */}
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B2545] hover:bg-[#2563EB] rounded-lg transition-colors cursor-pointer shadow-sm active:scale-[0.99]"
                    >
                      <span>Enviar consulta estratégica</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-3">
                      Al enviar este formulario acepta nuestras políticas de confidencialidad y tratamiento de datos corporativos.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
