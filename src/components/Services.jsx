import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowUpRight, Sparkles, Camera, Calendar, Award, Trophy } from 'lucide-react';
import { services } from '../data/portfolioData';

export default function Services({ onSelectService }) {
  const getIcon = (id) => {
    switch (id) {
      case 'events': return <Calendar className="w-6 h-6 text-white" />;
      case 'portraits': return <Camera className="w-6 h-6 text-white" />;
      case 'commercial': return <Award className="w-6 h-6 text-white" />;
      case 'sports': return <Trophy className="w-6 h-6 text-white" />;
      default: return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-obsidian-950 border-t border-white/10 relative text-stark-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Intro Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-semibold inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-white" /> SPECIALTIES & SERVICES
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight">
            PHOTOGRAPHY SERVICES
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Tailored visual storytelling across events, portraits, commercial campaigns, and high-speed sports photography.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl bg-obsidian-900 border border-white/10 p-8 flex flex-col justify-between hover:border-white/30 transition-all duration-500 glass-card relative overflow-hidden"
            >
              {/* Top Accent Icon & Badge */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {getIcon(service.id)}
                  </div>
                  <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {service.stats}
                  </span>
                </div>

                {/* Service Category & Headline */}
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-bold text-white tracking-wide group-hover:text-zinc-200 transition-colors">
                    {service.category}
                  </h3>
                  <p className="font-serif text-lg italic text-zinc-400 font-light">
                    "{service.subtitle}"
                  </p>
                </div>

                {/* Body Description */}
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables / Scope Pills */}
                <div className="pt-2 border-t border-white/10 space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400 block font-semibold">
                    COVERAGE SCOPE & SPECIALTIES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-zinc-300 text-xs font-medium border border-white/5 group-hover:border-white/20 transition-colors"
                      >
                        <CheckCircle2 className="w-3 h-3 text-white" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Button */}
              <div className="pt-8">
                <button
                  onClick={() => onSelectService(service.category)}
                  className="w-full py-3.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  <span>Inquire {service.category.split(' ')[0]} Shoot</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
