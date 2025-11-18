export default function Footer() {
  return (
    <footer className="py-16 bg-deep-black border-t border-gold/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="flex flex-col lg:col-span-2">
            <div className="flex items-center gap-4">
              <svg
                className="w-8 h-8 text-gold"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.6,2.09L11.4,2.09C6.2,2.09 2,6.29 2,11.5C2,16.2 5.5,20.1 10,20.6L10,21.9C10,22.5 10.5,23 11,23L13,23C13.5,23 14,22.5 14,21.9L14,20.6C18.5,20.1 22,16.2 22,11.5C22,6.29 17.8,2.09 12.6,2.09M16.6,12.7L15.3,13.8C15.1,14 14.8,14.1 14.6,14.1C14.3,14.1 14.1,14 13.9,13.8L12.5,12.4C12.3,12.2 12.3,11.8 12.5,11.6L14.1,10C14.5,9.6 15.1,9.6 15.5,10L16.6,11.1C17,11.5 17,12.3 16.6,12.7M10.1,12.4L8.7,13.8C8.5,14 8.2,14.1 8,14.1C7.7,14.1 7.5,14 7.3,13.8L6,12.7C5.6,12.3 5.6,11.5 6,11.1L7.1,10C7.5,9.6 8.1,9.6 8.5,10L10.1,11.6C10.3,11.8 10.3,12.2 10.1,12.4Z" />
              </svg>
              <h3 className="text-3xl font-normal tracking-wider text-white uppercase font-display">
                CihanNalbant
              </h3>
            </div>
            <p className="mt-4 text-sm text-platinum-grey/70 max-w-sm">
              Türkiye&apos;nin elit Cane Corso üretim programı. Avrupa&apos;nın
              şampiyon kan hatları, üstün karakter ve yapı.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest text-white uppercase">
              Navigasyon
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/"
                  className="text-sm text-platinum-grey/70 hover:text-gold transition-colors"
                >
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a
                  href="/kan-programi"
                  className="text-sm text-platinum-grey/70 hover:text-gold transition-colors"
                >
                  Kan Programı
                </a>
              </li>
              <li>
                <a
                  href="/kan-hatlari"
                  className="text-sm text-platinum-grey/70 hover:text-gold transition-colors"
                >
                  Kan Hatları
                </a>
              </li>
              <li>
                <a
                  href="/yavru-sahiplenme"
                  className="text-sm text-platinum-grey/70 hover:text-gold transition-colors"
                >
                  Yavru Sahiplenme
                </a>
              </li>
              <li>
                <a
                  href="/iletisim"
                  className="text-sm text-platinum-grey/70 hover:text-gold transition-colors"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest text-white uppercase">
              Sosyal
            </h3>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.youtube.com/@canecorsocihannalbant"
                target="_blank"
                rel="noreferrer"
                className="text-platinum-grey/70 hover:text-gold transition-colors"
                aria-label="YouTube"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.502 2.502 0 0 1-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.502 2.502 0 0 1-1.768-1.768C2 15.22 2 12 2 12s0-3.22.42-4.814a2.502 2.502 0 0 1 1.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                  <path
                    d="M15.197 12 10 14.828V9.172L15.197 12Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/canecorso_cihannalbant/"
                target="_blank"
                rel="noreferrer"
                className="text-platinum-grey/70 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.708.27 1.35.63 1.772 1.153.423.522.884 1.216 1.153 1.772.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427-.27.708-.63 1.35-1.153 1.772-.522.423-1.216.884-1.772 1.153-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427C2.013 14.784 2 14.43 2 12s.013-2.784.06-3.808c.049-1.064.218-1.791.465-2.427.27-.708.63-1.35 1.153-1.772A4.902 4.902 0 0 1 6.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                  <path d="M12 8.118A3.882 3.882 0 1 0 12 15.882 3.882 3.882 0 0 0 12 8.118ZM12 14.3a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6Z" />
                  <path d="M16.882 6.46a1.218 1.218 0 1 1-2.436 0 1.218 1.218 0 0 1 2.436 0Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-platinum-grey/50">
            © 2024 CihanNalbant Cane Corso Programı. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

