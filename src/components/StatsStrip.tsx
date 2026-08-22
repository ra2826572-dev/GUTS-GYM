import React from 'react';
import { Star, MessageSquare, Clock, Users } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      icon: Star,
      value: '4.7★',
      label: 'Google Rating',
      detail: 'Highest verified score',
      highlight: true,
    },
    {
      icon: MessageSquare,
      value: `${GYM_INFO.reviewCount}+`,
      label: 'Google Reviews',
      detail: 'Real member feedback',
      highlight: false,
    },
    {
      icon: Clock,
      value: '6 AM – 12 AM',
      label: 'Training Hours',
      detail: '18 hours continuous daily',
      highlight: false,
    },
    {
      icon: Users,
      value: 'Ladies & Gents',
      label: 'Fitness Lounge',
      detail: 'Executive dedicated spaces',
      highlight: false,
    },
  ];

  return (
    <section id="stats" className="relative z-20 -mt-2 bg-[#0d0d10] border-y border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-zinc-800/80">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                id={`stat-card-${index}`}
                className={`pt-4 sm:pt-0 ${index !== 0 ? 'lg:pl-8' : ''} flex flex-col justify-center`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-red-500">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="text-xs uppercase font-bold tracking-widest text-zinc-400">
                    {stat.label}
                  </span>
                </div>
                <div className="font-display text-3xl sm:text-4xl xl:text-5xl text-white font-extrabold tracking-tight">
                  {stat.value.includes('★') ? (
                    <span>
                      4.7<span className="text-amber-400 text-2xl sm:text-3xl ml-1">★</span>
                    </span>
                  ) : (
                    stat.value
                  )}
                </div>
                <p className="text-xs text-zinc-500 font-medium mt-1">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
