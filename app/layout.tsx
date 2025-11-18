import "./globals.css";
import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://canecorso.tr"),
  title: {
    default: "CihanNalbant Cane Corso Çiftliği | Türkiye'nin Elit Cane Corso Yetiştiricisi",
    template: "%s | CihanNalbant Cane Corso",
  },
  description:
    "CihanNalbant Cane Corso Çiftliği, Avrupa'dan ithal şampiyon kan hatlarıyla Türkiye'nin elit Cane Corso yavrularını yetiştirir. Aile koruması, dengeli karakter ve profesyonel destek.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://canecorso.tr",
    siteName: "CihanNalbant Cane Corso Çiftliği",
    title: "CihanNalbant Cane Corso Çiftliği | Türkiye'nin Elit Cane Corso Yetiştiricisi",
    description:
      "Avrupa'dan ithal şampiyon Cane Corso kan hatları, kusursuz yapı ve dengeli karakter. CihanNalbant Cane Corso Programı.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CihanNalbant Cane Corso Çiftliği",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CihanNalbant Cane Corso Çiftliği",
    description:
      "Avrupa'dan ithal şampiyon Cane Corso kan hatları, kusursuz yapı ve dengeli karakter.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body
        className={`${anton.variable} ${inter.variable} bg-deep-black font-body text-platinum-grey`}
      >
        <div className="relative w-full overflow-x-hidden">
          <div className="grain-overlay" />
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
