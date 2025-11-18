import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cane Corso Yavru Sahiplenme Süreci | CihanNalbant Cane Corso Çiftliği",
  description:
    "Başvuru, değerlendirme, uygun eşleşme ve teslim aşamalarını içeren Cane Corso yavru sahiplenme sürecimizi adım adım öğrenin.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Yavru teslim yaşı kaç haftadır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yavrularımız minimum 8 haftalık olduktan sonra, sağlık kontrolleri ve aşı takvimi tamamlandıktan sonra teslim edilir.",
      },
    },
    {
      "@type": "Question",
      name: "Sahiplenme öncesi hangi şartları değerlendiriyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aday sahiplerin yaşam koşulları, köpek bakım deneyimi, aile yapısı ve Cane Corso ırkına uygun ortam sağlayıp sağlayamayacakları değerlendirilir.",
      },
    },
    {
      "@type": "Question",
      name: "Yavru tesliminden sonra eğitim desteği veriyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, tüm sahiplerimize ömür boyu danışmanlık ve eğitim desteği sunuyoruz. Ayrıca düzenli saha raporları ile köpeğin gelişimini takip ediyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Yavru sahiplenme süreci ne kadar sürer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Başvuru sonrası ön değerlendirme 1-2 gün içinde tamamlanır. Uygun eşleşme bulunduğunda rezervasyon yapılır ve yavru hazır olduğunda teslim edilir.",
      },
    },
  ],
};

const steps = [
  {
    number: "01",
    title: "Başvuru Formu / İlk İletişim",
    description:
      "WhatsApp veya web sitesi üzerinden iletişime geçerek başvuru formunu doldurun. Cihan Nalbant ile ön görüşme yapılır.",
  },
  {
    number: "02",
    title: "Aday Değerlendirmesi ve Ön Görüşme",
    description:
      "Yaşam koşullarınız, köpek bakım deneyiminiz ve aile yapınız değerlendirilir. Cane Corso ırkına uygun ortam sağlayıp sağlayamayacağınız analiz edilir.",
  },
  {
    number: "03",
    title: "Uygun Eşleşme ve Rezervasyon",
    description:
      "Karakter, yaşam tarzı ve beklentilerinize uygun yavru eşleştirmesi yapılır. Rezervasyon için anlaşma imzalanır.",
  },
  {
    number: "04",
    title: "Teslimat, Eğitim Brifingi ve Ömür Boyu Destek",
    description:
      "Yavru hazır olduğunda teslim edilir. İlk eğitim brifingi verilir ve ömür boyu danışmanlık desteği sağlanır.",
  },
];

const faqs = [
  {
    question: "Yavru teslim yaşı kaç haftadır?",
    answer:
      "Yavrularımız minimum 8 haftalık olduktan sonra, sağlık kontrolleri ve aşı takvimi tamamlandıktan sonra teslim edilir.",
  },
  {
    question: "Sahiplenme öncesi hangi şartları değerlendiriyorsunuz?",
    answer:
      "Aday sahiplerin yaşam koşulları, köpek bakım deneyimi, aile yapısı ve Cane Corso ırkına uygun ortam sağlayıp sağlayamayacakları değerlendirilir.",
  },
  {
    question: "Yavru tesliminden sonra eğitim desteği veriyor musunuz?",
    answer:
      "Evet, tüm sahiplerimize ömür boyu danışmanlık ve eğitim desteği sunuyoruz. Ayrıca düzenli saha raporları ile köpeğin gelişimini takip ediyoruz.",
  },
  {
    question: "Yavru sahiplenme süreci ne kadar sürer?",
    answer:
      "Başvuru sonrası ön değerlendirme 1-2 gün içinde tamamlanır. Uygun eşleşme bulunduğunda rezervasyon yapılır ve yavru hazır olduğunda teslim edilir.",
  },
  {
    question: "Yavru fiyatları hakkında bilgi alabilir miyim?",
    answer:
      "Fiyat bilgisi ve ödeme planları hakkında detaylı bilgi için WhatsApp üzerinden iletişime geçebilirsiniz.",
  },
];

export default function YavruSahiplenmePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="pt-16">
        <section className="py-24 sm:py-32 bg-deep-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-wider text-white uppercase font-display text-center mb-6">
              Cane Corso Yavru Sahiplenme Süreci
            </h1>
            <p className="text-lg text-platinum-grey max-w-3xl mx-auto text-center mb-16">
              Elit Cane Corso yavrularımızı sahiplenmek için izlemeniz gereken adımlar ve süreç
              hakkında bilgiler.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-black border border-gold/30 p-8 relative"
                >
                  <div className="text-gold text-6xl font-display opacity-20 absolute top-4 right-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 uppercase tracking-wide relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-platinum-grey/80 relative z-10">{step.description}</p>
                </div>
              ))}
            </div>

            <section className="mt-24 max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-normal tracking-wider text-white uppercase font-display mb-12 text-center">
                Sık Sorulan Sorular
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-black border border-gold/30 p-6"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-platinum-grey/80">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-16 text-center">
              <a
                href="https://wa.me/905326750424"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-14 px-12 text-base font-bold tracking-widest text-black uppercase transition-all duration-300 bg-gold hover:opacity-80"
              >
                <span className="material-symbols-outlined mr-2">chat</span>
                WhatsApp ile Ön Görüşme Yap
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

