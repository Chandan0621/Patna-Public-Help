import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

interface TopBarProps {
  title?: string;
  showBack?: boolean;
}

export const TopBar = ({ title = "Patna Citizen", showBack = false }: TopBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-6 h-16 w-full max-w-4xl mx-auto">
        <div className="flex items-center gap-3">
          {showBack && (
            <button 
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 rounded-full hover:bg-surface-container-low transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-primary" />
            </button>
          )}
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIfow7lrcIziF17AyAxP8DKJFs74dGTBpQdepOioNQEsbsITDmiuC_u6FSWyA4Ht6546JLkoWzhDe3niFO2n2fJ_DHheGEcp2R7oHTVV4Qljx7VJk66_PUhI_77uLlm9rUhmdbW5A9yK8Nnw8DYvYfLmqbBMMQaXgQMU-HFq58w3ouMWIzzTtdyGkScoh82X-AnfhqQGKWgUmSLSsDk8f29Cw3WhOS_bvdZyBEZ4diKfWLTLv9P3AnCM0SBMv0X8AplfBg6oZnR_c" 
              alt="Patna City Seal" 
              className="w-8 h-8 filter brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-xl font-bold text-primary font-headline tracking-tight">
            {isAdmin ? "Patna Admin Portal" : title}
          </h1>
        </div>
        <button className="bg-primary-fixed hover:bg-primary/10 text-on-primary-fixed-variant px-4 py-1.5 rounded-full text-sm font-semibold transition-colors active:scale-95 duration-150">
          हिंदी
        </button>
      </div>
    </header>
  );
};
