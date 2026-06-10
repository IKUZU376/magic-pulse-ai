import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Decorative ambient blur circle */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-teal-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-12 right-1/4 w-[500px] h-[500px] bg-soft-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Main Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* Brand block (spans 4 columns) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div 
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-9 h-9">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M20 75V25C20 22.24 22.24 20 25 21.5L46.5 45.5C48.5 47.7 51.5 47.7 53.5 45.5L75 21.5C77.76 20 80 22.24 80 25V75" 
                    stroke="#FFFFFF" 
                    strokeWidth="11" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="opacity-90"
                  />
                  <path 
                    d="M12 48H32L41 24L50 76L59 36L66 56L72 44L78 48H88" 
                    stroke="#00C2A8" 
                    strokeWidth="7" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="drop-shadow-[0_2px_8px_rgba(0,194,168,0.4)]"
                  />
                </svg>
              </div>
              <span className="font-display font-bold text-lg tracking-tight select-none">
                Magic Pulse <span className="text-teal-accent">AI</span>
              </span>
            </div>

            <p className="font-body-md text-sm text-white/60 leading-relaxed max-w-sm">
              Empowering clinical healers with state-of-the-art predictive intelligence and zero-trust workflow pipelines. Accelerating recovery time, optimizing operational performance.
            </p>
          </div>

          {/* Quick Links Column (spans 2 columns) */}
          <div className="md:col-span-2 md:col-start-6 flex flex-col gap-5">
            <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-teal-accent">
              Platform
            </h4>
            <ul className="flex flex-col gap-3 font-body-md text-sm text-white/50">
              <li>
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Home Landing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('solutions')}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  AI Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  About us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Contact & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Compliance & Support Column (spans 3 columns) */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-teal-accent">
              Compliance & Security
            </h4>
            <ul className="flex flex-col gap-3 font-body-md text-sm text-white/50">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-accent" />
                HIPAA Certified Pipeline
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
                SOC 2 Type II Audited
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-soft-purple" />
                AES-256 Key Encryption
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Network Status: Normal
              </li>
            </ul>
          </div>

          {/* Global Operations (spans 3 columns) */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-teal-accent">
              Global Support
            </h4>
            <p className="font-body-md text-sm text-white/50">
              Operating 24/7/365 across Singapore, Bangalore, and London data-silos.
            </p>
            <div className="font-body-md text-sm text-white/80 font-medium">
              E-mail: support@magicpulseai.com
            </div>
            <div className="font-body-md text-sm text-white/80 font-medium">
              Phone: +1 (800) 555-0199
            </div>
          </div>

        </div>

        {/* Bottom copyright line with legal docs */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-caption text-xs text-white/40 text-center md:text-left">
            &copy; {currentYear} Magic Pulse AI Technologies Pvt. Ltd. All rights reserved.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 font-caption text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <span className="text-white/10 select-none">|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <span className="text-white/10 select-none">|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">Cookie Protocol</a>
            <span className="text-white/10 select-none">|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">Medical SLA</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
