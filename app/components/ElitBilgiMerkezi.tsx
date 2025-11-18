"use client";

import { useState } from "react";
import KnowledgeItem from "./ui/KnowledgeItem";
import VideoModal from "./VideoModal";

export default function ElitBilgiMerkezi() {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);

  const handleThumbnailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setVideoId("PzTJFcb30Jk");
    setModalOpen(true);
  };

  const handleInfoCardClick = (id: string) => {
    setVideoId(id);
    setModalOpen(true);
  };

  return (
    <>
      <section id="bilgi-merkezi" className="py-24 sm:py-32 bg-deep-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl sm:text-6xl font-normal tracking-wider text-white uppercase font-display">
              Elit Bilgi Merkezi
            </h2>
            <p className="mt-6 text-lg text-platinum-grey">
              Cane Corso ırkı hakkında davranış, eğitim ve kan hattı analizlerini Cihan Nalbant&apos;tan öğrenin.
            </p>

            <a
              href="https://www.youtube.com/@canecorsocihannalbant"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center h-12 px-8 text-sm font-bold tracking-widest text-black uppercase transition-all duration-300 bg-gold hover:opacity-80"
            >
              YouTube Kanalına Git
            </a>

            <div className="mt-10 flex flex-col gap-4">
              <div onClick={() => handleInfoCardClick("Fl-5NmPnvcE")}>
                <KnowledgeItem
                  icon="home"
                  title="Evde Cane Corso Bakılır mı?"
                  text="Evde Cane Corso Bakılır mı?"
                />
              </div>
              <div onClick={() => handleInfoCardClick("RA9ibXMlpRk")}>
                <KnowledgeItem
                  icon="medical_services"
                  title="Yavrularda Aşı Takvimi"
                  text="Yavrularda Aşı Takvimi."
                />
              </div>
              <div onClick={() => handleInfoCardClick("Ymy7lt4RxN0")}>
                <KnowledgeItem
                  icon="science"
                  title="Yavrular Ne Zaman Dışarı Çıkmalı?"
                  text="Yavrular Ne Zaman Dışarı Çıkmalı?"
                />
              </div>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@canecorsocihannalbant"
            target="_blank"
            rel="noreferrer"
            onClick={handleThumbnailClick}
            className="relative w-full overflow-hidden aspect-video group order-1 lg:order-2 block cursor-pointer"
          >
            <img
              src="/image/image.png"
              alt="YouTube kanalına ait kapak"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 vignette-overlay flex items-center justify-center">
              <div className="flex items-center justify-center w-24 h-24 border-2 border-gold rounded-full transition-all duration-300 group-hover:scale-110 gold-glow bg-transparent">
                <span className="material-symbols-outlined text-gold text-6xl">
                  play_arrow
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined absolute bottom-4 right-4 text-gold text-2xl opacity-50">
              graphic_eq
            </span>
          </a>
        </div>
      </section>
      {videoId && (
        <VideoModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          youtubeId={videoId}
        />
      )}
    </>
  );
}
