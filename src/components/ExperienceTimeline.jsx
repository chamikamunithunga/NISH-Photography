import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-obsidian-950 border-t border-white/10 relative text-stark-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-semibold flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-white" /> CAREER & MILESTONES
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight">
            EXPERIENCE
          </h2>
          <p className="font-serif text-2xl text-zinc-300 italic">
            "A decade behind the camera."
          </p>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Since beginning my photography journey in 2016, I have worked across events, portraits, commercial projects, and private commissions, developing a visual style shaped by real-world experience and continuous creative exploration.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-white/15 pl-6 sm:pl-10 space-y-12 ml-4">
          {experienceTimeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-obsidian-950 border-2 border-white group-hover:bg-white group-hover:scale-125 transition-all duration-300 shadow-md shadow-white/20" />

              {/* Content Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-obsidian-900 border border-white/10 glass-card space-y-4 group-hover:border-white/30 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-mono font-semibold tracking-widest border border-white/20">
                    {item.period}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" /> {item.location}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mt-0.5">
                    {item.company}
                  </p>
                </div>

                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
