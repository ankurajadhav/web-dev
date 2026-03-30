import { Activity, Heart, Brain, Info, User, Home, MessageSquare } from 'lucide-react';
import { TabType } from '../types';
import { cn } from '../lib/utils';
import { Logo } from './Logo';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'bmi', icon: Activity, label: 'BMI' },
    { id: 'lifestyle', icon: Heart, label: 'Lifestyle' },
    { id: 'mental', icon: Brain, label: 'Mental' },
    { id: 'disease', icon: Info, label: 'Disease' },
    { id: 'experts', icon: User, label: 'Experts' },
    { id: 'contact', icon: MessageSquare, label: 'Contact' },
  ];

  return (
    <header className="relative z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl sticky top-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <div className="w-10 h-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <Logo className="w-full h-full" />
          </div>
          <div>
            <h1 className="text-xl font-display font-bold tracking-tight text-white">
              ADVANCE HEALTH
            </h1>
            <div className="flex items-center gap-2">
              <p className="text-[9px] uppercase tracking-[0.2em] font-semibold opacity-40">Clinical Intelligence Platform</p>
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-1 bg-white/[0.02] p-1 rounded-xl border border-white/5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={cn(
                "relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300",
                activeTab === tab.id 
                  ? 'bg-white/5 text-[#4fd1c5]' 
                  : 'text-white/40 hover:text-white/70 hover:bg-white/[0.02]'
              )}
            >
              <tab.icon size={16} className={cn("transition-transform duration-300", activeTab === tab.id && "scale-110")} />
              <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:block">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
