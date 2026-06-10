import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Cpu, 
  Workflow, 
  HeartHandshake, 
  TrendingUp, 
  Building2, 
  Stethoscope, 
  Database,
  ArrowRight,
  Brain,
  Search,
  Activity,
  UserCheck
} from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
  setSelectedSolutionSection?: (sectionId: string) => void;
}

export default function Home({ setCurrentPage, setSelectedSolutionSection }: HomeProps) {
  // Navigation helper that directs to solutions and optionally highlights a sub-section
  const navigateToSolution = (sectionId: string) => {
    if (setSelectedSolutionSection) {
      setSelectedSolutionSection(sectionId);
    }
    setCurrentPage('solutions');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 80, damping: 18 } 
    }
  };

  return (
    <div className="mesh-gradient-bg min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-12 w-[600px] h-[600px] bg-teal-accent/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-soft-purple/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
          
          {/* Typography */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-teal-accent/20">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-accent animate-pulse" />
              <span className="font-display font-semibold text-xs tracking-wider text-navy-dark uppercase">
                Enterprise Healthcare AI Engine
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-navy-dark leading-tight tracking-tight max-w-2xl">
              Pioneering the Next Era of <span className="text-teal-accent">Intelligent Clinical Care</span>.
            </h1>

            <p className="font-sans text-lg text-navy-dark/70 leading-relaxed max-w-xl">
              Magic Pulse coordinates complex multi-silo diagnostic pipelines, tracks deterioration markers in real-time, and provides physicians with immediate, SOC 2 audited prognostic predictions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={() => setCurrentPage('solutions')}
                className="group relative bg-[#0B132B] hover:bg-neutral-900 text-white font-display font-semibold text-sm py-4 px-8 rounded-xl transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Solutions Dashboard
                <ArrowRight className="w-4 h-4 text-teal-accent transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-white hover:bg-slate-50 border border-slate-200 text-navy-dark font-display font-semibold text-sm py-4 px-8 rounded-xl transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] shadow-sm flex items-center justify-center cursor-pointer"
              >
                Request Custom Sandbox
              </button>
            </div>
          </div>

          {/* Interactive Screen Device Mockup */}
          <div className="lg:col-span-5 relative w-full h-[500px] flex items-center justify-center">
            {/* Visual glow frame backing */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-accent/10 to-soft-purple/10 rounded-[32px] blur-2xl -z-10 animate-pulse duration-5000" />
            
            <div className="w-full h-full rounded-[24px] overflow-hidden glass-panel soft-shadow p-3 border border-white/40">
              <div className="w-full h-full rounded-[18px] overflow-hidden bg-navy-dark relative">
                
                {/* Hero Abstract Graphic Image hotlinked directly per specifications */}
                <img 
                  alt="Clinical AI diagnostics preview" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR4Mc45_FWM7vB1nTjf1huhAMvk5LH_5_Vu2GrPQ2WB-PwBLLwFqsi6gczSNX5msVdqTRctFrxWBt9sn06sdJ9ltAsSI7XdL_m7FhKUMuw_ysEi8wrKfgzJyaHs-4UPUsAwyTk6qiaoThIgH_1f6JSd-Pt8AnszAjWpnxJ03jBOaXgO8VONi-obL59RS1fYHc6dqiBgOn8j7zOj4NIhy5WoNTftyQ2zIQUryBCsiWHZorBxFHURGUgaHn1hB1scDPMam8BnP6xj1U" 
                  className="w-full h-full object-cover opacity-45 mix-blend-luminosity hover:opacity-60 transition-opacity duration-700"
                />

                {/* Floating telemetry metrics dashboard overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Status header */}
                  <div className="flex justify-between items-center bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-display font-medium text-[11px] text-white tracking-wide uppercase">Magic Pulse Core v4.1</span>
                    </div>
                    <span className="font-mono text-[10px] text-teal-accent text-glow-teal font-semibold">SECURE CONNECT</span>
                  </div>

                  {/* Vitals wave widget */}
                  <div className="bg-black/50 backdrop-blur-lg rounded-xl p-4 border border-white/5 shadow-2xl max-w-[280px] self-end hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display text-[10px] font-semibold text-white/50 uppercase tracking-wider">Predictive Telemetry</span>
                      <Brain className="w-4 h-4 text-electric-cyan" />
                    </div>
                    <div className="flex items-baseline gap-1.5 mb-3">
                      <span className="font-display font-bold text-3xl text-white">98.4</span>
                      <span className="font-body-md text-xs text-white/60">Confidence</span>
                    </div>
                    {/* Simulated pulse wave */}
                    <div className="h-6 flex items-end gap-0.5">
                      <div className="w-1 bg-teal-accent h-[40%] rounded-full animate-bounce duration-[1s]" />
                      <div className="w-1 bg-teal-accent h-[70%] rounded-full animate-bounce duration-[1.2s]" />
                      <div className="w-1 bg-electric-cyan h-[90%] rounded-full animate-bounce duration-[0.8s]" />
                      <div className="w-1 bg-soft-purple h-[50%] rounded-full animate-bounce duration-[1.4s]" />
                      <div className="w-1 bg-teal-accent h-[30%] rounded-full animate-bounce duration-[1.1s]" />
                      <div className="w-1 bg-electric-cyan h-[65%] rounded-full animate-bounce duration-[0.9s]" />
                      <div className="w-1 bg-teal-accent h-[80%] rounded-full animate-bounce duration-[1.3s]" />
                    </div>
                  </div>

                  {/* AI Diagnosis Badge */}
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-navy-dark/10 max-w-[245px] hover:translate-x-1 transition-transform duration-300">
                    <div className="flex items-center gap-2 text-navy-dark">
                      <Activity className="w-4 h-4 text-teal-accent" />
                      <span className="font-display text-xs font-bold">Diagnostics Scanner</span>
                    </div>
                    <p className="font-body-md text-[10px] text-navy-dark/80 mt-1">MRI Anomaly check completed in 400ms.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. STATISTICS SECTION */}
      <section className="py-20 bg-white border-y border-navy-dark/5">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-teal-accent/10 rounded-xl flex items-center justify-center text-teal-accent mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-5xl text-navy-dark tracking-tight">98%</h2>
              <p className="font-display font-semibold text-sm text-navy-dark/50 mt-1.5 uppercase tracking-wider">Clinical Accuracy</p>
              <p className="font-body-md text-sm text-center text-navy-dark/60 mt-2 max-w-xs">
                Exceeding standard clinical criteria across large-scale neurology and pulmonology cohorts.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center p-4 border-y md:border-y-0 md:border-x border-navy-dark/5">
              <div className="w-12 h-12 bg-soft-purple/10 rounded-xl flex items-center justify-center text-soft-purple mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-5xl text-navy-dark tracking-tight">40%</h2>
              <p className="font-display font-semibold text-sm text-navy-dark/50 mt-1.5 uppercase tracking-wider">Diagnosis Acceleration</p>
              <p className="font-body-md text-sm text-center text-navy-dark/60 mt-2 max-w-xs">
                Slashing radiologists' triage throughput waiting times significantly on complex MRI pipelines.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-electric-cyan/10 rounded-xl flex items-center justify-center text-electric-cyan mb-4">
                <UserCheck className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-5xl text-navy-dark tracking-tight">24h+</h2>
              <p className="font-display font-semibold text-sm text-navy-dark/50 mt-1.5 uppercase tracking-wider">Proactive Vitals Telemetry</p>
              <p className="font-body-md text-sm text-center text-navy-dark/60 mt-2 max-w-xs">
                Safely streaming wearable sensor metrics directly to localized dashboard vaults globally.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SOLUTIONS PREVIEW */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          
          <div className="flex flex-col items-start gap-4 mb-16 max-w-2xl">
            <span className="font-display font-bold text-xs uppercase text-teal-accent tracking-wider">
              Explore Our Services
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-dark tracking-tight">
              State-of-the-Art Solutions For Enterprise Healthcare
            </h2>
            <p className="font-body-md text-navy-dark/70">
              Discover modular, zero-trust AI components calibrated to instantly map into your hospital EHR framework. Select a category below to view technical benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Solution Block 1 */}
            <div className="bg-white rounded-2xl p-8 soft-shadow border border-navy-dark/5 flex flex-col justify-between hover-lift">
              <div>
                <span className="inline-block bg-[#00C2A8]/10 text-teal-accent font-display font-semibold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full mb-6">
                  PREVENTIVE & RADIOLOGY
                </span>
                <h3 className="font-display font-semibold text-xl text-navy-dark mb-4">
                  AI Diagnostics
                </h3>
                <p className="font-body-md text-sm text-navy-dark/70 leading-relaxed mb-6">
                  Real-time neural pipelines validating CT imaging, neuro-scans, and cardiac MRI slices with sub-millimeter precision.
                </p>
              </div>
              <button 
                onClick={() => navigateToSolution('diagnostics')}
                className="self-start inline-flex items-center gap-1.5 font-display font-bold text-xs text-teal-accent hover:opacity-85 cursor-pointer mt-4"
              >
                View Benchmarks
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Solution Block 2 */}
            <div className="bg-white rounded-2xl p-8 soft-shadow border border-navy-dark/5 flex flex-col justify-between hover-lift">
              <div>
                <span className="inline-block bg-[#7B61FF]/10 text-soft-purple font-display font-semibold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full mb-6">
                  PREDICTIVE FORESIGHT
                </span>
                <h3 className="font-display font-semibold text-xl text-navy-dark mb-4">
                  Predictive Analytics
                </h3>
                <p className="font-body-md text-sm text-navy-dark/70 leading-relaxed mb-6">
                  Early deterioration triggers alerting intensive care staff up to 6 hours before critical incidents and mapping patient flows.
                </p>
              </div>
              <button 
                onClick={() => navigateToSolution('analytics')}
                className="self-start inline-flex items-center gap-1.5 font-display font-bold text-xs text-soft-purple hover:opacity-85 cursor-pointer mt-4"
              >
                View Benchmarks
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Solution Block 3 */}
            <div className="bg-white rounded-2xl p-8 soft-shadow border border-navy-dark/5 flex flex-col justify-between hover-lift">
              <div>
                <span className="inline-block bg-[#4CC9F0]/10 text-electric-cyan font-display font-semibold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full mb-6">
                  CONTINUOUS TELEMETRY
                </span>
                <h3 className="font-display font-semibold text-xl text-navy-dark mb-4">
                  Remote Monitoring
                </h3>
                <p className="font-body-md text-sm text-navy-dark/70 leading-relaxed mb-6">
                  Secure wearable integration tracking real-time cardiac telemetry and biometric metadata across distributed hospital ecosystems.
                </p>
              </div>
              <button 
                onClick={() => navigateToSolution('monitoring')}
                className="self-start inline-flex items-center gap-1.5 font-display font-bold text-xs text-electric-cyan hover:opacity-85 cursor-pointer mt-4"
              >
                View Benchmarks
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setCurrentPage('solutions')}
              className="bg-navy-dark hover:bg-neutral-900 text-white font-display font-semibold text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] shadow-sm flex items-center gap-2 cursor-pointer"
            >
              Analyze All 5 Core Solutions
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE US (Bento Box Section) */}
      <section className="py-24 bg-white border-y border-navy-dark/5">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="font-display font-bold text-xs uppercase text-teal-accent tracking-wider">
              Why Magic Pulse?
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-dark tracking-tight mt-3">
              Fusing Clinical Rigor with Enterprise Security Engineering
            </h2>
            <p className="font-body-md text-navy-dark/70 mt-4 animate-fade-in">
              We understand that clinical software cannot afford a single point of failure. Every component in Magic Pulse undergoes state-of-the-art SOC 2 Type II vetting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Highlighted Bento card (spans 7 cols) */}
            <div className="md:col-span-7 bg-[#0B132B] text-white rounded-3xl p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between min-h-[320px]">
              {/* Blur accent map */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-accent/10 rounded-full blur-3xl" />
              
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-8">
                <ShieldCheck className="w-6 h-6 text-teal-accent" />
              </div>

              <div>
                <h3 className="font-display font-semibold text-2xl mb-3">
                  Enterprise Healthcare Security Credentials
                </h3>
                <p className="font-body-md text-white/70 max-w-xl text-sm leading-relaxed mb-6">
                  Magic Pulse operates inside siloed cloud VPC enclosures. Patient Health Information (PHI) is isolated locally, encrypted at rest via AES-256 standards, and compliant with all federal HIPAA policies.
                </p>
                <div className="inline-flex gap-4">
                  <span className="font-display text-[10px] uppercase font-bold text-teal-accent">HIPAA Compliant</span>
                  <span className="font-display text-[10px] uppercase font-bold text-teal-accent">SOC 2 TYPE II APPROVED</span>
                </div>
              </div>
            </div>

            {/* Bento card (spans 5 cols) */}
            <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between min-h-[320px] hover:bg-slate-100 transition-colors">
              <div className="w-12 h-12 bg-navy-dark/5 rounded-xl flex items-center justify-center mb-8">
                <Cpu className="w-6 h-6 text-navy-dark" />
              </div>

              <div>
                <h3 className="font-display font-semibold text-xl text-navy-dark mb-3">
                  Adaptive Inference Infrastructure
                </h3>
                <p className="font-body-md text-sm text-navy-dark/70 leading-relaxed">
                  Our custom fine-tuned weights run on dedicated node layers, ensuring zero-latency, multi-tenant concurrency during peak diagnostic review hours.
                </p>
              </div>
            </div>

            {/* Bento card (spans 5 cols) */}
            <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between min-h-[320px] hover:bg-slate-100 transition-colors">
              <div className="w-12 h-12 bg-navy-dark/5 rounded-xl flex items-center justify-center mb-8">
                <Workflow className="w-6 h-6 text-navy-dark" />
              </div>

              <div>
                <h3 className="font-display font-semibold text-xl text-navy-dark mb-3">
                  EHR Integration Connectors
                </h3>
                <p className="font-body-md text-sm text-navy-dark/70 leading-relaxed">
                  Direct structural pipelines map patient telemetry inputs cleanly back to Epic, Cerner, and mainstream third-party clinical data silos instantly.
                </p>
              </div>
            </div>

            {/* Bento card (spans 7 cols) */}
            <div className="md:col-span-7 bg-teal-accent text-navy-dark rounded-3xl p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between min-h-[320px]">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-2xl" />
              
              <div className="w-12 h-12 bg-navy-dark/10 rounded-xl flex items-center justify-center mb-8">
                <HeartHandshake className="w-6 h-6 text-navy-dark" />
              </div>

              <div>
                <h3 className="font-display font-semibold text-2xl mb-3">
                  Clinical-First Design Philosophy
                </h3>
                <p className="font-body-md text-sm text-navy-dark/80 max-w-xl leading-relaxed">
                  We don't believe in replacing human clinical touch. We design algorithms to filter raw background signals so clinicians can channel energy strictly into diagnosis validation and compassionate healing.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. INDUSTRIES SERVED */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          
          <div className="text-center mb-16">
            <span className="font-display font-bold text-xs uppercase text-teal-accent tracking-wider">
              Global Applications
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-dark tracking-tight mt-3">
              Scalable Core Services Built For Key Medical Sectors
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Sector 1 */}
            <div className="bg-white rounded-2xl p-6 soft-shadow border border-navy-dark/5 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-navy-dark mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-navy-dark mb-2">Hospital Networks</h3>
              <p className="font-body-md text-xs text-navy-dark/60">Optimizing workflow structures, clinical triaging, and inpatient prognosis flows.</p>
            </div>

            {/* Sector 2 */}
            <div className="bg-white rounded-2xl p-6 soft-shadow border border-navy-dark/5 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-navy-dark mb-4">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-navy-dark mb-2">Radiology Hubs</h3>
              <p className="font-body-md text-xs text-navy-dark/60">Automated sub-millimeter filters scanning for tissue abnormalities instantaneously.</p>
            </div>

            {/* Sector 3 */}
            <div className="bg-white rounded-2xl p-6 soft-shadow border border-navy-dark/5 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-navy-dark mb-4">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-navy-dark mb-2">Biotech & Trials</h3>
              <p className="font-body-md text-xs text-navy-dark/60">Sifting clinical metadata pools to isolate candidate anomalies and optimize trial design.</p>
            </div>

            {/* Sector 4 */}
            <div className="bg-white rounded-2xl p-6 soft-shadow border border-navy-dark/5 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-navy-dark mb-4">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-navy-dark mb-2">Telehealth Providers</h3>
              <p className="font-body-md text-xs text-navy-dark/60">Securely routing incoming wearable telemetry parameters to regional clinic dashboards.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-24 bg-white border-t border-navy-dark/5">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="font-display font-bold text-xs uppercase text-teal-accent tracking-wider">
              Verified Partners
            </span>
            <h2 className="font-display font-bold text-3xl text-navy-dark tracking-tight mt-3">
              Trusted by Leading Clinicians & Operators Globally
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Testimonial 1 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-teal-accent mb-6">
                  {/* Glowing clinical evaluation stars */}
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="font-display text-sm font-bold">★</span>
                  ))}
                </div>
                <p className="font-sans text-navy-dark/80 text-sm leading-relaxed italic mb-8">
                  "Magic Pulse has slashed our radiology MRI processing wait-time by 40%. The diagnostics UI matches the PACS pipeline effortlessly, giving our radiologists trusted clinical second opinions when time is paramount."
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Custom Doctor Avatar */}
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                  <svg className="w-full h-full text-navy-dark/40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-navy-dark">Dr. Julian Vance</h4>
                  <p className="font-body-md text-xs text-navy-dark/50">Director of Radiology, Mercy Health Partners</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-teal-accent mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="font-display text-sm font-bold">★</span>
                  ))}
                </div>
                <p className="font-sans text-navy-dark/80 text-sm leading-relaxed italic mb-8">
                  "The predictive early-warning module operates seamlessly in our high-density ICU. It alerts the clinical staff to deterioration anomalies hours before traditional telemetry monitors, saving lives daily."
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                  <svg className="w-full h-full text-navy-dark/40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-navy-dark">Amanda Lin, CMO</h4>
                  <p className="font-body-md text-xs text-navy-dark/50">Chief Medical Director, Apex Health Group</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,194,168,0.15),transparent)]" />
        
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 text-center relative z-10 flex flex-col items-center gap-8">
          <span className="font-display font-bold text-xs uppercase text-teal-accent tracking-wider">
            Begin the Pivot Today
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight max-w-3xl">
            Integrate Safe, Trustworthy Intelligent Care Into Your Clinical Enterprise.
          </h2>
          <p className="font-sans text-white/70 max-w-xl">
            Request an automated sandbox partition today, or request a technical discovery briefing with our senior medical informatics team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-teal-accent text-navy-dark font-display font-semibold text-sm py-4 px-8 rounded-xl hover:opacity-90 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-teal-accent/20 cursor-pointer"
            >
              Request Technical Pilot Briefing
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className="bg-white/10 hover:bg-white/20 text-white font-display font-semibold text-sm py-4 px-8 rounded-xl transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] border border-white/15 cursor-pointer"
            >
              Learn about our Research
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
