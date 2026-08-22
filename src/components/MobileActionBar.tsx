import React from 'react';
import { Phone, Navigation, Dumbbell } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface MobileActionBarProps {
  onOpenJoinModal: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenJoinModal }) => {
  return (
    <div
      id="mobile-fixed-action-bar"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#09090b]/95 backdrop-blur-lg border-t border-zinc-800/80 p-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Call Now */}
        <a
          href={`tel:${GYM_INFO.phoneClean}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 active:bg-zinc-800"
        >
          <Phone className="w-4 h-4 text-red-500 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">CALL NOW</span>
        </a>

        {/* Get Directions */}
        <a
          href={GYM_INFO.mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 active:bg-zinc-800"
        >
          <Navigation className="w-4 h-4 text-zinc-400 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">DIRECTIONS</span>
        </a>

        {/* Join Guts */}
        <button
          onClick={onOpenJoinModal}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-red-600 active:bg-red-700 text-white font-bold shadow-md shadow-red-600/30"
        >
          <Dumbbell className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">JOIN GUTS</span>
        </button>
      </div>
    </div>
  );
};
