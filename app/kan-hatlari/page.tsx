import type { Metadata } from "next";
import DogCard from "../components/ui/DogCard";

export const metadata: Metadata = {
  title: "Cane Corso Kan Hatları ve Damızlıklarımız | CihanNalbant",
  description:
    "Avrupa şampiyon kan hatlarından seçilmiş Cane Corso damızlıklarımızı ve genetik altyapılarını inceleyin.",
};

interface Damizlik {
  name: string;
  image: string;
  origin: string;
  description: string;
  tags: string[];
}

const damizliklar: Damizlik[] = [
  {
    name: "CIHAN'S ZLATAN",
    image: "/image/zlatan/zlatan.jpeg",
    origin: "Sırbistan İthal",
    description: "Güçlü yapı, istikrarlı karakter ve mükemmel koruma içgüdüsü.",
    tags: ["Sırbistan İthal", "Champion Bloodline", "Protective Instinct"],
  },
  {
    name: "BONİTO",
    image: "/image/dynamo/dynamo.jpeg",
    origin: "İtalya İthal",
    description: "Dünya şampiyonu soy hattı, mükemmel mizaç ve koruma içgüdüsü.",
    tags: ["Bulgaristan İthal", "World Champion Lineage", "Excellent Temperament"],
  },
  {
    name: "Burbery Force Pride",
    image: "/image/burbery/burbery.jpeg",
    origin: "İtalya İthal",
    description: "Dünya şampiyonu soy hattı, mükemmel mizaç ve koruma içgüdüsü.",
    tags: ["Rusya İthal", "Excellent Temperament"],
  },
  {
    name: "Etna force pride",
    image: "/image/etna2.jpeg",
    origin: "Rusya İthal",
    description: "Multi Champion unvanlarına sahip, güçlü kemik yapısı ve mükemmel karakter.",
    tags: ["Rusya İthal"],
  },
  {
    name: "Constantine Guardians Aurora Titan Liza",
    image: "image/aurora.jpeg",
    origin: "Türkiye",
    description: "Puppy Türkiye sampiyonu.",
    tags: ["Puppy Türkiye Şampiyonu","Anne Burbery force pride","Baba Django Sangue magnefica"],
  },
  {
    name: "Maya",
    image: "image/luci.jpeg",
    origin: "Türkiye",
    description: "Baba BONİTO.",
    tags: ["Baba BONİTO"],
  },
  {
    name: "Venüs",
    image: "image/venus2.jpeg",
    origin: "Türkiye",
    description: "Zagor Oğlu.",
    tags: ["Anne Burbery force pride","Baba Zagor SLK"],
  },
];

export default function KanHatlariPage() {
  return (
    <div className="pt-16">
      <section className="py-24 sm:py-32 bg-deep-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-wider text-white uppercase font-display text-center mb-6">
            Kan Hatları ve Damızlıklarımız
          </h1>
          <p className="text-lg text-platinum-grey max-w-3xl mx-auto text-center mb-16">
            Avrupa&apos;nın en dominant kan hatlarından seçilmiş, sağlık taramalı ve karakter
            analizi yapılmış damızlıklarımız.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {damizliklar.map((dog, index) => (
              <DogCard
                key={index}
                name={dog.name}
                image={dog.image}
                tags={dog.tags}
              />
            ))}
          </div>

          <section className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-normal tracking-wider text-white uppercase font-display mb-8">
              Pedigree ve Soy Kütüğü
            </h2>
            <div className="space-y-6 text-platinum-grey/80">
              <p>
                Tüm damızlıklarımız FCI (Fédération Cynologique Internationale) kayıtlı, tam
                pedigree belgeli ve soy kütüğü takip edilebilir köpeklerdir.
              </p>
              <p>
                Avrupa&apos;dan ithal ettiğimiz her damızlık, kendi ülkesinde şampiyon unvanlarına
                sahip veya şampiyon kan hattından gelmektedir. Bu sayede genetik çeşitliliği
                korurken, üstün özellikleri bir sonraki nesle aktarıyoruz.
              </p>
              <p>
                Cihan Nalbant&apos;ın kan programı, sadece fiziksel mükemmellik değil, aynı zamanda
                karakter, sinir sistemi stabilitesi ve sağlık açısından da en iyi eşleşmeleri
                yaparak, Türkiye&apos;de elit Cane Corso üretimini sürdürmektedir.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

