import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Dumbbell, MapPin, ChevronRight, Clock } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { getGymOpenStatus } from '../utils/timeUtils';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState(getGymOpenStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const interval = setInterval(() => {
      setOpenStatus(getGymOpenStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
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
            {/* Live Open Pill */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-medium text-zinc-300">
              <span
                className={`w-2 h-2 rounded-full ${
                  openStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'
                }`}
              ></span>
              <span className={openStatus.isOpen ? 'text-emerald-400' : 'text-rose-400'}>
                {openStatus.statusText}
              </span>
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
              className="relative group overflow-hidden px-4 sm:px-5 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-red-600/20 hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0"
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
          {/* Live Status on Mobile */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800/80 text-xs">
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
          </div>

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
