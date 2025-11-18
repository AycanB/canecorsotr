export default function KnowledgeItem({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group flex items-center gap-4 p-4 bg-transparent border border-white/10 hover:bg-white/5 cursor-pointer transition-colors duration-300">
      <div className="flex-shrink-0 w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center">
        <span className="material-symbols-outlined text-gold">{icon}</span>
      </div>
      <div>
        <h4 className="font-semibold text-white group-hover:text-gold transition-colors">
          {title}
        </h4>
        <p className="text-sm text-platinum-grey/80">{text}</p>
      </div>
    </div>
  );
}

