import type { Metadata } from "next";
import Hero from "./components/Hero";
import NedenCihanSection from "./components/NedenCihanSection";
import KanHatlariSection from "./components/KanHatlariSection";
import OwnerIntelSection from "./components/OwnerIntelSection";
import ElitBilgiMerkezi from "./components/ElitBilgiMerkezi";

export const metadata: Metadata = {
  title: "CihanNalbant Cane Corso Çiftliği | Türkiye'nin Elit Cane Corso Yetiştiricisi",
  description:
    "CihanNalbant Cane Corso Çiftliği, Avrupa'dan ithal şampiyon kan hatlarıyla Türkiye'nin elit Cane Corso yavrularını yetiştirir. Aile koruması, dengeli karakter ve profesyonel destek.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CihanNalbant Cane Corso Çiftliği",
  image: "https://canecorso.tr/og-image.jpg",
  "@id": "https://canecorso.tr",
  url: "https://canecorso.tr",
  telephone: "+905326750424",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "TR",
    addressLocality: "Türkiye",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "39.9334",
    longitude: "32.8597",
  },
  sameAs: [
    "https://www.youtube.com/@canecorsocihannalbant",
    "https://www.instagram.com/canecorso_cihannalbant/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CihanNalbant Cane Corso Çiftliği",
  url: "https://canecorso.tr",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://canecorso.tr/bilgi-merkezi?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <div className="flex flex-col">
        <Hero />
        <NedenCihanSection />
        <KanHatlariSection />
        <OwnerIntelSection />
        <ElitBilgiMerkezi />
      </div>
    </>
  );
}
