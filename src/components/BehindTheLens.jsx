import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Sparkles, BookOpen, Camera } from 'lucide-react';

export default function BehindTheLens() {
  const highlights = [
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: "Grade 12 Beginnings",
      desc: "First spark of passion in school photography club, learning manual camera controls & lighting fundamentals.",
    },
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Club President Leadership",
      desc: "Elected President of the Photography Club, directing school exhibitions & organizing inter-school media camps.",
    },
    {
      icon: <Compass className="w-6 h-6 text-white" />,
      title: "All Island Association",
      desc: "Active leadership in the All Island School Photography Association, competing and collaborating across national forums.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-obsidian-950 border-t border-white/10 relative overflow-hidden text-stark-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Illustration / Nisal Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-3xl overflow-hidden border border-white/15 bg-obsidian-900 p-4 sm:p-6 shadow-2xl relative space-y-4 glass-card">
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[3/4]">
                <img
                  src="/images/nisal_behind_the_lens.jpg"
                  alt="Nisal Hesara Behind the lens in Sri Lanka"
                  className="w-full h-full object-cover img-editorial"
                />
              </div>
              <div className="p-4 rounded-xl bg-obsidian-950 border border-white/10 shadow-md space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-semibold flex items-center gap-1">
                  <Camera className="w-3 h-3 text-white" /> NISAL HESARA
                </span>
                <p className="font-serif text-base text-white font-semibold italic">
                  "Curiosity continues to influence every frame I create."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Narrative Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-white" /> PERSONAL JOURNEY
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight">
                BEHIND THE LENS
              </h2>
            </div>

            <div className="space-y-6 text-zinc-300 font-light leading-relaxed text-base sm:text-lg">
              <p>
                Photography has been part of my journey since school, beginning with the <strong className="text-white font-semibold">Photography Club in Grade 12</strong> and eventually becoming its <strong className="text-white font-semibold">President</strong>.
              </p>
              <p>
                My early involvement in photography competitions, inter-school media camps, and the <strong className="text-white font-semibold">All Island School Photography Association</strong> shaped my passion for visual storytelling and creative collaboration.
              </p>
              <p className="text-white font-serif text-xl italic border-l-2 border-white pl-4">
                Today, that same curiosity continues to influence every frame I create across Sri Lanka and international projects.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-obsidian-900 border border-white/10 glass-card space-y-3 shadow-md"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 w-fit">
                    {h.icon}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    {h.title}
                  </h4>
                  <p className="text-xs text-zinc-400 font-light leading-normal">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
