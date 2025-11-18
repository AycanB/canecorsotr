export default function DogCard({
  name,
  image,
  tags,
}: {
  name: string;
  image: string;
  tags: string[];
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden text-left bg-deep-black border border-gold/50 transition-shadow duration-300">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-[600px] transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <h3 className="text-4xl font-normal tracking-wider text-white uppercase font-display transition-all duration-300 group-hover:text-gold hover-glow">
          {name}
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs uppercase tracking-wider border border-white/30 text-white/80 px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

