import React, { useState } from 'react';
import { Camera, ZoomIn, Eye, Sparkles, Layers } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';

interface GallerySectionProps {
  onOpenLightbox: (imageSrc: string, title: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Interior', 'Strength', 'Free Weights', 'Supplements', 'Lounge'];

  const filteredItems =
    activeFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="relative py-20 lg:py-28 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-red-600"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">
                VISUAL SHOWCASE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold tracking-tight uppercase">
              STEP INSIDE <span className="text-red-500">GUTS</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2">
              Experience the environment before your first workout.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                  activeFilter === cat
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            // First item or exterior item can span 2 columns on larger screens for visual editorial dynamism
            const isFeatured = index === 0 || index === 4;
            return (
              <div
                key={item.id}
                id={`gallery-item-${item.id}`}
                onClick={() => onOpenLightbox(item.image, item.title)}
                className={`group relative rounded-xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-red-600/50 cursor-pointer shadow-xl transition-all duration-300 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="relative h-[280px] sm:h-[340px] lg:h-[380px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded bg-[#09090b]/80 border border-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-red-400">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Zoom Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#09090b]/80 border border-white/10 backdrop-blur-md flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-red-600 transition-all opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0">
                    <ZoomIn className="w-4 h-4" />
                  </div>

                  {/* Bottom Text Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h3 className="font-display text-xl sm:text-2xl text-white font-bold tracking-wide uppercase mb-1 group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm line-clamp-2 max-w-xl leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Bottom Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">
            Photos captured on location at GUTS GYM • 3rd Floor Misaq ul Mall, Faisalabad
          </p>
        </div>

      </div>
    </section>
  );
};
