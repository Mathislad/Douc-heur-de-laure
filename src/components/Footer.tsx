import { Heart, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl text-white font-semibold mb-2">
              Douc&apos;Heur de Laure
            </h3>
            <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4">
              Institut de Beauté & Bien-être
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              Votre parenthèse de douceur, Place de la Paix à Coubon.
              Soins visage et corps, épilations, teinture et rehaussement de
              cils, onglerie et maquillage dans un cadre cosy et bienveillant.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/douc.heuredelaure"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-nude transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-medium text-sm tracking-wide uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "#accueil", label: "Accueil" },
                { href: "#prestations", label: "Nos soins" },
                { href: "#institut", label: "L'institut" },
                { href: "#avis", label: "Avis clients" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-nude transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Prestations */}
          <div>
            <h4 className="text-white font-medium text-sm tracking-wide uppercase mb-4">
              Nos soins
            </h4>
            <ul className="space-y-2.5">
              {[
                "Soins visage",
                "Soins corps",
                "Épilations",
                "Beauté du regard",
                "Onglerie & Maquillage",
                "Massages",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#prestations"
                    className="text-white/50 text-sm hover:text-nude transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {currentYear} Douc&apos;Heur de Laure — Tous droits réservés
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1">
            Fait avec <Heart size={10} className="text-nude" /> à Coubon
          </p>
        </div>
      </div>
    </footer>
  );
}
