import { useState } from 'react';
import { motion } from 'motion/react';
import { Activity, ChevronRight, InfoIcon } from 'lucide-react';
import { cn } from '../lib/utils';

export function BmiCalculator() {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmiResult, setBmiResult] = useState<{ value: string; message: string; color: string; status: string } | null>(null);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (!w || !h) {
      setBmiResult({ value: '', message: "Please enter valid values.", color: "text-red-400", status: "Error" });
      return;
    }
    const bmi = (w / (h * h)).toFixed(1);
    let msg = "";
    let color = "";
    let status = "";

    const bmiVal = parseFloat(bmi);
    if (bmiVal < 18.5) {
      msg = "Underweight – improve nutrition and consult a dietitian.";
      color = "text-yellow-400";
      status = "Underweight";
    } else if (bmiVal < 25) {
      msg = "Normal – maintain your current healthy lifestyle.";
      color = "text-emerald-400";
      status = "Healthy";
    } else if (bmiVal < 30) {
      msg = "Overweight – lifestyle changes and increased activity advised.";
      color = "text-orange-400";
      status = "Overweight";
    } else {
      msg = "Obese – professional medical guidance and structured weight management recommended.";
      color = "text-red-400";
      status = "Obese";
    }
    setBmiResult({ value: bmi, message: msg, color, status });
  };

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <h3 className="text-2xl font-display font-bold mb-1">BMI Assessment</h3>
          <p className="text-white/40 text-sm">Clinical Body Mass Index Calculator</p>
        </div>
        <div className="p-3 bg-[#4fd1c5]/10 rounded-lg text-[#4fd1c5]">
          <Activity size={24} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-[0.15em] font-bold opacity-40">Weight (kg)</label>
          <div className="relative">
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="0.0"
              className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/10 focus:border-[#4fd1c5]/40 outline-hidden transition-all text-2xl font-display"
            />
          </div>
        </div>
        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-[0.15em] font-bold opacity-40">Height (cm)</label>
          <div className="relative">
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="0"
              className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/10 focus:border-[#4fd1c5]/40 outline-hidden transition-all text-2xl font-display"
            />
          </div>
        </div>
      </div>

      <button
        onClick={calculateBMI}
        className="px-8 py-3 rounded-lg bg-[#4fd1c5] text-black font-bold text-sm uppercase tracking-widest hover:bg-[#3db8ae] transition-all flex items-center gap-2 group"
      >
        Calculate Index
        <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
      </button>

      {bmiResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-1 border border-white/10 bg-white/5 rounded-xl overflow-hidden"
        >
          <div className="p-8 bg-black/20 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 md:border-r border-white/10">
            <div className="text-[9px] uppercase tracking-widest opacity-40 mb-1 font-bold">Result</div>
            <div className={cn("text-5xl font-display font-bold", bmiResult.color)}>
              {bmiResult.value}
            </div>
            <div className={cn("mt-2 text-[10px] font-bold uppercase tracking-widest", bmiResult.color)}>
              {bmiResult.status}
            </div>
          </div>
          <div className="col-span-2 p-8 flex items-start gap-4">
            <InfoIcon className="text-[#4fd1c5] shrink-0 mt-1" size={20} />
            <p className="text-sm text-white/60 leading-relaxed font-medium">{bmiResult.message}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
