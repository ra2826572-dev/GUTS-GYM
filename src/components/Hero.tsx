import React from 'react';
import { Star, ChevronDown, Dumbbell, Compass, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { GYM_INFO, GYM_IMAGES } from '../data/gymData';
import { getGymOpenStatus } from '../utils/timeUtils';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  const openStatus = getGymOpenStatus();

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#09090b]"
    >
      {/* Background Image with Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={GYM_IMAGES.hero}
          alt="GUTS GYM Luxury Interior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-slow"
        />
        {/* Deep dark cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-[#09090b]/60"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#09090b]/50 to-[#09090b]/95"></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      {/* Floating subtle ambient red glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-red-700/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 animate-fadeIn">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-md text-[11px] font-semibold tracking-wider uppercase text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span>Misaq ul Mall, Faisalabad</span>
          </div>

          {/* Faisalabad Experience Label */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-800/60 backdrop-blur-md text-[11px] font-bold tracking-widest uppercase text-red-400">
            <Sparkles className="w-3 h-3 text-red-400" />
            <span>FAISALABAD&apos;S PREMIUM FITNESS EXPERIENCE</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1
          id="hero-main-heading"
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-extrabold tracking-tight leading-[0.92] uppercase mb-6 drop-shadow-2xl"
        >
          <span className="block text-white">BUILD STRENGTH.</span>
          <span className="block text-zinc-300">BUILD DISCIPLINE.</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-400">
            BUILD YOURSELF.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed mb-8 sm:mb-10 text-balance">
          A premium fitness lounge for ladies and gents, equipped for serious training, transformation, and long-term results on the 3rd Floor of Misaq ul Mall.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mb-10">
          <button
            onClick={onOpenJoinModal}
            id="hero-primary-cta"
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-200 shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            <Dumbbell className="w-5 h-5 transition-transform group-hover:rotate-45 text-white" />
            <span>JOIN GUTS GYM</span>
          </button>

          <a
            href="#about"
            id="hero-secondary-cta"
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-100 hover:text-white text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-200 backdrop-blur-md flex items-center justify-center gap-2 group"
          >
            <Compass className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
            <span>EXPLORE THE GYM</span>
          </a>
        </div>

        {/* Trust & Meta Info Bar */}
        <div className="w-full max-w-3xl pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-zinc-400">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white">4.7/5</span>
            <span className="text-zinc-400">Google Rating (32+ Reviews)</span>
          </div>

          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-zinc-700"></div>

          {/* Operating Hours */}
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                openStatus.isOpen ? 'bg-emerald-500 animate-ping' : 'bg-amber-500'
              }`}
            ></span>
            <span className="text-zinc-300 font-medium">Open 6 AM – 12 AM (Sat–Thu)</span>
          </div>

          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-zinc-700"></div>

          {/* Ladies & Gents Lounge */}
          <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            <span>Ladies & Gents Executive Lounge</span>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#stats"
        aria-label="Scroll to stats"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-red-500" />
      </a>
    </section>
  );
};
