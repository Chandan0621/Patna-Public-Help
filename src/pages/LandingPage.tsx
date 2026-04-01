import React from 'react';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TopBar } from '../components/TopBar';
import { BottomNav } from '../components/BottomNav';

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface">
      <TopBar />
      
      <main className="pt-24 pb-32 px-6 max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-sm font-bold w-fit">
              <MapPin className="w-4 h-4" />
              Patna District
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-on-surface font-headline leading-[1.1] tracking-tight">
              Report your local <br/>
              <span className="text-primary bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">civic issues</span>
            </h2>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Connecting the citizens of Patna directly with municipal authorities for a cleaner, safer, and better city.
            </p>
          </div>
        </section>

        {/* Form Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Selection Form */}
          <div className="md:col-span-7 bg-surface-container-lowest rounded-xl p-8 editorial-shadow">
            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); navigate('/report'); }}>
              {/* District Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-outline font-label uppercase tracking-widest px-1">District / जिला</label>
                <div className="relative">
                  <input 
                    className="w-full h-14 bg-surface-container-low border-none rounded-lg px-4 font-semibold text-on-surface cursor-not-allowed" 
                    readOnly 
                    type="text" 
                    value="Patna"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-outline">
                    <MapPin className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Block/Zone Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-outline font-label uppercase tracking-widest px-1">Select Block or Zone / ब्लॉक या ज़ोन चुनें</label>
                <div className="relative group">
                  <select className="w-full h-16 appearance-none bg-surface-container-lowest border-2 border-outline-variant/20 hover:border-primary/30 focus:border-primary focus:ring-0 rounded-lg px-4 font-medium text-on-surface transition-all cursor-pointer">
                    <option disabled selected value="">Choose Area...</option>
                    <option value="patna_sadar">Patna Sadar</option>
                    <option value="phulwari_sharif">Phulwari Sharif</option>
                    <option value="digha">Digha</option>
                    <option value="bankipore">Bankipore</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none group-focus:rotate-180 transition-transform">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </span>
                </div>
              </div>

              {/* Ward/Panchayat Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-outline font-label uppercase tracking-widest px-1">Ward or Panchayat / वार्ड या पंचायत चुनें</label>
                <div className="relative group">
                  <select className="w-full h-16 appearance-none bg-surface-container-lowest border-2 border-outline-variant/20 hover:border-primary/30 focus:border-primary focus:ring-0 rounded-lg px-4 font-medium text-on-surface transition-all cursor-pointer">
                    <option disabled selected value="">Select specific locality...</option>
                    <option value="ward_1">Ward No. 1</option>
                    <option value="ward_2">Ward No. 2</option>
                    <option value="ward_3">Ward No. 3</option>
                    <option value="panchayat_a">Panchayat A</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none group-focus:rotate-180 transition-transform">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </span>
                </div>
              </div>

              {/* Primary Action */}
              <div className="pt-4">
                <button 
                  className="w-full h-16 bg-gradient-to-br from-primary to-primary-container text-white font-bold text-lg rounded-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                  type="submit"
                >
                  Continue to Report
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </form>
          </div>

          {/* Informational Cards */}
          <div className="md:col-span-5 space-y-6">
            {/* Status Card */}
            <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-secondary">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary-container rounded-lg text-on-secondary-container">
                  <CheckCircle2 className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h3 className="font-bold text-on-surface font-headline">Fast Resolution</h3>
                  <p className="text-sm text-on-surface-variant mt-1">Average resolution time for civic issues in Patna has improved by 40% this year.</p>
                </div>
              </div>
            </div>

            {/* Bento Info Piece */}
            <div className="relative overflow-hidden group rounded-xl aspect-square md:aspect-auto md:h-64 bg-slate-200">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuuujeWN1BDoSz-NDq_cfxJp987zIpU1MaHiigRVK6YqBw8kGqeuUXsAhSljzCCmOLwYExY7Z9FZTiTGINL-9SJc0-waNdLy_a7kNCGzqD9bo9ffJlQ19UojvWHiSiOQGakFiM1ABXMoXw8tGV7l3ZZI4bZWq7Z1filLW9NKiAdg7vMSWKt5Sb6PI9ZvUHvNKTIoVrEebW0IZ6QKrtevRzaWI_qTPz9gZ9kTY1xrsv0aocy7LRdzATO0MAsoNFpxlwOjPXqKzytKA" 
                alt="Patna Streets" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-xl leading-snug">Help us make Patna a cleaner city for everyone.</p>
                <div className="flex gap-2 mt-4">
                  {['Cleanliness', 'Roads', 'Lighting'].map(tag => (
                    <span key={tag} className="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-[10px] uppercase font-bold text-white tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};
