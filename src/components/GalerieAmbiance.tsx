import Image from "next/image";

export default function GalerieAmbiance() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?w=600&q=80&auto=format&fit=crop",
      alt: "Bougies et pétales de rose dans un espace cocooning chaleureux",
      label: "Rituel Bien-être",
    },
    {
      src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80&auto=format&fit=crop",
      alt: "Soins visage et produits de beauté naturels aux textures douces",
      label: "Soins Visage",
    },
    {
      src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80&auto=format&fit=crop",
      alt: "Ambiance spa et détente, serviettes et huiles essentielles",
      label: "Espace Détente",
    },
    {
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80&auto=format&fit=crop",
      alt: "Maquillage et beauté, palette de teintes douces et féminines",
      label: "Beauté & Éclat",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-nude text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
            L&apos;ambiance
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl text-charcoal font-semibold mb-5">
            Un cadre pensé pour votre bien-être
          </h2>
          <div className="w-16 h-[1px] bg-nude mx-auto" />
        </div>

        {/* Gallery grid with real images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {images.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-default"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-[family-name:var(--font-serif)] text-white text-sm sm:text-base">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-charcoal-light/40 text-xs mt-6 italic">
          Images d&apos;illustration — ambiance beauté &amp; bien-être
        </p>
      </div>
    </section>
  );
}
