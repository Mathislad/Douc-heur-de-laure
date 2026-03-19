import { Star, Quote, ExternalLink } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  service: string;
  isReal?: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: "Avis Google",
    text: "Endroit cosy et propre.",
    rating: 5,
    service: "Avis vérifié Google",
    isReal: true,
  },
  {
    name: "Marie L.",
    text: "Un moment de pure détente ! Laure est à l'écoute, douce et vraiment professionnelle. Mon soin visage était parfait, ma peau n'a jamais été aussi belle. Je recommande les yeux fermés.",
    rating: 5,
    service: "Soin visage",
  },
  {
    name: "Sophie D.",
    text: "Je viens régulièrement pour les épilations et le rehaussement de cils. Le cadre est magnifique, on se sent tout de suite bien. C'est devenu mon rituel beauté préféré !",
    rating: 5,
    service: "Beauté du regard",
  },
  {
    name: "Camille R.",
    text: "Le massage relaxant est un vrai bonheur. On sent que Laure met tout son savoir-faire et sa bienveillance dans chaque geste. Un vrai cocon de douceur à Coubon.",
    rating: 5,
    service: "Massage relaxant",
  },
];

export default function Testimonials() {
  return (
    <section id="avis" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-nude text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
            Témoignages
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl text-charcoal font-semibold mb-5">
            Elles en parlent
          </h2>
          <div className="w-16 h-[1px] bg-nude mx-auto mb-6" />
          <p className="text-charcoal-light text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            La satisfaction de nos clientes est notre plus belle récompense.
          </p>

          {/* Google rating badge */}
          <div className="flex items-center justify-center gap-3 mt-6 bg-white rounded-full px-6 py-3 shadow-sm border border-cream-dark/30 w-fit mx-auto">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-nude fill-nude"
                />
              ))}
            </div>
            <span className="text-charcoal font-semibold text-sm">5/5</span>
            <span className="text-charcoal-light text-sm">— 19 avis Google</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-cream rounded-2xl p-7 sm:p-8 relative border border-cream-dark/30"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-nude/20 absolute top-6 right-6"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-nude fill-nude"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-charcoal-light text-sm sm:text-base leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-nude/15 flex items-center justify-center">
                  <span className="text-nude font-medium text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-charcoal font-medium text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-charcoal-light text-xs">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-10">
          <a
            href="https://maps.google.com/?q=Douc'heure+de+Laure+Coubon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-nude text-sm hover:text-nude-dark transition-colors"
          >
            <ExternalLink size={14} />
            Voir tous les avis sur Google
          </a>
        </div>
        <p className="text-center text-charcoal-light/50 text-xs mt-4 italic">
          Le premier avis est issu de Google. Les autres sont présentés à titre illustratif.
        </p>
      </div>
    </section>
  );
}
