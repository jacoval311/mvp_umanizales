export type PageRoute = 'inicio' | 'servicios' | 'nosotros' | 'sectores' | 'casos' | 'contacto';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  scope: string[];
  deliverables: string[];
  impactMetric: string;
  imageUrl: string;
}

export interface SectorItem {
  id: string;
  name: string;
  tagline: string;
  overview: string;
  challenges: string[];
  strategicApproach: string[];
  metrics: { label: string; value: string }[];
  caseHighlight: string;
}

export interface CaseStudy {
  id: string;
  brand: string;
  subtitle: string;
  sector: string;
  challenge: string;
  solution: string;
  result: string;
  stat: string;
  statLabel: string;
}

export interface Principle {
  id: string;
  number: string;
  title: string;
  description: string;
  commitment: string;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  focus: string;
  credentials: string[];
}
