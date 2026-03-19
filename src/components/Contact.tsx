import { MapPin, Phone, Clock, Mail, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-nude text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
            Informations pratiques
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl text-charcoal font-semibold mb-5">
            Venez nous retrouver
          </h2>
          <div className="w-16 h-[1px] bg-nude mx-auto mb-6" />
          <p className="text-charcoal-light text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            L&apos;institut vous accueille sur rendez-vous dans un cadre
            paisible au cœur de Coubon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Info cards */}
          <div className="space-y-5">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 flex items-start gap-5 border border-cream-dark/30">
              <div className="w-12 h-12 rounded-full bg-nude/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-nude" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-serif)] text-lg text-charcoal font-semibold mb-1">
                  Adresse
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  Place de la Paix
                  <br />
                  43700 Coubon
                </p>
                <a
                  href="https://maps.google.com/?q=Place+de+la+Paix,+43700+Coubon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-nude text-sm hover:text-nude-dark transition-colors"
                >
                  Voir sur Google Maps →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 flex items-start gap-5 border border-cream-dark/30">
              <div className="w-12 h-12 rounded-full bg-nude/10 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-nude" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-serif)] text-lg text-charcoal font-semibold mb-1">
                  Téléphone
                </h3>
                <a
                  href="tel:+33768429921"
                  className="text-charcoal-light text-sm hover:text-nude transition-colors"
                >
                  07 68 42 99 21
                </a>
                <p className="text-charcoal-light/60 text-xs mt-1">
                  Appelez pour prendre rendez-vous
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 flex items-start gap-5 border border-cream-dark/30">
              <div className="w-12 h-12 rounded-full bg-nude/10 flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-nude" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-serif)] text-lg text-charcoal font-semibold mb-2">
                  Horaires d&apos;ouverture
                </h3>
                <div className="space-y-1.5 text-sm text-charcoal-light">
                  <div className="flex justify-between gap-8">
                    <span>Lundi</span>
                    <span className="text-charcoal">14h00 – 18h00</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span>Mardi</span>
                    <span className="text-charcoal">9h00 – 19h00</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span>Mercredi</span>
                    <span className="text-charcoal">Fermé</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span>Jeudi</span>
                    <span className="text-charcoal">9h00 – 19h00</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span>Vendredi</span>
                    <span className="text-charcoal">9h00 – 19h00</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span>Samedi</span>
                    <span className="text-charcoal">9h00 – 13h00</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span>Dimanche</span>
                    <span className="text-charcoal">Fermé</span>
                  </div>
                </div>
                <p className="text-charcoal-light/60 text-xs mt-3 italic">
                  Sur rendez-vous uniquement
                </p>
              </div>
            </div>

            {/* Email + Social */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 flex items-start gap-5 border border-cream-dark/30">
              <div className="w-12 h-12 rounded-full bg-nude/10 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-nude" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-serif)] text-lg text-charcoal font-semibold mb-2">
                  Nous contacter
                </h3>
                <div className="flex gap-3 mt-3">
                  <a
                    href="https://www.facebook.com/douc.heuredelaure"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-charcoal-light hover:bg-nude hover:text-white transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map / Visual side */}
          <div className="relative">
            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden h-full min-h-[400px] lg:min-h-[500px] border border-cream-dark/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.5!2d3.9180053!3d44.9971052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5f792d959854e%3A0x923504c60ab15499a!2sDouc%27heure+de+Laure+-+Institut+de+Beaut%C3%A9!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de Douc'Heur de Laure à Coubon"
                className="w-full h-full"
              />
            </div>

            {/* Floating CTA */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg">
              <p className="font-[family-name:var(--font-serif)] text-charcoal font-semibold mb-2">
                Prête pour un moment de douceur ?
              </p>
              <p className="text-charcoal-light text-sm mb-4">
                Réservez votre créneau dès maintenant.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+33768429921"
                  className="inline-flex items-center gap-2 bg-nude text-white px-6 py-3 rounded-full text-sm tracking-wide hover:bg-nude-dark transition-colors duration-300"
                >
                  <Phone size={14} />
                  07 68 42 99 21
                </a>
                <a
                  href="https://www.planity.com/doucheure-de-laure-43700-coubon-57y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-nude text-nude px-6 py-3 rounded-full text-sm tracking-wide hover:bg-nude hover:text-white transition-colors duration-300"
                >
                  Réserver sur Planity
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
