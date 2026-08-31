import React from 'react';
import { ArrowUp, Camera, MapPin, Mail, Phone } from 'lucide-react';
import { photographerInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian-950 text-white border-t border-white/10 py-16 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left Brand Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Camera className="w-4 h-4 text-white" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-widest uppercase text-white">
                {photographerInfo.brandName}
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-light max-w-sm leading-relaxed">
              {photographerInfo.name} — {photographerInfo.title}. {photographerInfo.tagline}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${photographerInfo.contactEmail}`}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${photographerInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-colors"
              aria-label="WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all border border-white/20 ml-2"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="h-[1px] w-full bg-white/10" />

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-zinc-400" />
            <span>DUBAI, UNITED ARAB EMIRATES</span>
          </div>
          <div>
            © {new Date().getFullYear()} NISH PHOTOGRAPHY · ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
