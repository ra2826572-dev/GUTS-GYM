import React from 'react';
import { Phone, Navigation, Flame, Dumbbell, Sparkles } from 'lucide-react';
import { GYM_INFO, GYM_IMAGES } from '../data/gymData';

interface MembershipCTAProps {
  onOpenJoinModal: () => void;
}

export const MembershipCTA: React.FC<MembershipCTAProps> = ({ onOpenJoinModal }) => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#09090b] overflow-hidden">
      {/* Background with Dark Mask */}
      <div className="absolute inset-0 z-0">
        <img
          src={GYM_IMAGES.hero}
          alt="Guts Gym Training Floor Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/90 to-[#09090b]/80"></div>
        <div className="absolute inset-0 bg-red-950/20 mix-blend-multiply"></div>
      </div>

      {/* Red accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-900/40 border border-red-700/50 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-red-400 mb-6">
          <Flame className="w-3.5 h-3.5 text-red-400" />
          <span>JOIN THE EXECUTIVE FITNESS LOUNGE</span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white font-extrabold tracking-tight uppercase leading-[0.9] mb-6">
          YOUR NEXT LEVEL<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-400">
            STARTS HERE.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="max-w-2xl text-base sm:text-xl text-zinc-300 font-normal leading-relaxed mb-10 text-balance">
          Stop waiting for the perfect time. Start building the stronger version of yourself today with Faisalabad&apos;s leading fitness equipment and motivating community.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg">
          <a
            href={`tel:${GYM_INFO.phoneClean}`}
            id="cta-call-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-200 shadow-2xl shadow-red-600/40 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group"
          >
            <Phone className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>CALL {GYM_INFO.phone}</span>
          </a>

          <a
            href={GYM_INFO.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-directions-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-zinc-100 hover:text-white text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-200 backdrop-blur-md flex items-center justify-center gap-2.5"
          >
            <Navigation className="w-5 h-5 text-red-500" />
            <span>GET DIRECTIONS</span>
          </a>
        </div>

        {/* Quick membership inquiry trigger */}
        <div className="mt-6">
          <button
            onClick={onOpenJoinModal}
            className="text-xs font-semibold tracking-wider uppercase text-zinc-400 hover:text-red-400 transition-colors underline underline-offset-4"
          >
            Or send a direct membership inquiry online &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
