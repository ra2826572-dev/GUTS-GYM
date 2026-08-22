import React from 'react';
import { Target, CheckCircle, ArrowRight, Zap, Dumbbell } from 'lucide-react';
import { PROGRAMS_ITEMS } from '../data/gymData';

interface ProgramsSectionProps {
  onOpenJoinModal: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="programs" className="relative py-20 lg:py-28 bg-[#0b0b0e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>STRUCTURED METHODOLOGIES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold tracking-tight uppercase mb-4">
            TRAIN WITH <span className="text-red-500">PURPOSE</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Every body and ambition is unique. Choose a disciplined path tailored to your personal physical aspirations.
          </p>
        </div>

        {/* 6 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS_ITEMS.map((prog, index) => (
            <div
              key={prog.id}
              id={`program-card-${index}`}
              className="group relative p-7 rounded-xl bg-zinc-900/60 hover:bg-zinc-900/90 border border-white/5 hover:border-red-600/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header: Intensity Tag & Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase font-bold tracking-widest text-zinc-500 group-hover:text-red-400 transition-colors">
                    0{index + 1}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      prog.intensity === 'Elite'
                        ? 'bg-red-950 text-red-400 border border-red-800'
                        : prog.intensity === 'High'
                        ? 'bg-amber-950 text-amber-400 border border-amber-800'
                        : 'bg-zinc-800 text-zinc-300'
                    }`}
                  >
                    {prog.intensity} Intensity
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-3xl text-white font-bold tracking-wide uppercase mb-1 group-hover:text-red-400 transition-colors">
                  {prog.title}
                </h3>
                
                <p className="text-xs uppercase tracking-wider font-semibold text-red-500 mb-3">
                  {prog.tagline}
                </p>

                {/* Description */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                  {prog.description}
                </p>

                {/* Target Metric */}
                <div className="p-3 rounded-lg bg-zinc-950/70 border border-zinc-800/80 mb-5">
                  <p className="text-[11px] uppercase font-bold tracking-wider text-zinc-400 mb-0.5">Primary Target</p>
                  <p className="text-xs font-semibold text-zinc-200">{prog.target}</p>
                </div>

                {/* Feature bullets */}
                <div className="space-y-2 mb-6">
                  {prog.features.map((feat, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2 text-xs text-zinc-400">
                      <Zap className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Inquire CTA */}
              <button
                onClick={onOpenJoinModal}
                className="w-full py-2.5 rounded-md bg-zinc-950 hover:bg-red-600 border border-zinc-800 hover:border-red-600 text-zinc-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group/btn"
              >
                <span>Inquire About {prog.title}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
