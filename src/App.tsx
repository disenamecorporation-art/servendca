import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  SERVICES, 
  OTHER_SERVICES, 
  TARGET_SECTORS, 
  MAIN_INFO, 
  NDTService, 
  RECOMMENDED_NDT_FINDER 
} from './data';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  ChevronRight, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Shield, 
  Activity, 
  CheckCircle2, 
  Send, 
  FileText,
  User,
  Building,
  Wrench,
  HelpCircle,
  TrendingUp,
  Sliders,
  AlertTriangle
} from 'lucide-react';

export default function App() {
  // Hero Slider state
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const HERO_SLIDES = [
    {
      image: "https://i.postimg.cc/0NqH71cf/image.png",
      badge: "CERTIFICACIÓN ASNT • ISO 9712 • AWS D1.1",
      title: "INTEGRIDAD ESTRUCTURAL CERTIFICADA IN SITU",
      subtitle: "Inspección profesional y Ensayos No Destructivos (END) de máxima resolución. Resultados in situ confiables para la industria de petróleo, gas, minería y metalúrgica.",
      primaryCta: "#servicios",
      primaryText: "Explorar Ensayos NDT",
      secondaryCta: "#contacto",
      secondaryText: "Cotizar Proyecto In Situ"
    },
    {
      image: "https://i.postimg.cc/XJgwmTKV/Gemini-Generated-Image-tnwejrtnwejrtnwe.png",
      badge: "SEGURIDAD INTEGRAL Y RECONOCIMIENTO MECÁNICO",
      title: "PREVENCIÓN Y DIAGNÓSTICO INDUSTRIAL AVANZADO",
      subtitle: "Evaluamos con total precisión física recipientes a presión, soldaduras y estructuras críticas in situ utilizando equipamiento digital calibrado.",
      primaryCta: "#ndtsmart",
      primaryText: "Recomendador NDT",
      secondaryCta: "#contacto",
      secondaryText: "Solicitar Inspección"
    },
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
      badge: "TECNOLOGÍA DE VANGUARDIA DE INSPECCIÓN",
      title: "PREVENCIÓN DE CONTINGENCIAS INDUSTRIALES",
      subtitle: "Detectamos fisuras imperceptibles, porosidades y corrosión interna mediante Ultrasonido Phased Array, Partículas Magnéticas y Líquidos Penetrantes.",
      primaryCta: "#ndtsmart",
      primaryText: "Recomendador NDT Inteligente",
      secondaryCta: "#contacto",
      secondaryText: "Agendar Inspección de Campo"
    },
    {
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
      badge: "ALCANCE NACIONAL E INTERNACIONAL",
      title: "INGENIERÍA METALÚRGICA Y AUDITORÍA DE CALIDAD",
      subtitle: "Soporte de ingeniería forense en sitio para soldaduras críticas estructurales, calificación de procedimientos WPS/PQR de forma inmediata y profesional.",
      primaryCta: "#servicios-secundarios",
      primaryText: "Ver Consultorías",
      secondaryCta: "#contacto",
      secondaryText: "Hablar con Nivel III"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
    }, 8500);
    return () => clearInterval(timer);
  }, [HERO_SLIDES.length]);

  // Service detail explorer state
  const [selectedServiceId, setSelectedServiceId] = useState<string>("vt");
  const selectedService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  // NDT Interactive Finder state
  const [finderMaterial, setFinderMaterial] = useState<string>("Ferromagnético");
  const [finderComponent, setFinderComponent] = useState<string>("Tubería / Oleoducto Crítico");
  const [finderAnomaly, setFinderAnomaly] = useState<string>("Defectos Internos Volumétricos");
  const [isFinderResultVisible, setIsFinderResultVisible] = useState(true);

  // Dynamic recommendations based on selections
  const recommendation = RECOMMENDED_NDT_FINDER({
    material: finderMaterial,
    component: finderComponent,
    anomaly: finderAnomaly
  });

  // Contact / Quote calculator state
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactService, setContactService] = useState("vt");
  const [contactDetails, setContactDetails] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Quick feedback dynamic price estimator to engage clients
  const [estimatedTons, setEstimatedTons] = useState<number>(10);
  const [estimatedPoints, setEstimatedPoints] = useState<number>(20);
  const estimatedDays = Math.max(1, Math.ceil(estimatedPoints * 0.15 + estimatedTons * 0.1));

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactPhone) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);
    }, 900);
  };

  const resetForm = () => {
    setContactName("");
    setContactEmail("");
    setContactPhone("");
    setContactCompany("");
    setContactDetails("");
    setFormSubmitted(false);
  };

  return (
    <div id="servendca-app" className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-brand-yellow selection:text-brand-blue antialiased text-base relative overflow-hidden">
      
      {/* Sophisticated Light Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0a1d2c 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      </div>

      {/* Upper Info Alert Bar */}
      <div id="top-bar" className="bg-[#0a1d2c] text-slate-200 py-2.5 px-4 text-xs md:text-sm border-b border-brand-yellow/30 relative z-30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="flex items-center gap-1.5 text-slate-250 hover:text-brand-yellow transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand-yellow" />
              <a href={`tel:${MAIN_INFO.contact.phoneFormatted}`}>{MAIN_INFO.contact.phoneFormatted}</a>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow/50 hidden md:inline"></span>
            <span className="flex items-center gap-1.5 text-slate-250 hover:text-brand-yellow transition-colors">
              <Mail className="w-3.5 h-3.5 text-brand-yellow" />
              <a href={`mailto:${MAIN_INFO.contact.email}`}>{MAIN_INFO.contact.email}</a>
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden lg:flex items-center gap-1.5 text-slate-350">
              <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
              Maturín, Edo. Monagas, Venezuela
            </span>
            <span className="bg-brand-yellow/10 text-brand-yellow px-2 py-0.5 rounded font-mono border border-brand-yellow/20 flex items-center gap-1">
              <Clock className="w-3 h-3 animate-pulse" />
              <span>Servicio In Situ Nacional</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Beautiful Header Navigation */}
      <header id="main-nav" className="sticky top-0 bg-white/95 backdrop-blur-md text-slate-850 py-3 px-4 md:px-8 border-b border-slate-200 z-40 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#welcome" className="flex items-center group">
            <img 
              src={MAIN_INFO.logoUrl} 
              className="h-24 md:h-32 lg:h-38 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
              alt="Logo ServendCA"
              referrerPolicy="no-referrer"
              id="brand-logo-img"
            />
          </a>

          {/* Nav Links Desktop */}
          <nav className="hidden lg:flex items-center gap-8 font-display text-sm font-semibold tracking-wide text-slate-700">
            <a href="#welcome" className="hover:text-brand-yellow-dark transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-brand-yellow after:transition-all">Inicio</a>
            <a href="#quienes-somos" className="hover:text-brand-yellow-dark transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-brand-yellow after:transition-all">Objetivo</a>
            <a href="#servicios" className="hover:text-brand-yellow-dark transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-brand-yellow after:transition-all">Servicios</a>
            <a href="#ndtsmart" className="hover:text-brand-yellow-dark transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-brand-yellow after:transition-all">Detector NDT</a>
            <a href="#sectores" className="hover:text-brand-yellow-dark transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-brand-yellow after:transition-all">Sectores</a>
            <a href="#contacto" className="hover:text-brand-yellow-dark transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-brand-yellow after:transition-all">Contacto</a>
          </nav>

          {/* Quick Action Contact Button */}
          <div className="flex items-center gap-3">
            <a 
              href={`https://wa.me/584125507326?text=Hola%20ServendCA,%20solicito%20información%20y%20cotización%20sobre%20servicios%20de%20ensayos%20no%20destructivos.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-yellow hover:bg-brand-yellow-dark text-[#0a1d2c] font-display font-bold px-4 md:px-5 py-2 md:py-2.5 rounded-lg text-xs md:text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              id="whatsapp-direct-btn"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">Contactar WhatsApp</span>
              <span className="md:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Slider Section */}
      <section id="welcome" className="relative h-[650px] md:h-[700px] lg:h-[750px] overflow-hidden bg-[#050f17] z-10 select-none">
        
        {/* Slide display with AnimatePresence for silky smooth feel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background image */}
            <img
              src={HERO_SLIDES[currentSlideIndex].image}
              alt="Banner ServendCA"
              className="w-full h-full object-cover object-center"
            />
            {/* Beautiful deep dark gradient overlays to guarantee perfect text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/30"></div>
          </motion.div>
        </AnimatePresence>

        {/* Sparkle lines of the brand grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#fbc122_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

        {/* Content Container */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-20">
            <div className="max-w-3xl space-y-6 text-left">
              
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`badge-${currentSlideIndex}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-brand-yellow text-brand-blue px-3.5 py-1.5 rounded-full text-xs font-mono font-bold animate-pulse"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{HERO_SLIDES[currentSlideIndex].badge}</span>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="popLayout">
                <motion.h1
                  key={`title-${currentSlideIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-tight uppercase font-extrabold"
                >
                  {HERO_SLIDES[currentSlideIndex].title.split(" ").map((word, i) => {
                    if (word === "IN" || word === "SITU" || word === "PROFESIONALES" || word === "REVOLUCIONARIA" || word === "CALIDAD" || word === "CERTIFICADA" || word === "ESTRUCTURAL") {
                      return <span key={i} className="text-brand-yellow font-black">{word} </span>;
                    }
                    return word + " ";
                  })}
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode="popLayout">
                <motion.p
                  key={`desc-${currentSlideIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-sm sm:text-base md:text-lg text-slate-200 font-light max-w-2xl leading-relaxed border-l-4 border-brand-yellow/80 pl-4 lg:pl-6 text-justify"
                >
                  {HERO_SLIDES[currentSlideIndex].subtitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`btns-${currentSlideIndex}`}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="flex flex-col sm:flex-row items-center gap-4 pt-2"
                >
                  <a
                    href={HERO_SLIDES[currentSlideIndex].primaryCta}
                    className="w-full sm:w-auto text-center bg-brand-yellow hover:bg-[#e0aa14] text-brand-blue font-display font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-brand-yellow/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>{HERO_SLIDES[currentSlideIndex].primaryText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={HERO_SLIDES[currentSlideIndex].secondaryCta}
                    className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/15 text-white hover:text-brand-yellow font-display font-bold px-8 py-4 rounded-xl border border-white/25 hover:border-brand-yellow/40 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>{HERO_SLIDES[currentSlideIndex].secondaryText}</span>
                  </a>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </div>

        {/* Manual controls (left/right arrows) */}
        <button
          onClick={() => setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-brand-yellow hover:text-[#0a1d2c] text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-35 cursor-pointer hover:scale-110 border border-white/10"
          aria-label="Slide anterior"
        >
          <svg className="w-5 h-5 flex items-center justify-center" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
        </button>
        
        <button
          onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-brand-yellow hover:text-[#0a1d2c] text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-35 cursor-pointer hover:scale-110 border border-white/10"
          aria-label="Slide siguiente"
        >
          <svg className="w-5 h-5 flex items-center justify-center" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Bottom indicator circles dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-35">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${currentSlideIndex === idx ? "w-8 bg-brand-yellow" : "w-2.5 bg-white/40 hover:bg-white/70"}`}
              title={`Ir a slide ${idx + 1}`}
            />
          ))}
        </div>

      </section>

      {/* Normative Quick Banner */}
      <section id="normativas-marcas" className="bg-[#0a1d2c] py-6 border-b border-brand-yellow/20 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-around gap-6 text-sm">
          <p className="text-brand-yellow font-mono text-center w-full lg:w-auto text-xs uppercase tracking-widest pb-2 lg:pb-0">
            Ensayos bajo estándares internacionales:
          </p>
          <div className="flex flex-wrap items-center gap-6 justify-center">
            <span className="bg-[#112435] border border-gray-800 text-gray-300 font-bold px-3 py-1.5 rounded-md font-mono hover:text-brand-yellow transition-colors cursor-default shadow">ASME SEC V</span>
            <span className="bg-[#112435] border border-gray-800 text-gray-300 font-bold px-3 py-1.5 rounded-md font-mono hover:text-brand-yellow transition-colors cursor-default shadow">API 1104 / 510</span>
            <span className="bg-[#112435] border border-gray-800 text-gray-300 font-bold px-3 py-1.5 rounded-md font-mono hover:text-brand-yellow transition-colors cursor-default shadow">AWS D1.1</span>
            <span className="bg-[#112435] border border-gray-800 text-gray-300 font-bold px-3 py-1.5 rounded-md font-mono hover:text-brand-yellow transition-colors cursor-default shadow">ASTM STANDARDS</span>
            <span className="bg-[#112435] border border-gray-800 text-gray-300 font-bold px-3 py-1.5 rounded-md font-mono hover:text-brand-yellow transition-colors cursor-default shadow">ISO 9712</span>
          </div>
        </div>
      </section>

      {/* Section: Who We Are / Objective */}
      <section id="quienes-somos" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10 text-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-12 text-center max-w-3xl mx-auto mb-6">
            <span className="text-brand-yellow-dark font-mono text-xs uppercase tracking-widest bg-brand-yellow/15 px-3 py-1 rounded w-fit inline-block mb-3 border border-brand-yellow/20 font-bold">
              Objetivo Corporativo
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-[#0a1d2c] mt-2 tracking-tight">
              Garantía de Integridad Estructural y Calidad
            </h2>
          </div>

          {/* Left Block with deep explanation - Light Premium style */}
          <div className="lg:col-span-7 bg-white p-6 md:p-10 rounded-2xl shadow-md border border-slate-200 border-l-8 border-l-brand-yellow relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-yellow/5 rounded-full pointer-events-none"></div>
            
            <h3 className="text-xl md:text-2xl font-display font-bold text-[#0a1d2c] mb-4 flex items-center gap-2">
              <Shield className="text-brand-yellow-dark w-6 h-6 shrink-0" />
              Misión e Impacto en Operaciones
            </h3>
            
            <p className="text-slate-650 leading-relaxed text-sm md:text-base font-light text-justify">
              {MAIN_INFO.objective}
            </p>

            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <AlertTriangle className="text-brand-yellow-dark w-6 h-6 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-brand-blue font-display">PREVENCIÓN DE CONTINGENCIAS</span>
                <p className="text-xs text-slate-600 mt-1">
                  Nuestras técnicas e instrumentos localizan con precisión física defectos imperceptibles (fisuras, corrosión localizada) antes de que progresen en fallas catastróas.
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Core Pillars Grid - Light Premium style */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            
            <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 border-t-4 border-t-brand-yellow relative overflow-hidden group hover:border-brand-yellow transition-all duration-300">
              <div className="absolute bottom-[-10px] right-[-10px] text-brand-yellow/5 group-hover:text-brand-yellow/10 transition-colors">
                <Activity className="w-24 h-24" />
              </div>
              <span className="bg-brand-yellow text-brand-blue font-mono font-bold text-xs px-2.5 py-1 rounded w-fit block mb-3">CONFIABILIDAD</span>
              <h4 className="font-display font-bold text-lg text-brand-blue mb-2">Evaluación Sin Alteraciones</h4>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Evaluamos materiales y componentes completamente terminados sin alterar en lo absoluto sus propiedades mecánicas, químicas o funcionales originales. Estás listo para operar de inmediato.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 relative overflow-hidden group hover:border-brand-yellow transition-all duration-300">
              <div className="absolute bottom-[-10px] right-[-10px] text-brand-yellow/5 group-hover:text-brand-yellow/10 transition-colors">
                <CheckCircle2 className="w-24 h-24" />
              </div>
              <span className="bg-slate-100 text-brand-blue border border-slate-200 font-mono font-bold text-xs px-2.5 py-1 rounded w-fit block mb-3">IN SITU DE RESPUESTA</span>
              <h4 className="font-display font-bold text-lg text-slate-800 mb-2">Resultados en Sitio</h4>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Nuestros ingenieros e inspectores se movilizan con equipamientos portátiles directamente a su planta, taller, taladro o locación industrial para entregar diagnósticos rápidos.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Section: Main NDT Services Grid & Explorer */}
      <section id="servicios" className="py-20 bg-slate-100 relative border-y border-slate-200 z-10">
        
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-yellow-dark font-mono text-xs uppercase tracking-widest bg-brand-yellow/15 px-3 py-1 rounded w-fit inline-block mb-3 border border-brand-yellow/30 font-bold">
              Portafolio de Inspección Especializada
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
              Nuestros Servicios Profesionales de Ensayos (END)
            </h2>
            <p className="text-slate-600 mt-4 font-light text-sm md:text-base">
              Haga clic sobre cualquiera de las disciplinas para explorar detalladamente sus alcances técnicos, aplicaciones y normativas de aseguramiento.
            </p>
          </div>

          {/* Interactive Mobile Nav tabs */}
          <div className="flex xl:hidden flex-wrap items-center justify-center gap-2 mb-8">
            {SERVICES.map((serv) => {
              const IconComp = serv.icon;
              return (
                <button
                  key={serv.id}
                  onClick={() => setSelectedServiceId(serv.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-display font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    selectedServiceId === serv.id
                      ? "bg-brand-yellow text-brand-blue shadow-md"
                      : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                  }`}
                >
                  <IconComp className={`w-3.5 h-3.5 ${selectedServiceId === serv.id ? "text-brand-blue" : "text-brand-yellow-dark"}`} />
                  <span>{serv.code}</span>
                </button>
              );
            })}
          </div>

          {/* Large Screen Two-Column Explorer Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
            
            {/* Left Nav Stack List */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 pl-2">Seleccione una técnica:</span>
              
              {SERVICES.map((serv, index) => {
                const IconComponent = serv.icon;
                const isSelected = selectedServiceId === serv.id;
                
                return (
                  <button
                    key={serv.id}
                    onClick={() => setSelectedServiceId(serv.id)}
                    className={`text-left p-4 rounded-xl flex items-center justify-between gap-4 transition-all duration-300 border cursor-pointer ${
                      isSelected 
                        ? "bg-[#0a1d2c] border-brand-yellow text-white shadow-lg translate-x-2 shadow-brand-blue/15" 
                        : "bg-white border-slate-200 hover:bg-[#fafafa] hover:border-brand-yellow/30 text-slate-800 hover:translate-x-1"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected ? "bg-brand-yellow text-brand-blue" : "bg-slate-100 text-[#0d2e46]"
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className={`block text-xs font-mono font-bold tracking-wider ${
                          isSelected ? "text-brand-yellow" : "text-slate-500"
                        }`}>
                          SERVICIO {serv.code}
                        </span>
                        <h4 className="font-display font-bold text-sm md:text-base">
                          {serv.title}
                        </h4>
                      </div>
                    </div>
                    
                    <ChevronRight className={`w-5 h-5 transition-transform ${
                      isSelected ? "text-brand-yellow translate-x-0.5" : "text-slate-400"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right Interactive Detail Panel */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedServiceId}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-lg h-full flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Decorative glowing background brand bubble */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none"></div>
                  
                  <div>
                    {/* Panel Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-5">
                      <div className="flex items-center gap-3.5">
                        <div className="bg-[#0a1d2c] text-brand-yellow p-3 rounded-xl shadow-md">
                          {selectedService.icon && <selectedService.icon className="w-6 h-6" />}
                        </div>
                        <div>
                          <span className="bg-brand-yellow/15 text-brand-yellow-dark px-2 py-0.5 text-xs font-mono font-bold rounded-full border border-brand-yellow/30">
                            Ensayo NDT • {selectedService.code}
                          </span>
                          <h3 className="font-display font-extrabold text-xl md:text-2xl text-slate-900 mt-1 animate-pulse-slow">
                            {selectedService.title}
                          </h3>
                        </div>
                      </div>

                      {/* Code Badge Large */}
                      <span className="font-sans font-black text-4xl md:text-5xl text-slate-200 uppercase tracking-tighter select-none">
                        {selectedService.code}
                      </span>
                    </div>

                    {/* Full Description sentence */}
                    <div className="mb-6">
                      <h5 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">Fundamento Científico y Técnico:</h5>
                      <p className="text-slate-700 text-sm md:text-base leading-relaxed pl-1 text-justify">
                        {selectedService.fullDesc}
                      </p>
                    </div>

                    {/* Applications Block */}
                    <div className="mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <h5 className="text-xs uppercase tracking-wider text-[#0a1d2c] font-bold mb-3 flex items-center gap-1.5">
                        <div className="w-1.5 h-4 bg-brand-yellow rounded animate-pulse"></div>
                        Principales Campos de Aplicación:
                      </h5>
                      <ul className="space-y-2.5">
                        {selectedService.applications.map((appl, idx) => (
                           <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700">
                             <Check className="w-4 h-4 text-brand-yellow-dark shrink-0 mt-0.5" />
                             <span>{appl}</span>
                           </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Panel Footer: Code Standard badges and dynamic budget button */}
                  <div className="border-t border-slate-200 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="w-full sm:w-auto">
                      <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-1.5">Aseguramiento Normado:</span>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {selectedService.standards.map((stand, i) => (
                          <span key={i} className="font-mono text-xs bg-slate-100 text-slate-705 px-2.5 py-1 rounded border border-slate-200 shadow-sm">
                            {stand}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <a
                      href="#contacto"
                      onClick={() => setContactService(selectedService.id)}
                      className="w-full sm:w-auto bg-brand-yellow hover:bg-[#e0aa14] text-[#0a1d2c] font-display font-extrabold text-xs px-5 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-yellow/25 transition-transform hover:-translate-y-0.5 whitespace-nowrap"
                    >
                      <span>Cotizar {selectedService.code}</span>
                      <ChevronRight className="w-4 h-4 text-[#0a1d2c]" />
                    </a>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* Dynamic Selector / Recommender Tool: "Buscador de Ensayos Recomendado" */}
      <section id="ndtsmart" className="py-20 bg-white text-slate-800 overflow-hidden relative border-b border-slate-200">
        
        {/* Ambient light accent */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-wrap">
            
            {/* Left selector fields column */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              
              <div>
                <span className="text-brand-yellow-dark font-mono text-xs uppercase tracking-widest bg-brand-yellow/15 px-3 py-1 rounded w-fit inline-block mb-3 border border-brand-yellow/20 font-bold">
                  Herramienta de Diagnóstico Interactiva
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
                  Encuentre su Ensayo <br />
                  <span className="text-[#0a1d2c] border-b-4 border-brand-yellow pb-1 block md:inline-block">Recomendado</span>
                </h2>
                <p className="text-slate-600 mt-5 font-light text-sm">
                  ¿Tiene sospechas de fallas en su proyecto? Ajuste los parámetros de abajo para ver al instante qué disciplina de Ensayos No Destructivos se adapta de acuerdo a códigos ASME/API.
                </p>
              </div>

              {/* Selector Card in high contrast slate light grey */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-5 shadow-sm">
                
                {/* Parameter 1: Material */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold mb-2.5 text-slate-700 font-display flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-brand-yellow-dark" />
                    <span>1. Naturaleza del Material</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Ferromagnético", "No-Ferroso"].map((m) => (
                      <button
                        key={m}
                        onClick={() => {
                          setFinderMaterial(m);
                          setIsFinderResultVisible(true);
                        }}
                        className={`py-3 px-4 rounded-xl text-center text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                          finderMaterial === m 
                            ? "bg-[#0a1d2c] text-white font-bold shadow-md" 
                            : "bg-white text-slate-700 border border-slate-250 hover:bg-slate-100"
                        }`}
                      >
                        {m === "Ferromagnético" ? "🧲 Ferromagnético" : "🧪 Inox / Alum (No-Fero)"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Parameter 2: Component Type */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold mb-2.5 text-slate-700 font-display">
                    2. Componente a Inspeccionar
                  </label>
                  <div className="space-y-2.5">
                    {[
                      "Tubería / Oleoducto Crítico", 
                      "Soldaduras Estructurales", 
                      "Tanques / Recipientes Presión", 
                      "Piezas Forjadas / Mecánicas"
                    ].map((comp) => (
                      <button
                        key={comp}
                        onClick={() => {
                          setFinderComponent(comp);
                          setIsFinderResultVisible(true);
                        }}
                        className={`w-full py-2.5 px-4 rounded-xl text-left text-xs transition-all flex items-center justify-between cursor-pointer ${
                          finderComponent === comp
                            ? "bg-[#0a1d2c] border-l-4 border-brand-yellow text-white font-bold"
                            : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <span>{comp}</span>
                        {finderComponent === comp && <Check className="w-4 h-4 text-brand-yellow" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Parameter 3: Suspicion / Anomaly */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold mb-2.5 text-slate-700 font-display">
                    3. Indicación / Defectología Sospechada
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {[
                      "FisiRas Superficiales", 
                      "Defectos Internos Volumétricos", 
                      "Pérdida de Espesor / Desgaste"
                    ].map((an) => {
                      const labelText = an === "FisiRas Superficiales" ? "Fisuras Superficiales" : an;
                      return (
                        <button
                          key={an}
                          onClick={() => {
                            setFinderAnomaly(an);
                            setIsFinderResultVisible(true);
                          }}
                          className={`py-2 px-2.5 rounded-lg text-center text-[10px] md:text-xs font-semibold transition-all cursor-pointer ${
                            finderAnomaly === an
                              ? "bg-brand-yellow text-brand-blue shadow-sm font-bold"
                              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {labelText}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>

            {/* Right recommendation display column (keeps branding highlight) */}
            <div className="lg:col-span-6">
              
              <AnimatePresence mode="wait">
                {isFinderResultVisible && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-[#0a1d2c] rounded-3xl p-6 md:p-8 border-2 border-brand-yellow shadow-2xl relative overflow-hidden text-white"
                  >
                    {/* Floating target standard */}
                    <div className="absolute top-4 right-4 bg-brand-yellow/10 text-brand-yellow px-2 py-0.5 rounded font-mono text-[10px] border border-brand-yellow/30">
                      Standard NDT
                    </div>

                    <div className="flex items-center gap-2.5 mb-4 text-brand-yellow">
                      <HelpCircle className="w-5 h-5" />
                      <span className="font-mono text-xs uppercase tracking-widest font-semibold">TÉCNICA PREFERENTE</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white">
                      {recommendation.name}
                    </h3>

                    <div className="my-5 p-4 rounded-xl bg-[#04121d] border border-brand-yellow/15">
                      <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Criterio Técnico:</span>
                      <p className="text-gray-300 text-sm font-light leading-relaxed">
                        {recommendation.reason}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pb-5 border-b border-slate-800">
                      <div>
                        <span className="block text-[10px] text-gray-400 uppercase tracking-wide">Efectividad Evaluada</span>
                        <span className="text-md font-display font-bold text-green-400 flex items-center gap-1.5 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                          {recommendation.eff}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-gray-400 uppercase tracking-wide">Referencia de Código</span>
                        <span className="text-md font-mono font-semibold text-brand-yellow mt-0.5 block">
                          {recommendation.estStandard}
                        </span>
                      </div>
                    </div>

                    {/* Engagement Contact Shortcut */}
                    <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-xs text-slate-450 font-light text-center sm:text-left max-w-xs">
                        ¿Requiere aplicar esta disciplina? Nuestro equipo está equipado con medidores e inspectores certificados nivel II.
                      </p>
                      <a
                        href="#contacto"
                        onClick={() => {
                          const matchedServ = SERVICES.find(s => s.title.includes(recommendation.name.split(" ")[0]));
                          if (matchedServ) {
                            setSelectedServiceId(matchedServ.id);
                            setContactService(matchedServ.id);
                          }
                        }}
                        className="bg-brand-yellow hover:bg-[#e0aa14] text-[#0a1d2c] font-display font-bold text-xs py-3 px-5 rounded-xl flex items-center gap-1.5 shrink-0 transition-transform hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                      >
                        <span>Solicitar Ensayo</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>
      </section>

      {/* Services Complementarios Section (representing Text Images 3 and 4) */}
      <section id="servicios-secundarios" className="py-20 bg-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-yellow-dark font-mono text-xs uppercase tracking-widest bg-brand-yellow/15 px-3 py-1 rounded w-fit inline-block mb-3 border border-brand-yellow/30 font-bold">
              Servicios Especiales y Consultorías
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
              Ingeniería Metalúrgica y Soporte Predictivo
            </h2>
            <p className="text-slate-600 mt-4 font-light text-sm md:text-base">
              Más allá de los END tradicionales, brindamos soluciones de calibración, ensayos mecánicos e inspecciones preventivas alineadas con normas nacionales e internacionales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {OTHER_SERVICES.map((serv, index) => {
              const IconComp = serv.icon || FileText;
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-yellow shadow-sm hover:shadow-[0_10px_30px_rgba(10,29,44,0.04)] transition-all duration-300 relative group overflow-hidden text-slate-800"
                >
                  <div className="absolute top-0 left-0 w-2 h-0 group-hover:h-full bg-brand-yellow transition-all duration-300"></div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#0a1d2c] text-brand-yellow p-3 rounded-xl transition-colors group-hover:bg-[#112d44] border border-white/5 shadow">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-slate-800 group-hover:text-[#0a1d2c] transition-colors text-base md:text-lg">
                        {serv.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-slate-600 font-light leading-relaxed mb-4 text-justify">
                    {serv.desc}
                  </p>
                </div>
              );
            })}

          </div>

          {/* Quick Info text card for legal compliance (from image 3/4) */}
          <div className="mt-12 bg-gradient-to-r from-[#0a1d2c] to-[#122e44] text-white p-6 md:p-8 rounded-2xl border border-brand-yellow/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-brand-yellow font-mono text-[10px] tracking-widest uppercase block font-bold">ALCANCE DE SERVICIO INDUSTRIAL</span>
              <p className="font-display font-bold text-lg md:text-xl">
                ¿Busca asegurar el cumplimiento en control de calidad (QA/QC)?
              </p>
              <p className="text-slate-300 text-xs font-light max-w-3xl">
                Nuestros inspectores asisten activamente en la elaboración de informes periciales, certificación y calibración de equipos, reduciendo radicalmente sus costos operativos mediante mantenimiento predictivo fiable.
              </p>
            </div>
            
            <a
              href="#contacto"
              className="bg-brand-yellow hover:bg-[#e0aa14] text-[#0a1d2c] font-display font-extrabold text-xs px-6 py-3.5 rounded-xl shrink-0 transition-transform hover:-translate-y-0.5 text-center w-full md:w-auto shadow-lg hover:shadow-brand-yellow/20"
            >
              Contactar Especialista
            </a>
          </div>

        </div>
      </section>

      {/* Sectores de Aplicaciones (Oil & Gas, Petrochemistry, Mining) */}
      <section id="sectores" className="py-20 bg-white border-t border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-yellow-dark font-mono text-xs uppercase tracking-widest bg-brand-yellow/15 px-3 py-1.5 rounded w-fit inline-block mb-3 border border-brand-yellow/30 font-bold">
              Campos de Operación
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-[#0a1d2c] tracking-tight">
              Sectores Industriales Clave
            </h2>
            <p className="text-slate-650 mt-4 text-sm font-light">
              Nuestra ingeniería se adapta a las condiciones físicas más críticas e in situ en los sectores medulares de la región y el territorio nacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TARGET_SECTORS.map((sector) => {
              const IconComp = sector.icon;
              return (
                <div 
                  key={sector.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 hover:border-brand-yellow transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="h-44 relative overflow-hidden bg-slate-800">
                    <img 
                      src={sector.imageUrl} 
                      alt={sector.name} 
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d2c]/90 via-[#0a1d2c]/40 to-transparent"></div>
                    
                    {/* Sector Floating Icon */}
                    <div className="absolute top-4 right-4 bg-brand-yellow text-[#0a1d2c] p-2.5 rounded-xl shadow-md font-bold">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-brand-yellow uppercase font-mono text-[9px] block tracking-widest">SECTOR INDUSTRIAL</span>
                      <h4 className="font-display font-extrabold text-white text-base md:text-lg">
                        {sector.name}
                      </h4>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between bg-white text-slate-800">
                    <p className="text-xs md:text-sm text-slate-600 font-light leading-relaxed text-justify mb-4">
                      {sector.description}
                    </p>
                    
                    <span className="text-brand-yellow-dark text-xs font-semibold flex items-center gap-1 group-hover:text-brand-yellow transition-colors mt-auto">
                      Ver servicios alineados
                      <ChevronRight className="w-3.5 h-3.5 text-brand-yellow-dark" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Interactive Estimator Block: "Interactúa y Estima" */}
      <section id="estimador" className="py-20 bg-slate-50 relative z-10 text-slate-800 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg relative overflow-hidden border border-slate-200 hover:border-brand-yellow/30 transition-all duration-300">
            
            {/* Visual background */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-4">
                <span className="text-brand-yellow-dark font-mono text-[10px] uppercase tracking-widest bg-brand-yellow/15 px-3 py-1.5 rounded border border-brand-yellow/20 font-bold">
                  Pre-Estimación de Movilización
                </span>
                <h3 className="text-2xl md:text-3.5xl font-display font-black text-[#0a1d2c]">
                  Consulte su Proyecto In Situ
                </h3>
                <p className="text-slate-600 text-sm font-light leading-relaxed">
                  ¿Tiene un estimado preliminar de la envergadura del proyecto? Deslice los selectores para recibir un tiempo de ejecución referencial recomendado en sitio por nuestros inspectores.
                </p>

                {/* Estimate parameters */}
                <div className="space-y-4 pt-2">
                  
                  {/* Parameter Slider A: Welds */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-700">Puntos de Inspección / Diámetros:</span>
                      <span className="text-[#0a1d2c] font-bold font-mono">{estimatedPoints} puntos</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="150" 
                      value={estimatedPoints} 
                      onChange={(e) => setEstimatedPoints(Number(e.target.value))}
                      className="w-full accent-brand-yellow h-2 bg-slate-200 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Parameter Slider B: Tonnes */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-700">Peso Estimado de Estructuras:</span>
                      <span className="text-[#0a1d2c] font-bold font-mono">{estimatedTons} Toneladas</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="80" 
                      value={estimatedTons} 
                      onChange={(e) => setEstimatedTons(Number(e.target.value))}
                      className="w-full accent-brand-yellow h-2 bg-slate-200 rounded-lg cursor-pointer"
                    />
                  </div>

                </div>

              </div>

              {/* Right results block */}
              <div className="md:col-span-5 bg-[#0a1d2c] rounded-2xl p-6 border border-brand-yellow/20 text-center text-white">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-mono block mb-1">PLAZO MEDIO RECOMENDADO</span>
                
                <div className="text-5xl md:text-6xl font-display font-black text-brand-yellow my-3">
                  {estimatedDays} <span className="text-lg md:text-xl text-white font-normal uppercase">Días</span>
                </div>
                
                <p className="text-xs text-slate-300 font-light px-2 mb-4">
                  Tiempo aproximado estimado para movilización, escaneos in situ con resultados preliminares inmediatos e informe final certificado.
                </p>
                
                <a 
                  href="#contacto"
                  className="block bg-brand-yellow hover:bg-[#e0aa14] text-[#0a1d2c] font-display font-extrabold text-xs py-3 rounded-lg shadow-lg hover:shadow-brand-yellow/20 transition-all cursor-pointer"
                >
                  Solicitar Cotización de Campo
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Section: Contact & Quote Request */}
      <section id="contacto" className="py-20 bg-slate-100 border-t border-slate-200 relative z-10">
        
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Contact Details & Info Card */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              
              <div>
                <span className="text-brand-yellow-dark font-mono text-xs uppercase tracking-widest bg-brand-yellow/15 text-[#0a1d2c] px-3 py-1 rounded w-fit inline-block mb-3 border border-brand-yellow/30 font-bold">
                  Contacto Directo e In Situ
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-black text-[#0a1d2c] tracking-tight">
                  Escríbanos Hoy Mismo
                </h2>
                <p className="text-slate-600 mt-4 text-sm md:text-base font-light leading-relaxed">
                  Consulte presupuesto formal, tarifas operativas de movilización nacional o asesorías puntuales. Respondemos con análisis de ingeniería preliminar de forma expedita.
                </p>
              </div>

              {/* Direct information grid cards, extracted from image 1 */}
              <div className="space-y-4">
                
                {/* Phones card */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex items-start gap-4 hover:border-brand-yellow/50 transition-all duration-300 text-slate-850">
                  <div className="bg-[#0a1d2c] text-brand-yellow p-3 rounded-xl shrink-0 border border-white/5 shadow">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-500 font-bold font-mono">Teléfono Corporativo</span>
                    <a href={`tel:${MAIN_INFO.contact.phoneFormatted}`} className="text-base font-display font-bold text-[#0a1d2c] hover:text-brand-yellow transition-colors block mt-0.5">
                      {MAIN_INFO.contact.phoneFormatted}
                    </a>
                    <span className="text-xs text-slate-500 font-light block mt-0.5">Llamadas, Mensajería y WhatsApp Técnico</span>
                  </div>
                </div>

                {/* Emails card */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex items-start gap-4 hover:border-brand-yellow/50 transition-all duration-300 text-slate-850">
                  <div className="bg-[#0a1d2c] text-brand-yellow p-3 rounded-xl shrink-0 border border-white/5 shadow">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-500 font-bold font-mono">Correo de Negocios</span>
                    <a href={`mailto:${MAIN_INFO.contact.email}`} className="text-base font-display font-bold text-[#0a1d2c] hover:text-brand-yellow transition-colors block mt-0.5">
                      {MAIN_INFO.contact.email}
                    </a>
                    <span className="text-xs text-slate-500 font-light block mt-0.5">Envío de pliegues de licitación, WPS o planos</span>
                  </div>
                </div>

                {/* Instagram card */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex items-start gap-4 hover:border-brand-yellow/50 transition-all duration-300 text-slate-850">
                  <div className="bg-[#0a1d2c] text-brand-yellow p-3 rounded-xl shrink-0 border border-white/5 shadow">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-500 font-bold font-mono">Instagram Oficial</span>
                    <a 
                      href={`https://instagram.com/${MAIN_INFO.contact.instagram}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-base font-display font-bold text-[#0a1d2c] hover:text-brand-yellow transition-colors block mt-0.5"
                    >
                      @{MAIN_INFO.contact.instagram}
                    </a>
                    <span className="text-xs text-slate-500 font-light block mt-0.5 font-light">Galería de inspección in situ y soporte metalúrgico</span>
                  </div>
                </div>

                {/* Geolocation Address card */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex items-start gap-4 hover:border-brand-yellow/50 transition-all duration-300 text-slate-850">
                  <div className="bg-[#0a1d2c] text-brand-yellow p-3 rounded-xl shrink-0 border border-white/5 shadow">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-500 font-bold font-mono">Oficina y Dirección Física</span>
                    <p className="text-xs md:text-sm font-display leading-relaxed text-slate-700 mt-1">
                      {MAIN_INFO.contact.address}
                    </p>
                  </div>
                </div>

              </div>

              {/* Trust Badge and standard warning */}
              <div className="p-4 bg-brand-yellow/15 rounded-2xl border border-brand-yellow/30 text-[#0a1d2c]">
                <p className="text-xs leading-relaxed font-semibold">
                  <strong>Ámbito Regional e Internacional:</strong> Disponemos de movilidad in situ a taladros de perforación, astilleros, refinerías y depósitos mineros en todo el territorio nacional.
                </p>
              </div>

            </div>

            {/* Right Column: Dynamic Form block */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-slate-200 relative overflow-hidden text-slate-900">
                
                {/* Floating graphic strip */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#0a1d2c]"></div>

                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form
                      key="contact-form"
                      onSubmit={handleFormSubmit}
                      className="space-y-5"
                    >
                      <div>
                        <h3 className="font-display font-extrabold text-xl md:text-2xl text-[#0a1d2c]">
                          Formulario de Requerimiento de Ensayos
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          Complete los campos requeridos para estructurar su presupuesto formal o agendar coordinaciones técnicas.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name input */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1">
                            <User className="w-3.5 h-3.5 text-brand-yellow-dark" />
                            <span>Nombre y Apellido *</span>
                          </label>
                          <input 
                            type="text" 
                            required
                            placeholder="Ej. Ing. Carlos Pérez"
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-slate-350 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a1d2c]/20 focus:border-[#0a1d2c] transition-all text-sm text-slate-800 placeholder-slate-400"
                          />
                        </div>

                        {/* Email input */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1">
                            <Mail className="w-3.5 h-3.5 text-brand-yellow-dark" />
                            <span>Correo Electrónico *</span>
                          </label>
                          <input 
                            type="email" 
                            required
                            placeholder="contacto@empresa.com"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-slate-350 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a1d2c]/20 focus:border-[#0a1d2c] transition-all text-sm text-slate-800 placeholder-slate-400"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Phone input */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1">
                            <Phone className="w-3.5 h-3.5 text-brand-yellow-dark" />
                            <span>Teléfono de Contacto *</span>
                          </label>
                          <input 
                            type="tel" 
                            required
                            placeholder="Ej. 0412 5507326"
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-slate-350 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a1d2c]/20 focus:border-[#0a1d2c] transition-all text-sm text-slate-800 placeholder-slate-400"
                          />
                        </div>

                        {/* Company name */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1">
                            <Building className="w-3.5 h-3.5 text-brand-yellow-dark" />
                            <span>Empresa / Consorcio</span>
                          </label>
                          <input 
                            type="text" 
                            placeholder="Ej. Petrolera del Alba, C.A."
                            value={contactCompany}
                            onChange={(e) => setContactCompany(e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-slate-355 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a1d2c]/20 focus:border-[#0a1d2c] transition-all text-sm text-slate-800 placeholder-slate-400"
                          />
                        </div>
                      </div>

                      {/* Service selector mapping of state */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                            Ensayo END Principal
                          </label>
                          <select
                            value={contactService}
                            onChange={(e) => setContactService(e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-slate-355 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a1d2c]/20 focus:border-[#0a1d2c] transition-all text-sm text-slate-800"
                          >
                            {SERVICES.map((s) => (
                              <option key={s.id} value={s.id} className="bg-white text-slate-800">
                                {s.title} ({s.code})
                              </option>
                            ))}
                            <option value="dureza" className="bg-white text-slate-800">Ensayos de Dureza Portátil (HRA, HRB, HRC)</option>
                            <option value="pmi" className="bg-white text-slate-800">Identificación Positiva de Materiales (PMI)</option>
                            <option value="general" className="bg-white text-slate-800">Múltiple Ensayos / Asesorías QAQC</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[#0a1d2c] text-xs font-semibold uppercase tracking-wider mb-1">
                            Urgencia Requerida
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <span className="bg-slate-50 border-2 border-slate-200 text-slate-700 py-2.5 px-2 text-center rounded-xl text-xs hover:border-[#0a1d2c] transition-all flex items-center justify-center gap-1 cursor-pointer font-medium shadow-sm">
                              📅 Estándar (3-5 días)
                            </span>
                            <span className="bg-brand-yellow/15 border-2 border-brand-yellow/40 text-brand-yellow-dark py-2.5 px-2 text-center rounded-xl text-xs hover:border-brand-yellow transition-all flex items-center justify-center gap-1 cursor-pointer font-bold shadow-inner">
                              ⚡ Crítica In Situ
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Project specification details */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Explicación Técnica del Requerimiento / Geometría / Acceso
                        </label>
                        <textarea 
                          rows={4}
                          placeholder="Especifique aspectos como cantidad de soldaduras a comprobar, tipo de acero, accesos en altura, planos técnicos o cronogramas si dispone de ellos..."
                          value={contactDetails}
                          onChange={(e) => setContactDetails(e.target.value)}
                          className="w-full px-4 py-3 bg-white border border-slate-355 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a1d2c]/20 focus:border-[#0a1d2c] transition-all text-sm text-slate-800 placeholder-slate-400"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-brand-yellow hover:bg-[#e0aa14] text-[#0a1d2c] font-display font-black py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-yellow/20 transition-all cursor-pointer disabled:opacity-75"
                        id="submit-form-btn"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
                            <span>Estructurando Requerimiento...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 text-[#0a1d2c]" />
                            <span>Enviar Solicitud de Inspección</span>
                          </>
                        )}
                      </button>

                      <div className="text-center">
                        <span className="text-[11px] text-slate-500 font-light block">
                          Garantía de confidencialidad absoluta bajo acuerdo de NDA si se requiere.
                        </span>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-form"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-6 text-slate-800"
                    >
                      <div className="w-20 h-20 bg-green-500/10 rounded-full border border-green-500/30 flex items-center justify-center mx-auto shadow-sm">
                        <CheckCircle2 className="w-12 h-12 text-green-600" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-display font-black text-2xl text-[#0a1d2c] tracking-tight">
                          ¡Solicitud Recibida Exitosamente!
                        </h3>
                        <p className="text-slate-600 font-light text-sm max-w-md mx-auto leading-relaxed">
                          La información técnica ha sido asignada a nuestros ingenieros inspectores nivel II / nivel III ASNT. <br />
                          <strong>Nos comunicaremos con usted a la brevedad.</strong>
                        </p>
                      </div>

                      <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl max-w-sm mx-auto text-left font-mono text-xs text-slate-700">
                        <p className="border-b border-dashed border-slate-350 pb-1 mb-1.5 font-bold text-slate-900 flex items-center justify-between">
                          <span>REGISTRO DEL RADAR:</span>
                          <span className="text-brand-yellow-dark font-black">SERV-{Math.floor(Math.random() * 8990) + 1000}</span>
                        </p>
                        <p><strong>Cliente:</strong> {contactName}</p>
                        <p><strong>Compañía:</strong> {contactCompany || "Independiente"}</p>
                        <p><strong>Disciplina:</strong> {SERVICES.find(s => s.id === contactService)?.title || "Asesoría Coordinada"}</p>
                        <p><strong>Fecha:</strong> {new Date().toLocaleDateString('es-ES')}</p>
                      </div>

                      <button
                        onClick={resetForm}
                        className="bg-brand-yellow hover:bg-[#e0aa14] text-[#0a1d2c] font-display font-bold py-2.5 px-6 rounded-xl text-xs transition-colors shrink-0"
                      >
                        Enviar otra solicitud
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Floating Speed Actions: Fixed Bottom Elements (WhatsApp, Map, Instagram) */}
      <div id="floating-actions" className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        
        {/* Floating Instagram */}
        <a 
          href={`https://instagram.com/${MAIN_INFO.contact.instagram}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-[#fbc122] to-[#e0aa14] hover:scale-110 active:scale-95 text-brand-blue p-3.5 rounded-full shadow-2xl transition-all duration-300 group relative"
          title="Seguir en Instagram: @servendca"
          id="floating-insta-btn"
        >
          <Instagram className="w-5 h-5" />
          <span className="absolute right-14 bg-[#0a1d2c] text-white text-[11px] font-mono whitespace-nowrap px-2.5 py-1 rounded shadow-lg border border-brand-yellow/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Instagram: @servendca
          </span>
        </a>

        {/* Floating WhatsApp Call */}
        <a 
          href={`https://wa.me/584125507326?text=Hola%20ServendCA,%20solicito%20información%20y%20tarifario%20de%20ensayos%20no%20destructivos.`}
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 hover:scale-110 active:scale-95 text-white p-4 rounded-full shadow-2xl transition-all duration-300 group relative flex items-center justify-center border-2 border-white"
          title="WhatsApp Directo"
          id="floating-whatsapp-btn"
        >
          {/* Animated signal ring */}
          <span className="absolute inset-0 rounded-full border-4 border-green-500/30 animate-ping pointer-events-none"></span>
          
          <Phone className="w-6 h-6 fill-current" />
          <span className="absolute right-16 bg-[#0a1d2c] text-white text-[11px] font-mono whitespace-nowrap px-2.5 py-1 rounded shadow-lg border border-brand-yellow/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            WhatsApp Técnico In Situ
          </span>
        </a>
      </div>

      {/* Structured Dark Footer (incorporating all text components) */}
      <footer className="bg-[#050f17] text-gray-300 pt-16 pb-8 border-t-4 border-brand-yellow relative overflow-hidden text-xs md:text-sm">
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
          
          {/* 1. Large Brand Logo Panel */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#0a1d2c] border border-brand-yellow/15 p-1 rounded-lg">
                <img 
                  src={MAIN_INFO.logoUrl} 
                  className="h-16 w-auto" 
                  alt="Logo ServendCA Footer" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="block font-display font-extrabold text-lg text-white tracking-widest uppercase">
                  SERVEND<span className="text-brand-yellow">CA</span>
                </span>
                <span className="block text-[8px] uppercase tracking-widest text-slate-400">Ensayos No Destructivos C.A.</span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-xs pl-1">
              Garantizamos la integridad estructural de activos mecánicos, metálicos e industriales en Venezuela mediante el óptimo despliegue de personal certificado y equipamiento de vanguardia in situ.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href={`https://instagram.com/${MAIN_INFO.contact.instagram}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0a1d2c] hover:bg-brand-yellow hover:text-brand-blue text-brand-yellow p-2.5 rounded-lg border border-brand-yellow/15 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${MAIN_INFO.contact.email}`}
                className="bg-[#0a1d2c] hover:bg-brand-yellow hover:text-brand-blue text-brand-yellow p-2.5 rounded-lg border border-brand-yellow/15 transition-colors"
                title="Email ServendCA"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 2. Quick navigation links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-extrabold text-white text-xs md:text-sm uppercase tracking-widest border-l-2 border-brand-yellow pl-2.5">
              Disciplinas END
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#servicios" onClick={() => setSelectedServiceId("vt")} className="text-gray-400 hover:text-brand-yellow transition-colors flex items-center gap-1">
                <span>Inspección Visual (VT)</span>
              </a>
              <a href="#servicios" onClick={() => setSelectedServiceId("pt")} className="text-gray-400 hover:text-brand-yellow transition-colors flex items-center gap-1">
                <span>Líquidos Penetrantes (PT)</span>
              </a>
              <a href="#servicios" onClick={() => setSelectedServiceId("mt")} className="text-gray-400 hover:text-brand-yellow transition-colors flex items-center gap-1">
                <span>Partículas Magnéticas (MT)</span>
              </a>
              <a href="#servicios" onClick={() => setSelectedServiceId("ut")} className="text-gray-400 hover:text-brand-yellow transition-colors flex items-center gap-1">
                <span>Ultrasonido (UT)</span>
              </a>
              <a href="#servicios" onClick={() => setSelectedServiceId("paut")} className="text-gray-400 hover:text-brand-yellow transition-colors flex items-center gap-1">
                <span>Arreglo de Fases (PAUT)</span>
              </a>
              <a href="#servicios" onClick={() => setSelectedServiceId("espesores")} className="text-gray-400 hover:text-brand-yellow transition-colors flex items-center gap-1">
                <span>Espesores y Corrosión</span>
              </a>
            </div>

            <div className="border-t border-slate-800/80 pt-4">
              <h5 className="text-[10.5px] uppercase tracking-wider text-slate-400 font-bold mb-1">Capacidad Metálica:</h5>
              <div className="flex flex-wrap gap-1.5 text-[9.5px]">
                <span className="bg-[#0a1d2c] px-2 py-0.5 rounded border border-slate-800 font-mono text-gray-300">Dureza (HRA/HRC)</span>
                <span className="bg-[#0a1d2c] px-2 py-0.5 rounded border border-slate-800 font-mono text-gray-300">PMI Espectrometría</span>
              </div>
            </div>
          </div>

          {/* 3. Physical Address & Location summary details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-extrabold text-white text-xs md:text-sm uppercase tracking-widest border-l-2 border-brand-yellow pl-2.5">
              Ubicación y Sede Física
            </h4>
            
            <p className="text-gray-400 leading-relaxed text-xs">
              <strong>Carretera Nacional vía San Jaime, Zona Industrial. Maturín Edo. Monagas.</strong><br />
              <span>Oficina N° HM2-18</span>
            </p>

            <div className="space-y-2 text-xs border-t border-slate-800/80 pt-4">
              <span className="block text-gray-400 font-mono"><strong>RIF:</strong> J-PENDIENTE (C.A. Registrada)</span>
              <span className="block text-gray-400 font-mono"><strong>Atención:</strong> Lunes a Sábado (7:00 AM - 6:00 PM)</span>
              <span className="block text-gray-400 font-mono">Llamadas de Urgencia 24 Horas habilitadas</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-slate-800/80 text-center text-xs text-gray-500">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Servicios de Ensayos No Destructivos C.A. (ServendCA). Todos los derechos reservados.</p>
            <p className="font-mono text-[10px] text-gray-600">
              Desarrollado bajo Códigos de Integridad y Ensayos No Destructivos Venezolanos
            </p>
          </div>
        </div>

      </footer>

    </div>
  );
}
