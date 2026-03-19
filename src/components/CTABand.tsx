import { Phone } from "lucide-react";

export default function CTABand() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brun via-brun-light to-nude" />
      <div className="absolute inset-0 bg-black/10" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

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
