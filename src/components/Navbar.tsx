import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Dumbbell, ChevronRight, Clock, ChevronDown } from 'lucide-react';
import { GYM_INFO, GYM_HOURS } from '../data/gymData';
import { getGymOpenStatus } from '../utils/timeUtils';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState(getGymOpenStatus());
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [pakistanTime, setPakistanTime] = useState('');
  const scheduleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const updateTimes = () => {
      setOpenStatus(getGymOpenStatus());
      try {
        const now = new Date();
        const timeString = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Karachi',
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);
        setPakistanTime(timeString);
      } catch {
        setPakistanTime('PKT');
      }
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    const handleClickOutside = (event: MouseEvent) => {
      if (scheduleRef.current && !scheduleRef.current.contains(event.target as Node)) {
        setIsScheduleOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Why GUTS', href: '#why-us' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Programs', href: '#programs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location & Hours', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#09090b]/90 via-[#09090b]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            id="nav-logo"
            className="group flex flex-col focus:outline-none focus:ring-1 focus:ring-red-500 rounded"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse"></span>
              <span className="font-display text-2xl sm:text-3xl tracking-wider text-white font-extrabold group-hover:text-red-500 transition-colors">
                GUTS<span className="text-red-600">.</span>GYM
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-bold text-zinc-400 -mt-1 group-hover:text-zinc-200 transition-colors">
              Fitness Lounge for Ladies & Gents
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white px-3 py-1.5 rounded transition-all duration-200 hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA Area */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Open Status Button & Interactive Schedule Dropdown */}
            <div className="relative" ref={scheduleRef}>
              <button
                id="nav-status-btn"
                type="button"
                onClick={() => setIsScheduleOpen((prev) => !prev)}
                className={`hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border transition-all duration-200 cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98] ${
                  isScheduleOpen
                    ? 'border-red-500/80 bg-zinc-800 ring-1 ring-red-500/30'
                    : 'border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800'
                }`}
                title="Click to view live hours & schedule"
                aria-expanded={isScheduleOpen}
                aria-haspopup="dialog"
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    openStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'
                  }`}
                ></span>
                <span
                  id="nav-status-pill-text"
                  className={`text-[11px] font-bold tracking-wide ${
                    openStatus.isOpen ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {openStatus.statusText}
                </span>
                <ChevronDown
                  className={`w-3 h-3 text-zinc-400 transition-transform duration-200 ${
                    isScheduleOpen ? 'rotate-180 text-white' : ''
                  }`}
                />
              </button>

              {/* Schedule Popover */}
              {isScheduleOpen && (
                <div
                  id="nav-schedule-popover"
                  className="absolute right-0 top-full mt-2 w-80 rounded-xl bg-[#121215] border border-zinc-700/80 p-4 shadow-2xl z-50 animate-fadeIn"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-red-500" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        Live Gym Schedule
                      </span>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        openStatus.isOpen
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : 'bg-rose-950 text-rose-400 border border-rose-800'
                      }`}
                    >
                      {openStatus.isOpen ? 'OPEN NOW' : 'CLOSED'}
                    </span>
                  </div>

                  {/* Current Faisalabad Time */}
                  <div className="my-3 p-2.5 rounded-lg bg-zinc-900 border border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">
                        Faisalabad Time (PKT)
                      </div>
                      <div className="text-sm font-bold text-zinc-100 font-mono">
                        {pakistanTime || 'Pakistan Standard Time'}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">
                        Status
                      </div>
                      <div className="text-xs font-semibold text-zinc-300">
                        {openStatus.nextOpenText}
                      </div>
                    </div>
                  </div>

                  {/* Weekly Hours Breakdown */}
                  <div className="space-y-1.5 text-xs">
                    {GYM_HOURS.map((item) => {
                      const isToday = item.day.toLowerCase() === openStatus.currentDayName.toLowerCase();
                      return (
                        <div
                          key={item.day}
                          className={`flex items-center justify-between px-2 py-1.5 rounded transition-colors ${
                            isToday
                              ? 'bg-red-600/15 border border-red-500/30 text-white font-bold'
                              : 'text-zinc-400 hover:text-zinc-300'
                          }`}
                        >
                          <div className="flex items-center gap-1.5">
                            {isToday && <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>}
                            <span>{item.day}</span>
                            {isToday && (
                              <span className="text-[9px] uppercase px-1 rounded bg-red-600 text-white font-bold">
                                Today
                              </span>
                            )}
                          </div>
                          <span
                            className={
                              item.isClosed
                                ? 'text-rose-400 font-semibold'
                                : isToday
                                ? 'text-red-300'
                                : 'text-zinc-300'
                            }
                          >
                            {item.hours}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-3 mt-3 border-t border-zinc-800 flex gap-2">
                    <a
                      href="#location"
                      onClick={() => setIsScheduleOpen(false)}
                      className="flex-1 py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold text-center transition-colors border border-zinc-700/60"
                    >
                      View Location & Map
                    </a>
                    <button
                      onClick={() => {
                        setIsScheduleOpen(false);
                        onOpenJoinModal();
                      }}
                      className="flex-1 py-2 px-3 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider text-center transition-colors shadow-sm shadow-red-600/20 cursor-pointer"
                    >
                      Join Gym
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Call */}
            <a
              href={`tel:${GYM_INFO.phoneClean}`}
              id="nav-call-btn"
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-white text-xs font-semibold tracking-wide transition-all"
              title="Call Guts Gym"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>{GYM_INFO.phone}</span>
            </a>

            {/* Join CTA */}
            <button
              onClick={onOpenJoinModal}
              id="nav-join-cta"
              className="relative group overflow-hidden px-4 sm:px-5 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-red-600/20 hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Dumbbell className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
                JOIN GUTS GYM
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenJoinModal}
              className="px-2.5 py-1.5 rounded bg-red-600 text-white text-[11px] font-bold uppercase tracking-wider"
            >
              JOIN
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="sm:hidden bg-[#09090b]/98 border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-fadeIn"
        >
          {/* Live Status on Mobile - Clickable */}
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-850 border border-zinc-800/80 text-xs transition-colors"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-zinc-400" />
              <span className="text-zinc-300 font-medium">Sat - Thu: 6 AM – 12 AM (Fri Closed)</span>
            </div>
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                openStatus.isOpen
                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                  : 'bg-rose-950 text-rose-400 border border-rose-800'
              }`}
            >
              {openStatus.isOpen ? 'OPEN NOW' : 'CLOSED'}
            </span>
          </a>

          <div className="grid grid-cols-2 gap-1.5 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-md bg-zinc-900/50 hover:bg-zinc-800/80 text-xs font-semibold text-zinc-200 border border-white/5"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full py-3 rounded-md bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-600/30"
            >
              <Dumbbell className="w-4 h-4" />
              JOIN GUTS GYM NOW
            </button>
            <a
              href={`tel:${GYM_INFO.phoneClean}`}
              className="w-full py-2.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              Call {GYM_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
