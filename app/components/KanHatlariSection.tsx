import DogCard from "./ui/DogCard";

export default function KanHatlariSection() {
  return (
    <section className="py-24 sm:py-32 bg-deep-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl sm:text-6xl font-normal tracking-wider text-white uppercase font-display">
          Avrupa&apos;nın Elit DNA&apos;sı
        </h2>
        <p className="mt-6 text-lg text-platinum-grey max-w-2xl mx-auto">
          Avrupa&apos;nın en dominant kan hatları, Cihan Nalbant
          güvencesiyle Türkiye&apos;de.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <DogCard
            name="Force Pride BURBERRY"
            image="/image/burbery/burbery.jpeg"
            tags={[
              "Sırbistan İthal",
              "Multi Champion Bloodline",
              "Strong Bone Structure",
            ]}
          />
          <DogCard
            name="DYNAMO"
            image="/image/dynamo/dynamo.jpeg"
            tags={[
              "İtalya İthal",
              "World Champion Lineage",
              "Excellent Temperament",
            ]}
          />
        </div>
      </div>

      <hr className="border-t border-gold/20 max-w-7xl mx-auto mt-32" />
    </section>
  );
}

