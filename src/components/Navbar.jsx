import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#selected-work' },
    { name: 'Services', href: '#services' },
    { name: 'Approach', href: '#approach' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-obsidian-950/90 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:border-white transition-colors duration-300">
            <Camera className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-white uppercase group-hover:text-zinc-300 transition-colors">
            NISH PHOTOGRAPHY
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-zinc-200 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-white/5"
          >
            <span>Direct Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-obsidian-950/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col gap-6 animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] font-medium text-zinc-300 hover:text-white py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
          >
            <span>Direct Contact</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
