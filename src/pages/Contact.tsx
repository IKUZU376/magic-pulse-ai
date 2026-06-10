import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe2, 
  ChevronDown, 
  CheckCircle,
  Building,
  HeartHandshake
} from 'lucide-react';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 20 } 
    }
  };

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    organization: '',
    role: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // FAQ Accordion states
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.workEmail) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '',
          name: formData.fullName,
          email: formData.workEmail,
          organization: formData.organization,
          role: formData.role,
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        // Clear state
        setFormData({
          fullName: '',
          workEmail: '',
          organization: '',
          role: '',
          message: ''
        });
      } else {
        setErrorMessage(data.message || 'Submission failed. Please verify your access key or try again.');
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'A network error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  const offices = [
    {
      country: "Bengaluru HQ",
      address: "Level 11, Prestige Trade Tower, Palace Road, High Grounds, Bengaluru, Karnataka 560001",
      phone: "+91 80 4933 6000",
      badge: "Clinical Sandbox Lab"
    },
    {
      country: "Mumbai Operations Center",
      address: "Naman Centre, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051",
      phone: "+91 22 6659 5000",
      badge: "Operations Hub"
    },
    {
      country: "Hyderabad AI Research Lab",
      address: "Building 20, Mindspace Cyberabad, Madhapur, Hyderabad, Telangana 500081",
      phone: "+91 40 4033 9000",
      badge: "Research & Development"
    },
    {
      country: "Pune Engineering Office",
      address: "Business Bay, Airport Road, Yerwada, Pune, Maharashtra 411006",
      phone: "+91 20 6702 1000",
      badge: "Engineering Office"
    }
  ];

  const faqs = [
    {
      q: "How does Magic Pulse guarantee HIPAA compliance and PHI privacy?",
      a: "Our core platform is engineered on localized sandboxed VPC orchestration. Under no condition is Protected Health Information (PHI) transmitted to public model wrappers. All data streams are isolated in transit via TLS 1.3 pipelines and encrypted at rest with AES-256 keys governed by client KMS vaults."
    },
    {
      q: "What electronic health record (EHR) connections are supported out-of-the-box?",
      a: "Magic Pulse features standard FHIR API connectors ready for direct secure handshakes with Epic, Cerner, and Allscripts. Additionally, our DICOM system routes directly to mainstream radiology PACS infrastructures without requiring customized local patches."
    },
    {
      q: "What is the typical timeframe required to launch a localized clinical pilot?",
      a: "Standard administrative clearance and deployment of a secure cloud sandbox typically require between 4 and 6 weeks. Our pre-configured EHR templates allow clinical IT teams to easily configure sandbox feeds in less than 5 units of business days."
    },
    {
      q: "How do your diagnostics segment-classifiers prevent predictive hallucinations?",
      a: "We don't allow automated diagnostic decisions. Our neural segment filters operate purely as verification overlays. If structural abnormality calculations fall below a calibrated 95% confidence threshold, the ecosystem dynamically holds predictions and routes the PACS queue strictly to senior radiologist queues for verification."
    },
    {
      q: "Is there a support SLA structure for 24/7/365 critical care environments?",
      a: "Absolutely. Our enterprise tier includes dedicated 24/7/365 telemetry monitoring with a guaranteed 15-minute response SLA. Our engineering nodes and diagnostic silos are replicated across three continents to ensure 99.99% system availability."
    }
  ];

  return (
    <div className="mesh-gradient-bg min-h-screen pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-16 max-w-2xl mx-auto flex flex-col gap-4">
          <span className="font-display font-bold text-xs uppercase text-teal-accent tracking-wider">
            Connect
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-dark tracking-tight">
            Initiate a Technical Sandbox Consultation
          </h1>
          <p className="font-body-md text-sm sm:text-base text-navy-dark/70">
            Request an secure sandbox environment, ask a regulatory question, or coordinate a technical presentation with our medical informatics leads.
          </p>
        </div>

        {/* Contact and Form block columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Info Side (spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-[#0B132B] text-white rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-teal-accent/5 rounded-full blur-2xl" />
              
              <h2 className="font-display font-bold text-2xl text-white mb-6">Operations Desk</h2>
              
              <div className="flex flex-col gap-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-teal-accent shrink-0 select-none">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-xs text-white/50 uppercase tracking-wider">Secure Email</h4>
                    <p className="font-sans text-sm text-white/90 mt-1">contact@magicpulseai.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-teal-accent shrink-0 select-none">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-xs text-white/50 uppercase tracking-wider">Inquiry Line</h4>
                    <p className="font-sans text-sm text-white/90 mt-1">+91 80 4933 6000 (Bengaluru HQ)</p>
                    <p className="font-sans text-sm text-white/90 mt-0.5">+91 22 6659 5000 (Mumbai Desk)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-teal-accent shrink-0 select-none">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-xs text-white/50 uppercase tracking-wider">SLA Status</h4>
                    <p className="font-sans text-sm text-white/90 mt-1">24/7 Multi-region failover monitoring active</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Render Office coordinates directory cards */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-4"
            >
              <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-navy-dark/40 px-2">Local Silos Directory</h3>
              {offices.map((off, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-5 border border-slate-200 soft-shadow flex items-start gap-4"
                >
                  <MapPin className="w-5 h-5 text-teal-accent mt-1 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-sm text-navy-dark">{off.country}</span>
                      <span className="font-display font-semibold text-[8px] uppercase tracking-wider text-navy-dark/40 bg-slate-100 py-1 px-2 rounded">
                        {off.badge}
                      </span>
                    </div>
                    <p className="font-body-md text-xs text-navy-dark/60 leading-relaxed mt-1">{off.address}</p>
                    <p className="font-mono text-[10px] text-navy-dark/45 mt-1.5">{off.phone}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Form Side (spans 7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 soft-shadow relative">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-bold text-xs uppercase text-navy-dark/50">Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          placeholder="Dr. Jordan West"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 sm:p-3.5 text-sm focus:outline-none focus:border-teal-accent transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-bold text-xs uppercase text-navy-dark/50">Work Email</label>
                        <input 
                          type="email" 
                          required
                          value={formData.workEmail}
                          onChange={(e) => setFormData({...formData, workEmail: e.target.value})}
                          placeholder="j.west@mercyhealth.org"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 sm:p-3.5 text-sm focus:outline-none focus:border-teal-accent transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-bold text-xs uppercase text-navy-dark/50">Organization</label>
                        <input 
                          type="text" 
                          value={formData.organization}
                          onChange={(e) => setFormData({...formData, organization: e.target.value})}
                          placeholder="Mercy Health Group"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-teal-accent transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-display font-bold text-xs uppercase text-navy-dark/50">Clinical Role / Title</label>
                        <input 
                          type="text" 
                          value={formData.role}
                          onChange={(e) => setFormData({...formData, role: e.target.value})}
                          placeholder="Director of Medical Physics"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-teal-accent transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-display font-bold text-xs uppercase text-navy-dark/50">Inquiry / Requirements</label>
                      <textarea 
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Detail your requirements (e.g., requested models, PACS integration specifications, required trial context size...)"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-teal-accent transition-colors resize-none"
                      />
                    </div>

                    {errorMessage && (
                      <div className="bg-red-50 text-red-600 text-xs sm:text-sm rounded-lg p-3.5 border border-red-200 font-sans leading-relaxed">
                        {errorMessage}
                      </div>
                    )}

                    {/* Submit confirmation */}
                    <motion.button 
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={isSubmitting ? {} : { scale: 1.02 }}
                      whileTap={isSubmitting ? {} : { scale: 0.98 }}
                      className={`w-full bg-navy-dark hover:bg-neutral-900 text-white font-display font-semibold text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition-colors ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                      }`}
                    >
                      {isSubmitting ? 'Transmitting...' : 'Transmit Proposal Request'}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-12 px-6 gap-6"
                  >
                    <div className="w-16 h-16 bg-teal-accent/15 rounded-full flex items-center justify-center text-teal-accent mb-2">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-display font-bold text-2xl text-navy-dark">Proposal Securely Received</h3>
                      <p className="font-body-md text-sm text-navy-dark/60 leading-relaxed max-w-sm">
                        Thank you. Your consultation requirements have been logged inside our HIPAA secure partition list. Our clinical solutions group will follow up with coordinates within 1 business day.
                      </p>
                    </div>
                    <motion.button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setErrorMessage(null);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-6 bg-slate-100 hover:bg-slate-200 text-navy-dark font-display font-semibold text-xs uppercase py-3 px-6 rounded-lg cursor-pointer transition-colors"
                    >
                      Send Another Inquiry
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Global Operations Map Visual: Hotlinked from metadata specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <span className="font-display font-bold text-xs uppercase text-teal-accent tracking-wider">
              Network Telemetry
            </span>
            <h2 className="font-display font-bold text-3xl text-navy-dark tracking-tight leading-tight">
              Global Deployment instances Dashboard Map
            </h2>
            <p className="font-body-md text-sm text-navy-dark/70 leading-relaxed">
              Magic Pulse supports high-availability clusters spanning standard hospital clusters and regional clinical centers. Our server maps verify active instances across diverse geographic boundaries to guarantee absolute computational redundancy.
            </p>
          </div>

          <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-navy-dark border border-white/25 aspect-[16/10] relative p-1.5 shadow-2xl">
            <img 
              alt="Global instances deployment metadata dashboard map" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7MMh_ylg0rau9pXBl6Q9b9fM1eBYjgi4onx5yxtlxdllGQhrL863bZXNkp7JcaXdXBUWem_9Wj3pcKJN8ECuNisiKgXcAw10z8_hDyc3pkjRJTJCFq_XuViM5GZckHUpf8U6SZwc52vQdkZiIJtCLOfygARCJRicJAOiH9xjCPA2Fa5FCgvyBWSqtW-Hg9vLRr-6i6sv3UFacPYvviAdjiF5bMqRE3-V1VAzh3QthjG0eW-txr3VS31Z4S4bzgrtlBF7glAMswfc" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* FAQ Accordion block */}
        <div className="max-w-4xl mx-auto mb-12">
          
          <div className="text-center mb-12">
            <span className="font-display font-bold text-xs uppercase text-teal-accent tracking-wider">
              Verification FAQ
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy-dark tracking-tight mt-2">
              Security, SLA pipelines, and Clinical Deployment
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = faqOpenIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 soft-shadow overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 flex items-center justify-between font-display font-bold text-sm sm:text-base text-navy-dark cursor-pointer select-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-navy-dark/40 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-teal-accent' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-slate-100"
                      >
                        <p className="p-6 font-body-md text-xs sm:text-sm text-navy-dark/70 leading-relaxed bg-slate-50">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}
