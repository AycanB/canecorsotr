import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cane Corso Eğitimi ve Koruma Yaklaşımı | CihanNalbant",
  description:
    "Cane Corso ırkı için dengeli koruma, karakter okuma ve profesyonel eğitim yaklaşımımız hakkında bilgi alın.",
};

export default function EgitimPage() {
  return (
    <div className="pt-16">
      <section className="py-24 sm:py-32 bg-deep-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-wider text-white uppercase font-display text-center mb-6">
            Cane Corso Eğitimi ve Koruma Yaklaşımı
          </h1>
          <p className="text-lg text-platinum-grey max-w-3xl mx-auto text-center mb-16">
            Cane Corso ırkının doğal koruma içgüdülerini doğru yönlendirme, dengeli karakter
            geliştirme ve aile ortamında güvenli eğitim yaklaşımımız.
          </p>

          <section className="mb-24">
            <h2 className="text-4xl sm:text-5xl font-normal tracking-wider text-white uppercase font-display mb-8">
              Karakter ve Güdü Okuma
            </h2>
            <div className="space-y-6 text-platinum-grey/80 max-w-4xl">
              <p>
                Cane Corso, doğası gereği koruma içgüdüsü yüksek bir ırktır. Ancak bu içgüdünün
                doğru yönlendirilmesi kritiktir. Karakter analizi ve güdü okuma, köpeğinizin
                potansiyelini anlamak ve doğru eğitim stratejisi belirlemek için gereklidir.
              </p>
              <p>
                Her köpeğin karakteri farklıdır. Bazıları daha dominant, bazıları daha itaatkar
                olabilir. Cihan Nalbant&apos;ın yaklaşımı, köpeğinizin bireysel karakterini
                anlayarak ona uygun eğitim metodunu belirlemektir.
              </p>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-4xl sm:text-5xl font-normal tracking-wider text-white uppercase font-display mb-8">
              Aile Ortamında Dengeli Koruma
            </h2>
            <div className="space-y-6 text-platinum-grey/80 max-w-4xl">
              <p>
                Cane Corso, aile üyelerine karşı son derece sevgi dolu ve koruyucu olabilir. Ancak
                bu koruma içgüdüsünün kontrolden çıkmaması için doğru sosyalleşme ve eğitim
                şarttır.
              </p>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>Erken yaşta sosyalleşme (8-16 hafta kritik dönem)</li>
                <li>Pozitif pekiştirme yöntemleri</li>
                <li>Kontrollü çevresel uyaranlara maruz bırakma</li>
                <li>Aile içi hiyerarşi ve sınırların net belirlenmesi</li>
              </ul>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-4xl sm:text-5xl font-normal tracking-wider text-white uppercase font-display mb-8">
              Profesyonel Eğitmen Desteği
            </h2>
            <div className="space-y-6 text-platinum-grey/80 max-w-4xl">
              <p>
                Cane Corso eğitimi, deneyim ve bilgi gerektirir. Yanlış yaklaşımlar, köpeğin
                karakterinde kalıcı sorunlara yol açabilir. Bu nedenle profesyonel eğitmen desteği
                almanız önerilir.
              </p>
              <p>
                Cihan Nalbant, sahiplendirdiği her köpek için ömür boyu danışmanlık hizmeti
                sunmaktadır. Eğitim sürecinde karşılaştığınız sorunlar için destek alabilirsiniz.
              </p>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-4xl sm:text-5xl font-normal tracking-wider text-white uppercase font-display mb-8">
              Yapılmaması Gerekenler
            </h2>
            <div className="bg-black border border-gold/30 p-8 max-w-4xl">
              <ul className="space-y-4 text-platinum-grey/80">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✗</span>
                  <span>
                    <strong className="text-white">Agresif eğitim yöntemleri:</strong> Fiziksel
                    ceza veya korku temelli eğitim, Cane Corso&apos;da güven sorunlarına yol açar.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✗</span>
                  <span>
                    <strong className="text-white">Erken yaşta koruma eğitimi:</strong> 18 aydan
                    önce koruma eğitimi, köpeğin karakter gelişimini olumsuz etkiler.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✗</span>
                  <span>
                    <strong className="text-white">Yetersiz sosyalleşme:</strong> İlk 16 hafta
                    içinde yeterli sosyalleşme yapılmazsa, köpek çevresel uyaranlara karşı aşırı
                    tepkisel olabilir.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">✗</span>
                  <span>
                    <strong className="text-white">Tutarsız kurallar:</strong> Aile içinde
                    tutarsız davranışlar, köpeğin kafasını karıştırır ve eğitimi zorlaştırır.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-4xl sm:text-5xl font-normal tracking-wider text-white uppercase font-display mb-8">
              Temel Komutlar ve Eğitim Aşamaları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black border border-gold/30 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Temel İtaat (3-6 ay)</h3>
                <ul className="space-y-2 text-platinum-grey/80">
                  <li>• Otur, Yat, Bekle</li>
                  <li>• Gel komutu</li>
                  <li>• Tasma eğitimi</li>
                  <li>• Temel sosyalleşme</li>
                </ul>
              </div>
              <div className="bg-black border border-gold/30 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">İleri Eğitim (6-12 ay)</h3>
                <ul className="space-y-2 text-platinum-grey/80">
                  <li>• Uzaktan komut alma</li>
                  <li>• Çevresel uyaranlara alıştırma</li>
                  <li>• Aile içi hiyerarşi</li>
                  <li>• Kontrollü koruma içgüdüsü</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="mt-16 text-center">
            <Link
              href="/bilgi-merkezi"
              className="inline-flex items-center justify-center h-12 px-10 text-sm font-bold tracking-widest text-gold uppercase transition-colors duration-300 bg-black/60 border border-gold hover:bg-gold hover:text-black backdrop-blur-sm"
            >
              Bilgi Merkezi&apos;nde Daha Fazla İçerik
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

