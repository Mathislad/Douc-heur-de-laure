# Douc'heure de Laure — Site Vitrine

> Site vitrine pour **Douc'heure de Laure**, institut de beauté & bien-être — Place de la Paix, 43700 Coubon (Haute-Loire).

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-Private-red)

---

## Stack

| Techno | Version | Rôle |
|--------|---------|------|
| [Next.js](https://nextjs.org/) | 16.2 | Framework React (App Router, Turbopack) |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Typage statique |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first CSS, thème custom |
| [Lucide React](https://lucide.dev/) | 0.577 | Icônes SVG |
| [Google Fonts](https://fonts.google.com/) | — | Playfair Display + Lato |
| [Vercel](https://vercel.com/) | — | Déploiement cible |

## Quick Start

```bash
# Install
npm install

# Dev (http://localhost:3000)
npm run dev

# Build prod
npm run build && npm start

# Deploy
npx vercel
```

## Structure du projet

```
src/
├── app/
│   ├── globals.css            # Tokens couleurs, animations, reset
│   ├── layout.tsx             # Root layout, fonts, SEO meta, JSON-LD
│   └── page.tsx               # Assemblage des sections
│
└── components/
    ├── Header.tsx             # Nav fixe, scroll-aware, menu burger mobile
    ├── Hero.tsx               # Full-screen hero, CTA Planity + téléphone
    ├── Prestations.tsx        # 6 catégories de soins en grille
    ├── About.tsx              # Présentation de l'institut et de Laure
    ├── GalerieAmbiance.tsx    # Galerie photos (images Facebook réelles)
    ├── Advantages.tsx         # 6 points forts en cards
    ├── Testimonials.tsx       # Avis clients + badge Google 5/5
    ├── CTABand.tsx            # Bandeau d'appel à l'action
    ├── Contact.tsx            # Infos pratiques, horaires, map, Planity
    └── Footer.tsx             # Footer avec liens et réseaux
```

## Thème couleurs

Défini dans `globals.css` via des CSS custom properties consommées par Tailwind v4 :

| Token | Hex | Usage |
|-------|-----|-------|
| `cream` | `#FAF7F5` | Background principal |
| `nude` | `#D4A69A` | Accent principal, CTA |
| `rose` | `#E8C4C8` | Accents secondaires |
| `brun` | `#8B7355` | Hero, éléments forts |
| `sage` | `#A8B5A0` | Touches nature |
| `charcoal` | `#3D3D3D` | Textes |

## SEO

- Métadonnées Open Graph complètes (`layout.tsx`)
- Données structurées JSON-LD `BeautySalon` (horaires, adresse, note Google, coordonnées GPS)
- Balises sémantiques HTML5
- `lang="fr"`, police optimisée via `next/font`

## Infos business intégrées

| Donnée | Valeur |
|--------|--------|
| Adresse | Place de la Paix, 43700 Coubon |
| Téléphone | 07 68 42 99 21 |
| Facebook | [douc.heuredelaure](https://www.facebook.com/douc.heuredelaure) |
| Planity | [Réserver](https://www.planity.com/doucheure-de-laure-43700-coubon-57y) |
| Note Google | ⭐ 5/5 (19 avis) |

## Scripts

```bash
npm run dev      # Dev server (Turbopack)
npm run build    # Production build
npm run start    # Serve production
npm run lint     # ESLint
```

## License

Projet privé — tous droits réservés.
