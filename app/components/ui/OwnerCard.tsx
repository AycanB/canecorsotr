export default function OwnerCard({
  name,
  city,
  quote,
  image,
  video,
}: {
  name: string;
  city: string;
  quote: string;
  image: string;
  video?: string;
}) {
  return (
    <div className="light-sweep-card flex flex-col text-left bg-black border border-gold/50 overflow-hidden">
      {/* Video veya Image */}
      {video ? (
        <div className="relative w-full aspect-video overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="relative w-full aspect-video overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      )}

      {/* İçerik */}
      <div className="p-8">
        <div className="flex items-center gap-6 mb-6">
          <div className="flex-shrink-0">
            <img
              src={image}
              alt={name}
              className="object-cover w-16 h-16 rounded-full grayscale border border-gold/30"
            />
          </div>
          <div>
            <p className="font-bold text-white text-lg">{name}</p>
            <p className="text-sm text-gold tracking-wide">{city}</p>
          </div>
        </div>
        <blockquote className="text-platinum-grey/90 italic leading-relaxed">
          {quote}
        </blockquote>
      </div>
    </div>
  );
}

