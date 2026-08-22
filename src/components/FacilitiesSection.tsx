import React, { useState } from 'react';
import { Dumbbell, Sparkles, Layers, ShieldCheck, Flame, ShoppingBag, Eye } from 'lucide-react';
import { GYM_IMAGES } from '../data/gymData';

interface FacilitiesSectionProps {
  onOpenImageLightbox: (imageSrc: string, title: string) => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onOpenImageLightbox }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const facilityCards = [
    {
      id: 'fac-1',
      title: 'Strength & Cable Machine Floor',
      category: 'machines',
      tag: 'Heavy Biomechanics',
      description: 'Matte black & crimson red plate-loaded and pin-select machines engineered for muscular isolation and progressive overload.',
      image: GYM_IMAGES.strength,
      gridSpan: 'lg:col-span-8',
      heightClass: 'h-[320px] sm:h-[400px]',
    },
    {
      id: 'fac-2',
      title: 'Free-Weights & Dumbbell Zone',
      category: 'freeweights',
      tag: 'Precision Dumbbells',
      description: 'Solid urethane dumbbell sets, heavy lifting benches, and barbell stations on impact-absorbing rubber flooring.',
      image: GYM_IMAGES.freeweights,
      gridSpan: 'lg:col-span-4',
      heightClass: 'h-[320px] sm:h-[400px]',
    },
    {
      id: 'fac-3',
      title: 'Supplement & Performance Bar',
      category: 'supplements',
      tag: 'Sports Nutrition',
      description: 'Backlit authentic protein and supplement display lounge to fuel recovery and pre-workout focus.',
      image: GYM_IMAGES.supplements,
      gridSpan: 'lg:col-span-4',
      heightClass: 'h-[300px] sm:h-[360px]',
    },
    {
      id: 'fac-4',
      title: 'Architectural Geometric LED Interior',
      category: 'environment',
      tag: 'Signature Aesthetic',
      description: 'High-contrast industrial ceiling lighting grids, climate control, and an energetic dark luxury vibe.',
      image: GYM_IMAGES.hero,
      gridSpan: 'lg:col-span-8',
      heightClass: 'h-[300px] sm:h-[360px]',
    },
    {
      id: 'fac-5',
      title: 'Misaq ul Mall 3rd Floor Entrance',
      category: 'environment',
      tag: 'Accessibility & Parking',
      description: 'Convenient elevator access, spacious mall parking, and 24/7 security at Ashrafabad.',
      image: GYM_IMAGES.exterior,
      gridSpan: 'lg:col-span-12',
      heightClass: 'h-[260px] sm:h-[320px]',
    },
  ];

  const filteredCards =
    activeTab === 'all'
      ? facilityCards
      : facilityCards.filter((card) => card.category === activeTab);

  return (
    <section id="facilities" className="relative py-20 lg:py-28 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-red-600"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">
                WORLD-CLASS ENVIRONMENT
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold tracking-tight uppercase">
              TRAIN IN A SPACE <span className="text-red-500">BUILT FOR RESULTS</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Areas' },
              { id: 'machines', label: 'Strength Floor' },
              { id: 'freeweights', label: 'Free Weights' },
              { id: 'supplements', label: 'Supplement Bar' },
              { id: 'environment', label: 'Lounge & Interior' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab.id
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              id={`facility-item-${card.id}`}
              className={`${card.gridSpan} group relative rounded-xl overflow-hidden border border-white/10 bg-zinc-950 shadow-xl transition-all duration-300 hover:border-red-600/50`}
            >
              {/* Background Image Container */}
              <div className={`w-full ${card.heightClass} overflow-hidden relative`}>
                <img
                  src={card.image}
                  alt={card.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent"></div>

                {/* Top Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#09090b]/80 border border-white/10 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-red-400">
                    {card.tag}
                  </span>
                </div>

                {/* Click to Enlarge Icon button */}
                <button
                  onClick={() => onOpenImageLightbox(card.image, card.title)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-[#09090b]/70 border border-white/10 text-zinc-300 hover:text-white hover:bg-red-600 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                  aria-label="View photo fullscreen"
                  title="Expand image"
                >
                  <Eye className="w-4 h-4" />
                </button>

                {/* Bottom Content Area */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-[#09090b] via-[#09090b]/90 to-transparent">
                  <h3 className="font-display text-2xl sm:text-3xl text-white font-bold tracking-wide uppercase mb-1.5 group-hover:text-red-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm line-clamp-2 max-w-2xl leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities Summary Ribbon */}
        <div className="mt-8 p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            <span>Dedicated Ladies & Gents Training Areas</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Regular Sanitization & Pure Air Circulation</span>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-red-500" />
            <span>Continuous 18 Hours Operation (Sat–Thu)</span>
          </div>
        </div>

      </div>
    </section>
  );
};
