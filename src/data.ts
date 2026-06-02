import { 
  Eye, 
  Droplet, 
  Magnet, 
  Activity, 
  Layers, 
  Compass, 
  Percent, 
  Gauge, 
  ShieldAlert, 
  Award, 
  Flame, 
  Wrench, 
  HardHat, 
  FileText, 
  GraduationCap  
} from 'lucide-react';

export interface NDTService {
  id: string;
  code: string;
  title: string;
  icon: any;
  shortDesc: string;
  fullDesc: string;
  applications: string[];
  standards: string[];
}

export interface Sector {
  id: string;
  name: string;
  description: string;
  iconName: string;
  imageAlt: string;
}

export const MAIN_INFO = {
  name: "Servicios de Ensayos No Destructivos C.A.",
  shortName: "ServendCA",
  logoUrl: "https://i.postimg.cc/SRjWXXFx/logoweb2.png",
  slogan: "Ensayos No Destructivos para la Industria de Oil & Gas, Metalurgia y Minería con resultados in situ.",
  objective: "La compañía tendrá como objeto principal la prestación de servicios integrales de inspección y Ensayos No Destructivos (END) orientados a evaluar la integridad mecánica, seguridad y de calidad de los materiales, equipos, componentes y estructuras, sin alterar sus propiedades físicas, químicas o funcionales. Esto incluye de manera enunciativa más no limitativa, la aplicación de técnicas de inspección tales como Inspección Visual, Ultrasonido Convencional, Arreglo de Fases, Partículas Magnéticas y Líquidos Penetrantes, orientados a la detección oportuna de fisuras, porosidades, falta de penetración, socavaciones y/o corrosión.",
  contact: {
    instagram: "servendca",
    email: "servendca@gmail.com",
    phone: "0412 5507326",
    phoneFormatted: "+58 412 5507326",
    address: "Carretera Nacional vía San Jaime, Zona Industrial. Maturín Edo. Monagas. Oficina N° HM2-18"
  }
};

export const SERVICES: NDTService[] = [
  {
    id: "vt",
    code: "VT",
    title: "Inspección Visual (VT)",
    icon: Eye,
    shortDesc: "Identificación directa de discontinuidades superficiales, corrosión y defectos geométricos de soldadura.",
    fullDesc: "Constituye la técnica fundamental de inicio en cualquier esquema de Ensayos No Destructivos (END). Utiliza iluminación de alta intensidad y lupas de precisión hasta videoboroscopios avanzados para inspeccionar el interior de tuberías, recipientes a presión e instalaciones soldadas sin desmontar partes críticas.",
    applications: [
      "Inspección de cordones de soldadura antes, durante y después del proceso de unión.",
      "Identificación de corrosión y picaduras en superficies externas.",
      "Inspección remota boroscópica en turbinas, intercambiadores y espacios confinados."
    ],
    standards: ["ASME Sec. V Art. 9", "AWS D1.1", "API 1104"]
  },
  {
    id: "pt",
    code: "PT",
    title: "Líquidos Penetrantes (PT)",
    icon: Droplet,
    shortDesc: "Revelado de fisuras extremadamente finas y discontinuidades abiertas a la superficie en metales.",
    fullDesc: "Método altamente sensible para descubrir fisuras, porosidades, traslapes y pliegues superficiales en materiales ferrosos y no ferrosos (como aceros inoxidables, aluminio y aleaciones de níquel). Funciona mediante capilaridad, penetrando en defectos imperceptibles al ojo humano y revelándolos por contraste de color o fluorescencia.",
    applications: [
      "Detección de fisuras por fatiga en componentes aeronáuticos y automotrices.",
      "Inspección de soldaduras no ferromagnéticas.",
      "Mantenimiento predictivo en álabes de turbinas y piezas de fundición."
    ],
    standards: ["ASTM E165", "ASME Sec. V Art. 6", "ISO 3452"]
  },
  {
    id: "mt",
    code: "MT",
    title: "Partículas Magnéticas (MT)",
    icon: Magnet,
    shortDesc: "Detección rápida de discontinuidades superficiales y subsuperficiales en materiales ferromagnéticos.",
    fullDesc: "Utiliza campos magnéticos intensos aplicados mediante yugos electromagnéticos o corriente directa combinados con partículas ferrosas de alta visibilidad (por contraste de color o fluorescentes). Permite detectar discontinuidades que están a nivel superficial o justo debajo de la superficie del metal, donde el flujo magnético se interrumpe y genera fugas de campo.",
    applications: [
      "Inspección de soldaduras estructurales de acero al carbono.",
      "Ejes de transmisión, engranajes y componentes mecánicos pesados.",
      "Detección de grietas por tensión térmica o fatiga mecánica."
    ],
    standards: ["ASTM E1444", "ASME Sec. V Art. 7", "API 5CT"]
  },
  {
    id: "ut",
    code: "UT",
    title: "Ultrasonido Convencional (UT)",
    icon: Activity,
    shortDesc: "Evaluación volumétrica de defectos internos mediante ondas acústicas de alta frecuencia.",
    fullDesc: "Envía pulsos de energía ultrasónica en el rango de MHz directos al material para reflejarse en defectos o paredes estructurales. El pulso retornado se procesa electrónicamente para determinar con exactitud milimétrica la ubicación, profundidad y tamaño de inclusiones de escoria, faltas de fusión o fisuras en el espesor total de las piezas.",
    applications: [
      "Inspección de soldaduras a tope de gran espesor.",
      "Control de calidad en forjas pesadas y chapas laminadas.",
      "Detección de laminaciones y grietas internas en componentes sometidos a alta tensión."
    ],
    standards: ["ASME Sec. V Art. 4", "ASTM A388", "AWS D1.1"]
  },
  {
    id: "paut",
    code: "PAUT",
    title: "Ultrasonido Avanzado (Phased Array)",
    icon: Layers,
    shortDesc: "Inspección digitalizada multi-ángulo avanzada con mapeo visual en tiempo real del interior de soldaduras.",
    fullDesc: "Una evolución revolucionaria del ultrasonido convencional. Utiliza transductores multielemento controlados por computadora, capaces de emitir haces ultrasónicos en ángulos y profundidades variables de forma simultánea. Brinda representaciones visuales digitales completas tipo S-Scan, B-Scan y C-Scan de la soldadura, garantizando mayor velocidad de inspección e informes extremadamente detallados.",
    applications: [
      "Sustitución progresiva de radiografía industrial (eliminando riesgos de radiación).",
      "Inspección de geometrías de soldadura extremadamente complejas.",
      "Mapeo volumétrico rápido en uniones soldadas de oleoductos y gasoductos críticos."
    ],
    standards: ["ASME Sec. V Art. 4 App. 4", "ASTM E2700", "ISO 13588"]
  },
  {
    id: "espesores",
    code: "ME",
    title: "Medición de Espesores",
    icon: Gauge,
    shortDesc: "Evaluación exacta del desgaste por corrosión y espesor remanente en tuberías y recipientes.",
    fullDesc: "Mide críticamente el espesor de pared restante en componentes metálicos o plásticos sujetos a desgaste erosivo o corrosivo continuo. Es una herramienta esencial de seguridad operacional, permitiendo reprogramar reparaciones y asegurar que el activo aún cumple sus parámetros nominales de presión de trabajo.",
    applications: [
      "Control de desgaste en tuberías de transporte de crudo y gas.",
      "Monitoreo de tanques de almacenamiento e intercambiadores de calor.",
      "Inspección de calderas y recipientes a presión industriales."
    ],
    standards: ["ASTM E797", "API 510", "API 570"]
  },
  {
    id: "corrosion",
    code: "MC",
    title: "Mapa de Corrosión",
    icon: Compass,
    shortDesc: "Mapeo topográfico digitalizado de corrosión para la evaluación estructural global de activos.",
    fullDesc: "Genera representaciones y planos topográficos 2D/3D a partir de cientos de lecturas digitales de espesor distribuidas de forma matricial. Permite evaluar de manera precisa el patrón de la corrosión (uniforme o picaduras), estimando la vida útil remanente exacta del activo con fines de integridad mecánica.",
    applications: [
      "Mapeo de placas inferiores de grandes tanques de almacenamiento de crudo.",
      "Evaluación detallada de codos de tuberías con flujo turbulento.",
      "Análisis predictivo de desgaste localizado en cascos de embarcaciones."
    ],
    standards: ["API 653", "ASME FFS-1 / API 579", "ASTM G46"]
  }
];

export const OTHER_SERVICES = [
  {
    title: "Ensayos de Dureza Portátil (HRA, HRB, HRC)",
    icon: Percent,
    desc: "Evaluación física in situ para certificar la resistencia mecánica, elasticidad, tratamientos térmicos y uniformidad metalúrgica de componentes sin alterar su resistencia."
  },
  {
    title: "Identificación Positiva de Materiales (PMI)",
    icon: Wrench,
    desc: "Verificación química por espectrometría portátil que permite clasificar instantáneamente el grado exacto de aleación de aceros, inoxidables y metales especiales en campo."
  },
  {
    title: "Asesoría Técnica en Control de Calidad (QA/QC)",
    icon: ShieldAlert,
    desc: "Acompañamiento de ingeniería en la elaboración de procedimientos, planes de control, especificación técnica de soldadura (WPS/PQR) y supervisión en sitio."
  },
  {
    title: "Mantenimiento Predictivo",
    icon: Award,
    desc: "Análisis técnico preventivo de equipos rotativos, soldaduras e intercambiadores facilitando la optimización de costos y evitando fallas inoportunas o incidentes mayores."
  },
  {
    title: "Elaboración de Informes Técnicos Periciales",
    icon: FileText,
    desc: "Soporte de ingeniería en el análisis forense de fallas, inspecciones post-daño e informes firmados por inspectores certificados certificados bajo el esquema ASNT / ISO 9712."
  },
  {
    title: "Capacitación en Ensayos No Destructivos",
    icon: GraduationCap,
    desc: "Formación especializada en la comprensión, aplicación y normativas vigentes de aseguramiento de integridad de activos industriales."
  }
];

export const TARGET_SECTORS = [
  {
    id: "oil-gas",
    name: "Petróleo y Gas",
    description: "Soporte integral en la inspección de tuberías de alta presión, líneas de flujo, tanques de almacenamiento API y refinerías bajo normativas API, ASME y ASTM.",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200", 
    icon: Flame
  },
  {
    id: "mining",
    name: "Minería y Metalurgia",
    description: "Evaluación estructural de transportadores, molinos, bastidores de maquinaria y tolvas de mineral sujetas a fatiga extrema y abrasión prolongada.",
    imageUrl: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1200",
    icon: HardHat
  },
  {
    id: "petrochemical",
    name: "Petroquímica",
    description: "Inspecciones minuciosas en reactores, torres de destilación e intercambiadores de calor frente a ataques químicos corrosivos u oxidación a alta temperatura.",
    imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200",
    icon: Activity
  },
  {
    id: "construction",
    name: "Construcción Civil",
    description: "Monitoreo y certificación de cordones de soldadura en puentes, naves industriales, columnas y pertrechos de estructuras metálicas de gran envergadura.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
    icon: Layers
  }
];

// Interactive NDT Finder Matcher Data
export interface FinderOption {
  material: string;
  component: string;
  anomaly: string;
}

export const RECOMMENDED_NDT_FINDER = (options: FinderOption) => {
  const { material, component, anomaly } = options;
  
  if (material === "No-Ferroso" && anomaly === "FisiRas Superficiales") {
    return {
      name: "Líquidos Penetrantes (PT)",
      reason: "Al ser un material no-ferromagnético (aluminio, inoxidable), el magnetismo (MT) no funciona. Los Líquidos Penetrantes tienen máxima efectividad por capilaridad para revelar discontinuidades abiertas en superficies.",
      eff: "Excelente",
      estStandard: "ASME Sec. V Art. 6 / ASTM E165"
    };
  }

  if (material === "Ferromagnético" && anomaly === "FisiRas Superficiales") {
    return {
      name: "Partículas Magnéticas (MT)",
      reason: "Las partículas magnéticas son sumamente veloces y confiables para materiales ferrosos. Detectan fisuras finas superficiales y subsuperficiales gracias al campo electromagnético en minutos.",
      eff: "Excelente",
      estStandard: "ASME Sec. V Art. 7 / ASTM E1444"
    };
  }

  if (anomaly === "Pérdida de Espesor / Desgaste") {
    return {
      name: "Medición de Espesores & Mapa de Corrosión",
      reason: "Perfecto para tuberías o tanques que exhiben adelgazamiento de pared por erosión o corrosión química. Genera la indicación cuantitativa exacta del material restante.",
      eff: "Crítica / Indispensable",
      estStandard: "ASTM E797 / API 510 / API 570"
    };
  }

  if (anomaly === "Defectos Internos Volumétricos") {
    if (component === "Tubería / Oleoducto Crítico" || component === "Tanque / Recipiente Presión") {
      return {
        name: "Ultrasonido Avanzado (PAUT - Phased Array)",
        reason: "La tecnología Phased Array permite un escaneo multi-ángulo digitalizado en secciones críticas sin requerir suspender labores por radiación, emitiendo un diagnóstico volumétrico preciso tipo ecografía industrial.",
        eff: "Superior Profesional",
        estStandard: "ASME Sec. V Art. 4 / ISO 13588"
      };
    } else {
      return {
        name: "Ultrasonido Convencional (UT)",
        reason: "Ideal para detectar fisuras internas ocultas o inclusiones en soldaduras estructurales gruesas, determinando con gran precisión la profundidad del defecto basándose en la velocidad de propagación sónica.",
        eff: "Excelente",
        estStandard: "ASME Sec. V Art. 4 / AWS D1.1"
      };
    }
  }

  // Fallback
  return {
    name: "Inspección Visual + Ensayo Combinado (VT / UT)",
    reason: "La inspección visual del componente siempre es el punto de partida indispensable, seguida de verificación ultrasónica para descartar grietas o corrosión interna.",
    eff: "Recomendado",
    estStandard: "ASME Sec. V / AWS D1.1"
  };
};
