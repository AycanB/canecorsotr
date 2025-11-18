import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cane Corso Bilgi Merkezi | Eğitim, Kan Hattı Analizleri ve Videolar",
  description:
    "CihanNalbant'ın Cane Corso üzerine hazırladığı eğitim içeriklerini, kan hattı analizlerini ve video arşivini keşfedin.",
};

interface ContentCard {
  category: string;
  title: string;
  description: string;
  type: "Video" | "Makale";
  link: string;
}

const contentCards: ContentCard[] = [
  {
    category: "Tonal İnceleme",
    title: "Cane Corso'da Doğru Koruma Güdüsü",
    description:
      "Cane Corso ırkında koruma içgüdüsünün doğru yönlendirilmesi ve karakter analizi.",
    type: "Video",
    link: "https://www.youtube.com/@canecorsocihannalbant",
  },
  {
    category: "Eğitim",
    title: "Yavrularda İlk 16 Hafta: Kritik Sosyalleşme Dönemi",
    description:
      "Yavru Cane Corso'larda ilk 16 haftanın önemi ve doğru sosyalleşme teknikleri.",
    type: "Video",
    link: "https://www.youtube.com/@canecorsocihannalbant",
  },
  {
    category: "Kan Hattı",
    title: "Avrupa Şampiyon Kan Hatlarının Yapısal Özellikleri",
    description:
      "Multi Champion kan hatlarının genetik altyapısı ve karakteristik özellikleri.",
    type: "Makale",
    link: "#",
  },
  {
    category: "Yavru Bakımı",
    title: "Yavrularda Aşı Takvimi ve Sağlık Kontrolleri",
    description:
      "Cane Corso yavrularında aşı programı, sağlık taramaları ve dikkat edilmesi gerekenler.",
    type: "Video",
    link: "https://www.youtube.com/@canecorsocihannalbant",
  },
  {
    category: "Eğitim",
    title: "Evde Cane Corso Bakılır mı?",
    description:
      "Cane Corso'nun aile ortamında bakımı, yaşam koşulları ve dikkat edilmesi gerekenler.",
    type: "Video",
    link: "https://www.youtube.com/@canecorsocihannalbant",
  },
  {
    category: "Yavru Bakımı",
    title: "Yavrular Ne Zaman Dışarı Çıkmalı?",
    description:
      "Yavru Cane Corso'larda dışarı çıkma yaşı, sosyalleşme ve güvenlik önlemleri.",
    type: "Video",
    link: "https://www.youtube.com/@canecorsocihannalbant",
  },
];

export default function BilgiMerkeziPage() {
  return (
    <div className="pt-16">
      <section className="py-24 sm:py-32 bg-deep-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-wider text-white uppercase font-display text-center mb-6">
            Bilgi Merkezi
          </h1>
          <p className="text-lg text-platinum-grey max-w-3xl mx-auto text-center mb-16">
            Cihan Nalbant&apos;ın Cane Corso ırkı üzerine hazırladığı eğitim içerikleri, kan hattı
            analizleri, yavru bakım rehberleri ve video arşivini burada bulabilirsiniz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentCards.map((card, index) => (
              <Link
                key={index}
                href={card.link}
                target={card.link.startsWith("http") ? "_blank" : undefined}
                rel={card.link.startsWith("http") ? "noreferrer" : undefined}
                className="group bg-black border border-gold/30 hover:border-gold/60 transition-all duration-300 p-6 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-gold border border-gold/50 px-3 py-1">
                    {card.category}
                  </span>
                  <span
                    className={`text-xs uppercase tracking-wider px-3 py-1 ${
                      card.type === "Video"
                        ? "bg-gold/20 text-gold border border-gold/50"
                        : "bg-white/10 text-platinum-grey border border-white/20"
                    }`}
                  >
                    {card.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors">
                  {card.title}
                </h3>
                <p className="text-platinum-grey/80 text-sm flex-1">{card.description}</p>
                <div className="mt-4 flex items-center text-gold text-sm group-hover:translate-x-2 transition-transform">
                  <span>Devamını Oku</span>
                  <span className="material-symbols-outlined ml-2 text-base">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://www.youtube.com/@canecorsocihannalbant"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center h-12 px-10 text-sm font-bold tracking-widest text-black uppercase transition-all duration-300 bg-gold hover:opacity-80"
            >
              <span className="material-symbols-outlined mr-2">play_circle</span>
              YouTube Kanalına Git
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

