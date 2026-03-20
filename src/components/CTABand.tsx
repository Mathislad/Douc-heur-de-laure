import { Phone } from "lucide-react";
import Image from "next/image";

export default function CTABand() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      {/* Background image */}
      <Image
        src="/ambiance/cta-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brun/85 via-brun/75 to-nude/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl text-white font-semibold mb-5 leading-tight">
          Offrez-vous un moment
          <br />
          <span className="italic font-normal text-white/80">
            de douceur
          </span>
        </h2>
        <p className="text-white/70 text-base sm:text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Prenez rendez-vous et laissez-vous guider vers un instant de
          bien-être, rien que pour vous.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+33768429921"
            className="flex items-center gap-2 bg-white text-brun px-8 py-3.5 rounded-full text-sm tracking-wide uppercase font-medium hover:bg-cream transition-all duration-300 shadow-lg"
          >
            <Phone size={16} />
            Appeler maintenant
          </a>
          <a
            href="#contact"
            className="border border-white/40 text-white px-8 py-3.5 rounded-full text-sm tracking-wide uppercase font-light hover:bg-white/10 transition-all duration-300"
          >
            Voir les informations
          </a>
        </div>
      </div>
    </section>
  );
}
