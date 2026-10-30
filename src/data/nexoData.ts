import { ServiceItem, SectorItem, CaseStudy, Principle, TeamMember } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'inteligencia-mercado',
    number: '01',
    title: 'Inteligencia de mercado',
    shortDesc: 'Analizamos tu entorno, competencia y oportunidades para tomar decisiones informadas.',
    fullDesc: 'Metodología estructurada de análisis cualitativo y cuantitativo. Diseñamos estudios profundos de dimensionamiento de mercado, análisis competitivo riguroso, levantamiento de tendencias de consumo y validación empírica de demanda para minimizar la incertidumbre en decisiones de inversión.',
    iconName: 'BarChart3',
    scope: [
      'Estudios de dimensionamiento y accesibilidad de mercado',
      'Benchmark y mapeo competitivo exhaustivo',
      'Validación de demanda y sensibilidad de precios',
      'Identificación de brechas de oferta no atendidas'
    ],
    deliverables: [
      'Informe de Inteligencia Competitiva',
      'Matriz de Oportunidades y Riesgos de Mercado',
      'Modelo Cuantitativo de Dimensionamiento'
    ],
    impactMetric: '4.2x mayor precisión en predicción de demanda',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'estrategia-comercial',
    number: '02',
    title: 'Estrategia comercial',
    shortDesc: 'Diseñamos planes de crecimiento y expansión alineados con tus objetivos y capacidades.',
    fullDesc: 'Formulación de planes go-to-market y modelos de monetización robustos. Rediseñamos propuestas de valor B2B y B2C, esquemas de tarificación, estructuras de incentivos para la fuerza de ventas y carteras de productos optimizadas para maximizar el margen operativo.',
    iconName: 'Target',
    scope: [
      'Planes integrales Go-To-Market por segmento',
      'Estructuración de políticas de pricing y rentabilidad',
      'Diseño y dimensionamiento de fuerzas comerciales',
      'Definición de propuesta de valor y posicionamiento'
    ],
    deliverables: [
      'Plan Director Comercial 2026-2028',
      'Manual de Argumentación y Políticas de Negociación',
      'Arquitectura de Precios y Descuentos'
    ],
    impactMetric: '+32% incremento promedio en ticket de venta',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'desarrollo-canales',
    number: '03',
    title: 'Desarrollo de canales',
    shortDesc: 'Te ayudamos a fortalecer tus relaciones comerciales y a llegar a nuevos clientes y mercados.',
    fullDesc: 'Diseño y optimización de redes de distribución físicas y digitales. Facilitamos alianzas estratégicas, intermediación con distribuidores clave, apertura de cuentas corporativas institucionales y consolidación de relaciones de largo plazo que aseguren presencia sostenible.',
    iconName: 'Network',
    scope: [
      'Apertura y negociación con distribuidores mayoristas',
      'Estrategia de cuentas clave (Key Account Management)',
      'Articulación de canales directos e indirectos',
      'Alianzas comerciales e institucionales de alto impacto'
    ],
    deliverables: [
      'Mapa de Ruta de Canales de Distribución',
      'Matriz de Calificación de Socios Comerciales',
      'Acuerdos Marco y Criterios de Homologación'
    ],
    impactMetric: '+45% en penetración de nuevos puntos de venta',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'implementacion',
    number: '04',
    title: 'Implementación y acompañamiento',
    shortDesc: 'Acompañamos la ejecución de las estrategias y hacemos seguimiento a los resultados.',
    fullDesc: 'Supervisión táctica y transferencia activa de capacidades. No entregamos recomendaciones que se quedan en un archivador; nos integramos temporalmente en los comités comerciales, instalamos tableros de control ejecutivos y formamos a los líderes comerciales para una autonomía duradera.',
    iconName: 'Settings2',
    scope: [
      'Dirección provisional de proyectos de expansión',
      'Implementación de tableros de control y KPIs comerciales',
      'Acompañamiento en reuniones de cierre corporativo',
      'Gestión del cambio y capacitación a mandos medios'
    ],
    deliverables: [
      'Tablero de Mando Integral (KPIs Comerciales)',
      'Rituales de Seguimiento Semanal y Mensual',
      'Programa de Transferencia de Conocimiento'
    ],
    impactMetric: '88% de cumplimiento de metas en el primer año',
    imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'preparacion-expansion',
    number: '05',
    title: 'Preparación para la expansión',
    shortDesc: 'Identificamos requisitos técnicos, normativos y de sostenibilidad para una expansión segura.',
    fullDesc: 'Evaluación integral de madurez empresarial previa a rondas de inversión, internacionalización o apertura de nuevas plantas. Aseguramos el cumplimiento normativo, gobernanza corporativa, certificaciones sectoriales y sostenibilidad que protegen el valor del negocio.',
    iconName: 'ShieldCheck',
    scope: [
      'Diagnóstico de madurez para mercados internacionales',
      'Auditoría de gobernanza comercial y contratos',
      'Alineación de estándares normativos y ambientales',
      'Mitigación de riesgos operacionales y regulatorios'
    ],
    deliverables: [
      'Índice de Madurez para la Expansión (IME-NEXO)',
      'Plan de Mitigación de Brechas Normativas',
      'Dossier Institucional para Inversionistas y Bancos'
    ],
    impactMetric: '100% de cumplimiento en procesos de auditoría',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
  }
];

export const sectorsData: SectorItem[] = [
  {
    id: 'agroindustria',
    name: 'Agroindustria',
    tagline: 'Sofisticación de valor y acceso a mercados internacionales de especialidad.',
    overview: 'Acompañamos a productores, procesadores y exportadores agrícolas a transformar productos primarios en ofertas de alto valor agregado con trazabilidad y certificaciones globales.',
    challenges: [
      'Volatilidad de precios en commodities tradicionales',
      'Barreras fitosanitarias y exigencias de certificación internacional',
      'Dependencia de intermediarios comerciales sin margen directo'
    ],
    strategicApproach: [
      'Estructuración de marcas de origen y denominación',
      'Desarrollo de canales B2B directos hacia importadores e industrias procesadoras',
      'Optimización de la cadena de valor y empaque de exportación'
    ],
    metrics: [
      { label: 'Empresas agroindustriales asesoradas', value: '+85' },
      { label: 'Mercados internacionales abiertos', value: '14' },
      { label: 'Incremento promedio en margen', value: '+28%' }
    ],
    caseHighlight: 'Transformación del modelo de comercialización para cooperativas de café y frutas deshidratadas en Centro y Suramérica.'
  },
  {
    id: 'alimentos',
    name: 'Alimentos y Bebidas',
    tagline: 'Penetración en retail moderno, normativa técnica y posicionamiento de marca.',
    overview: 'Estrategias comerciales para fabricantes de alimentos procesados y bebidas que buscan ingresar a cadenas de supermercados, tiendas de conveniencia y canal Horeca.',
    challenges: [
      'Altas tarifas de ingreso y negociación asimétrica con retail moderno',
      'Gestión de inventarios perecederos y rotación en anaquel',
      'Cumplimiento estricto de rotulado nutricional y registros sanitarios'
    ],
    strategicApproach: [
      'Diseño de acuerdos comerciales con distribuidores especializados',
      'Estrategias de trade marketing orientadas a sell-out efectivo',
      'Reconfiguración de portafolio hacia líneas funcionales y clean label'
    ],
    metrics: [
      { label: 'Marcas de alimentos posicionadas', value: '+60' },
      { label: 'Presencia en puntos de venta retail', value: '+1,200' },
      { label: 'Reducción de mermas comerciales', value: '-35%' }
    ],
    caseHighlight: 'Introducción de línea de snacks orgánicos en las 3 principales cadenas de autoservicio de la región andina.'
  },
  {
    id: 'servicios-profesionales',
    name: 'Servicios Profesionales',
    tagline: 'Venta consultiva de alto valor, retención de clientes clave y diferenciación.',
    overview: 'Asesoramos a firmas de ingeniería, legales, contables, arquitectura y consultorías técnicas en la profesionalización de su función comercial y modelos de retainers.',
    challenges: [
      'Dificultad para desmarcarse de la competencia basada únicamente en tarifas/hora',
      'Ciclos de venta prolongados y poca previsibilidad de ingresos futuros',
      'Concentración excesiva de ingresos en los socios fundadores'
    ],
    strategicApproach: [
      'Diseño de propuestas de valor paquetizadas con resultados garantizados',
      'Metodología de venta consultiva y prospección sistemática B2B',
      'Modelos de contratos recurrentes (retainers corporativos)'
    ],
    metrics: [
      { label: 'Firmas de servicios profesionales atendidas', value: '+55' },
      { label: 'Tasa de retención de clientes anual', value: '92%' },
      { label: 'Crecimiento en facturación recurrente', value: '+40%' }
    ],
    caseHighlight: 'Reestructuración comercial para firma regional de ingeniería geotécnica, duplicando contratos corporativos multianuales.'
  },
  {
    id: 'tecnologia',
    name: 'Tecnología y Software',
    tagline: 'Escalabilidad comercial B2B, adopción empresarial y modelos SaaS.',
    overview: 'Ayudamos a empresas tecnológicas y proveedores de soluciones enterprise a conectar su innovación técnica con las necesidades de la economía tradicional.',
    challenges: [
      'Brecha de comunicación entre el lenguaje técnico y el valor de negocio financiero',
      'Complejidad para cerrar tratos corporativos con directivos tradicionales',
      'Gestión de churn y expansión dentro de cuentas existentes (Net Retention Rate)'
    ],
    strategicApproach: [
      'Formulación de casos de negocio con Retorno de Inversión (ROI) cuantificable',
      'Construcción de equipos de desarrollo comercial (SDRs y Account Executives)',
      'Alianzas con integradores de sistemas y consultoras del sector'
    ],
    metrics: [
      { label: 'Compañías tech aceleradas', value: '+45' },
      { label: 'Tasa de conversión en demos corporativas', value: '38%' },
      { label: 'Reducción de ciclo de venta enterprise', value: '-45 días' }
    ],
    caseHighlight: 'Estrategia de penetración comercial para software de gestión logística en el sector agroexportador.'
  },
  {
    id: 'turismo',
    name: 'Turismo y Hospitalidad',
    tagline: 'Consolidación de experiencias de alto valor y comercialización directa.',
    overview: 'Impulsamos a operadores de turismo de naturaleza, hoteles boutique y proyectos de destino a desintermediar sus ventas y captar viajeros de alto poder adquisitivo.',
    challenges: [
      'Dependencia crítica de comisiones elevadas de OTAs (agencias de viaje online)',
      'Estacionalidad pronunciada de la demanda turística',
      'Dificultad para articular la cadena de proveedores locales de alta calidad'
    ],
    strategicApproach: [
      'Desarrollo de canales de comercialización directa y corporativa',
      'Creación de paquetes temáticos de alta gama (turismo regenerativo y bienestar)',
      'Alianzas con agencias mayoristas de nicho internacional'
    ],
    metrics: [
      { label: 'Proyectos y destinos asesorados', value: '+55' },
      { label: 'Incremento en reservas directas', value: '+52%' },
      { label: 'RevPAR promedio post-intervención', value: '+34%' }
    ],
    caseHighlight: 'Estrategia comercial para red de ecolodges sostenibles, elevando la ocupación en temporada media en un 42%.'
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'la-colmena',
    brand: 'La Colmena',
    subtitle: 'Café de origen',
    sector: 'Agroindustria & Alimentos',
    challenge: 'Venta de café verde a precios fluctuantes de bolsa sin captura de valor local.',
    solution: 'Estructuración de línea de café tostado de especialidad y apertura de canal corporativo directo.',
    result: 'Exportación directa a 4 tostadores independientes en Europa y Norteamérica con prima de precio sobre arábica.',
    stat: '+74%',
    statLabel: 'Margen neto obtenido'
  },
  {
    id: 'tierra-viva',
    brand: 'Tierra Viva',
    subtitle: 'Productos orgánicos',
    sector: 'Alimentos Saludables',
    challenge: 'Dificultad para ingresar a cadenas de autoservicio debido a plazos de pago y volumen exigido.',
    solution: 'Consorcio comercial, homologación de empaques biodegradables y negociación estratégica.',
    result: 'Presencia asegurada en 85 puntos de venta premium con cumplimiento de entrega del 99.2%.',
    stat: '85',
    statLabel: 'Puntos de venta retail'
  },
  {
    id: 'marea',
    brand: 'Marea',
    subtitle: 'Moda sostenible',
    sector: 'Textil & Diseño',
    challenge: 'Dependencia de tiendas efímeras locales con baja rotación de colecciones de autor.',
    solution: 'Desarrollo de canal B2B para concept stores internacionales y plataforma directa corporativa.',
    result: 'Distribución en tiendas de diseño de Nueva York, Berlín y Ciudad de México.',
    stat: '3x',
    statLabel: 'Facturación anual'
  },
  {
    id: 'brijula',
    brand: 'Brújula',
    subtitle: 'Turismo rural',
    sector: 'Turismo & Hospitalidad',
    challenge: 'Comisiones de hasta 25% con plataformas intermediarias globales y baja ocupación entre semana.',
    solution: 'Estrategia de retiros corporativos corporativos B2B y club de fidelización de viajeros frecuentes.',
    result: 'Ocupación media estabilizada en 68% todo el año con ventas directas sin comisión.',
    stat: '+52%',
    statLabel: 'Ventas directas'
  },
  {
    id: 'raiz',
    brand: 'Raíz',
    subtitle: 'Alimentos funcionales',
    sector: 'Alimentos',
    challenge: 'Escasez de validación técnica en formulación de ingredientes autóctonos.',
    solution: 'Diagnóstico de madurez IME-NEXO y reestructuración de la cadena de suministro agroalimentaria.',
    result: 'Alianza comercial con conglomerado de bebidas saludables para suministro exclusivo.',
    stat: '$1.8M',
    statLabel: 'Contrato corporativo cerrado'
  }
];

export const principlesData: Principle[] = [
  {
    id: 'rigor',
    number: '01',
    title: 'Rigor analítico',
    description: 'Decidimos a partir de evidencia empírica y datos estructurados, nunca sobre intuiciones aisladas.',
    commitment: 'Cada recomendación cuenta con sustento cuantitativo, validación de mercado y análisis de sensibilidad económica.'
  },
  {
    id: 'vision-pragmatica',
    number: '02',
    title: 'Visión pragmática',
    description: 'Estrategias diseñadas para ejecutarse con los recursos reales de la organización, no para quedar archivadas.',
    commitment: 'Diseñamos planes de acción accionables con hitos quincenales, responsables claros y entregables medibles.'
  },
  {
    id: 'compromiso-etico',
    number: '03',
    title: 'Compromiso ético',
    description: 'Transparencia, independencia de criterio y confidencialidad absoluta en cada interacción con nuestros clientes.',
    commitment: 'Firmamos acuerdos estrictos de no divulgación (NDA) y declaramos de manera inmediata cualquier posible conflicto de interés.'
  },
  {
    id: 'sostenibilidad-comercial',
    number: '04',
    title: 'Sostenibilidad comercial',
    description: 'Priorizamos la rentabilidad sólida y la creación de valor compartida sobre atajos de corto plazo.',
    commitment: 'Buscamos la viabilidad económica a largo plazo, el fortalecimiento de capacidades internas y el impacto positivo en el entorno.'
  }
];

export const teamData: TeamMember[] = [
  {
    name: 'Carlos Mendoza Valdés',
    role: 'Socio Director & Estrategia Corporativa',
    experience: '+18 años de experiencia en consultoría estratégica y desarrollo empresarial en LATAM y Europa.',
    focus: 'Estrategia de expansión, gobierno corporativo y estructuración de alianzas B2B.',
    credentials: ['MBA IESE Business School', 'Ex McKinsey & Co.', 'Ingeniero Industrial']
  },
  {
    name: 'Valentina Restrepo Gil',
    role: 'Directora de Inteligencia de Mercado & Analítica',
    experience: '+12 años liderando investigaciones cuantitativas de mercado y modelos de fijación de precios.',
    focus: 'Validación de demanda, analítica de clientes y modelamiento econométrico.',
    credentials: ['M.Sc. en Economía Aplicada', 'Especialista en Comportamiento del Consumidor']
  },
  {
    name: 'Javier Arciniegas Ramos',
    role: 'Director de Práctica Agroindustrial & Alimentos',
    experience: '+15 años asesorando cadenas productivas, certificaciones de exportación y retail masivo.',
    focus: 'Acceso a retail moderno, optimización de márgenes y canales de exportación.',
    credentials: ['Master in Agribusiness Management', 'Asesor técnico de organismos multilaterales']
  },
  {
    name: 'Elena Morales Domínguez',
    role: 'Líder de Implementación & Gestión del Cambio',
    experience: '+10 años acompañando a directivos en despliegue de planes comerciales y KPIs.',
    focus: 'Dirección provisional de proyectos, coaching ejecutivo comercial y sistemas de incentivos.',
    credentials: ['PMP® Certified', 'Master en Dirección Comercial y Marketing']
  }
];

export const methodologyPhases = [
  {
    phase: '01',
    title: 'Diagnóstico & Entorno',
    duration: 'Semanas 1 - 3',
    summary: 'Inmersión profunda en las operaciones, estados financieros y cadena comercial de la compañía.',
    actions: [
      'Entrevistas con socios, directivos y clientes clave',
      'Levantamiento de métricas históricas de conversión y rentabilidad',
      'Auditoría de competidores y sustitutos directos'
    ]
  },
  {
    phase: '02',
    title: 'Diseño Estratégico',
    duration: 'Semanas 4 - 7',
    summary: 'Construcción del plan comercial, arquitectura de precios y propuesta de valor diferenciada.',
    actions: [
      'Formulación del plan Go-to-Market por segmento prioritario',
      'Modelamiento financiero y política de pricing',
      'Definición de KPIs y diseño de la estructura comercial'
    ]
  },
  {
    phase: '03',
    title: 'Despliegue e Implementación',
    duration: 'Semanas 8 - 14',
    summary: 'Acompañamiento en la ejecución táctica, negociación de canales y adopción operativa.',
    actions: [
      'Acompañamiento en reuniones con clientes o distribuidores clave',
      'Instalación del tablero de control ejecutivo',
      'Capacitación y alineación de la fuerza de ventas'
    ]
  },
  {
    phase: '04',
    title: 'Evaluación & Gobernanza',
    duration: 'Semanas 15 - 18',
    summary: 'Medición de impacto, consolidación de la autonomía interna y plan de escalamiento.',
    actions: [
      'Auditoría de cumplimiento de metas comerciales',
      'Ajustes de calibración a la política comercial',
      'Establecimiento del comité comercial permanente'
    ]
  }
];
