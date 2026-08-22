import React from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, Dumbbell, ShieldCheck, Heart } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#070709] border-t border-white/10 pt-16 pb-28 sm:pb-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-zinc-800/80">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-red-600 rounded-full"></span>
              <span className="font-display text-3xl font-extrabold text-white tracking-wider">
                GUTS<span className="text-red-600">.</span>GYM
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-red-500 mb-4">
              {GYM_INFO.tagline}
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mb-6">
              Faisalabad&apos;s premier high-performance fitness lounge located at Misaq ul Mall. Designed for serious discipline, transformation, and long-term strength.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={GYM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-zinc-900 hover:bg-red-600 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={GYM_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-zinc-900 hover:bg-blue-600 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`tel:${GYM_INFO.phoneClean}`}
                className="w-9 h-9 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Call"
              >
                <Phone className="w-4 h-4 text-red-500" />
              </a>
            </div>
          </div>

          {/* Col 2: Explore */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-lg text-white font-bold tracking-wider uppercase mb-4">
              EXPLORE
            </h3>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider">
              <li>
                <a href="#hero" className="hover:text-red-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-400 transition-colors">
                  About GUTS
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-red-400 transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-red-400 transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-red-400 transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-red-400 transition-colors">
                  Reviews (4.7★)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-lg text-white font-bold tracking-wider uppercase mb-4">
              CONTACT & VISIT
            </h3>
            <ul className="space-y-3 text-xs leading-relaxed">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="text-zinc-300">
                  {GYM_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a
                  href={`tel:${GYM_INFO.phoneClean}`}
                  className="text-white hover:text-red-400 font-bold transition-colors"
                >
                  {GYM_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-zinc-400">Plus Code: {GYM_INFO.locationCode}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Opening Hours */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-lg text-white font-bold tracking-wider uppercase mb-4">
              HOURS
            </h3>
            <div className="space-y-2 text-xs">
              <div>
                <p className="text-zinc-500 font-bold uppercase tracking-wider">Sat – Thu</p>
                <p className="text-zinc-200 font-semibold">6:00 AM – 12:00 AM</p>
                <p className="text-[11px] text-zinc-500">18 continuous hours</p>
              </div>
              <div className="pt-2 border-t border-zinc-800">
                <p className="text-zinc-500 font-bold uppercase tracking-wider">Friday</p>
                <p className="text-rose-400 font-bold">Closed</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 {GYM_INFO.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-zinc-500">
            <span>Ladies & Gents Fitness Lounge</span>
            <span>•</span>
            <span>Misaq ul Mall, Faisalabad</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
