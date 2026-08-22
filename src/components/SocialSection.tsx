import React from 'react';
import { Instagram, Facebook, ArrowUpRight, Users, Flame, Dumbbell } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const SocialSection: React.FC = () => {
  return (
    <section id="social" className="relative py-16 lg:py-24 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-zinc-900 border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading & Copy */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest mb-3">
                <Users className="w-3.5 h-3.5" />
                <span>ONLINE COMMUNITY</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl text-white font-extrabold tracking-tight uppercase mb-3">
                FOLLOW THE <span className="text-red-500">GUTS COMMUNITY</span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Stay updated with daily member workouts, technique tutorials, training schedules, transformation stories, and lounge announcements.
              </p>
            </div>

            {/* Right Column: Social Links Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Instagram Card */}
              <a
                href={GYM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="social-instagram-card"
                className="group p-5 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-red-500/50 transition-all duration-300 shadow-lg hover:shadow-red-900/20 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-600 to-purple-600 flex items-center justify-center text-white shadow-md">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">Instagram</p>
                  <p className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                    {GYM_INFO.instagram}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">Official GUTS GYM Feed</p>
                </div>
              </a>

              {/* Facebook Card */}
              <a
                href={GYM_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="social-facebook-card"
                className="group p-5 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-red-500/50 transition-all duration-300 shadow-lg hover:shadow-red-900/20 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">Facebook</p>
                  <p className="text-sm font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1">
                    {GYM_INFO.facebook}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">Executive Lounge Page</p>
                </div>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
