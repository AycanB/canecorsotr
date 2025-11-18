"use client";

export default function Hero() {
  const handleScrollDown = () => {
    const nextSection = document.querySelector("section:nth-of-type(2)");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative flex items-center justify-center w-full min-h-screen overflow-hidden bg-deep-black text-center">
      {/* Arka plan için blur'lu video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full scale-150 blur-lg opacity-40"
        >
          <source src="/video/dynamo3.mp4" type="video/mp4" />
        </video>
        {/* Karanlık overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60 vignette-overlay" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Sol: metin */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal font-display tracking-wider text-white uppercase xl:leading-[1.2] leading-[1.1]">
              TÜRKİYE&apos;NİN<br />
              ELİT CANE CORSO<br />
              ÇİFTLİĞİ
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-platinum-grey max-w-xl">
              Avrupa&apos;nın şampiyon kan hatları, kusursuz yapı ve dengeli karakter.
            </p>

            <div className="flex flex-col gap-4 mt-10 sm:flex-row">
              <a
                href="/yavru-sahiplenme"
                className="flex items-center justify-center h-12 px-10 text-sm font-bold tracking-widest text-black uppercase transition-all duration-300 bg-gold hover:opacity-80"
              >
                Yavru Sahiplen
              </a>
              <a
                href="/kan-programi"
                className="flex items-center justify-center h-12 px-10 text-sm font-bold tracking-widest text-gold uppercase transition-colors duration-300 bg-black/60 border border-gold hover:bg-gold hover:text-black backdrop-blur-sm"
              >
                Elit Kan Hattı
              </a>
            </div>
          </div>

          {/* Sağ: dikey video kartı */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-[9/16] max-w-[320px] w-full border border-gold/60 bg-black overflow-hidden shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="object-cover w-full h-full"
              >
                <source src="/video/dynamo3.mp4" type="video/mp4" />
              </video>

              {/* Üstte hafif gradient ve frame hissi */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/60 vignette-overlay" />
              <div className="pointer-events-none absolute inset-2 border border-gold/40" />

              {/* Üst köşeye küçük label */}
              <div className="absolute left-3 top-3 px-3 py-1 text-[10px] tracking-[0.2em] uppercase bg-black/70 text-gold border border-gold/50">
                Cihan Nalbant • Kennel Footage
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-6 z-20 flex flex-col items-center gap-2 text-white cursor-pointer hover:text-gold transition-colors duration-300 group"
        aria-label="Aşağı kaydır"
      >
        <span className="text-xs tracking-widest uppercase group-hover:opacity-80">
          Aşağı Kaydır
        </span>
        <span className="material-symbols-outlined animate-bounce gold-glow group-hover:scale-110 transition-transform">
          south
        </span>
      </button>
    </section>
  );
}

