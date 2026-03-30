import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, ChevronRight, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export function LifestyleRiskMatrix() {
  const [lifestyleRisks, setLifestyleRisks] = useState({
    exercise: false,
    junkFood: false,
    sleep: false,
    smoking: false,
    stress: false,
  });
  const [lifestyleResult, setLifestyleResult] = useState<{ message: string; color: string; score: number } | null>(null);

  const checkLifestyle = () => {
    let score = 0;
    if (lifestyleRisks.exercise) score += 1;
    if (lifestyleRisks.junkFood) score += 1;
    if (lifestyleRisks.sleep) score += 1;
    if (lifestyleRisks.smoking) score += 4; // Critical risk
    if (lifestyleRisks.stress) score += 1;

    let message = "";
    let color = "";

    if (score === 0) {
      message = "Optimal lifestyle profile. Your habits strongly support long-term health.";
      color = "text-emerald-400";
    } else if (score <= 1) {
      message = "Low risk profile. Minor adjustments could further optimize your wellness.";
      color = "text-blue-400";
    } else if (score <= 3) {
      message = "Moderate risk profile. Targeted lifestyle interventions are recommended to prevent chronic issues.";
      color = "text-yellow-400";
    } else {
      message = "High risk profile. Immediate clinical consultation and comprehensive lifestyle restructuring are strongly advised.";
      color = "text-red-400";
    }
    setLifestyleResult({ message, color, score });
  };

  const risks = [
    { id: 'exercise', label: 'Sedentary Lifestyle', desc: 'Less than 150 mins activity/week' },
    { id: 'junkFood', label: 'Nutritional Imbalance', desc: 'High processed/sugar intake' },
    { id: 'sleep', label: 'Sleep Deprivation', desc: 'Less than 6 hours consistently' },
    { id: 'smoking', label: 'Substance Exposure', desc: 'Active smoking or alcohol use' },
    { id: 'stress', label: 'Chronic Stress', desc: 'High cortisol/anxiety levels' },
  ];

  return (
    <div className="space-y-12">
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-4xl font-display font-bold mb-3">Lifestyle Risk Matrix</h3>
          <p className="text-white/50 text-lg">Behavioral Health Assessment</p>
        </div>
        <Heart className="text-[#ff8fab] opacity-20" size={80} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {risks.map((risk) => (
          <label
            key={risk.id}
            className={cn(
              "flex items-start gap-5 p-5 rounded-xl border transition-all duration-300 cursor-pointer group relative overflow-hidden",
              lifestyleRisks[risk.id as keyof typeof lifestyleRisks]
                ? 'bg-[#4fd1c5]/5 border-[#4fd1c5]/30 shadow-lg shadow-[#4fd1c5]/5'
                : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
            )}
          >
            <div className="mt-1 relative z-10">
              <input
                type="checkbox"
                checked={lifestyleRisks[risk.id as keyof typeof lifestyleRisks]}
                onChange={(e) => setLifestyleRisks({ ...lifestyleRisks, [risk.id]: e.target.checked })}
                className="w-5 h-5 accent-[#4fd1c5] rounded cursor-pointer"
              />
            </div>
            <div className="relative z-10">
              <div className="text-lg font-display font-bold mb-0.5 group-hover:text-[#4fd1c5] transition-colors duration-300">
                {risk.label}
              </div>
              <div className="text-xs text-white/30 leading-relaxed font-medium">
                {risk.desc}
              </div>
            </div>
            {lifestyleRisks[risk.id as keyof typeof lifestyleRisks] && (
              <motion.div
                layoutId="active-bg"
                className="absolute inset-0 bg-linear-to-br from-[#4fd1c5]/5 to-transparent pointer-events-none"
              />
            )}
          </label>
        ))}
      </div>

      <button
        onClick={checkLifestyle}
        className="w-full md:w-auto px-12 py-4 rounded-lg bg-[#ff8fab] text-black font-bold text-base hover:bg-[#ff7599] transition-all flex items-center justify-center gap-2 group shadow-xl shadow-[#ff8fab]/10"
      >
        Run Risk Assessment
        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {lifestyleResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "p-8 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-6 relative overflow-hidden",
            lifestyleResult.color
          )}
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-current opacity-20"></div>
          <AlertCircle size={40} className="shrink-0 opacity-80" />
          <div>
            <div className="text-[9px] uppercase tracking-[0.2em] opacity-50 mb-1 font-bold">Assessment Outcome</div>
            <p className="text-xl font-display font-bold leading-tight max-w-2xl">
              {lifestyleResult.message}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
