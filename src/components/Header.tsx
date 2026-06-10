import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Solutions', value: 'solutions' },
    { label: 'About Us', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-navy-dark/5">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        
        {/* Logo and Brand Name */}
        <div 
          onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          {/* Stunning Vector Magic Pulse Logo */}
          <div className="w-10 h-10 transition-transform duration-300 group-hover:scale-105">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Backing stylized 'M' in Navy */}
              <path 
                d="M20 75V25C20 22.24 22.24 20 25 21.5L46.5 45.5C48.5 47.7 51.5 47.7 53.5 45.5L75 21.5C77.76 20 80 22.24 80 25V75" 
                stroke="#0B132B" 
                strokeWidth="11" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              {/* Foreground Heartbeat pulse in Teal Accent */}
              <path 
                d="M12 48H32L41 24L50 76L59 36L66 56L72 44L78 48H88" 
                stroke="#00C2A8" 
                strokeWidth="7" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="drop-shadow-[0_2px_8px_rgba(0,194,168,0.4)]"
              />
              {/* Small glowing cyan indicator dot */}
              <circle cx="88" cy="48" r="3.5" fill="#4CC9F0" className="animate-pulse" />
            </svg>
          </div>
          
          <span className="font-display font-bold text-xl tracking-tight text-navy-dark">
            Magic Pulse <span className="text-teal-accent">AI</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => setCurrentPage(item.value)}
              className={`relative font-display font-medium text-sm transition-all duration-300 py-2 hover:text-teal-accent select-none ${
                currentPage === item.value 
                  ? 'text-teal-accent font-semibold' 
                  : 'text-navy-dark/70 hover:opacity-100'
              }`}
            >
              {item.label}
              {currentPage === item.value && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-teal-accent rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Global CTA button (Request Demo / Get Started) */}
        <div className="hidden md:flex items-center">
          <button 
            onClick={() => setCurrentPage('contact')}
            className="group relative bg-[#0B132B] hover:bg-neutral-900 text-white font-display font-semibold text-xs uppercase tracking-wider py-3 px-6 rounded-lg transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            Request Demo
            <ArrowUpRight className="w-3.5 h-3.5 text-teal-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Burger Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-navy-dark p-2 hover:bg-navy-dark/5 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel-dark text-white border-t border-white/5 animate-fade-in">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setCurrentPage(item.value);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left font-display font-medium text-lg py-2 transition-colors ${
                  currentPage === item.value ? 'text-teal-accent font-bold' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <button
              onClick={() => {
                setCurrentPage('contact');
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-4 bg-teal-accent text-navy-dark font-display font-semibold text-center py-4 rounded-lg hover:opacity-90 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Request Demo
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
