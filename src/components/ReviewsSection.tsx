import React from 'react';
import { Star, Quote, ExternalLink, ShieldCheck, ThumbsUp } from 'lucide-react';
import { REVIEWS_ITEMS, GYM_INFO } from '../data/gymData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="relative py-20 lg:py-28 bg-[#0b0b0e] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Rating Overview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-red-600"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">
                VERIFIED GOOGLE REVIEWS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold tracking-tight uppercase mb-4">
              COMMUNITY <span className="text-red-500">FEEDBACK</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Authentic feedback from fitness enthusiasts training at GUTS GYM on the 3rd floor of Misaq ul Mall.
            </p>
          </div>

          {/* Google Score Summary Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-xl bg-zinc-900/80 border border-white/10 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col items-center justify-center text-center shadow-inner">
                  <span className="font-display text-2xl font-extrabold text-white">4.7</span>
                  <span className="text-[9px] uppercase font-bold text-red-400">OUT OF 5</span>
                </div>
                <div>
                  <div className="flex text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white">
                    32+ Verified Reviews
                  </p>
                  <p className="text-[11px] text-zinc-400">Google Business Profile</p>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(GYM_INFO.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors whitespace-nowrap"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>

        {/* The 3 Real Google Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {REVIEWS_ITEMS.map((rev, index) => (
            <div
              key={rev.id}
              id={`review-card-${index}`}
              className="relative p-7 rounded-xl bg-zinc-900/60 hover:bg-zinc-900/90 border border-white/5 hover:border-red-600/30 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-zinc-700 group-hover:text-red-500/40 transition-colors" />
                </div>

                {/* Review Quote Text */}
                <p className="text-zinc-200 text-sm sm:text-base font-normal leading-relaxed italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-red-950 border border-red-800 flex items-center justify-center font-display text-base font-bold text-red-400">
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs sm:text-sm tracking-wide">
                      {rev.author}
                    </h4>
                    <p className="text-[10px] text-zinc-400 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-500" />
                      {rev.date}
                    </p>
                  </div>
                </div>
                
                <span className="text-[10px] uppercase font-bold text-zinc-400">
                  Google
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Reviews Button */}
        <div className="text-center">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(GYM_INFO.mapsQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            id="reviews-read-more-btn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg hover:border-red-600/50"
          >
            <span>READ MORE REVIEWS ON GOOGLE</span>
            <ExternalLink className="w-3.5 h-3.5 text-red-500" />
          </a>
        </div>

      </div>
    </section>
  );
};
