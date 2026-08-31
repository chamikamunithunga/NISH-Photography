import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Award, Camera, Sparkles } from 'lucide-react';
import { photographerInfo } from '../data/portfolioData';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-obsidian-950 text-stark-100">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-zinc-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        {/* Left Column: Text & Editorial Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10"
        >
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium tracking-[0.2em] uppercase text-zinc-300">
              <MapPin className="w-3 h-3 text-white" /> Based in Sri Lanka
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-[11px] font-semibold tracking-[0.2em] uppercase border border-white/20 shadow-md">
              <Award className="w-3 h-3" /> 10+ Years Experience
            </span>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-4">
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95]">
              NISAL <br />
              <span className="italic font-light text-zinc-400">HESARA</span>
            </h1>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-zinc-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-white" /> Photographer · Visual Storyteller
            </p>
          </div>

          {/* Tagline & Main Quote */}
          <div className="space-y-4 max-w-2xl border-l-2 border-white/20 pl-6 py-1">
            <p className="font-serif text-2xl sm:text-3xl text-white italic leading-snug">
              "{photographerInfo.tagline}"
            </p>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              {photographerInfo.aboutQuote}
            </p>
          </div>

          {/* Action Buttons & Specialties list */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-white text-black text-xs font-bold uppercase tracking-[0.25em] hover:bg-zinc-200 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
            >
              Direct Contact & Rates
            </button>
            <a
              href="#selected-work"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white text-xs font-semibold uppercase tracking-[0.25em] hover:bg-white/10 transition-all duration-300"
            >
              Explore Selected Work
            </a>
          </div>

          {/* Category Pill Summary */}
          <div className="pt-4 flex flex-wrap items-center gap-2 text-[11px] font-medium tracking-wider text-zinc-500 uppercase">
            <span>Weddings</span> • <span>Corporate Events</span> • <span>Portraits</span> • <span>Commercial</span> • <span>Sports</span>
          </div>
        </motion.div>

        {/* Right Column: Nisal Hesara Photographer Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative z-10 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Background Graphic Card Accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/0 rounded-3xl border border-white/10 transform rotate-1 scale-[0.98] shadow-2xl pointer-events-none" />

            {/* Main Portrait Frame */}
            <div className="relative rounded-3xl bg-obsidian-900 border border-white/15 p-4 sm:p-6 shadow-2xl overflow-hidden space-y-4 glass-card">
              {/* Image Stage */}
              <div className="relative rounded-2xl bg-gradient-to-b from-obsidian-950 to-obsidian-900 border border-white/10 overflow-hidden flex items-end justify-center min-h-[420px] pt-6">
                <img
                  src="/images/nisal_portrait.png"
                  alt="Nisal Hesara Photographer in Sri Lanka"
                  className="w-full max-w-[340px] h-auto object-contain transition-transform duration-700 hover:scale-105 drop-shadow-2xl"
                />
              </div>

              {/* Overlaid Editorial Card Details */}
              <div className="p-4 rounded-xl bg-obsidian-950 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="uppercase tracking-widest font-mono text-[10px] text-zinc-500 font-semibold">
                    PRINCIPAL PHOTOGRAPHER
                  </span>
                  <span className="flex items-center gap-1 text-white font-bold text-xs">
                    <Camera className="w-3.5 h-3.5 text-white" /> NISAL HESARA
                  </span>
                </div>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  "Over a decade of experience creating authentic moments with an editorial point of view."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full pt-12 flex items-center justify-between text-xs text-zinc-500 uppercase tracking-widest border-t border-white/5">
        <span>01 / INTRO</span>
        <a
          href="#selected-work"
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors py-2"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
