import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Star, Stethoscope } from 'lucide-react';
import { Expert } from '../types';
import { cn } from '../lib/utils';

interface ExpertCardProps {
  expert: Expert;
  index: number;
}

export const ExpertCard: React.FC<ExpertCardProps> = ({ expert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#4fd1c5]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#4fd1c5]/5"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-1/3 relative overflow-hidden h-[250px] lg:h-auto">
          <img
            src={expert.image}
            alt={expert.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-40"></div>
          
          {/* Mobile Overlay Info */}
          <div className="absolute bottom-4 left-4 lg:hidden">
            <h4 className="text-2xl font-display font-bold text-white mb-0.5">{expert.name}</h4>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#4fd1c5] text-black text-[9px] font-bold uppercase tracking-widest">
              {expert.role}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-2/3 p-6 lg:p-8 space-y-6">
          <div className="hidden lg:block space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#4fd1c5]/5 border border-[#4fd1c5]/10 text-[#4fd1c5] text-[9px] font-bold uppercase tracking-widest">
              {expert.role}
            </div>
            <h4 className="text-3xl font-display font-bold text-white group-hover:text-[#4fd1c5] transition-colors duration-200">
              {expert.name}
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-5">
              {/* Qualifications */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-[#4fd1c5]">
                  <GraduationCap size={16} />
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-50">Qualifications</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {expert.qualifications.map((q, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/60">
                      {q}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-[#ff8fab]">
                  <Award size={16} />
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-50">Key Achievements</span>
                </div>
                <ul className="space-y-1.5">
                  {expert.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-white/40 leading-snug">
                      <div className="w-1 h-1 rounded-full bg-[#ff8fab] mt-1.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-5">
              {/* Specialization */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-[#4fd1c5]">
                  <Stethoscope size={16} />
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-50">Core Specialization</span>
                </div>
                <p className="text-xs font-medium text-white/70 leading-relaxed">
                  {expert.specialization}
                </p>
              </div>

              {/* Celebrities */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-yellow-500/60">
                  <Star size={16} />
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-50">Notable Consultations</span>
                </div>
                <p className="text-[10px] text-white/30 italic leading-relaxed">
                  {expert.celebrities.join(", ")}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5">
            <p className="text-xs text-white/40 leading-relaxed italic">
              "{expert.description}"
            </p>
          </div>
          
          <div className="flex justify-end">
            <button className="px-5 py-2 rounded bg-white/5 border border-white/5 text-[9px] font-bold uppercase tracking-widest hover:bg-[#4fd1c5] hover:text-black transition-all duration-200">
              View Full Profile
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
