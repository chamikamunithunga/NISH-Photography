import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, Sparkles, ArrowUpRight } from 'lucide-react';
import { photographerInfo } from '../data/portfolioData';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-obsidian-950 border-t border-white/10 relative text-stark-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-semibold inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-white" /> DIRECT CONTACT
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight">
            LET'S CREATE TOGETHER
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Based in Dubai, UAE. Available for regional & international commissions.
          </p>
        </div>

        {/* Direct Contact Cards Display */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-obsidian-900 border border-white/10 glass-card space-y-6 shadow-2xl hover:border-white/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center shadow-lg">
              <Mail className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                EMAIL DIRECT
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                {photographerInfo.contactEmail}
              </h3>
              <p className="text-xs text-zinc-400 font-light">
                Send event briefs, project inquiries, or rate deck requests.
              </p>
            </div>
            <a
              href={`mailto:${photographerInfo.contactEmail}`}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors shadow-lg"
            >
              <span>Send Email</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* WhatsApp Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl bg-obsidian-900 border border-white/10 glass-card space-y-6 shadow-2xl hover:border-white/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center shadow-lg">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                WHATSAPP / PHONE
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                {photographerInfo.phone}
              </h3>
              <p className="text-xs text-zinc-400 font-light">
                Direct phone call or instant WhatsApp message in Dubai.
              </p>
            </div>
            <a
              href={`https://wa.me/${photographerInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors shadow-lg"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Location & Booking Status Bar */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-obsidian-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 glass-card">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-white/10 text-white border border-white/20">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold block">
                LOCATION & BASE
              </span>
              <span className="text-white font-semibold text-sm">Dubai, United Arab Emirates</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/30 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs text-emerald-300 font-semibold">
              Currently booking for 2026 Season
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
