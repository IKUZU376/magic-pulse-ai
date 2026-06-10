import { motion } from 'motion/react';
import { 
  Building2, 
  Brain, 
  Target, 
  HeartHandshake, 
  Sparkles, 
  ShieldCheck, 
  Globe2 
} from 'lucide-react';

export default function About() {
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

  const coreValues = [
    {
      title: "Scientific Rigor First",
      desc: "Our neural algorithms represent double-blind clinically tested models. We don't deploy anything without peer-reviewed verification indices.",
      icon: Brain,
      color: "text-teal-accent bg-teal-accent/10"
    },
    {
      title: "Zero-Trust Infrastructure",
      desc: "Client metadata must never be blended, leaked, or exposed. Security guides our engineering priorities above all feature speed.",
      icon: ShieldCheck,
      color: "text-soft-purple bg-soft-purple/10"
    },
    {
      title: "Clinical Co-Preservation",
      desc: "We design AI pipelines strictly as supportive diagnostic assists, amplifying physician analytical depth without replacing clinical empathy.",
      icon: HeartHandshake,
      color: "text-electric-cyan bg-electric-cyan/10"
    },
    {
      title: "Universal Global Access",
      desc: "Deploying lightweight inference models that run seamlessly across low-bandwidth clinics in under-resourced territories.",
      icon: Globe2,
      color: "text-slate-700 bg-slate-100"
    }
  ];

  const leaders = [
    {
      name: "Dr. Aditi Kulkarni",
      role: "Founder & Chief Executive Officer",
      bio: "Ex-Stanford Clinical Informatics, previously leading research divisions at DeepMind Medical. Dedicated to deploying safe, trustworthy intelligence globally.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoSIar1m7jswHDznRAUuqHIZW-7lU7XL0Iy33OaTcYQSYgtLb81yDXTRuSTW6AyM9y87XDkkhdt4OPKRn4iALRkKoHEeHc0LCGccuJbg2jwwzxgCHHzBfPJEKP14b-x6qPUDMMZPPDNDgYsaPj-sj-fzvW1jn9peKp91dJCHjKC1wPLbkMr0DiABjt1jIePe5mDQ4Bv0G8X-06za5FjuMnuIEpTC9Zrj9RqsSAqeIvq7RTUGJoXaxA4ImAd3zFwKoGdFa1MRcPnsw"
    },
    {
      name: "Rohan Deshmukh",
      role: "Chief Technology Officer",
      bio: "Former Principal Architect of Stripe's distributed core infrastructure. Specialist in high-performance computing clusters and zero-leak system security.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpD1cnKFEDccpNTdPwTCAxKsuEBZfezMCK2aKEvhFYb8QeO2g1_AhNgsJOEZQbVgaqFi4EV7ERkme3-3if7-KwJnW975G7xV4S4GmqmZuKAphmW6M9CYwAWZStJYISQZBgPhUqr08bNeTkToCiK7RY2-Rsxv9cJYF9vex2fy9w32yUEdVqgWy7PQd6GzZEspdu3K6Y4IPUGeKLUEiDywwNdGVDE0FqVisiSzFKsZSnv7sm09rP9mNAK1_26x__-uaTUeQYn4m1nrk"
    },
    {
      name: "Dr. Ananya Mehta",
      role: "Chief Medical Officer",
      bio: "Renowned neuro-radiologist and clinical trial investigator. Guides model development pipelines to guarantee direct utility inside high-pressure ICUs.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2Crn3GO6u_hkQngGj3bAkNR7ORAsIXfACRoAZa8aD22dIeQL0RnVgfaDoNQROLQnTMoA_sEbIENDdEJy1mOu4k0U-HvRIndys8-TB6qU8dbEQ2HXc0gid_wTjw3EdCzIBZBUC96zla5kkhGHnObvulBw1OAPKBsZvt83N-Fw82Y0_d_UBwwEaZc4Gbrzh_Lkkx8_TNEXH-gfta51DJOnYwcgGe8rSQVbooDxBdPiQnza2gPkIZnuJu1mo4EXCLvv2xwkZMROeAPE"
    },
    {
      name: "Vikram Iyer",
      role: "Chief Operations Officer",
      bio: "Silo scaling leader, ex-operations lead for multinational hospital chains. Expert in coordinating procurement, slates compliance, and on-premises integrations.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe8bnAYV-_zFjz4M9Cipt9_k0Q8LTZSRAv5L1Uwql5MtSjO5aQ-6r81YjUp9KLdzQhAOykZ8yvJ76Gz2jqUp6yDb7c1LJPazMFI5AMEGFKMgaZmVcRRzXrygMx-6JYBt7Bui_TjH28DWkBaA-Do3U3SyFw4rgNv8pqJQmtXE0z2sYpYi7ZJf-SjZVvfHztJlazuGSO2vNjx7ETy_vfmfInk55xGoPu1U7jyzqVa56TjG_upIdyH_b7OKLdtbp1JzEsaXwDDQXIoDs"
    }
  ];

  return (
    <div className="mesh-gradient-bg min-h-screen pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* About Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <span className="font-display font-bold text-xs uppercase text-teal-accent tracking-wider">
              Company Background
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-dark leading-tight tracking-tight">
              Pioneering the Future of Safe, Intelligent Care.
            </h1>
            <p className="font-sans text-navy-dark/70 text-base sm:text-lg leading-relaxed">
              Magic Pulse Technologies was established at the intersection of complex machine intelligence and core clinical science. What started as an academic research laboratory modeling brain vascular tissue has matured into a venture-backed enterprise platform coordinating critical care decisions for hospital systems globally.
            </p>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden soft-shadow bg-navy-dark h-[350px] relative border border-white/40 p-1">
            <img 
              alt="Advanced research laboratory" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3b-U-Xbi1WdeJ-rabSdb8Jfrdv3ktUhQEyjh_hVBX9H-lDnOD4DkcD577DzMEcNqxecqNyKOC1Lb6ZLlTONdjc6HBnfs-P8UWqUZM0ZIJWBxX2-W6EgoGABt3UQShW5GoCdv9dvMaGBayd2nKh1I1XqLw4x5WYWwWZKvJp_jPIS6-iHpLdnTRuR1mJ8FgtC0cSiHBpRCwrtnOcOvdi4tZseLeaTbANt1huzLHfDyMMQajOcRNoD58s9aDoSSlPDglKz9NkoeXiJk" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Overlay tag */}
            <div className="absolute bottom-4 left-4 bg-navy-dark/95 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-accent" />
              <span className="font-display text-[10px] text-white tracking-widest uppercase font-bold">Research Headquarters</span>
            </div>
          </div>

        </div>

        {/* Mission and Vision Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          
          <div className="bg-[#0B132B] text-white rounded-3xl p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between min-h-[280px]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-accent/5 rounded-full blur-2xl" />
            
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-teal-accent">
              <Target className="w-5 h-5" />
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-3">Our Mission</h2>
              <p className="font-sans text-white/70 text-sm leading-relaxed">
                To build absolute mathematical scaffolding that assists radiologists and bedside Care groups instantly. We aim to slash emergency waiting lines, suppress alarm fatigue, and restore physician energy back to actual human healing.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 flex flex-col justify-between min-h-[280px]">
            <div className="w-10 h-10 rounded-xl bg-navy-dark/5 flex items-center justify-center mb-6 text-navy-dark">
              <Building2 className="w-5 h-5" />
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl text-navy-dark mb-3">Our Vision</h2>
              <p className="font-sans text-navy-dark/70 text-sm leading-relaxed">
                A universal medical network where diagnostic silos are entirely harmonized, where septic shock deterioration curves are predicted hours before emergence, and where high-fidelity algorithmic support is accessible in every clinical setting.
              </p>
            </div>
          </div>

        </div>

        {/* Core Values Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="font-display font-bold text-xs uppercase text-teal-accent tracking-wider">
              Core Philosophies
            </span>
            <h2 className="font-display font-bold text-3xl text-navy-dark tracking-tight mt-3">
              The Principles Guarding Our Diagnostics Code
            </h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coreValues.map((val, index) => {
              const Icon = val.icon;
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-6 soft-shadow border border-navy-dark/5 flex flex-col gap-4 hover-lift"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${val.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-navy-dark">{val.title}</h3>
                  <p className="font-body-md text-xs text-navy-dark/60 leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Leadership Grid */}
        <div className="mb-16">
          
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="font-display font-bold text-xs uppercase text-teal-accent tracking-wider">
              Leadership
            </span>
            <h2 className="font-display font-bold text-3xl text-navy-dark tracking-tight mt-3">
              Elite Clinicians & Systems Architects
            </h2>
            <p className="font-body-md text-navy-dark/60 mt-3">
              Our multidisciplinary team combines elite medical research and enterprise software veterans.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {leaders.map((lead, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl overflow-hidden soft-shadow border border-navy-dark/5 group hover-lift"
              >
                {/* Visual frame size container */}
                <div className="aspect-[4/5] bg-slate-50 relative overflow-hidden">
                  <img 
                    alt={lead.name}
                    src={lead.image}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle abstract color overlay card bottom in hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="font-display font-bold text-base text-navy-dark group-hover:text-teal-accent transition-colors">
                    {lead.name}
                  </h3>
                  <span className="font-display font-semibold text-[10px] uppercase text-navy-dark/40 block mt-1 tracking-wider">
                    {lead.role}
                  </span>
                  
                  <p className="font-body-md text-xs text-navy-dark/60 leading-relaxed mt-4">
                    {lead.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </div>
  );
}
