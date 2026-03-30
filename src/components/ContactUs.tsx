import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

export function ContactUs() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Consultation',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert('Thank you for your inquiry. Our clinical advisory board will contact you shortly.');
  };

  const contactInfo = [
    { icon: Phone, label: 'Professional Line', value: '+1 (800) ADV-HLTH', desc: 'Mon-Fri, 9am-6pm EST' },
    { icon: Mail, label: 'Clinical Inquiries', value: 'advisory@advancehealth.com', desc: '24/7 Response Team' },
    { icon: MapPin, label: 'Global Headquarters', value: '700 Health Plaza, NY', desc: 'Innovation District' },
  ];

  return (
    <div className="space-y-16">
      <div className="flex items-end justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <h2 className="text-5xl font-display font-bold">Contact Our Board</h2>
          <p className="text-white/40 text-lg max-w-xl">
            Direct access to our clinical advisory board for enterprise partnerships, professional consultations, and platform support.
          </p>
        </motion.div>
        <MessageSquare className="text-[#4fd1c5] opacity-10 hidden md:block" size={100} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-7 p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Dr. Jane Smith"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4fd1c5]/50 transition-colors"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-1">Professional Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="jane.smith@hospital.org"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4fd1c5]/50 transition-colors"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-1">Inquiry Type</label>
              <select 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4fd1c5]/50 transition-colors appearance-none"
                value={formState.subject}
                onChange={(e) => setFormState({...formState, subject: e.target.value})}
              >
                <option value="Consultation" className="bg-[#050505]">Clinical Consultation</option>
                <option value="Enterprise" className="bg-[#050505]">Enterprise Partnership</option>
                <option value="Support" className="bg-[#050505]">Technical Support</option>
                <option value="Other" className="bg-[#050505]">Other Inquiries</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-1">Message</label>
              <textarea 
                required
                rows={5}
                placeholder="How can our clinical board assist you today?"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#4fd1c5]/50 transition-colors resize-none"
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 rounded-lg bg-[#4fd1c5] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#3db8ae] transition-all flex items-center justify-center gap-2 group"
            >
              Send Inquiry
              <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>

        {/* Info Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          {contactInfo.map((info, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-4 group hover:bg-white/[0.04] transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[#4fd1c5]/5 flex items-center justify-center text-[#4fd1c5] shrink-0">
                <info.icon size={20} />
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-widest font-bold text-white/30 mb-1">{info.label}</div>
                <div className="text-lg font-display font-bold text-white mb-1">{info.value}</div>
                <div className="text-[10px] text-white/20 font-medium">{info.desc}</div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-xl bg-linear-to-br from-[#ff8fab]/10 to-transparent border border-[#ff8fab]/10 space-y-4"
          >
            <div className="flex items-center gap-2 text-[#ff8fab]">
              <Clock size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Emergency Protocol</span>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              For immediate clinical emergencies, please contact your local emergency services. This platform is for professional health awareness and advisory only.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
