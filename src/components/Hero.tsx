import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image — ambiance spa bien-être */}
      <Image
        src="/ambiance/hero-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
        aria-hidden="true"
      />
      {/* Warm overlay to match brand palette */}
      <div className="absolute inset-0 bg-gradient-to-br from-brun/75 via-brun/60 to-nude/50" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-nude/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Small tagline */}
        <p className="animate-fade-in-up text-white/70 text-xs sm:text-sm tracking-[0.4em] uppercase mb-6 sm:mb-8">
          Institut de Beauté & Bien-être — Coubon
        </p>

        {/* Main title */}
        <h1 className="animate-fade-in-up animate-delay-200 font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight mb-6 sm:mb-8">
          Votre parenthèse
          <br />
          <span className="italic font-normal text-nude-light">
            de douceur
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up animate-delay-400 text-white/80 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed">
          Prenez soin de vous dans un cadre chaleureux et bienveillant.
          <br className="hidden sm:block" />
          Soins visage, corps, beauté du regard, massages et bien plus encore.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-in-up animate-delay-600 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://www.planity.com/doucheure-de-laure-43700-coubon-57y"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brun px-8 py-3.5 rounded-full text-sm tracking-wide uppercase font-medium hover:bg-cream transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Réserver en ligne
          </a>
          <a
            href="tel:+33768429921"
            className="border border-white/40 text-white px-8 py-3.5 rounded-full text-sm tracking-wide uppercase font-light hover:bg-white/10 transition-all duration-300"
          >
            07 68 42 99 21
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#prestations" aria-label="Défiler vers le bas">
          <ChevronDown className="text-white/50" size={28} />
        </a>
      </div>
    </section>
  );
}
