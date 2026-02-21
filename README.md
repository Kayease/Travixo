# Travixo – Travel & Tour Next.js Template

A premium, fully responsive travel and tour booking template built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. Designed for travel agencies, tour operators, and hospitality businesses.

---

## Live Demo

[View Demo](https://travixo.kayease.com) · [Documentation](#documentation) · [Support](#support)

---

## Features

### Pages (33+ Routes)

| Category          | Pages                                                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Home**          | Homepage with 13 sections (Hero, Services, About, Benefits, Featured Tours, Tour Types, Explore, Destinations, Experience, Testimonials, Features, Community, CTA) |
| **Destinations**  | Destinations listing, Paris city guide                                                                                                                             |
| **Tours**         | Products listing, Product detail (Gallery, Overview, Highlights, Includes, Cancellation, FAQ, Reviews, Related Tours), Tour types, Tour activities                 |
| **Accommodation** | Stay listing, Room listing, Room detail                                                                                                                            |
| **Blog**          | Blog grid, Blog layout 2, Blog detail (dynamic slug)                                                                                                               |
| **E-Commerce**    | Cart, Wishlist, Checkout (multi-step), Compare                                                                                                                     |
| **User**          | Login, Signup, Profile (3 tabs), Settings, History                                                                                                                 |
| **Content**       | About, Team, Portfolio, News, Testimonials, FAQ, How It Works                                                                                                      |
| **Legal**         | Terms & Conditions, Privacy Policy                                                                                                                                 |
| **Contact**       | Contact form with info                                                                                                                                             |
| **System**        | Custom 404, Error boundary, Loading state                                                                                                                          |

### Key Features

- **Cart & Wishlist System** — Full e-commerce flow with localStorage persistence
- **Toast Notification System** — Global toast messages with auto-dismiss
- **Responsive Design** — Mobile-first with full mobile navigation drawer
- **Image Optimization** — Next.js Image component with Sharp
- **SEO Ready** — OpenGraph, Twitter cards, per-page metadata
- **TypeScript** — Full type safety throughout the codebase
- **Accessibility** — WCAG 2.1 AA focus-visible styles, ARIA labels, semantic HTML
- **Smooth Animations** — CSS-based hover effects, scroll animations, and transitions
- **Google Fonts** — Playfair Display (headings) + Poppins (body)

---

## Tech Stack

| Technology                                    | Version | Purpose                      |
| --------------------------------------------- | ------- | ---------------------------- |
| [Next.js](https://nextjs.org/)                | 16.1.6  | React framework (App Router) |
| [React](https://react.dev/)                   | 19.2.3  | UI library                   |
| [TypeScript](https://www.typescriptlang.org/) | 5.x     | Type safety                  |
| [Tailwind CSS](https://tailwindcss.com/)      | 4.1.18  | Utility-first CSS            |
| [Sharp](https://sharp.pixelplumbing.com/)     | 0.34.5  | Image optimization           |

---

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **pnpm**, or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/travixo.git

# Navigate to the project
cd travixo

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Create production build  |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Site URL (used for SEO metadata)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## Project Structure

```
travixo/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, providers)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles & CSS variables
│   ├── not-found.tsx             # Custom 404 page
│   ├── error.tsx                 # Global error boundary
│   ├── loading.tsx               # Global loading state
│   ├── context/                  # React Context providers
│   │   ├── CartContext.tsx        # Cart state (localStorage)
│   │   ├── WishlistContext.tsx    # Wishlist state (localStorage)
│   │   └── ToastContext.tsx       # Toast notification system
│   ├── constants/
│   │   └── data.ts               # Shared static data
│   ├── about/                    # About page
│   ├── blog/                     # Blog pages (grid + detail)
│   ├── cart/                     # Shopping cart
│   ├── checkout/                 # Multi-step checkout
│   ├── compare/                  # Tour comparison
│   ├── contact/                  # Contact form
│   ├── destinations/             # Destinations listing
│   ├── faq/                      # FAQ accordion
│   ├── history/                  # Travel history
│   ├── how-it-works/             # How it works
│   ├── login/                    # Login page
│   ├── signup/                   # Registration page
│   ├── news/                     # News/magazine
│   ├── paris/                    # Paris city guide
│   ├── portfolio/                # Portfolio/gallery
│   ├── products/                 # Products listing + detail
│   ├── profile/                  # User profile (3 tabs)
│   ├── room/                     # Room listing
│   ├── room-detail/              # Room detail
│   ├── settings/                 # User settings
│   ├── stay/                     # Stay/accommodation
│   ├── team/                     # Team page
│   ├── terms/                    # Terms & Conditions
│   ├── privacy/                  # Privacy Policy
│   ├── testimonials/             # Testimonials
│   ├── tour-activities/          # Tour activities
│   ├── tour-types/               # Tour types
│   └── wishlist/                 # Wishlist page
│
├── components/                   # Reusable UI components
│   ├── layout/                   # Navbar, Footer
│   ├── home/                     # 13 homepage sections
│   ├── ui/                       # Button, DatePicker, ReviewModal, Toast
│   ├── about/                    # About page components
│   ├── blogs/                    # Blog components
│   ├── cart/                     # Cart components
│   ├── checkout/                 # Checkout components
│   ├── compare/                  # Compare components
│   ├── destinations/             # Destinations components
│   ├── history/                  # History components
│   ├── paris/                    # Paris page components
│   ├── portfolio/                # Portfolio components
│   ├── room/                     # Room components
│   ├── room-detail/              # Room detail components
│   ├── stay/                     # Stay components
│   ├── team/                     # Team components
│   ├── tours/                    # Tour detail components
│   └── wishlist/                 # Wishlist components
│
├── public/                       # Static assets
│   ├── images/                   # All images (organized by feature)
│   └── icons/                    # SVG icons
│
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
├── eslint.config.mjs             # ESLint rules
├── postcss.config.mjs            # PostCSS (Tailwind plugin)
├── .env.example                  # Environment variables template
└── app/globals.css               # Tailwind CSS v4 config (via @theme)
```

---

## Design System

### Colors

| Name         | Hex       | CSS Variable           | Tailwind Class      |
| ------------ | --------- | ---------------------- | ------------------- |
| Brand Brown  | `#4B3621` | `--color-brand-brown`  | `text-brand-brown`  |
| Brand Orange | `#FF6E00` | `--color-brand-orange` | `text-brand-orange` |
| Brand Cream  | `#FFFCF5` | `--color-brand-cream`  | `bg-brand-cream`    |

### Typography

| Font                 | Usage                         | Class                 |
| -------------------- | ----------------------------- | --------------------- |
| **Playfair Display** | Headings, display text, CTAs  | `font-display`        |
| **Poppins**          | Body text, paragraphs, labels | `font-body` (default) |

### Components

| Component     | Location                        | Description                                             |
| ------------- | ------------------------------- | ------------------------------------------------------- |
| `Button`      | `components/ui/Button.tsx`      | 3 variants: primary, outline, ghost with fill animation |
| `DatePicker`  | `components/ui/DatePicker.tsx`  | Range date picker with calendar UI                      |
| `ReviewModal` | `components/ui/ReviewModal.tsx` | Star rating + comment form modal                        |
| `Toast`       | `components/ui/Toast.tsx`       | Success/error toast notification                        |
| `Navbar`      | `components/layout/Navbar.tsx`  | Fixed header with dropdowns, search, mobile drawer      |
| `Footer`      | `components/layout/Footer.tsx`  | Multi-column footer with newsletter                     |

---

## Customization

### Changing Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --color-brand-brown: #4b3621;
  --color-brand-orange: #f97316;
  --color-brand-cream: #fdfbf7;
}
```

### Changing Fonts

Edit the font configuration in `app/layout.tsx`:

```tsx
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});
```

### Adding New Pages

1. Create a new directory under `app/` (e.g., `app/new-page/`)
2. Add a `page.tsx` file with your component
3. Add a `layout.tsx` with metadata for SEO
4. Add the route to the Navbar in `components/layout/Navbar.tsx`

---

## Browser Support

| Browser       | Support         |
| ------------- | --------------- |
| Chrome        | Last 2 versions |
| Firefox       | Last 2 versions |
| Safari        | Last 2 versions |
| Edge          | Last 2 versions |
| Mobile Chrome | Latest          |
| Mobile Safari | Latest          |

---

## Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy via Vercel CLI or connect GitHub repo
```

### Self-Hosted

```bash
npm run build
npm run start
```

---

## Changelog

### v1.0.0 (February 2026)

- Initial release
- 33+ pages with full responsive design
- Cart, Wishlist, and Checkout system
- Toast notification system
- Custom 404, Error, and Loading pages
- Comprehensive demo content
- WCAG 2.1 AA accessible focus styles
- SEO metadata on all pages

---

## Credits

- **Fonts**: [Google Fonts](https://fonts.google.com/) — Playfair Display, Poppins
- **Framework**: [Next.js](https://nextjs.org/) by Vercel
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Custom SVG icons

---


## Support

For questions or support, please contact:

- **Email**: example@example.com 
- **Documentation**: [View Docs](#)
