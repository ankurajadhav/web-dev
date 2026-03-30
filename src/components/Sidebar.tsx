import { Award, ShieldCheck, Globe, Zap, Users } from 'lucide-react';
import { TabType } from '../types';

interface SidebarProps {
  setActiveTab: (tab: TabType) => void;
}

export function Sidebar({ setActiveTab }: SidebarProps) {
  const stats = [
    { label: 'Accuracy Rate', value: '99.8%', color: 'text-[#4fd1c5]' },
    { label: 'Monitoring', value: '24/7', color: 'text-[#ff8fab]' },
    { label: 'Global Reach', value: '150+', color: 'text-[#4fd1c5]' },
    { label: 'Response Time', value: '<1s', color: 'text-[#ff8fab]' },
  ];

  const features = [
    {
      title: 'Clinical Standards',
      desc: 'Our algorithms are calibrated against WHO and CDC guidelines to ensure enterprise-level reliability.',
      icon: Award,
      color: 'text-[#4fd1c5]',
      bg: 'bg-[#4fd1c5]/10'
    },
    {
      title: 'Data Integrity',
      desc: 'End-to-end encryption and HIPAA-compliant data handling protocols for professional environments.',
      icon: ShieldCheck,
      color: 'text-[#ff8fab]',
      bg: 'bg-[#ff8fab]/10'
    },
    {
      title: 'Global Network',
      desc: 'Connected with top-tier medical institutions worldwide for real-time knowledge exchange.',
      icon: Globe,
      color: 'text-[#4fd1c5]',
      bg: 'bg-[#4fd1c5]/10'
    }
  ];

  return (
    <aside className="lg:col-span-4 space-y-8">
      <div className="grid grid-cols-2 gap-4 pt-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-300 group">
            <div className={`text-2xl font-display font-bold group-hover:scale-105 transition-transform duration-300 ${stat.color}`}>
              {stat.value}
            </div>
            <div className="text-[9px] uppercase tracking-[0.2em] opacity-30 font-bold mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {features.map((feature, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-linear-to-br from-white/[0.03] to-transparent border border-white/5 group hover:border-[#4fd1c5]/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-3">
              <div className={`p-2.5 rounded-lg shrink-0 transition-transform duration-300 group-hover:rotate-6 ${feature.bg} ${feature.color}`}>
                <feature.icon size={20} />
              </div>
              <h3 className="text-lg font-display font-bold">{feature.title}</h3>
            </div>
            <p className="text-xs text-white/30 leading-relaxed group-hover:text-white/50 transition-colors">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="p-8 rounded-2xl bg-linear-to-br from-[#4fd1c5]/10 via-[#4fd1c5]/5 to-transparent border border-[#4fd1c5]/10 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-1000">
          <Zap size={100} className="text-[#4fd1c5]" />
        </div>
        <div className="relative z-10 space-y-6">
          <div className="space-y-2">
            <h4 className="text-xl font-display font-bold text-white">Ready to consult?</h4>
            <p className="text-xs text-white/50 leading-relaxed">
              Connect with our clinical advisory board for personalized health optimization strategies.
            </p>
          </div>
          <div className="space-y-3">
            <button 
              onClick={() => setActiveTab('contact')}
              className="w-full py-3.5 rounded-lg bg-[#4fd1c5] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#3db8ae] transition-all duration-300 shadow-lg shadow-[#4fd1c5]/10"
            >
              Schedule Consultation
            </button>
            <button 
              onClick={() => setActiveTab('experts')}
              className="w-full py-3.5 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Users size={14} />
              View Our Experts
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
