import React, { useState } from 'react';
import { Camera, Send, LocateFixed, MapPin, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TopBar } from '../components/TopBar';
import { BottomNav } from '../components/BottomNav';
import { CATEGORIES } from '../types';
import { cn } from '@/src/lib/utils';

export const ReportIssuePage = () => {
  const navigate = useNavigate();
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <div className="min-h-screen bg-surface">
      <TopBar title="Report Issue" showBack />
      
      <main className="pt-24 pb-32 px-8 max-w-md mx-auto space-y-8">
        {/* Photo Upload Field */}
        <section>
          <div className="group relative aspect-video w-full rounded-full bg-surface-container-low border-2 border-dashed border-outline-variant flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-all hover:bg-surface-container hover:border-primary">
            <div className="flex flex-col items-center gap-2">
              <Camera className="w-10 h-10 text-outline" />
              <span className="font-label text-sm font-semibold text-on-surface-variant">Upload Photo</span>
              <span className="font-label text-xs text-outline">Capture the issue clearly</span>
            </div>
            <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
          </div>
        </section>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <label className="block font-label text-sm font-semibold text-on-surface-variant ml-1">Title</label>
            <input 
              className="w-full h-12 bg-surface-container-lowest border-outline-variant/20 rounded-xl px-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-on-surface" 
              placeholder="Short summary of the problem" 
              type="text" 
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="block font-label text-sm font-semibold text-on-surface-variant ml-1">Category</label>
            <div className="relative">
              <select className="w-full h-12 bg-surface-container-lowest border-outline-variant/20 rounded-xl px-4 appearance-none focus:ring-2 focus:ring-primary outline-none transition-all">
                {CATEGORIES.map(cat => <option key={cat}>{cat}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline w-5 h-5" />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block font-label text-sm font-semibold text-on-surface-variant ml-1">Description (Optional)</label>
            <textarea 
              className="w-full bg-surface-container-lowest border-outline-variant/20 rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all resize-none" 
              placeholder="Provide more details to help us solve it faster..." 
              rows={3} 
            />
          </div>

          {/* Location Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between ml-1">
              <label className="font-label text-sm font-semibold text-on-surface-variant">Detected Location</label>
              <span className="flex items-center gap-1 text-xs font-bold text-secondary uppercase">
                <LocateFixed className="w-4 h-4 fill-current" />
                Live
              </span>
            </div>
            <div className="relative w-full h-32 rounded-full overflow-hidden bg-surface-container-low">
              <img 
                className="w-full h-full object-cover grayscale-[0.2]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4VzfZ-__LFr39YVNP9vf2GPvUQUQUAoarGNcVEF5K31MlPrpbK94LU30jzvnwUwLOQm-lAfsoFzRu-TsCCZ-tKIUbujn4o4eAUeZWEBGZSKPEOgOODvytk0UJU-ApavyZxxMBF4t8gvhYwmBrdOJ-F4Yldt4wchtlDJnwgPCFssTpuJX69Lmjyb94IOK-4aoNmWNcjdn3iZem0YZaJbaNUMy2xXpUOFoKJECE1_P7dfw9k0uLrmYW9akb60cM_9IRs_xDBt5-Pe0" 
                alt="Map Preview"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
              <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg p-2 flex items-center gap-2 shadow-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-on-surface truncate">Kankarbagh, Patna, Bihar 800020</span>
              </div>
            </div>
          </div>

          {/* Toggle Anonymous */}
          <div className="flex items-center justify-between bg-surface-container-low p-4 rounded-xl">
            <div className="flex flex-col">
              <span className="font-label text-sm font-bold text-on-surface">Submit Anonymously</span>
              <span className="text-xs text-outline">Your identity will be hidden</span>
            </div>
            <button 
              onClick={() => setIsAnonymous(!isAnonymous)}
              className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none",
                isAnonymous ? "bg-primary" : "bg-outline-variant"
              )}
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                  isAnonymous ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          onClick={() => navigate('/feed')}
          className="w-full h-14 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-full shadow-lg active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Submit Complaint
        </button>
      </main>

      <BottomNav />
    </div>
  );
};
