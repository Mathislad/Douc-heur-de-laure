import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Douc'heure de Laure | Institut de Beauté & Bien-être à Coubon",
  description:
    "Votre institut de beauté Place de la Paix à Coubon (43700), près du Puy-en-Velay. Soins visage et corps, épilations, teinture et rehaussement de cils, onglerie et maquillage. Noté 5/5 sur Google.",
  keywords: [
    "institut beauté Coubon",
    "Douc'heure de Laure",
    "soins visage Haute-Loire",
    "épilation Coubon",
    "rehaussement cils Coubon",
    "massage bien-être Le Puy-en-Velay",
    "onglerie Coubon",
    "maquillage institut Coubon",
    "institut beauté Place de la Paix Coubon",
  ],
  openGraph: {
    title: "Douc'heure de Laure | Institut de Beauté & Bien-être à Coubon",
    description:
      "Votre parenthèse de douceur à Coubon. Soins visage et corps, épilations, teinture et rehaussement de cils, onglerie et maquillage. 5/5 sur Google.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Douc'heure de Laure",
              description:
                "Institut de Beauté & Bien-être à Coubon. Soins visage et corps, épilations, teinture et rehaussement de cils, onglerie et maquillage.",
              url: "https://www.facebook.com/douc.heuredelaure",
              telephone: "+33768429921",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Place de la Paix",
                addressLocality: "Coubon",
                postalCode: "43700",
                addressRegion: "Haute-Loire",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 44.9971052,
                longitude: 3.9180053,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "19",
                bestRating: "5",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Monday",
                  opens: "14:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "13:00",
                },
              ],
              sameAs: ["https://www.facebook.com/douc.heuredelaure"],
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
