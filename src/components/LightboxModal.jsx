import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Camera, Calendar, ArrowUpRight } from 'lucide-react';

export default function LightboxModal({ item, onClose, onInquire }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-2xl overflow-y-auto">
        {/* Backdrop Close Click */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-6xl bg-obsidian-900 border border-white/15 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-colors duration-300 border border-white/20"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Full Photo Display */}
          <div className="lg:col-span-8 bg-black flex items-center justify-center p-4 sm:p-8 min-h-[350px] lg:min-h-[550px]">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Right Column: Metadata & Details */}
          <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto bg-obsidian-950 border-t lg:border-t-0 lg:border-l border-white/10 text-white">
            <div className="space-y-6">
              {/* Category Pill */}
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase border border-white/20">
                  {item.categoryLabel}
                </span>
                <span className="text-xs text-zinc-400 font-medium">
                  {item.subcategory}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-serif text-3xl font-bold text-white leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="h-[1px] w-full bg-white/10" />

              {/* EXIF Metadata Grid */}
              <div className="space-y-3">
                <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                  TECHNICAL METADATA & SPECS
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5 text-zinc-300">
                    <span className="flex items-center gap-2 text-zinc-400">
                      <Camera className="w-3.5 h-3.5 text-white" /> Specs
                    </span>
                    <span className="font-mono text-white text-[11px]">{item.cameraSpecs}</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5 text-zinc-300">
                    <span className="flex items-center gap-2 text-zinc-400">
                      <MapPin className="w-3.5 h-3.5 text-white" /> Location
                    </span>
                    <span className="text-white text-[11px]">{item.location}</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5 text-zinc-300">
                    <span className="flex items-center gap-2 text-zinc-400">
                      <Calendar className="w-3.5 h-3.5 text-white" /> Year
                    </span>
                    <span className="font-mono text-white text-[11px]">{item.year}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Inquire CTA */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  onClose();
                  onInquire(item);
                }}
                className="w-full py-3.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Direct Contact About Shoot</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
