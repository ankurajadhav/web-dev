import { motion } from 'motion/react';
import { Info, ChevronRight, Activity, Heart, Brain, ShieldAlert, Microscope } from 'lucide-react';
import { cn } from '../lib/utils';

export function DiseaseKnowledgeBase() {
  const diseases = [
    {
      title: "Oncology",
      desc: "Advanced genomic screening and regular biopsies are the gold standard for early detection and personalized treatment protocols.",
      icon: Microscope,
      color: "text-[#4fd1c5]",
      bg: "bg-[#4fd1c5]/10",
      stats: "95% early survival rate",
      details: ["Genomic Profiling", "Immunotherapy", "Precision Radiotherapy"]
    },
    {
      title: "Endocrinology",
      desc: "Comprehensive metabolic syndrome management focuses on precise glycemic monitoring and personalized nutritional intervention strategies.",
      icon: Activity,
      color: "text-[#ff8fab]",
      bg: "bg-[#ff8fab]/10",
      stats: "80% prevention success",
      details: ["Insulin Optimization", "Metabolic Screening", "Hormonal Balance"]
    },
    {
      title: "Cardiology",
      desc: "Proactive hypertension and lipid profile management are essential for reducing cardiovascular mortality and improving heart health.",
      icon: Heart,
      color: "text-[#4fd1c5]",
      bg: "bg-[#4fd1c5]/10",
      stats: "70% risk reduction",
      details: ["Lipid Management", "ECG Monitoring", "Vascular Health"]
    },
    {
      title: "Neurology",
      desc: "Maintaining cognitive health through neuroplasticity exercises and optimizing REM sleep cycles is vital for long-term brain function.",
      icon: Brain,
      color: "text-[#ff8fab]",
      bg: "bg-[#ff8fab]/10",
      stats: "40% cognitive boost",
      details: ["Neuroplasticity", "Sleep Hygiene", "Cognitive Testing"]
    },
    {
      title: "Pulmonology",
      desc: "Environmental factors increasingly impact respiratory health; regular lung function tests and air quality awareness are strongly advised.",
      icon: ShieldAlert,
      color: "text-[#4fd1c5]",
      bg: "bg-[#4fd1c5]/10",
      stats: "60% lung capacity optimization",
      details: ["Spirometry", "Environmental Health", "Asthma Management"]
    },
  ];

  return (
    <div className="space-y-12">
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-4xl font-display font-bold mb-3">Disease Awareness</h3>
          <p className="text-white/50 text-lg">Clinical Knowledge Base & Prevention</p>
        </div>
        <Info className="text-[#ff8fab] opacity-20" size={80} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {diseases.map((disease, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="group p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#4fd1c5]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#4fd1c5]/5 relative overflow-hidden"
          >
            <div className={cn("absolute top-0 right-0 w-24 h-24 blur-3xl opacity-5 rounded-full -mr-12 -mt-12 transition-all duration-300 group-hover:opacity-10", disease.bg)}></div>
            
            <div className="flex items-start gap-5 relative z-10">
              <div className={cn("p-3 rounded-lg shrink-0 transition-transform duration-300 group-hover:scale-105", disease.bg, disease.color)}>
                <disease.icon size={24} />
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className={cn("text-lg font-display font-bold mb-1 transition-colors duration-200 group-hover:text-white", disease.color)}>
                    {disease.title}
                  </h4>
                  <p className="text-xs text-white/40 leading-relaxed font-medium group-hover:text-white/60 transition-colors">
                    {disease.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {disease.details.map((detail, i) => (
                    <span key={i} className="text-[9px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/30 uppercase tracking-widest font-bold">
                      {detail}
                    </span>
                  ))}
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-white/5">
                  <div className={cn("text-[10px] font-bold uppercase tracking-widest", disease.color)}>
                    {disease.stats}
                  </div>
                  <button className="text-white/10 hover:text-[#4fd1c5] transition-colors">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
