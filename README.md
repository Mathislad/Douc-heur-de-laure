# Site Vitrine — Douc'Heur de Laure

> Site vitrine premium pour un institut de beauté et de bien-être, conçu pour la vente ou la remise à un client.

---

## Résumé du projet

| Propriété | Valeur |
|-----------|--------|
| **Type** | Site vitrine premium (one-page multi-sections) |
| **Client fictif / cible** | Institut de beauté & bien-être, TPE locale |
| **Secteur** | Beauté, bien-être, soins esthétiques |
| **Langue** | Français |
| **Statut** | ✅ Terminé — prêt à livrer |
| **Démo en ligne** | https://douc-heur-de-laure.vercel.app |
| **Dépôt GitHub** | https://github.com/Mathislad/Douc-heur-de-laure |

---

## Contenu du site

Le site contient **10 sections** :

| # | Section | Rôle | Image |
|---|---------|------|-------|
| 1 | **Header** | Navigation fixe, logo + téléphone cliquable | — |
| 2 | **Hero** | Accroche principale plein écran + 2 CTA | ✅ `hero-bg.jpg` (1920×1280) |
| 3 | **Prestations** | 6 cartes de services avec image + liste | ✅ 6 images locales |
| 4 | **À propos** | Présentation de l'institut, valeurs | ✅ `about-institut.jpg` |
| 5 | **Galerie Ambiance** | 4 photos ambiance, rendu cocooning | ✅ 4 images locales |
| 6 | **Réassurance** | 6 arguments différenciants (icônes) | — |
| 7 | **Témoignages** | 4 avis clients + badge Google 5/5 | — |
| 8 | **CTA Band** | Bande d'appel à l'action + fond photo | ✅ `cta-bg.jpg` |
| 9 | **Contact** | Adresse, horaires, téléphone, carte Google Maps | — |
| 10 | **Footer** | Liens, réseaux sociaux, mentions légales | — |

### Prestations couvertes (6 fiches)

- Soins Visage
- Soins Corps
- Épilations
- Beauté du Regard
- Onglerie & Maquillage
- Massages & Bien-être

---

## Stack technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| **Next.js** | 16.2.0 | Framework React, App Router, rendu statique |
| **React** | 19.2.4 | UI |
| **TypeScript** | 5.x | Typage strict, zéro erreur |
| **Tailwind CSS** | 4.x | Styles utilitaires, tokens couleurs custom |
| **lucide-react** | 0.577 | Icônes |
| **next/image** | — | Optimisation images (lazy load, formats modernes) |
| **next/font** | — | Polices Google auto-hébergées (Playfair Display + Lato) |

### Dépendances de production

```json
"next": "16.2.0",
"react": "19.2.4",
"react-dom": "19.2.4",
"lucide-react": "^0.577.0"
```

Aucune dépendance lourde, aucun CMS, aucune base de données.

---

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx        ← SEO complet, JSON-LD, polices, métadonnées
│   ├── page.tsx          ← Assemblage des sections
│   └── globals.css       ← Tokens couleurs Tailwind, animations
└── components/
    ├── Header.tsx         ← Navigation fixe, scroll-aware
    ├── Hero.tsx           ← Plein écran, fond photo, 2 CTA
    ├── Prestations.tsx    ← 6 cartes avec image + liste
    ├── About.tsx          ← Texte + photo + carte flottante
    ├── GalerieAmbiance.tsx← Grille 4 photos, hover animé
    ├── Advantages.tsx     ← 6 blocs réassurance icônes
    ├── Testimonials.tsx   ← 4 avis + badge Google 5/5
    ├── CTABand.tsx        ← Bande pleine largeur, fond photo
    ├── Contact.tsx        ← Infos pratiques + Google Maps iframe
    └── Footer.tsx         ← Liens, réseaux, copyright

public/
├── ambiance/
│   ├── hero-bg.jpg        ← 1920×1280 — fond hero
│   ├── about-institut.jpg ← 900×600 — section à propos
│   └── cta-bg.jpg         ← 1600×1067 — fond CTA band
├── galerie/
│   ├── galerie-1.jpg      ← 700×467 — espace détente
│   ├── galerie-2.jpg      ← 700×467 — soins & rituels
│   ├── galerie-3.jpg      ← 700×1050 — produits cosmétiques
│   └── galerie-4.jpg      ← 700×467 — gestes soins mains
└── prestations/
    ├── soins-visage.jpg   ← 800×534
    ├── soins-corps.jpg    ← 800×533
    ├── epilation.jpg      ← 800×1067
    ├── beaute-regard.jpg  ← 800×533
    ├── onglerie.jpg       ← 800×1200
    └── massage.jpg        ← 800×533
```

---

## SEO & Données structurées

- Balises `<title>` et `<meta description>` optimisées
- Keywords ciblés : institut beauté Coubon, Haute-Loire, Le Puy-en-Velay
- **JSON-LD** `BeautySalon` complet :
  - Nom, adresse, coordonnées GPS
  - Numéro de téléphone
  - Horaires d'ouverture (7 jours)
  - Note Google (5/5, 19 avis)
  - URL Facebook
- Polices auto-hébergées (pas de requête Google Fonts côté client)
- Images avec attributs `alt` descriptifs sur toutes les balises `<Image>`
- `suppressHydrationWarning` sur `<body>` (compatibilité extensions navigateur)

---

## Données réelles intégrées

| Donnée | Valeur |
|--------|--------|
| **Nom commercial** | Douc'Heur de Laure |
| **Adresse** | Place de la Paix, 43700 Coubon |
| **Téléphone** | 07 68 42 99 21 |
| **Coordonnées GPS** | 44.9971052, 3.9180053 |
| **Réservation en ligne** | https://www.planity.com/doucheure-de-laure-43700-coubon-57y |
| **Facebook** | https://www.facebook.com/douc.heuredelaure |
| **Note Google** | 5/5 — 19 avis |
| **Horaires** | Lun 14h-18h · Mar 9h-19h · Mer fermé · Jeu-Ven 9h-19h · Sam 9h-13h |

---

## Images

13 images d'ambiance sélectionnées manuellement sur **Unsplash** (licence libre, usage commercial autorisé).

- Aucune photo réelle de l'établissement
- Aucune image liée à un réseau social
- Toutes téléchargées localement dans `/public/`
- Cohérence visuelle : tons beige / nude / crème / brun doux / lumière chaude
- Optimisées via `next/image` (lazy loading, formats WebP automatiques)

---

## Performances & qualité

| Critère | Résultat |
|---------|---------|
| **Build TypeScript** | ✅ Zéro erreur, zéro warning |
| **Rendu** | Statique (`○ Static`) — vitesse maximale |
| **Responsive** | ✅ Mobile, tablette, desktop |
| **Accessibilité** | `alt` sur toutes les images, liens sémantiques |
| **Poids assets** | ~1.4 Mo (images publiques) |
| **Lignes de code** | ~1 360 lignes (hors node_modules) |
| **Nombre de commits** | 7 commits propres et documentés |

---

## Déploiement

| Environnement | URL | Statut |
|---------------|-----|--------|
| **Production** | https://douc-heur-de-laure.vercel.app | ✅ Live |
| **GitHub** | https://github.com/Mathislad/Douc-heur-de-laure | ✅ Public |

- Hébergé sur **Vercel** (plan gratuit)
- Déploiement automatique à chaque `git push` sur `main`
- Aucune configuration serveur requise

---

## Commandes

```bash
npm install      # Installer les dépendances
npm run dev      # Serveur de développement (http://localhost:3000)
npm run build    # Build de production
npm run start    # Serveur de production local
npm run lint     # Vérification ESLint
```

---

## Ce qui est inclus dans la livraison

- ✅ Code source complet (Next.js / TypeScript / Tailwind)
- ✅ 13 images d'ambiance sélectionnées et organisées
- ✅ Toutes les données réelles du client intégrées
- ✅ SEO on-page complet (métadonnées + JSON-LD)
- ✅ Site déployé et en ligne sur Vercel
- ✅ Dépôt GitHub propre avec historique de commits
- ✅ Responsive mobile / tablette / desktop
- ✅ Aucune dépendance externe fragile (tout est local ou natif Next.js)

## Ce qui n'est pas inclus

- ❌ Formulaire de contact fonctionnel (envoi d'email)
- ❌ Système de réservation intégré (redirection vers Planity existant)
- ❌ Back-office / CMS pour modifier le contenu
- ❌ Nom de domaine personnalisé
- ❌ Maintenance ou mises à jour après livraison

---

*Projet réalisé avec Next.js 16, TypeScript 5, Tailwind CSS 4 — Mars 2026*
