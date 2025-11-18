import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CihanNalbant Cane Corso Çiftliği İletişim ve Konum",
  description:
    "CihanNalbant Cane Corso Çiftliği ile yavru sahiplenme, eğitim ve kan programı hakkında iletişime geçin.",
};

export default function IletisimPage() {
  return (
    <div className="pt-16">
      <section className="py-24 sm:py-32 bg-deep-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-wider text-white uppercase font-display text-center mb-6">
            İletişim ve Konum
          </h1>
          <p className="text-lg text-platinum-grey max-w-3xl mx-auto text-center mb-16">
            CihanNalbant Cane Corso Çiftliği ile yavru sahiplenme, eğitim danışmanlığı ve kan
            programı hakkında bilgi almak için iletişime geçin.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <section>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-wider text-white uppercase font-display mb-8">
                İletişim Bilgileri
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-gold text-2xl">phone</span>
                  <div>
                    <p className="text-sm text-platinum-grey/70 uppercase tracking-wide mb-1">
                      Telefon
                    </p>
                    <a
                      href="tel:+905326750424"
                      className="text-white text-lg hover:text-gold transition-colors"
                    >
                      +90 532 675 04 24
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-gold text-2xl">mail</span>
                  <div>
                    <p className="text-sm text-platinum-grey/70 uppercase tracking-wide mb-1">
                      E-posta
                    </p>
                    <a
                      href="mailto:info@canecorso.tr"
                      className="text-white text-lg hover:text-gold transition-colors"
                    >
                      info@canecorso.tr
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-gold text-2xl">chat</span>
                  <div>
                    <p className="text-sm text-platinum-grey/70 uppercase tracking-wide mb-1">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/905326750424"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white text-lg hover:text-gold transition-colors"
                    >
                      WhatsApp ile İletişime Geç
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-wider text-white uppercase font-display mb-8">
                Konum
              </h2>
              <div className="space-y-6">
                <p className="text-platinum-grey/80">
                  CihanNalbant Cane Corso Çiftliği, Türkiye&apos;de konumlanmış olup, ziyaretler
                  için önceden randevu alınması gerekmektedir.
                </p>
                <div className="bg-black border border-gold/30 h-64 flex items-center justify-center">
                  <p className="text-platinum-grey/50 text-sm">
                    Harita entegrasyonu buraya eklenecek
                  </p>
                </div>
              </div>
            </section>
          </div>

          <section className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-normal tracking-wider text-white uppercase font-display mb-8 text-center">
              İletişim Formu
            </h2>
            <form className="bg-black border border-gold/30 p-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-platinum-grey/70 uppercase tracking-wide mb-2"
                >
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-black border border-gold/30 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="Adınız ve soyadınız"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-platinum-grey/70 uppercase tracking-wide mb-2"
                >
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-black border border-gold/30 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="ornek@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="request-type"
                  className="block text-sm text-platinum-grey/70 uppercase tracking-wide mb-2"
                >
                  Talep Türü
                </label>
                <select
                  id="request-type"
                  name="request-type"
                  className="w-full bg-black border border-gold/30 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="">Seçiniz</option>
                  <option value="yavru">Yavru Sahiplenme</option>
                  <option value="egitim">Eğitim</option>
                  <option value="kan-programi">Kan Programı</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-platinum-grey/70 uppercase tracking-wide mb-2"
                >
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full bg-black border border-gold/30 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center h-12 px-10 text-sm font-bold tracking-widest text-black uppercase transition-all duration-300 bg-gold hover:opacity-80"
              >
                Gönder
              </button>
            </form>
          </section>

          <div className="mt-16 text-center">
            <Link
              href="/"
              className="text-platinum-grey/70 hover:text-gold transition-colors"
            >
              ← Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

