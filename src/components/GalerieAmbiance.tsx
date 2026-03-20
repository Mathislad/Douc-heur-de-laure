import Image from "next/image";

export default function GalerieAmbiance() {
  const images = [
    {
      src: "/galerie/galerie-1.jpg",
      alt: "Espace bien-être chaleureux, serviettes douces et ambiance apaisante",
      label: "Espace Détente",
    },
    {
      src: "/galerie/galerie-2.jpg",
      alt: "Soins et produits de beauté naturels, textures douces et lumière chaude",
      label: "Soins & Rituels",
    },
    {
      src: "/galerie/galerie-3.jpg",
      alt: "Produits cosmétiques premium élégants sur fond neutre et lumineux",
      label: "Produits d'Exception",
    },
    {
      src: "/galerie/galerie-4.jpg",
      alt: "Soin délicat des mains, gestes précis et bienveillants",
      label: "Gestes Précis",
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
