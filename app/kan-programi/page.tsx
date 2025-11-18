import type { Metadata } from "next";
import FeatureItem from "../components/ui/FeatureItem";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CihanNalbant Kan Programı | Avrupa Şampiyon Cane Corso Kan Hatları",
  description:
    "Avrupa'dan ithal şampiyon Cane Corso kan hatları, sağlık taraması ve karakter analizi ile oluşturulan CihanNalbant Kan Programı'nı keşfedin.",
};

export default function KanProgramiPage() {
  return (
    <div className="pt-16">
      <section className="py-24 sm:py-32 bg-deep-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-wider text-white uppercase font-display text-center mb-6">
            CihanNalbant Kan Programı
          </h1>
          <p className="text-lg text-platinum-grey max-w-3xl mx-auto text-center mb-16">
            Avrupa&apos;nın en prestijli şampiyon kan hatlarından seçilmiş damızlıklarımızla,
            bilimsel yaklaşım ve karakter analizi ile oluşturduğumuz elit üretim programı.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-black border border-gold/30 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wide">
                Avrupa Şampiyon Kan Hatları
              </h3>
              <p className="text-platinum-grey/80">
                Multi Champion unvanlarına sahip, Avrupa&apos;nın en prestijli şampiyon kan
                hatlarını temel alan programımız.
              </p>
            </div>
            <div className="bg-black border border-gold/30 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wide">
                Karakter ve Sinir Sistemi Analizi
              </h3>
              <p className="text-platinum-grey/80">
                Bilimsel olarak filtrelenmiş dengeli, güvenilir ve eğitilebilir karakterlere
                odaklanıyoruz.
              </p>
            </div>
            <div className="bg-black border border-gold/30 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 uppercase tracking-wide">
                Sağlık Taramalı Damızlıklar
              </h3>
              <p className="text-platinum-grey/80">
                Kalça, dirsek, kalp ve göz taramaları yapılmış, sağlık garantili damızlıklar.
              </p>
            </div>
          </div>

          <section className="mt-24">
            <h2 className="text-4xl sm:text-5xl font-normal tracking-wider text-white uppercase font-display mb-12">
              Programımızın Temel Özellikleri
            </h2>
            <div className="flex flex-col gap-8">
              <FeatureItem
                title="Seçilmiş Avrupa Kan Hatları"
                text="Programımız, Multi Champion unvanlarına sahip, Avrupa'nın en prestijli şampiyon kan hatlarını temel alır."
              />
              <FeatureItem
                title="İstikrarlı Karakter & Mizaç"
                text="Sadece fiziksel mükemmelliğe değil, bilimsel olarak filtrelenmiş dengeli, güvenilir ve eğitilebilir karakterlere odaklanıyoruz."
              />
              <FeatureItem
                title="Bilimsel Yaklaşım"
                text="Yapı, güdü ve sinir stabilitesi arasındaki mükemmel dengeyi, modern üreme biliminin ışığında sağlıyoruz."
              />
              <FeatureItem
                title="Sağlık Taramaları"
                text="Tüm damızlıklarımız kalça displazisi, dirsek displazisi, kalp ve göz taramalarından geçirilir."
              />
            </div>
          </section>

          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/yavru-sahiplenme"
              className="flex items-center justify-center h-12 px-10 text-sm font-bold tracking-widest text-black uppercase transition-all duration-300 bg-gold hover:opacity-80"
            >
              Yavru Sahiplenme Sürecini İncele
            </Link>
            <Link
              href="/kan-hatlari"
              className="flex items-center justify-center h-12 px-10 text-sm font-bold tracking-widest text-gold uppercase transition-colors duration-300 bg-black/60 border border-gold hover:bg-gold hover:text-black backdrop-blur-sm"
            >
              Kan Hatlarımızı Gör
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

