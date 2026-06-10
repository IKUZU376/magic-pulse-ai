import { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Contact from './pages/Contact';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedSolutionSection, setSelectedSolutionSection] = useState<string>('diagnostics');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to conditionally display Back-to-Top trigger button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to extreme top whenever page toggles to simulate classic multi-page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Navigate to Solutions page with deep link to a specific sub-solution section
  const handleSelectSolutionSection = (sectionId: string) => {
    setSelectedSolutionSection(sectionId);
  };

  return (
    <div id="app-root-frame" className="relative min-h-screen text-navy-dark antialiased selection:bg-teal-accent selection:text-navy-dark flex flex-col justify-between">
      
      {/* Global Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Pages Switcher */}
      <main id="main-content-stream" className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <Home 
                setCurrentPage={setCurrentPage} 
                setSelectedSolutionSection={handleSelectSolutionSection} 
              />
            </motion.div>
          )}
          
          {currentPage === 'solutions' && (
            <motion.div
              key="solutions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <Solutions 
                setCurrentPage={setCurrentPage} 
                selectedSolutionSection={selectedSolutionSection} 
              />
            </motion.div>
          )}
          
          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <About />
            </motion.div>
          )}
          
          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Corporate Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Premium Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          id="back-to-top-btn"
          className="fixed bottom-6 right-6 z-40 bg-navy-dark hover:bg-neutral-800 text-white p-3.5 rounded-full shadow-lg soft-shadow border border-white/10 cursor-pointer active:scale-90 transition-all group"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 text-teal-accent transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      )}

    </div>
  );
}
