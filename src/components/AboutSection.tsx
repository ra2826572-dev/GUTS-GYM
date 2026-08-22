import React from 'react';
import { CheckCircle2, Shield, Flame, Dumbbell, Sparkles } from 'lucide-react';
import { GYM_IMAGES, GYM_INFO } from '../data/gymData';

interface AboutSectionProps {
  onOpenJoinModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenJoinModal }) => {
  const highlights = [
    'Modern training environment with geometric LED lighting',
    'High-end biomechanical strength & conditioning machines',
    'Executive fitness lounge welcoming ladies & gents',
    'Unmatched 18-hour training schedule (6 AM – 12 AM)',
    'Spotlessly sanitized and air-conditioned facility',
    'Motivating community focused on serious self-improvement',
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#09090b] overflow-hidden">
      {/* Background Watermark Typography */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] font-display text-[22vw] leading-none text-white whitespace-nowrap z-0">
        DISCIPLINE
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Luxury Framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 group">
              <img
                src={GYM_IMAGES.strength}
                alt="GUTS GYM Strength Training Floor"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[480px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80"></div>
              
              {/* Image Floating Overlays */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-md bg-[#09090b]/80 border border-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-red-500" />
                Misaq ul Mall • 3rd Floor
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-zinc-950/90 border border-zinc-800/80 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase font-bold tracking-wider text-zinc-400">Atmosphere</p>
                    <p className="text-sm font-semibold text-white">Dark Industrial Luxury & Sound Acoustics</p>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-red-600/20 border border-red-600/40 flex items-center justify-center text-red-500">
                    <Sparkles className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* Red Accent Decorative Corner */}
            <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-red-600 rounded-bl-xl pointer-events-none -z-10"></div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col">
            
            {/* Section Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-red-600"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">
                ABOUT GUTS GYM
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold tracking-tight leading-[0.95] uppercase mb-6">
              MORE THAN A GYM.<br />
              <span className="text-red-500">A PLACE TO LEVEL UP.</span>
            </h2>

            {/* Paragraphs */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed mb-6">
              <strong className="text-white font-semibold">GUTS GYM</strong> is designed for people who are serious about improving their strength, fitness, confidence, and lifestyle. Located at Misaq ul Mall in Faisalabad, our fitness lounge combines modern equipment with a motivating environment built for consistent training.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
              Whether you are an experienced lifter targeting new personal bests or someone beginning a transformative health journey, GUTS provides the space, equipment, and focused atmosphere to make every repetition count.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300 font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenJoinModal}
                className="px-6 py-3.5 rounded-md bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-600/25 flex items-center gap-2 group"
              >
                <Dumbbell className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                START YOUR JOURNEY
              </button>
              
              <a
                href="#location"
                className="px-5 py-3.5 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-bold uppercase tracking-wider transition-all"
              >
                VISIT 3RD FLOOR
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
