import React, { useState } from 'react';
import { MapPin, Calendar, ThumbsUp, CheckCircle2, Navigation } from 'lucide-react';
import { TopBar } from '../components/TopBar';
import { BottomNav } from '../components/BottomNav';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

const MOCK_ISSUES = [
  {
    id: '1',
    title: 'Severe Pothole near Gandhi Maidan',
    category: 'Road',
    status: 'pending',
    timestamp: '2 hours ago',
    location: '0.4 km away',
    upvotes: 24,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHYBqCH7ck0XyBWfX5QMBXiexwf0dOLH1UW8QgVRxY45BmpoYBaibBVILAiuimtH1FO0ZralvSmWnlvkXLVsMxmZ0mgRQmG1Mld9nRCUFvPodsKQRSLlFAC_EFVWxz979JVAXTFaWx8aA6CxdOy3tdmK-3-b0qiB3ofjTnp9qDLJOrCY_oHSNhCQGBBqSGvGkttXnPBIFjt_GUFY-I4Hv7BimNnkFQ_rdutOYacO8kJqkpPttKYtv1fB_aXEYNNMnVrtEZ1y3MwHE'
  },
  {
    id: '2',
    title: 'Uncollected Garbage at Boring Road',
    category: 'Waste',
    status: 'solved',
    timestamp: 'Yesterday',
    location: '1.2 km away',
    upvotes: 56,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaj6XoKEDd8lV9dqTk6cadod2Fx6v9sPLxZ5DxjmojNt4zuAGvmWd0EpoUnTywZTFas-TYJFMvqk6MiTrt88Ggt8YE83zWn31zMrR0z9Wo7lfGgHHMk83xha1-g83XbyquUMaOdaHAqQFLFaX2nyCKxj9oPIP7J1N-taMt7_NTH9q3NZpQPmenL870e48GUlkb7ZonbuSEf9luKMzdTkG3GPqkIT2mAon3WXMBpNRyDZ0gTwplWdkRDa_87UXkXAQG3BF2JGZHP-w'
  },
  {
    id: '3',
    title: 'Street Lights Not Working - Kankarbagh',
    category: 'Light',
    status: 'pending',
    timestamp: '5 hours ago',
    location: '2.8 km away',
    upvotes: 12,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDihWNx8sLi97RAPow2AHr9PfjACCogyymUhbJegeF4-jpqMsV-X6mZ2H1wn_U_X-kuQocbcdBRF0wDEQNabY3knmzsoQJ4uYS_PQja1axQZdn4Ue4N5pHWXhXZrF4HHMGq01qmExTnzJHwyhOtUguEFnIVIf1Fx_KS2Vs1NszDW4xkMjrRsXmapqSnFFVfh6jyYkkgDKHMjoauX4F2U-egs7YPD4JiCZ3xruS0AaxdkNOia_leUHmEO7ABERqZHwDByJygYk3nXAk'
  }
];

export const CommunityFeedPage = () => {
  const [activeTab, setActiveTab] = useState('All Issues');

  return (
    <div className="min-h-screen bg-surface">
      <TopBar />
      
      <main className="pt-20 pb-24 max-w-md mx-auto px-6">
        {/* Contextual Location Pill */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
            <MapPin className="w-4 h-4" />
            <span>Ward No. 14, Fraser Road</span>
          </div>
          <h2 className="mt-4 text-3xl font-headline font-extrabold tracking-tight text-primary leading-tight">Community Feed</h2>
          <p className="text-on-surface-variant text-sm mt-1">Real-time reports from your neighbors</p>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-6 scrollbar-hide">
          {['All Issues', 'My Ward', 'Solved'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "whitespace-nowrap px-5 py-2.5 rounded-full font-semibold text-sm transition-all active:scale-95",
                activeTab === tab 
                  ? "bg-primary text-on-primary shadow-md" 
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Issues Feed */}
        <div className="space-y-8">
          {MOCK_ISSUES.map((issue) => (
            <motion.article 
              key={issue.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm transition-all hover:translate-y-[-2px]",
                issue.status === 'solved' && "opacity-90"
              )}
            >
              <div className="relative h-48 w-full">
                <img 
                  src={issue.imageUrl} 
                  alt={issue.title} 
                  className={cn("w-full h-full object-cover", issue.status === 'solved' && "grayscale-[0.2]")}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-primary text-on-primary text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-sm">
                  {issue.category}
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-headline font-bold text-on-surface leading-tight">{issue.title}</h3>
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                    issue.status === 'solved' 
                      ? "bg-secondary-container text-on-secondary-container" 
                      : "bg-tertiary-container/10 text-tertiary"
                  )}>
                    {issue.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{issue.timestamp}</span>
                  <span className="mx-1">•</span>
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{issue.location}</span>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-surface-variant/30">
                  <div className="flex items-center gap-2">
                    {issue.status === 'solved' ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-secondary fill-current" />
                        <span className="text-[11px] font-semibold text-secondary">Resolved by PMC Team</span>
                      </>
                    ) : (
                      <div className="flex -space-x-2">
                        {[1, 2].map(i => (
                          <div key={i} className="w-6 h-6 rounded-full border-2 border-surface-container-lowest bg-slate-200" />
                        ))}
                        <span className="pl-4 text-[11px] font-medium text-on-surface-variant">{issue.upvotes} citizens upvoted</span>
                      </div>
                    )}
                  </div>
                  <button className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-full transition-all active:scale-90",
                    issue.status === 'solved' 
                      ? "bg-surface-container-low text-slate-400 cursor-not-allowed" 
                      : "bg-surface-container-low text-primary hover:bg-primary-fixed"
                  )}>
                    <ThumbsUp className={cn("w-4 h-4", issue.status !== 'solved' && "fill-current")} />
                    <span className="text-sm font-bold">{issue.upvotes}</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};
