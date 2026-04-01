import React from 'react';
import { Home, PlusCircle, BarChart2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: PlusCircle, label: 'Report', path: '/report' },
    { icon: BarChart2, label: 'Track', path: '/feed' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 pb-safe px-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-[0_-4px_12px_rgba(0,0,0,0.05)] z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center transition-all active:scale-90 duration-150 px-4 py-1 rounded-xl",
              isActive 
                ? "text-primary bg-primary-fixed" 
                : "text-on-surface-variant hover:text-primary"
            )}
          >
            <item.icon className={cn("w-6 h-6", isActive && "fill-current")} />
            <span className="text-xs font-medium mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
