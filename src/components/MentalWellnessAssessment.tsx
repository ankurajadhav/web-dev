import { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function MentalWellnessAssessment() {
  const [mood, setMood] = useState<string>('');
  const [mentalSleep, setMentalSleep] = useState<string>('');
  const [focus, setFocus] = useState<string>('');
  const [mentalResult, setMentalResult] = useState<{ message: string; color: string; level: string } | null>(null);

  const checkMental = () => {
    const m = parseInt(mood);
    const s = parseInt(mentalSleep);
    const f = parseInt(focus);

    if (!m || !s || !f) {
      setMentalResult({ message: "Please complete all assessment fields.", color: "text-red-400", level: "Incomplete" });
      return;
    }

    const score = m + s + f;
    let message = "";
    let color = "";
    let level = "";

    if (score <= 4) {
      message = "Optimal mental wellness. Continue your current self-care practices.";
      color = "text-emerald-400";
      level = "Stable";
    } else if (score <= 6) {
      message = "Moderate stress levels detected. Implementing mindfulness and stress management techniques is advised.";
      color = "text-yellow-400";
      level = "Elevated";
    } else {
      message = "Significant psychological stress detected. Professional counseling or psychiatric consultation is recommended.";
      color = "text-red-400";
      level = "Critical";
    }
    setMentalResult({ message, color, level });
  };

  const assessments = [
    {
      id: 'mood',
      label: 'Mood Frequency',
      value: mood,
      setter: setMood,
      options: [
        { value: '1', label: 'Rarely (Less than once a week)' },
        { value: '2', label: 'Sometimes (2-3 times a week)' },
        { value: '3', label: 'Often (Daily or near daily)' },
      ],
    },
    {
      id: 'sleep',
      label: 'Sleep Quality',
      value: mentalSleep,
      setter: setMentalSleep,
      options: [
        { value: '1', label: 'Restorative (Wake up refreshed)' },
        { value: '2', label: 'Fragmented (Waking up during night)' },
        { value: '3', label: 'Poor (Insomnia or excessive fatigue)' },
      ],
    },
    {
      id: 'focus',
      label: 'Cognitive Focus',
      value: focus,
      setter: setFocus,
      options: [
        { value: '1', label: 'High (Task oriented & motivated)' },
        { value: '2', label: 'Moderate (Occasional distraction)' },
        { value: '3', label: 'Low (Difficulty concentrating)' },
      ],
    },
  ];

  return (
    <div className="space-y-12">
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-4xl font-display font-bold mb-3">Mental Wellness</h3>
          <p className="text-white/50 text-lg">Psychological State Evaluation</p>
        </div>
        <Brain className="text-[#4fd1c5] opacity-20" size={80} />
      </div>

      <div className="space-y-6">
        {assessments.map((item) => (
          <div key={item.id} className="space-y-3">
            <label className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-30 ml-1">{item.label}</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {item.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => item.setter(opt.value)}
                  className={cn(
                    "p-4 rounded-xl border transition-all duration-200 text-xs md:text-sm font-bold uppercase tracking-widest",
                    item.value === opt.value
                      ? 'bg-[#4fd1c5]/5 border-[#4fd1c5]/30 text-[#4fd1c5] shadow-lg shadow-[#4fd1c5]/5'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04] text-white/30'
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={checkMental}
        className="w-full md:w-auto px-12 py-4 rounded-lg bg-[#4fd1c5] text-black font-bold text-base hover:bg-[#3db8ae] transition-all flex items-center justify-center gap-2 group shadow-xl shadow-[#4fd1c5]/10"
      >
        Analyze Mental State
        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {mentalResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="text-center md:text-left">
            <div className="text-[9px] uppercase tracking-[0.2em] opacity-30 mb-1 font-bold">Status</div>
            <div className={cn("text-5xl font-display font-bold leading-none", mentalResult.color)}>
              {mentalResult.level}
            </div>
          </div>
          <div className="h-px md:h-12 w-full md:w-px bg-white/10"></div>
          <p className={cn("text-xl font-display font-bold leading-tight max-w-2xl text-center md:text-left", mentalResult.color)}>
            {mentalResult.message}
          </p>
        </motion.div>
      )}
    </div>
  );
}
