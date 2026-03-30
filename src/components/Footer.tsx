import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="relative z-50 mt-40 border-t border-white/10 bg-black/40 backdrop-blur-xl py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <Logo className="w-full h-full" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-white">
              ADVANCE HEALTH
            </span>
          </div>
          <p className="text-white/30 text-xs leading-relaxed max-w-sm font-medium">
            Enterprise Health Intelligence Platform dedicated to providing clinical-grade assessment tools and expert medical insights for professional healthcare environments.
          </p>
          <div className="flex gap-6 text-white/20">
            {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((social) => (
              <span key={social} className="text-[9px] uppercase tracking-widest hover:text-[#4fd1c5] cursor-pointer transition-colors font-bold">
                {social}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-[10px] font-display font-bold uppercase tracking-widest text-[#4fd1c5]">Resources</h4>
          <ul className="space-y-3 text-[10px] text-white/40 font-bold uppercase tracking-widest">
            {['Clinical Guidelines', 'Research Papers', 'Health Statistics', 'Expert Advisory', 'Case Studies'].map((link) => (
              <li key={link} className="hover:text-white cursor-pointer transition-colors">{link}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-[10px] font-display font-bold uppercase tracking-widest text-[#ff8fab]">Company</h4>
          <ul className="space-y-3 text-[10px] text-white/40 font-bold uppercase tracking-widest">
            {['About Us', 'Our Mission', 'Global Partners', 'Contact Support', 'Privacy Policy'].map((link) => (
              <li key={link} className="hover:text-white cursor-pointer transition-colors">{link}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[9px] uppercase tracking-[0.2em] text-white/20 font-bold text-center md:text-left leading-relaxed">
          <p>© 2026 Enterprise Health Systems. All clinical data is verified against international standards.</p>
          <p className="mt-1">For professional awareness only. Consult certified practitioners for clinical diagnosis.</p>
        </div>
        <div className="flex gap-6 text-white/20">
          <span className="text-[9px] uppercase tracking-widest hover:text-[#4fd1c5] cursor-pointer transition-colors font-bold">Privacy</span>
          <span className="text-[9px] uppercase tracking-widest hover:text-[#4fd1c5] cursor-pointer transition-colors font-bold">Terms</span>
          <span className="text-[9px] uppercase tracking-widest hover:text-[#4fd1c5] cursor-pointer transition-colors font-bold">Cookies</span>
        </div>
      </div>
    </footer>
  );
}
