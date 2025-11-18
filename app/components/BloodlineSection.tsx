import FeatureItem from "./ui/FeatureItem";

export default function BloodlineSection() {
  return (
    <section id="kan-hatlari" className="py-24 sm:py-32 bg-deep-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-5xl sm:text-6xl font-normal tracking-wider text-white uppercase font-display">
            BİR KÖPEKTEN DAHA FAZLASI: BİR ELİT KAN HATTI
          </h2>

          <div className="mt-12 flex flex-col gap-8">
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
          </div>

          <hr className="border-t border-gold/50 my-12" />
        </div>

        <div className="w-full h-full min-h-[600px] relative overflow-hidden">
          <img
            src="/image/zlatan/zlatan.jpeg"
            alt="Güçlü Cane Corso portresi"
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 vignette-overlay pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

