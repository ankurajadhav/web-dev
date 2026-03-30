import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TabType } from './types';
import { FAMOUS_EXPERTS } from './constants';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BmiCalculator } from './components/BmiCalculator';
import { LifestyleRiskMatrix } from './components/LifestyleRiskMatrix';
import { MentalWellnessAssessment } from './components/MentalWellnessAssessment';
import { DiseaseKnowledgeBase } from './components/DiseaseKnowledgeBase';
import { ExpertCard } from './components/ExpertCard';
import { LandingPage } from './components/LandingPage';
import { ContactUs } from './components/ContactUs';

import { Sidebar } from './components/Sidebar';

import { cn } from './lib/utils';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#4fd1c5]/30 selection:text-black font-sans antialiased">
      {/* Immersive Background Layers */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#4fd1c5] blur-[160px] opacity-[0.08]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#ff8fab] blur-[160px] opacity-[0.08]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]"></div>
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
      </div>

      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className={cn("relative z-10 max-w-7xl mx-auto px-8 pb-12 md:pb-24", activeTab === 'home' ? "pt-4 md:pt-8" : "pt-12 md:pt-24")}>
        {activeTab === 'home' ? (
          <LandingPage setActiveTab={setActiveTab} />
        ) : (
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="min-h-[600px]"
              >
                {activeTab === 'bmi' && <BmiCalculator />}
                {activeTab === 'lifestyle' && <LifestyleRiskMatrix />}
                {activeTab === 'mental' && <MentalWellnessAssessment />}
                {activeTab === 'disease' && <DiseaseKnowledgeBase />}
                {activeTab === 'contact' && <ContactUs />}
                {activeTab === 'experts' && (
                  <div className="space-y-12">
                    <div className="flex items-end justify-between border-b border-white/10 pb-8">
                      <div>
                        <h3 className="text-5xl font-display font-bold mb-3">Clinical Advisory Board</h3>
                        <p className="text-white/40 text-xl">World-Renowned Medical Experts & Visionaries</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-12">
                      {FAMOUS_EXPERTS.map((expert, idx) => (
                        <ExpertCard key={idx} expert={expert} index={idx} />
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Quick Navigation Footer for Assessments */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-24 pt-12 border-t border-white/5 flex justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20"
            >
              <button onClick={() => setActiveTab('home')} className="hover:text-[#4fd1c5] transition-colors">Return to Intelligence Hub</button>
              <div className="w-1 h-1 rounded-full bg-white/10 mt-1.5"></div>
              <button onClick={() => setActiveTab('contact')} className="hover:text-[#4fd1c5] transition-colors">Request Clinical Support</button>
            </motion.div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
