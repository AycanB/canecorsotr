import KnowledgeItem from "./ui/KnowledgeItem";

export default function KnowledgeCenter() {
  return (
    <section className="py-24 sm:py-32 bg-deep-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-5xl sm:text-6xl font-normal tracking-wider text-white uppercase font-display">
            Operational Knowledge Center
          </h2>
          <p className="mt-6 text-lg text-platinum-grey">
            Cane Corso ırkı hakkında derinlemesine analizler, eğitim
            taktikleri ve elit kan hattı güncellemeleri.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <KnowledgeItem
              icon="insights"
              title="Tonal İncelemeler"
              text="Karakter ve yapı analizleri."
            />
            <KnowledgeItem
              icon="shield"
              title="Koruma Eğitimi"
              text="Doğru içgüdüleri yönlendirme."
            />
          </div>
        </div>

        <div className="relative w-full overflow-hidden aspect-video group order-1 lg:order-2">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhF7errbkw50ATQOjfXFxAlsJ7Ca4SkGkJHhJ1UplJMD2-J60BD5_StdcscQiITOiWLHxWjdWUzAD4_XVPmudY-eQEPUg7Qzl_qqBpbhQaPvv2awpaRyFi-jtzQBnQso29EBQLIRtqOuonDBP3d9HRj05VZv7q2VFlpXvmMvCH9sQbee_GxfPCD7jw9g_7pWYdS-9HzNM2bhtEvWOMJ_M8tx0ffX1akZ8wrEApd3r8MHFwEmcAHZiCL99vAPaZ_KmZumbNDSqua7g"
            alt="YouTube kanalına ait kapak"
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 vignette-overlay">
            <button className="flex items-center justify-center w-24 h-24 border-2 border-gold rounded-full transition-all duration-300 group-hover:scale-110 gold-glow bg-transparent">
              <span className="material-symbols-outlined text-gold text-6xl">
                play_arrow
              </span>
            </button>
          </div>
          <span className="material-symbols-outlined absolute bottom-4 right-4 text-gold text-2xl opacity-50">
            graphic_eq
          </span>
        </div>
      </div>
    </section>
  );
}

