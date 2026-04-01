import React from 'react';
import { 
  LayoutDashboard, 
  Clock, 
  CheckCircle2, 
  Map as MapIcon, 
  Eye, 
  Trash2, 
  Download, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { TopBar } from '../components/TopBar';
import { cn } from '@/src/lib/utils';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell } from 'recharts';

const STATS = [
  { label: 'Total Complaints', value: '1,284', trend: '+12% ↑', color: 'primary', progress: 100 },
  { label: 'Pending Approval', value: '342', trend: '+5% ↑', color: 'tertiary', progress: 33 },
  { label: 'In Progress', value: '456', trend: '-2% ↓', color: 'primary-container', progress: 50 },
  { label: 'Solved Cases', value: '486', trend: '+18% ↑', color: 'secondary', progress: 45 },
];

const CHART_DATA = [
  { name: 'Sanitation', value: 80 },
  { name: 'Water', value: 60 },
  { name: 'Potholes', value: 95 },
  { name: 'Lighting', value: 40 },
  { name: 'Encroach', value: 55 },
];

const RECENT_COMPLAINTS = [
  { id: '#PAT-9231', title: 'Broken Street Light', ward: 'Ward 23, Kankarbagh', reporter: 'Amit Kumar', time: '10 Oct, 09:45 AM', status: 'Pending' },
  { id: '#PAT-9228', title: 'Illegal Garbage Dumping', ward: 'Ward 12, Boring Road', reporter: 'Sonal Verma', time: '09 Oct, 04:20 PM', status: 'Solved' },
  { id: '#PAT-9225', title: 'Sewerage Blockage', ward: 'Ward 45, Rajendra Nagar', reporter: 'Vikash Singh', time: '09 Oct, 11:10 AM', status: 'In Progress' },
];

export const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-surface flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-full py-4 bg-slate-50 dark:bg-slate-900 w-72 border-r border-outline-variant/15 z-40">
        <div className="text-2xl font-black text-primary px-6 py-8 font-headline">
          Patna Admin Portal
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <a className="flex items-center gap-4 py-3 px-6 bg-primary-fixed text-on-primary-fixed rounded-r-full font-bold border-l-4 border-primary transition-all" href="#">
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-headline">Total Complaints</span>
          </a>
          {[
            { icon: Clock, label: 'Pending' },
            { icon: CheckCircle2, label: 'Solved' },
            { icon: MapIcon, label: 'Area Data' },
          ].map(item => (
            <a key={item.label} className="flex items-center gap-4 py-3 px-6 text-on-surface-variant hover:pl-2 hover:bg-surface-container-high transition-all rounded-r-full" href="#">
              <item.icon className="w-5 h-5" />
              <span className="font-headline">{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="px-6 py-4 mt-auto">
          <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNjnw5G7R0nOjPucbhxjYAKxhDZwxFb_HYEDtE6AySrOzbK3Yle4252RiYPm6CtiQuFFUOpy44nD6_EMcBmZs-B6Hoyr392Vvr5ZAUYKF0d90suKV1BLiLOk57f8YDGQospnD8mk3GNYsiGIHSksP7nWiJ2eY4CqPWSUbC7uWn5sU5mPFyCDUtD8zX-xjvStYZTnseIX6wkr4_JKo06cVo7yJEbHeew02DiIt6FIgx1HO5Gw1IEdC3RvpnYZYblX-aUzviZC2Yi5w" 
              alt="Admin" 
              className="w-10 h-10 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">R.K. Shrivastava</p>
              <p className="text-xs text-on-surface-variant">Chief Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 flex-1 min-h-screen flex flex-col">
        <TopBar />
        
        <div className="pt-20 lg:pt-8 px-8 max-w-7xl w-full mx-auto space-y-8 pb-12">
          {/* Stats Grid */}
          <section>
            <h2 className="text-2xl font-black text-on-surface mb-6 font-headline">Executive Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STATS.map(stat => (
                <div key={stat.label} className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 flex flex-col gap-2">
                  <span className="text-sm font-medium text-on-surface-variant font-label">{stat.label}</span>
                  <div className="flex items-baseline gap-2">
                    <span className={cn("text-4xl font-black", `text-${stat.color}`)}>{stat.value}</span>
                    <span className={cn("text-xs font-bold", stat.trend.includes('↑') ? "text-secondary" : "text-on-surface-variant")}>
                      {stat.trend}
                    </span>
                  </div>
                  <div className="mt-4 h-1 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className={cn("h-full", `bg-${stat.color}`)} style={{ width: `${stat.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Charts Section */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-bold font-headline">Issues per Category</h3>
                <button className="text-xs font-bold text-primary flex items-center gap-1">
                  VIEW FULL REPORT <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={CHART_DATA}>
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fontWeight: 700, fill: '#424752' }} 
                    />
                    <Tooltip cursor={{ fill: 'transparent' }} />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                      {CHART_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="#003f87" fillOpacity={0.2} className="hover:fill-opacity-100 transition-all cursor-pointer" />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-xl relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiP-wGD8mlPc3rRHVShfixpWEbTzUu-W6NhXQ8dVa2XPleH3nC584-qVqcg7-ICTtxCWepxVOsq6zVLUWKfVw2WtzCffWmrUYdB-XJluuBUvjp35IwAvNJJKpafAbReOeCCakG01yQpwWUw-C07UhTZ_wII1xawJflm5tevMaEfETJEcBzE7kH6xkN9BRzjXf5cF05NGurb035pw5LoZHYgYA0o-k1e2OwqnwOfljYH6xFtTuAz1-QD6HLGr_Z9qt8ieIE3odvOfc" 
                  alt="Map" 
                  className="w-full h-full object-cover opacity-50 grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative z-10 p-6 flex flex-col h-full bg-gradient-to-t from-surface-container-low to-transparent">
                <h3 className="text-lg font-bold font-headline mb-auto">Ward Heatmap</h3>
                <div className="p-4 bg-white/90 backdrop-blur rounded-lg shadow-sm">
                  <p className="text-xs font-bold text-on-surface-variant mb-2 uppercase tracking-wider">Hotspot Detected</p>
                  <p className="text-sm font-black text-primary">Ward 23: Kankarbagh</p>
                  <p className="text-xs text-on-surface-variant mt-1">42 active complaints in 24h</p>
                </div>
              </div>
            </div>
          </section>

          {/* Table Section */}
          <section className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-xl font-bold font-headline">Recent Complaints</h3>
              <div className="flex flex-wrap gap-3">
                <div className="relative">
                  <select className="appearance-none bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-2 pr-10 text-sm font-medium focus:ring-primary focus:border-primary outline-none">
                    <option>All Wards</option>
                    <option>Ward 12 (Boring Rd)</option>
                    <option>Ward 23 (Kankarbagh)</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-on-surface-variant pointer-events-none" />
                </div>
                <button className="bg-primary text-white px-6 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <Download className="w-4 h-4" /> Export Data
                </button>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low">
                      {['ID', 'Category / Ward', 'Reporter', 'Timestamp', 'Status', 'Actions'].map(h => (
                        <th key={h} className={cn(
                          "px-6 py-4 text-xs font-black text-on-surface-variant uppercase tracking-wider font-label",
                          h === 'Actions' && "text-right"
                        )}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y-0">
                    {RECENT_COMPLAINTS.map((c, i) => (
                      <tr key={c.id} className={cn(
                        "hover:bg-primary/5 transition-colors",
                        i % 2 !== 0 && "bg-surface-container-low/30"
                      )}>
                        <td className="px-6 py-6 font-mono text-xs font-bold text-primary">{c.id}</td>
                        <td className="px-6 py-6">
                          <p className="text-sm font-bold">{c.title}</p>
                          <p className="text-xs text-on-surface-variant">{c.ward}</p>
                        </td>
                        <td className="px-6 py-6">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-slate-200" />
                            <span className="text-sm font-medium">{c.reporter}</span>
                          </div>
                        </td>
                        <td className="px-6 py-6 text-sm text-on-surface-variant">{c.time}</td>
                        <td className="px-6 py-6">
                          <span className={cn(
                            "px-3 py-1 text-[10px] font-black rounded-full uppercase",
                            c.status === 'Solved' ? "bg-secondary-container text-on-secondary-container" : "bg-tertiary-container/10 text-tertiary"
                          )}>
                            {c.status}
                          </span>
                        </td>
                        <td className="px-6 py-6 text-right">
                          <div className="flex justify-end gap-2">
                            <button className="p-2 hover:bg-surface-container rounded-lg transition-colors text-primary"><Eye className="w-5 h-5" /></button>
                            <button className="p-2 hover:bg-error-container/20 rounded-lg transition-colors text-error"><Trash2 className="w-5 h-5" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
