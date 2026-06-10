import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Brain, 
  LineChart, 
  Activity, 
  Network, 
  Sliders, 
  Zap, 
  Key, 
  TrendingUp, 
  Heart,
  Server,
  CodeSquare,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { Page } from '../types';
import CountUp from '../components/CountUp';

interface SolutionsProps {
  setCurrentPage: (page: Page) => void;
  selectedSolutionSection?: string;
}

export default function Solutions({ setCurrentPage, selectedSolutionSection }: SolutionsProps) {
  // Determine which tab should be open. If deep link is passed, open that section
  const [activeTab, setActiveTab] = useState<string>('diagnostics');

  useEffect(() => {
    if (selectedSolutionSection) {
      setActiveTab(selectedSolutionSection);
    }
  }, [selectedSolutionSection]);

  const tabs = [
    { id: 'diagnostics', name: 'AI Diagnostics', icon: Brain },
    { id: 'analytics', name: 'Predictive Analytics', icon: LineChart },
    { id: 'monitoring', name: 'Remote Monitoring', icon: Activity },
    { id: 'automation', name: 'Workflow Automation', icon: Network },
    { id: 'custom', name: 'Custom AI Development', icon: Sliders },
  ];

  const solutionsContent: Record<string, {
    badge: string;
    title: string;
    description: string;
    image: string;
    isVideoOrInteractive: boolean;
    metricLabel: string;
    metricValue: string;
    benefit: string;
    features: string[];
    benchmark: string;
  }> = {
    diagnostics: {
      badge: "NEURAL IMAGING CLASSIFIER",
      title: "Sub-Millimeter Neural Anomaly Diagnostics",
      description: "Direct real-time image validation models parsing multi-dimension sequence arrays from MRI and CT scanners. Magic Pulse overlays clear structural probability maps directly into standard PACS formats, allowing radiologists to process urgent triage candidates with a 40% head start.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1vNZrTCRicgpA_JFA_yd6GTi9yyIbemYOGipq5PcfxhHVEswfj9XOowhDSGa_vzM-ovx1ijOAby-o34Fx95y9kaA31xFLKTLi80AN8NM8EC5vBjoDZ5csw-xk22e8yGqPNBl-dobx2GmV6SUdGgonr6iZnZAU_Fct0W69srkpLsQBXLQdlZVy_4hhsyDA-c7Y7JNym7cm8419ac7Al-qMOVMpfGJlFW54soKNSjActtcZ3DdscKWT0Kcwx9EVRXu4xc0cYHK-39E",
      isVideoOrInteractive: false,
      metricLabel: "Diagnostic Sensitivity",
      metricValue: "98.4%",
      benefit: "Halves false negatives across oncology screening trails and accelerates routine workflow throughput.",
      features: [
        "Dynamic segment maps superimposed on DICOM image structures.",
        "Zero-latency background queue pre-processing before physician login.",
        "Automatic clinical text narrative summary drafting following PACS review.",
        "Secure Clinical Data Isolation compliance isolated from public API wrappers."
      ],
      benchmark: "Processed over 4.2 million radiology volumes in verified double-blind clinical evaluations."
    },
    analytics: {
      badge: "EARLY INPATIENT PROGNOSIS",
      title: "Predictive Analytics & Clinical Deterioration",
      description: "Harnessing real-time multilinear analysis, our early warning algorithms continuously scan biometric streams (SpO2, blood pressure trajectories, lab telemetry) to flag septic risk transitions and cardiorespiratory failure hours before clinical anomalies present themselves visibly.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-zf_3jdfdEQM7s5q8T4r5-zv57hg7WL1e0Mbyy5-INMGQ5l6Z4zpPaAWLs3mJ8uI1UxjtxOuHNsQR60lJ41IcnVMB-OFeEXSxiKPTkxCaC7VN_Ow9yOiyw2Ef8hECc_olOAzT8ob2W9yTU9ZVOwuOnkDPBMW5_45720eHEJv3d0IB_LwlrDj9QGpNEiYMTeb-uB-tlzKUP9GHQijGnhLIF0kw0n8AId6GeqI8alZc7bnNAZSriS2TkKEUXjpCbOgNQ0PdShFTB0A",
      isVideoOrInteractive: false,
      metricLabel: "Clinical Foresight Buffer",
      metricValue: "6 Hours",
      benefit: "Provides clinical care groups with ample time to construct ICU interventions and adjust therapeutic buffers.",
      features: [
        "Continuous Multi-variate Septic shock risk scoring updated hourly.",
        "Correlated timeline trends linking diagnostic markers with telemetry.",
        "Predictive emergency admissions forecasting to balance hospital gridloads.",
        "Optimized physician notification system suppressing alarm fatigue."
      ],
      benchmark: "Demonstrated custom risk reduction coefficients across 14 partnered regional hospital networks."
    },
    monitoring: {
      badge: "SECURE BIOMETRIC WAVE METRICS",
      title: "Ambient Remote Patients Telemetry",
      description: "Direct secure pathways linking consumer and enterprise wearables with core central hospital monitors. Magic Pulse routes high-density vital graphs securely across encrypted pipes without leaking private personal identity hashes.",
      image: "interactive-monitoring-wave",
      isVideoOrInteractive: true,
      metricLabel: "Active Vital Sensors Synchronized",
      metricValue: "10k+",
      benefit: "Allows clinicians to safely discharge patients early, relying on ambient warning alarms for out-of-clinic recovery.",
      features: [
        "Adaptive vitals buffers mitigating network drops and sync failures.",
        "Dynamic Heart Rate Variability (HRV) anomaly triggers.",
        "Aesthetic ambient home dashboard optimized for tablets and mobile screens.",
        "AES-256 decentralized key cryptography protecting telemetry transit."
      ],
      benchmark: "Supported over 280,000 continuous hours of home triage operations without a single data loss incident."
    },
    automation: {
      badge: "NLP CLINICAL WORKFLOW EXCHANGES",
      title: "Zero-Trust HIPAA Intake & Administrative Flows",
      description: "Inject state-of-the-art Natural Language processing into tedious regulatory steps. Automatically extract key medical parameters from random incoming intake files, validate coverage conditions against payer networks, and pre-fill institutional EHR intake screens.",
      image: "interactive-workflow-nodes",
      isVideoOrInteractive: true,
      metricLabel: "Admin Labor Allocation Saved",
      metricValue: "82%",
      benefit: "Frees nursing groups and administrative specialists from clerical inputs, helping them center on inpatient empathy.",
      features: [
        "Secured localized OCR engine supporting messy hand-written physicians prescriptions.",
        "Automatic EHR compliance scanner routing clean diagnostic payloads to proper records sections.",
        "Sleek visual task queue outlining exception-flagged intake documents.",
        "Fully HIPAA compliant context storage automatically clearing temp document memory."
      ],
      benchmark: "Directly integration compatible with FHIR, HL7, Epic, Cerner, and mainstream clinic structures."
    },
    custom: {
      badge: "ENTERPRISE FINE-TUNING SANDBOX",
      title: "Custom On-Site AI Development",
      description: "Build proprietary, hospital-network-governed artificial intelligence systems. Our specialized consulting and on-premise training engines allow clients to safely fine-tune weights for diagnostic niches without risk of private metadata leaks.",
      image: "interactive-custom-server",
      isVideoOrInteractive: true,
      metricLabel: "Metadata Privacy Isolation",
      metricValue: "100%",
      benefit: "Fosters custom investigator research while maintaining complete clinical governance and intellectual control.",
      features: [
        "Localized sandboxed environment hosting on-premise fine-tuning pipelines.",
        "Custom context length tuning optimization for heavy historical files sets.",
        "Strict regulatory guardrails flagging bias vectors across research training runs.",
        "Full support for custom inference APIs deployed directly inside hospital server grids."
      ],
      benchmark: "Accelerated 4 clinical trial projects currently targeting peer-reviewed journal papers."
    }
  };

  const currentSol = solutionsContent[activeTab];

  return (
    <div className="mesh-gradient-bg min-h-screen pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-2xl mx-auto">
          <span className="font-display font-bold text-xs uppercase text-teal-accent tracking-wider">
            Solutions Suite
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-dark tracking-tight">
            Designed for Clinical Safety & Mathematical Rigor
          </h1>
          <p className="font-body-md text-sm sm:text-base text-navy-dark/70 leading-relaxed">
            We operate on a Responsible and Reliable Medical AI framework. Select a solution module below to explore its architecture, clinical benchmarks, and telemetry specifications.
          </p>
        </div>

        {/* Horizontal Navigation Switcher Tab bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 p-1.5 bg-slate-100 rounded-2xl max-w-4xl mx-auto border border-slate-200">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2.5 font-display font-semibold text-xs py-3 px-5 rounded-xl transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? 'bg-navy-dark text-white shadow-md' 
                    : 'text-navy-dark/60 hover:text-navy-dark hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-teal-accent' : 'text-navy-dark/50'}`} />
                {tab.name}
              </motion.button>
            );
          })}
        </div>

        {/* Main interactive Tab Content layout (Framer Motion Animated) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8"
          >
            
            {/* Left Block: Core Specs (spans 7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start gap-8">
              
              <div className="flex flex-col items-start gap-3">
                <span className="font-display font-bold text-[11px] uppercase text-teal-accent tracking-widest bg-teal-accent/10 py-1.5 px-3 rounded-full">
                  {currentSol.badge}
                </span>
                <h2 className="font-display font-bold text-3xl text-navy-dark tracking-tight leading-tight">
                  {currentSol.title}
                </h2>
              </div>

              <p className="font-sans text-navy-dark/70 text-base leading-relaxed">
                {currentSol.description}
              </p>

              {/* Stat block */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 rounded-2xl soft-shadow border border-navy-dark/5">
                <div>
                  <span className="font-display text-[10px] uppercase font-bold text-navy-dark/40 tracking-wider block">
                    Core Target Metric
                  </span>
                  <span className="font-display font-extrabold text-4xl text-navy-dark block mt-1">
                    {activeTab === 'diagnostics' && <CountUp value={98.4} decimals={1} suffix="%" />}
                    {activeTab === 'analytics' && <CountUp value={6} suffix=" Hours" />}
                    {activeTab === 'monitoring' && <CountUp value={10} suffix="k+" />}
                    {activeTab === 'automation' && <CountUp value={82} suffix="%" />}
                    {activeTab === 'custom' && <CountUp value={100} suffix="%" />}
                  </span>
                  <p className="font-body-md text-xs text-navy-dark/50 mt-1">
                    {currentSol.metricLabel}
                  </p>
                </div>
                
                <div className="border-t sm:border-t-0 sm:border-l border-slate-100 pt-4 sm:pt-0 sm:pl-6 flex flex-col justify-center">
                  <span className="font-display text-[10px] uppercase font-bold text-teal-accent tracking-wider block">
                    Primary Clincal outcome
                  </span>
                  <p className="font-body-md text-xs text-navy-dark/70 mt-1.5 leading-relaxed">
                    {currentSol.benefit}
                  </p>
                </div>
              </div>

              {/* Features Accordion List */}
              <div className="w-full">
                <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-navy-dark/40 mb-4 h-4">
                  Clinical Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentSol.features.map((feat, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 bg-white/40 p-4 rounded-xl border border-navy-dark/5"
                    >
                      <CheckCircle2 className="w-5 h-5 text-teal-accent shrink-0 mt-0.5" />
                      <span className="font-body-md text-xs text-navy-dark/80 leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-navy-dark/5 w-full flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span className="font-body-md text-xs text-navy-dark/50 italic leading-none">
                  {currentSol.benchmark}
                </span>
              </div>

              <motion.button 
                onClick={() => setCurrentPage('contact')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 bg-navy-dark hover:bg-neutral-900 text-white font-display font-semibold text-xs uppercase tracking-wider py-4 px-8 rounded-xl shadow-sm flex items-center gap-2 cursor-pointer"
              >
                Inquire About Custom Pilot
                <Plus className="w-3.5 h-3.5 text-teal-accent" />
              </motion.button>

            </div>

            {/* Right Block: Screen Visual Frame (spans 5 cols) */}
            <div className="lg:col-span-5 relative w-full aspect-square sm:max-w-md lg:max-w-none mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-accent/10 to-soft-purple/10 rounded-[32px] blur-2xl" />
              
              <div className="w-full h-full rounded-[24px] overflow-hidden glass-panel soft-shadow p-3 border border-white/40 flex items-center justify-center">
                <div className="w-full h-full rounded-[18px] overflow-hidden bg-navy-dark relative flex items-center justify-center">
                  
                  {/* Handle Custom Graphic Interactive Components or Image hotlinks */}
                  {!currentSol.isVideoOrInteractive ? (
                    <img 
                      alt={currentSol.title} 
                      src={currentSol.image} 
                      className="w-full h-full object-cover select-none"
                    />
                  ) : (
                    // Beautiful pure CSS interactives for the custom drawings
                    <div className="w-full h-full p-6 flex flex-col justify-between select-none">
                      
                      {/* Interactive Section Header */}
                      <div className="flex items-center justify-between bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10 w-full mb-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-teal-accent animate-pulse" />
                          <span className="font-mono text-[9px] text-white/70 uppercase">LIVE SANDBOX CORE</span>
                        </div>
                        <span className="font-mono text-[9px] text-electric-cyan font-semibold">ACTIVATED</span>
                      </div>

                      {/* Dynamic Visual Area based on active Tab */}
                      <div className="flex-1 flex items-center justify-center">
                        
                        {/* Remote Monitoring wave animation representation */}
                        {activeTab === 'monitoring' && (
                          <div className="flex flex-col items-center gap-4 w-full">
                            <div className="relative w-40 h-40 rounded-full border border-teal-accent/20 flex items-center justify-center bg-teal-accent/5 backdrop-blur-sm">
                              {/* Pulse wave rings */}
                              <div className="absolute inset-0 border border-teal-accent/45 rounded-full animate-ping opacity-25" />
                              <Heart className="w-16 h-16 text-teal-accent animate-pulse" />
                            </div>
                            
                            {/* Live ECG Vitals wave tracker */}
                            <div className="w-full h-12 bg-black/40 backdrop-blur-lg rounded-xl flex items-center justify-between px-4 border border-white/5">
                              <span className="font-mono text-[10px] text-white/50">ECG Vitals</span>
                              <svg viewBox="0 0 100 30" className="w-28 h-8 stroke-teal-accent overflow-visible" fill="none">
                                <path 
                                  d="M0 15 H20 L25 10 L30 25 L35 0 L40 20 L45 15 H55 L60 8 L65 22 L70 5 L75 15 H100" 
                                  strokeWidth="2" 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round"
                                />
                                <circle cx="45" cy="15" r="2" fill="#FFFFFF" />
                              </svg>
                              <span className="font-mono text-[12px] text-teal-accent font-bold">78 BPM</span>
                            </div>
                          </div>
                        )}

                        {/* Workflow pipeline connected node structures */}
                        {activeTab === 'automation' && (
                          <div className="relative w-full h-40 flex items-center justify-between px-6">
                            {/* Connection pipeline lines */}
                            <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-white/10 -translate-y-1/2 -z-10" />
                            <div className="absolute top-1/2 left-8 w-1/2 h-[2px] bg-teal-accent -translate-y-1/2 -z-10 animate-pulse" />

                            {/* Node 1: Ingest */}
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-12 h-12 rounded-xl bg-[#7B61FF]/20 border border-soft-purple flex items-center justify-center text-soft-purple shadow-lg shadow-soft-purple/20">
                                <Server className="w-5 h-5" />
                              </div>
                              <span className="font-display text-[9px] text-white/60 uppercase tracking-widest font-semibold">Ingest</span>
                            </div>

                            {/* Node 2: Transform Engine (Center glowing pulse) */}
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-14 h-14 rounded-2xl bg-teal-accent/20 border border-teal-accent flex items-center justify-center text-teal-accent shadow-xl shadow-teal-accent/30 animate-pulse">
                                <Brain className="w-6 h-6" />
                              </div>
                              <span className="font-display text-[9px] text-teal-accent uppercase tracking-widest font-bold text-glow-teal">NLP Parse</span>
                            </div>

                            {/* Node 3: Database Destination */}
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-12 h-12 rounded-xl bg-electric-cyan/20 border border-electric-cyan flex items-center justify-center text-electric-cyan shadow-lg shadow-electric-cyan/20">
                                <CodeSquare className="w-5 h-5" />
                              </div>
                              <span className="font-display text-[9px] text-white/60 uppercase tracking-widest font-semibold">Integrate</span>
                            </div>
                          </div>
                        )}

                        {/* On premise compute sandbox server stacks */}
                        {activeTab === 'custom' && (
                          <div className="w-full flex flex-col gap-3 px-8">
                            {[1, 2, 3].map((node) => (
                              <div 
                                key={node}
                                className="bg-black/40 border border-white/5 rounded-xl p-3 flex items-center justify-between hover:border-teal-accent/30 transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <Server className="w-4 h-4 text-white/40" />
                                  <div className="flex flex-col">
                                    <span className="font-mono text-[10px] text-white font-medium">Node Stack 0{node}</span>
                                    <span className="font-mono text-[8px] text-white/40">Inference Core Sandbox</span>
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                  {node === 1 ? (
                                    <>
                                      <span className="w-1.5 h-1.5 rounded-full bg-teal-accent animate-ping" />
                                      <span className="font-mono text-[9px] text-teal-accent font-bold uppercase">TRAINING</span>
                                    </>
                                  ) : (
                                    <span className="font-mono text-[9px] text-[#4CC9F0] font-semibold uppercase">SECURE STANDBY</span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                      </div>

                      {/* Footer Info stamp */}
                      <p className="font-mono text-[8px] text-center text-white/40 tracking-wider">
                        ENCRYPTED SECURITY ENCLOSURE LAYER SHA-256 SYSTEM ACTIVE
                      </p>
                    </div>
                  )}

                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
