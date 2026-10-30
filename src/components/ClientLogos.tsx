import React from 'react';
import { Compass, Leaf, Sparkles, Coffee, UtensilsCrossed } from 'lucide-react';

interface ClientLogosProps {
  onSelectCase?: (caseId: string) => void;
  activeCaseId?: string;
}

export const ClientLogos: React.FC<ClientLogosProps> = ({ onSelectCase, activeCaseId }) => {
  const clients = [
    {
      id: 'la-colmena',
      name: 'La Colmena',
      subtitle: 'Café de origen',
      icon: Coffee
    },
    {
      id: 'tierra-viva',
      name: 'Tierra Viva',
      subtitle: 'Productos orgánicos',
      icon: Leaf
    },
    {
      id: 'marea',
      name: 'Marea',
      subtitle: 'Moda sostenible',
      icon: Sparkles
    },
    {
      id: 'brijula',
      name: 'Brújula',
      subtitle: 'Turismo rural',
      icon: Compass
    },
    {
      id: 'raiz',
      name: 'Raíz',
      subtitle: 'Alimentos',
      icon: UtensilsCrossed
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
      {clients.map((client) => {
        const IconComponent = client.icon;
        const isSelected = activeCaseId === client.id;
        return (
          <button
            key={client.id}
            type="button"
            onClick={() => onSelectCase && onSelectCase(client.id)}
            className={`flex items-center gap-3 p-4 rounded-xl border transition-all text-left cursor-pointer ${
              isSelected
                ? 'bg-slate-50 border-[#0B2545] ring-2 ring-[#0B2545]/10 shadow-sm'
                : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className={`p-2.5 rounded-lg shrink-0 transition-colors ${
              isSelected ? 'bg-[#0B2545] text-white' : 'bg-slate-100 text-[#0B2545]'
            }`}>
              <IconComponent className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm font-semibold text-[#0F172A] tracking-tight truncate font-['Montserrat']">
                {client.name}
              </h4>
              <p className="text-xs text-[#475569] truncate font-medium">
                {client.subtitle}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
};
