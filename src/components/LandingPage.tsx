import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Activity, Shield, Heart, Brain, Globe, Zap, ArrowRight, Stethoscope, Users, Building2 } from 'lucide-react';
import { HospitalSVG } from './HospitalSVG';
import { TabType } from '../types';

interface LandingPageProps {
  setActiveTab: (tab: TabType) => void;
}

export function LandingPage({ setActiveTab }: LandingPageProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const features = [
    {
      title: 'Clinical Standards',
      desc: 'Calibrated against WHO and CDC guidelines to ensure enterprise-level reliability.',
      icon: Shield,
      color: 'text-[#4fd1c5]',
      bg: 'bg-[#4fd1c5]/5'
    },
    {
      title: 'Data Integrity',
      desc: 'End-to-end encryption and HIPAA-compliant protocols for professional environments.',
      icon: Activity,
      color: 'text-[#ff8fab]',
      bg: 'bg-[#ff8fab]/5'
    },
    {
      title: 'Global Network',
      desc: 'Connected with top-tier medical institutions worldwide for real-time exchange.',
      icon: Globe,
      color: 'text-[#4fd1c5]',
      bg: 'bg-[#4fd1c5]/5'
    }
  ];

  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-start pt-12 md:pt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full lg:w-[70%] pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full relative"
          >
            <div className="absolute inset-0 bg-linear-to-r from-[#050505] via-[#050505]/40 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-linear-to-b from-[#050505] via-transparent to-[#050505] z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
              alt="Clinical Intelligence Dashboard" 
              className="w-full h-full object-cover opacity-60 mix-blend-screen"
              referrerPolicy="no-referrer"
            />
            
            {/* HUD Overlay Elements */}
            <div className="absolute inset-0 z-20 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="800" cy="400" r="150" stroke="#4fd1c5" strokeWidth="0.5" strokeDasharray="10 10" />
                <circle cx="800" cy="400" r="120" stroke="#4fd1c5" strokeWidth="1" />
                <path d="M600 200 L900 200 L900 600 L600 600 Z" stroke="#4fd1c5" strokeWidth="0.5" strokeDasharray="5 5" />
                <line x1="600" y1="400" x2="1000" y2="400" stroke="#4fd1c5" strokeWidth="0.5" />
                <line x1="800" y1="200" x2="800" y2="600" stroke="#4fd1c5" strokeWidth="0.5" />
                
                {/* Animated HUD bits */}
                <motion.path 
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  d="M750 350 L850 350 L850 450 L750 450 Z" 
                  stroke="#4fd1c5" 
                  strokeWidth="2" 
                />
              </svg>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 max-w-3xl space-y-10"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#4fd1c5]/10 border border-[#4fd1c5]/20 text-[#4fd1c5] text-[11px] font-bold uppercase tracking-[0.3em]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4fd1c5] animate-pulse"></div>
              Clinical Intelligence v4.0
            </div>
            <h1 className="text-8xl md:text-9xl font-display font-bold leading-[0.8] tracking-tighter">
              Precision <br />
              <span className="text-[#4fd1c5] relative inline-block">
                Health Analysis
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.5, duration: 1.2, ease: "circOut" }}
                  className="absolute -bottom-2 left-0 h-2 bg-[#4fd1c5]/20 -z-10"
                ></motion.div>
              </span>
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="text-white/50 leading-relaxed text-2xl font-medium max-w-xl">
            The definitive standard for institutional-grade health metrics and behavioral diagnostics.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button 
              onClick={() => setActiveTab('bmi')}
              className="px-8 py-4 rounded-lg bg-[#4fd1c5] text-black font-bold text-sm uppercase tracking-widest hover:bg-[#3db8ae] transition-all flex items-center gap-2 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Assessment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
              />
            </button>
            <button 
              onClick={() => setActiveTab('experts')}
              className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              Meet Our Board
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-8 flex items-center gap-8 border-t border-white/5">
            {[
              { label: 'Accuracy Rate', value: '99.8%' },
              { label: 'Global Partners', value: '150+' },
              { label: 'Monitoring', value: '24/7' }
            ].map((stat, i) => (
              <React.Fragment key={i}>
                <div className="space-y-1">
                  <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
                  <div className="text-[9px] uppercase tracking-widest text-white/30 font-bold">{stat.label}</div>
                </div>
                {i < 2 && <div className="w-px h-8 bg-white/10"></div>}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              delay: idx * 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-[#4fd1c5]/20 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute -right-4 -bottom-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500">
              <feature.icon size={120} />
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${feature.bg} ${feature.color}`}>
              <feature.icon size={24} />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
            <p className="text-sm text-white/30 leading-relaxed group-hover:text-white/50 transition-colors">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Core Capabilities */}
      <section className="space-y-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-4xl font-display font-bold">Core Capabilities</h2>
          <p className="text-white/40 max-w-xl">Our platform integrates multiple dimensions of health data to provide a holistic view of your wellbeing.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Metabolic Profiling', icon: Activity, tab: 'bmi' },
            { title: 'Behavioral Analysis', icon: Heart, tab: 'lifestyle' },
            { title: 'Cognitive Evaluation', icon: Brain, tab: 'mental' },
            { title: 'Clinical Knowledge', icon: Stethoscope, tab: 'disease' }
          ].map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              onClick={() => setActiveTab(cap.tab as TabType)}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between group cursor-pointer hover:bg-white/[0.04] transition-all relative overflow-hidden"
            >
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#4fd1c5] group-hover:bg-[#4fd1c5]/10 transition-colors">
                  <cap.icon size={20} />
                </div>
                <span className="font-display font-bold text-lg">{cap.title}</span>
              </div>
              <ChevronRight size={20} className="text-white/20 group-hover:text-[#4fd1c5] group-hover:translate-x-1 transition-all relative z-10" />
              <motion.div 
                className="absolute inset-0 bg-linear-to-r from-[#4fd1c5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ready to Consult Section */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 md:p-20 rounded-3xl bg-linear-to-br from-[#4fd1c5]/10 via-[#4fd1c5]/5 to-transparent border border-[#4fd1c5]/10 overflow-hidden relative group"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#4fd1c5] blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
          
          <div className="relative z-10 max-w-2xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-display font-bold leading-tight">
                Ready to optimize <br />
                your <span className="text-[#4fd1c5]">health journey?</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed">
                Connect with our clinical advisory board for personalized health optimization strategies and professional medical consultation.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <button 
                onClick={() => setActiveTab('contact')}
                className="px-10 py-5 rounded-lg bg-[#4fd1c5] text-black font-bold text-sm uppercase tracking-widest hover:bg-[#3db8ae] transition-all shadow-xl shadow-[#4fd1c5]/20"
              >
                Schedule Consultation
              </button>
              <button 
                onClick={() => setActiveTab('experts')}
                className="px-10 py-5 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Users size={18} />
                View Our Experts
              </button>
              <div className="flex items-center gap-4 ml-auto">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-white/10 overflow-hidden">
                      <img src={`https://picsum.photos/seed/doc${i}/100/100`} alt="Expert" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest">
                  Joined by 2,000+ <br /> Professionals
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
