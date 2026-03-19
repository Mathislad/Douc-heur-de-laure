import { Heart, Leaf, Clock } from "lucide-react";

export default function About() {
  return (
    <section id="institut" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual side */}
          <div className="relative">
            {/* Main image placeholder with gradient */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-nude/30 via-nude-light/20 to-sage/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <Leaf className="text-nude/40 mx-auto mb-4" size={48} />
                  <p className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl text-brun/60 italic">
                    Un espace
                    <br />
                    dédié à votre
                    <br />
                    bien-être
                  </p>
                </div>
              </div>
              {/* Decorative overlay pattern */}
              <div className="absolute inset-0 bg-gradient-to-t from-brun/10 to-transparent" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-4 sm:right-4 bg-white rounded-2xl p-5 shadow-lg max-w-[220px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
                  <Clock size={18} className="text-sage" />
                </div>
                <span className="font-[family-name:var(--font-serif)] text-charcoal font-semibold text-sm">
                  Votre moment
                </span>
              </div>
              <p className="text-charcoal-light text-xs leading-relaxed">
                Chaque visite est une parenthèse de calme, loin du quotidien.
              </p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-nude text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">
              L&apos;institut
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl text-charcoal font-semibold mb-6 leading-tight">
              Un univers de
              <br />
              <span className="italic font-normal text-nude">
                douceur & d&apos;attention
              </span>
            </h2>
            <div className="w-16 h-[1px] bg-nude mb-8" />

            <div className="space-y-5 text-charcoal-light leading-relaxed">
              <p>
                Bienvenue chez <strong className="text-charcoal font-medium">Douc&apos;heure de Laure</strong>,
                votre institut de beauté et de bien-être situé Place de la Paix
                à Coubon, en Haute-Loire.
              </p>
              <p>
                Ici, chaque soin est un moment privilégié. Laure vous accueille
                dans un cadre chaleureux et intimiste, pensé pour que vous vous
                sentiez immédiatement apaisée et choyée. Loin de l&apos;agitation
                du quotidien, l&apos;institut est un cocon où l&apos;on prend le temps
                de prendre soin de vous.
              </p>
              <p>
                Passionnée par la beauté et le bien-être, Laure met son
                savoir-faire et sa délicatesse au service de chaque cliente.
                Soins visage et corps, épilations, teinture et rehaussement de
                cils, onglerie et maquillage — chaque prestation est réalisée
                avec précision et bienveillance, dans un endroit cosy et soigné.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 bg-white rounded-xl p-4">
                <Heart size={20} className="text-nude flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-charcoal text-sm">Écoute</p>
                  <p className="text-xs text-charcoal-light mt-1">
                    Un accompagnement personnalisé
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white rounded-xl p-4">
                <Leaf size={20} className="text-sage flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-charcoal text-sm">Douceur</p>
                  <p className="text-xs text-charcoal-light mt-1">
                    Des gestes attentionnés
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white rounded-xl p-4">
                <Clock size={20} className="text-brun flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-charcoal text-sm">Temps</p>
                  <p className="text-xs text-charcoal-light mt-1">
                    Un moment rien que pour vous
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
