import React from 'react';
import { Dumbbell, Users, Clock, Sparkles, Target, Flame } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/gymData';

const iconMap: Record<string, React.ElementType> = {
  Dumbbell,
  Users,
  Clock,
  Sparkles,
  Target,
  Flame,
};

export const WhyChooseSection: React.FC = () => {
  return (
    <section id="why-us" className="relative py-20 lg:py-28 bg-[#0b0b0e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest mb-3">
            <span>THE GUTS STANDARD</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold tracking-tight uppercase mb-4">
            WHY TRAIN AT <span className="text-red-500">GUTS GYM</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Every square foot is engineered to remove friction, maximize focus, and foster an environment where true physical transformations take place.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const Icon = iconMap[item.iconName] || Dumbbell;
            return (
              <div
                key={item.id}
                id={`feature-card-${index}`}
                className="group relative p-7 rounded-xl bg-zinc-900/60 hover:bg-zinc-900/90 border border-white/5 hover:border-red-600/40 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-900/10 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Subtle top-right accent glow on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/0 group-hover:bg-red-600/10 rounded-bl-full transition-all duration-300 pointer-events-none"></div>

                <div>
                  {/* Top Bar: Icon + Stat/Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    {item.stat && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-red-400 transition-colors">
                        {item.stat}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl text-white font-bold tracking-wide uppercase mb-2 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Red Accent Line */}
                <div className="w-8 h-[2px] bg-zinc-800 group-hover:w-full group-hover:bg-red-600 transition-all duration-300 mt-6"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
