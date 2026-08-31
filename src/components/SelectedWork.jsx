import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, MapPin, Sparkles } from 'lucide-react';
import { portfolioItems } from '../data/portfolioData';
import LightboxModal from './LightboxModal';

export default function SelectedWork({ onInquireItem }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filters = [
    { id: 'all', label: 'ALL WORK' },
    { id: 'events', label: 'EVENTS' },
    { id: 'portraits', label: 'PORTRAITS' },
    { id: 'commercial', label: 'COMMERCIAL' },
    { id: 'sports', label: 'SPORTS' },
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="selected-work" className="py-24 bg-obsidian-950 border-t border-white/10 relative text-stark-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-white" /> PORTFOLIO SHOWCASE
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight">
              SELECTED WORK
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-light">
              Atmosphere, emotion, and unforgettable moments captured through an editorial lens.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-white text-black shadow-lg shadow-white/10 scale-105'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedPhoto(item)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden bg-obsidian-900 border border-white/10 glass-card"
              >
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover img-editorial"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                </div>

                {/* Card Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                  {/* Top Badge & Expand Icon */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold tracking-[0.2em] text-white border border-white/20 uppercase">
                      {item.subcategory}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Information */}
                  <div className="space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-zinc-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-zinc-400" /> {item.location}
                      </span>
                      <span className="font-mono text-[11px] text-zinc-400">{item.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Lightbox */}
        <LightboxModal
          item={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onInquire={onInquireItem}
        />
      </div>
    </section>
  );
}
