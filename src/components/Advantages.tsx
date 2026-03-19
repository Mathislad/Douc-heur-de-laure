import {
  Shield,
  Heart,
  MapPin,
  Star,
  Smile,
  Clock,
} from "lucide-react";
import type { ReactNode } from "react";

interface Advantage {
  icon: ReactNode;
  title: string;
  description: string;
}

const advantages: Advantage[] = [
  {
    icon: <Heart size={24} />,
    title: "Accompagnement personnalisé",
    description:
      "Chaque soin est adapté à vos besoins et à vos envies. Laure prend le temps de vous écouter pour vous proposer la prestation la plus adaptée.",
  },
  {
    icon: <Shield size={24} />,
    title: "Produits de qualité",
    description:
      "Des produits professionnels soigneusement sélectionnés pour leur efficacité et leur respect de votre peau.",
  },
  {
    icon: <Smile size={24} />,
    title: "Cadre chaleureux",
    description:
      "Un espace cocooning, intime et apaisant, pensé pour vous offrir un véritable moment de détente. Comme le disent nos clientes : \"Endroit cosy et propre.\"",
  },
  {
    icon: <Star size={24} />,
    title: "Expertise & savoir-faire",
    description:
      "Des années d'expérience et une formation continue pour vous garantir des soins de qualité professionnelle.",
  },
  {
    icon: <Clock size={24} />,
    title: "Votre moment à vous",
    description:
      "Ici, on prend le temps. Pas de rush, pas de pression. Chaque rendez-vous est une parenthèse dédiée à votre bien-être.",
  },
  {
    icon: <MapPin size={24} />,
    title: "Proximité & accessibilité",
    description:
      "Situé Place de la Paix à Coubon, l'institut est facilement accessible avec un parking et vous accueille dans un cadre de vie paisible.",
  },
];

export default function Advantages() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-nude text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
            Pourquoi nous choisir
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl text-charcoal font-semibold mb-5">
            Bien plus qu&apos;un institut
          </h2>
          <div className="w-16 h-[1px] bg-nude mx-auto mb-6" />
          <p className="text-charcoal-light text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Chez Douc&apos;Heur de Laure, chaque détail compte pour faire de votre
            visite une expérience inoubliable.
          </p>
        </div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, index) => (
            <div
              key={index}
              className="text-center px-6 py-8"
            >
              <div className="w-16 h-16 rounded-full bg-nude/10 flex items-center justify-center text-nude mx-auto mb-5">
                {adv.icon}
              </div>
              <h3 className="font-[family-name:var(--font-serif)] text-lg sm:text-xl text-charcoal font-semibold mb-3">
                {adv.title}
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
