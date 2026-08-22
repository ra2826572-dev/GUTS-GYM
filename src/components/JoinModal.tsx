import React, { useState } from 'react';
import { X, Phone, MessageSquare, Dumbbell, CheckCircle2, MapPin, Sparkles, Send, Users } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    gender: 'Gents',
    interest: 'Strength Training',
    timing: 'Evening (6 PM - 10 PM)',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi GUTS GYM, I am interested in joining your Fitness Lounge at Misaq ul Mall Faisalabad. Please share membership details.\n\nName: ${formData.name || 'Prospective Member'}\nCategory: ${formData.gender}\nGoal: ${formData.interest}`
  );

  const whatsappUrl = `https://wa.me/923124102002?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div
        id="join-modal-container"
        className="relative w-full max-w-lg my-8 rounded-2xl bg-[#0e0e12] border border-white/15 p-6 sm:p-8 shadow-2xl text-zinc-100"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-3xl text-white font-extrabold tracking-wide uppercase mb-2">
              INQUIRY RECEIVED!
            </h3>
            <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
              Thank you, <strong className="text-white">{formData.name || 'Champion'}</strong>. Our GUTS GYM admissions team at Misaq ul Mall will contact you at <strong className="text-red-400">{formData.phone || GYM_INFO.phone}</strong> promptly.
            </p>

            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white text-xs font-bold uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                MEMBERSHIP INQUIRY
              </span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl text-white font-extrabold tracking-tight uppercase mb-2">
              JOIN <span className="text-red-500">GUTS GYM</span>
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 mb-6">
              3rd Floor, Misaq ul Mall, Faisalabad. Ladies & Gents Executive Fitness Lounge.
            </p>

            {/* Quick Action Pills */}
            <div className="grid grid-cols-2 gap-2.5 mb-6">
              <a
                href={`tel:${GYM_INFO.phoneClean}`}
                className="py-2.5 px-3 rounded-lg bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 flex items-center justify-center gap-2 text-xs font-bold text-zinc-200 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span>Call Directly</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-lg bg-emerald-950/60 hover:bg-emerald-950 border border-emerald-800/80 flex items-center justify-center gap-2 text-xs font-bold text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="relative flex items-center justify-center mb-6">
              <div className="border-t border-zinc-800 w-full"></div>
              <span className="bg-[#0e0e12] px-3 text-[10px] uppercase font-bold tracking-wider text-zinc-400 absolute">
                Or fill quick details
              </span>
            </div>

            {/* Inquiry Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ali Khan / Fatima Ahmed"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md bg-zinc-950 border border-zinc-800 focus:border-red-600 focus:outline-none text-white text-sm placeholder:text-zinc-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0312 0000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md bg-zinc-950 border border-zinc-800 focus:border-red-600 focus:outline-none text-white text-sm placeholder:text-zinc-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                    Section
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3 py-2 rounded-md bg-zinc-950 border border-zinc-800 focus:border-red-600 focus:outline-none text-white text-xs"
                  >
                    <option value="Gents">Gents Section</option>
                    <option value="Ladies">Ladies Section</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                    Primary Goal
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3 py-2 rounded-md bg-zinc-950 border border-zinc-800 focus:border-red-600 focus:outline-none text-white text-xs"
                  >
                    <option value="Strength Training">Strength Training</option>
                    <option value="Muscle Building">Muscle Building</option>
                    <option value="Fat Loss & Conditioning">Fat Loss & Conditioning</option>
                    <option value="General Fitness">General Fitness</option>
                    <option value="Beginner Training">Beginner Training</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-md bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4" />
                <span>REQUEST MEMBERSHIP INFORMATION</span>
              </button>
            </form>

            <p className="text-[11px] text-zinc-400 text-center mt-4">
              Open 6:00 AM – 12:00 AM (Saturday to Thursday)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
