export default function FeatureItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-gold mt-1 text-sm font-bold">•</span>
      <div>
        <h3 className="text-xl font-semibold text-white tracking-wide">
          {title}
        </h3>
        <p className="mt-2 text-platinum-grey/80">{text}</p>
      </div>
    </div>
  );
}

