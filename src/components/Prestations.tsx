import {
  Sparkles,
  Heart,
  Scissors,
  Hand,
  Eye,
  Palette,
  Flower2,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

interface Prestation {
  icon: ReactNode;
  title: string;
  description: string;
  items: string[];
  image: string;
  imageAlt: string;
}

const prestations: Prestation[] = [
  {
    icon: <Sparkles size={28} />,
    title: "Soins Visage",
    description:
      "Des soins sur-mesure pour sublimer votre peau et lui redonner tout son éclat, avec des actifs naturels d'exception.",
    items: [
      "Soin nettoyant & purifiant",
      "Soin hydratation intense",
      "Soin anti-âge & éclat",
      "Soins du visage pour homme",
    ],
    image: "/prestations/soins-visage.jpg",
    imageAlt: "Soin du visage professionnel, ambiance douce et lumineuse",
  },
  {
    icon: <Heart size={28} />,
    title: "Soins Corps",
    description:
      "Prenez soin de votre corps avec des rituels enveloppants et ressourçants, inspirés de traditions ancestrales.",
    items: [
      "Gommage corporel",
      "Enveloppement nourrissant",
      "Rituel Escale Égyptienne",
      "Rituel détente complète",
    ],
    image: "/prestations/soins-corps.jpg",
    imageAlt: "Soin corps relaxant, serviettes douces et ambiance apaisante",
  },
  {
    icon: <Scissors size={28} />,
    title: "Épilations",
    description:
      "Des épilations douces et précises pour une peau nette et soyeuse.",
    items: [
      "Épilation visage",
      "Épilation corps",
      "Épilation jambes complètes",
      "Épilation maillot",
    ],
    image: "/prestations/epilation.jpg",
    imageAlt: "Épilation douce et précise, peau nette et soyeuse",
  },
  {
    icon: <Eye size={28} />,
    title: "Beauté du Regard",
    description:
      "Sublimez votre regard avec des prestations minutieuses et élégantes.",
    items: [
      "Teinture cils & sourcils",
      "Rehaussement de cils",
      "Restructuration sourcils",
      "Extension de cils",
    ],
    image: "/prestations/beaute-regard.jpg",
    imageAlt: "Beauté du regard, cils et sourcils sublimés avec précision",
  },
  {
    icon: <Palette size={28} />,
    title: "Onglerie & Maquillage",
    description:
      "Des mains soignées et un maquillage parfait pour chaque occasion.",
    items: [
      "Manucure classique",
      "Pose de vernis semi-permanent",
      "Beauté des pieds",
      "Maquillage événementiel",
    ],
    image: "/prestations/onglerie.jpg",
    imageAlt: "Manucure élégante, mains soignées avec vernis nude délicat",
  },
  {
    icon: <Hand size={28} />,
    title: "Massages & Bien-être",
    description:
      "Offrez-vous un moment de relaxation profonde et de lâcher-prise.",
    items: [
      "Massage relaxant",
      "Massage aux pierres chaudes",
      "Modelage du dos",
      "Réflexologie plantaire",
    ],
    image: "/prestations/massage.jpg",
    imageAlt: "Massage relaxant, table de soin et ambiance cocooning",
  },
];

export default function Prestations() {
  return (
    <section id="prestations" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-nude text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
            Nos prestations
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl text-charcoal font-semibold mb-5">
            Des soins pensés pour vous
          </h2>
          <div className="w-16 h-[1px] bg-nude mx-auto mb-6" />
          <p className="text-charcoal-light text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Chaque prestation est réalisée avec attention, dans un cadre
            apaisant, pour vous offrir un véritable moment de bien-être.
          </p>
        </div>

        {/* Prestations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {prestations.map((presta, index) => (
            <div
              key={index}
              className="group bg-cream rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-cream-dark/50"
            >
              {/* Image header */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={presta.image}
                  alt={presta.imageAlt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Soft gradient at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-cream/60 to-transparent" />
                {/* Icon badge */}
                <div className="absolute bottom-3 left-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-nude shadow-md">
                  {presta.icon}
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 sm:p-7">
                {/* Title */}
                <h3 className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl text-charcoal font-semibold mb-3">
                  {presta.title}
                </h3>

                {/* Description */}
                <p className="text-charcoal-light text-sm leading-relaxed mb-5">
                  {presta.description}
                </p>

                {/* Items list */}
                <ul className="space-y-2">
                  {presta.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-charcoal-light"
                    >
                      <Flower2
                        size={12}
                        className="text-nude flex-shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 sm:mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-nude text-white px-8 py-3.5 rounded-full text-sm tracking-wide uppercase hover:bg-nude-dark transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Réserver un soin
          </a>
        </div>
      </div>
    </section>
  );
}
