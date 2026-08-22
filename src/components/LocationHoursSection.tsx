import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Navigation, Check, Copy, ExternalLink, ShieldCheck } from 'lucide-react';
import { GYM_INFO, GYM_HOURS } from '../data/gymData';
import { getGymOpenStatus } from '../utils/timeUtils';

export const LocationHoursSection: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [openStatus, setOpenStatus] = useState(getGymOpenStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setOpenStatus(getGymOpenStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(GYM_INFO.locationCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="location" className="relative py-20 lg:py-28 bg-[#0b0b0e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>PRIME FAISALABAD LOCATION</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold tracking-tight uppercase mb-4">
            FIND <span className="text-red-500">GUTS GYM</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Conveniently situated on the 3rd Floor of Misaq ul Mall with modern elevator access, safe covered parking, and an executive setting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Contact & Operating Hours Schedule */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Quick Info Card */}
            <div className="p-6 sm:p-7 rounded-xl bg-zinc-900/80 border border-white/10 shadow-xl">
              <div className="space-y-4">
                
                {/* Address */}
                <div className="flex items-start gap-3.5 pb-4 border-b border-zinc-800">
                  <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold tracking-wider text-zinc-400">
                      Physical Address
                    </h3>
                    <p className="text-base font-semibold text-white mt-0.5">
                      {GYM_INFO.address}
                    </p>
                    {/* Plus code */}
                    <div className="mt-2 inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-xs text-zinc-300">
                      <span className="font-mono text-zinc-400">{GYM_INFO.locationCode}</span>
                      <button
                        onClick={handleCopyCode}
                        className="text-red-400 hover:text-red-300 transition-colors"
                        title="Copy Plus Code"
                      >
                        {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5 pb-4 border-b border-zinc-800">
                  <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold tracking-wider text-zinc-400">
                      Direct Hotline
                    </h3>
                    <a
                      href={`tel:${GYM_INFO.phoneClean}`}
                      className="text-lg font-bold text-white hover:text-red-400 transition-colors mt-0.5 block"
                    >
                      {GYM_INFO.phone}
                    </a>
                    <p className="text-xs text-zinc-400">Call or WhatsApp for immediate membership queries</p>
                  </div>
                </div>

                {/* Live Status Summary Banner */}
                <div
                  className={`p-3.5 rounded-lg border flex items-center justify-between ${
                    openStatus.isOpen
                      ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300'
                      : openStatus.badgeColor === 'rose'
                      ? 'bg-rose-950/40 border-rose-800/60 text-rose-300'
                      : 'bg-amber-950/40 border-amber-800/60 text-amber-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        openStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'
                      }`}
                    ></span>
                    <span className="font-bold text-xs uppercase tracking-wider">
                      {openStatus.statusText}
                    </span>
                  </div>
                  <span className="text-xs font-medium opacity-90">{openStatus.nextOpenText}</span>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                <a
                  href={GYM_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="loc-directions-btn"
                  className="py-3 rounded-md bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/30"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS</span>
                </a>

                <a
                  href={`tel:${GYM_INFO.phoneClean}`}
                  id="loc-call-btn"
                  className="py-3 rounded-md bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>CALL NOW</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Timetable */}
            <div className="p-6 sm:p-7 rounded-xl bg-zinc-900/80 border border-white/10 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-red-500" />
                  <h3 className="font-display text-xl text-white font-bold tracking-wide uppercase">
                    OPENING HOURS
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-zinc-400">Faisalabad Time (PKT)</span>
              </div>

              <div className="space-y-2">
                {GYM_HOURS.map((item) => {
                  const isToday =
                    openStatus.currentDayName.toLowerCase() === item.day.toLowerCase();
                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between py-2 px-3 rounded-md text-xs transition-colors ${
                        isToday
                          ? 'bg-red-950/60 border border-red-800/80 text-white font-bold'
                          : 'bg-zinc-950/40 text-zinc-400'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isToday && <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>}
                        <span className={isToday ? 'text-red-400' : 'text-zinc-300'}>
                          {item.day}
                        </span>
                        {isToday && (
                          <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-red-600 text-white font-extrabold tracking-widest">
                            TODAY
                          </span>
                        )}
                      </div>
                      
                      <span className={item.isClosed ? 'text-rose-400 font-bold' : isToday ? 'text-white' : 'text-zinc-300'}>
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Map Box */}
          <div className="lg:col-span-6 rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl relative min-h-[420px] flex flex-col">
            
            {/* Top Bar for Map */}
            <div className="p-4 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
                <span className="font-bold text-white tracking-wide">
                  GUTS GYM • Misaq ul Mall (3rd Floor)
                </span>
              </div>
              <a
                href={GYM_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 flex items-center gap-1 font-semibold"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Responsive Google Map Iframe */}
            <div className="relative flex-1 w-full min-h-[360px] bg-zinc-950">
              <iframe
                title="GUTS GYM Location at Misaq ul Mall Faisalabad"
                src="https://maps.google.com/maps?q=Misaq+ul+Mall+Ashrafabad+Faisalabad&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[120%]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Map Floating Location Pill */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-zinc-950/95 border border-zinc-800 backdrop-blur-md flex items-center justify-between shadow-2xl">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                    GUTS GYM Executive Lounge
                  </p>
                  <p className="text-xs text-zinc-300 font-medium">
                    3rd Floor, Misaq ul Mall, Ashrafabad
                  </p>
                </div>
                <a
                  href={GYM_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
                >
                  Navigate
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
