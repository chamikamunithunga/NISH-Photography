import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Layers, Camera, Quote, Sparkles } from 'lucide-react';
import { approachSteps } from '../data/portfolioData';

export default function Approach() {
  const getApproachIcon = (index) => {
    switch (index) {
      case 0: return <Eye className="w-8 h-8 text-white" />;
      case 1: return <Layers className="w-8 h-8 text-white" />;
      case 2: return <Camera className="w-8 h-8 text-white" />;
      default: return <Sparkles className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section id="approach" className="py-24 bg-obsidian-950 border-t border-white/10 relative overflow-hidden text-stark-100">
      {/* Background Graphic Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-5 font-serif text-[18vw] font-bold text-white tracking-widest leading-none">
        NISH
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16 relative z-10">
        {/* Intro Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-white" /> PHILOSOPHY & METHODOLOGY
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight">
              MY APPROACH
            </h2>
            <div className="space-y-4 text-zinc-300 font-light leading-relaxed">
              <p className="text-base sm:text-lg text-white font-semibold border-l-2 border-white pl-4">
                My approach is rooted in storytelling.
              </p>
              <p>
                Whether photographing an intimate portrait, a fast-paced event, or a commercial campaign, I look beyond the obvious frame. I pay attention to light, movement, expression, detail, and the moments that happen naturally.
              </p>
            </div>
          </div>

          {/* Highlight Quote Box */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-2xl bg-obsidian-900 border border-white/15 glass-card space-y-6 relative shadow-2xl">
              <Quote className="w-10 h-10 text-white/20 absolute top-6 right-6" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-400 font-semibold">
                THE ULTIMATE GOAL
              </span>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                "To create photographs that feel as memorable as the moment itself."
              </p>
              <div className="flex items-center gap-3 pt-2 text-xs text-zinc-400 font-medium">
                <span className="w-8 h-[1px] bg-white/30" />
                <span>NISAL HESARA · NISH PHOTOGRAPHY</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Step Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approachSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-2xl bg-obsidian-900 border border-white/10 glass-card space-y-6 group hover:border-white/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-3xl font-bold text-white/30 group-hover:text-white transition-colors">
                  {step.number}
                </span>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  {getApproachIcon(idx)}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-3xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  {step.headline}
                </p>
              </div>

              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
