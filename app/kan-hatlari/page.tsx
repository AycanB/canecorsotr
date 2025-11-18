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
    name: "CIHAN'S NERO DI ITALIA",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9gm-vS9CaIyigqGjekxRyoOcC-fkxly3aJgU1oVQ5TkSnYaIDj2IXRpV2ei6vVdnZjbPdkj6_aQKX37eLG-0mknmcqRutd30E1RCiD1flcbRGPjYwlBlOMf5YTjcf8a8-LY9R0JjLEmbCgYOiG0poEfeMLBssxUl5n985_WDyaK2tXF3JhlsGR4I-YPK6eAGRmn7x2AFh857riLxehxCop9kMwK3Vtp7td2HUH8WweN8_-ExMcYycFHAN0W_EF7HZPgfxoi0JD_0",
    origin: "Sırbistan İthal",
    description: "Multi Champion unvanlarına sahip, güçlü kemik yapısı ve mükemmel karakter.",
    tags: ["Sırbistan İthal", "Multi Champion Bloodline", "Strong Bone Structure"],
  },
  {
    name: "CIHAN'S LUNA ROSSA",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfGNvk5Sw3Twp6vBPTf5VB6tOZvJ9IRCXYGGJbEGY1rQrNyCG_yzglYSWhNbMfsmVml_jqVrXGTAftQn4opROBldg5NJWhm5PZnhDB35_OeRqbCfp1utyvbC16bDaD6KwHbf7vuilrMa3izCbPqNbfej-OLtqBzi0gnwpEtOURjxJ9o4EILeAjPSX1FWN7ukkeFNtxAr9kNbXFI7_D-XZbUa6kQa8QXp3o3LjcqPnakTFO1JG7CGOQexYOcRDNtn2B_yT_vCUZvY4",
    origin: "İtalya İthal",
    description: "World Champion soy hattı, mükemmel mizaç ve eğitilebilirlik.",
    tags: ["İtalya İthal", "World Champion Lineage", "Excellent Temperament"],
  },
  {
    name: "Force Pride BURBERRY",
    image: "/image/burbery/burbery.jpeg",
    origin: "Sırbistan İthal",
    description: "Avrupa şampiyon kan hattı, güçlü kemik yapısı ve dengeli karakter.",
    tags: ["Sırbistan İthal", "Multi Champion Bloodline", "Strong Bone Structure"],
  },
  {
    name: "DYNAMO",
    image: "/image/dynamo/dynamo.jpeg",
    origin: "İtalya İthal",
    description: "Dünya şampiyonu soy hattı, mükemmel mizaç ve koruma içgüdüsü.",
    tags: ["İtalya İthal", "World Champion Lineage", "Excellent Temperament"],
  },
  {
    name: "CIHAN'S ZLATAN",
    image: "/image/zlatan/zlatan.jpeg",
    origin: "Sırbistan İthal",
    description: "Güçlü yapı, istikrarlı karakter ve mükemmel koruma içgüdüsü.",
    tags: ["Sırbistan İthal", "Champion Bloodline", "Protective Instinct"],
  },
  {
    name: "CIHAN'S ATHENA",
    image: "/image/burbery/burbery2.jpeg",
    origin: "İtalya İthal",
    description: "Elit kan hattı, dengeli mizaç ve aile ortamına uygun karakter.",
    tags: ["İtalya İthal", "Elite Bloodline", "Family Friendly"],
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

