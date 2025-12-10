interface OwnerPhoto {
  name: string;
  city: string;
  quote: string;
  image: string;
}

const ownerPhotos: OwnerPhoto[] = [
  {
    name: "Ahmet Yılmaz",
    city: "İstanbul",
    quote: "Saha Raporu: Ares, ailemizin koruyucu meleği. Disiplinli, sevgi dolu. Cihan Bey'in profesyonelliği takdire şayan.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDP51hIfQuHfdDhnV0aVx2XaJJroh6TjhpJzzB6PXCQBJR0JEoOx_8YOw9Bz5HxVkimgOnm2stEtB6qPjNs-0RI5ij_0b2Z87THrRLjXoo_57xxMmz-PBDYkveQTimX1vWCtCCLUWe3TdjKM_JHxkF09cfGIbIr0Lk9GBFxCN3FuWo4Vx_T5Z7T6Bl7WiB5j-tk-huFGe5mL71WISx5luzCarxNSHyuf9cK1T-Wj3XHqZk3v10l0xKd3JWzDHQ8yzcW9zPRKmJDvE",
  },
  {
    name: "Elif Öztürk",
    city: "Ankara",
    quote: "Saha Raporu: Hera, aradığımız çalışan köpek karakterini tam olarak yansıtıyor. Zeka ve koruma içgüdüsü olağanüstü.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQQcK3JiZPd1Ayn3JaJ3naIj39ty90wfX76l51zcVKLgtz1toRi4cEKX1RQ_Uu_Gqc2RXBvJ-V-vrtjzi_gQr1pmGgUJSun9kKvTZF8eoS3byjEg22_U3wyInYSHYxKDlhgJypUieRSHRz5JKjfVv_1JaO6Ob3a4IImQV9YMAcGWctcXDM6jp4Au7fLcRG6o7wBp3Pkk80q8kVMWKUKJ9hEK4adG3dsRVrCRw5j8VZccQexqgamWoPKuIRT2dLmtWN9KtQIIzp_Xc",
  },
  {
    name: "Mehmet Demir",
    city: "İzmir",
    quote: "Zeus ile geçirdiğimiz her gün bir lütuf. Cihan Bey'in seçimi gerçekten mükemmel. Ailemizin en değerli üyesi.",
    image: "/image/zlatan/zlatan.jpeg",
  },
  {
    name: "Ayşe Kaya",
    city: "Bursa",
    quote: "Luna'nın karakteri ve eğitimi harika. Programınızdan çıkan köpekler gerçekten farklı. Teşekkürler Cihan Bey.",
    image: "/image/burbery/burbery.jpeg",
  },

  {
    name: "Zeynep Arslan",
    city: "İstanbul",
    quote: "Athena ile geçirdiğimiz zaman paha biçilmez. Cihan Bey'in programı gerçekten fark yaratıyor.",
    image: "/image/dynamo/dynamo.jpeg",
  },
];

export default function OwnerIntelReports() {
  return (
    <section id="referanslar" className="py-24 sm:py-32 bg-deep-black">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-normal tracking-wider text-white uppercase font-display">
            Saha Raporları
          </h2>
          <p className="mt-6 text-lg text-platinum-grey max-w-2xl mx-auto">
            Sahiplendirdiğimiz evlatlarımızın ailelerinden gelen fotoğraflar. Köpeklerimize ne kadar değer verdiğimizin canlı kanıtı.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ownerPhotos.map((owner, index) => (
              <div
                key={index}
                className="group relative flex flex-col bg-black border border-gold/30 hover:border-gold/60 transition-all duration-300 overflow-hidden"
              >
                {/* Köpek Fotoğrafı */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={owner.image}
                    alt={`${owner.name} ve köpeği`}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* İçerik */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* İsim ve Konum */}
                  <div className="mb-4">
                    <h3 className="font-bold text-white text-lg mb-1">{owner.name}</h3>
                    <p className="text-sm text-gold tracking-wide">{owner.city}</p>
                  </div>

                  {/* Açıklama/Not */}
                  <blockquote className="text-platinum-grey/80 text-sm italic leading-relaxed flex-1">
                    &quot;{owner.quote}&quot;
                  </blockquote>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
