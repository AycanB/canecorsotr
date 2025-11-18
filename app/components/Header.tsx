"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-30 w-full border-b border-white/5 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Marka */}
        <a href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-gold text-gold">
            <span className="material-symbols-outlined text-base">
              pets
            </span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display tracking-[0.2em] text-xs uppercase text-platinum-grey/80">
              CihanNalbant
            </span>
            <span className="font-semibold text-sm text-white uppercase tracking-[0.16em]">
              Cane Corso Çiftliği
            </span>
          </div>
        </a>

        {/* Desktop Navigasyon */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-[0.2em] uppercase">
          <a href="/kan-programi" className="text-platinum-grey/80 hover:text-gold transition-colors">
            Kan Programı
          </a>
          <a href="/kan-hatlari" className="text-platinum-grey/80 hover:text-gold transition-colors">
            Kan Hatları
          </a>
          <a href="/yavru-sahiplenme" className="text-platinum-grey/80 hover:text-gold transition-colors">
            Yavru Sahiplenme
          </a>
          <a href="/egitim" className="text-platinum-grey/80 hover:text-gold transition-colors">
            Eğitim
          </a>
          <a href="/bilgi-merkezi" className="text-platinum-grey/80 hover:text-gold transition-colors">
            Bilgi Merkezi
          </a>
        </nav>

        {/* Sağ taraf: WhatsApp + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/905326750424"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 h-10 px-4 border border-gold text-gold text-xs font-semibold uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-colors"
          >
            <span className="material-symbols-outlined text-sm">
              chat
            </span>
            WhatsApp
          </a>

          {/* Hamburger Button - Mobil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-gold hover:text-white transition-colors"
            aria-label="Menü"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobil Menü - Açılır */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/5">
          <nav className="flex flex-col py-4">
            <a
              href="/kan-programi"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-3 text-sm font-semibold tracking-[0.2em] uppercase text-platinum-grey/80 hover:text-gold hover:bg-white/5 transition-colors"
            >
              Kan Programı
            </a>
            <a
              href="/kan-hatlari"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-3 text-sm font-semibold tracking-[0.2em] uppercase text-platinum-grey/80 hover:text-gold hover:bg-white/5 transition-colors"
            >
              Kan Hatları
            </a>
            <a
              href="/yavru-sahiplenme"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-3 text-sm font-semibold tracking-[0.2em] uppercase text-platinum-grey/80 hover:text-gold hover:bg-white/5 transition-colors"
            >
              Yavru Sahiplenme
            </a>
            <a
              href="/egitim"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-3 text-sm font-semibold tracking-[0.2em] uppercase text-platinum-grey/80 hover:text-gold hover:bg-white/5 transition-colors"
            >
              Eğitim
            </a>
            <a
              href="/bilgi-merkezi"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-3 text-sm font-semibold tracking-[0.2em] uppercase text-platinum-grey/80 hover:text-gold hover:bg-white/5 transition-colors"
            >
              Bilgi Merkezi
            </a>
            <a
              href="https://wa.me/905326750424"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="mx-6 mt-2 flex items-center justify-center gap-2 h-10 px-4 border border-gold text-gold text-xs font-semibold uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-colors"
            >
              <span className="material-symbols-outlined text-sm">
                chat
              </span>
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

