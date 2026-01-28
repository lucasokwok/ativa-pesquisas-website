# Ativa Pesquisas — Institutional Website (Portfolio)

An institutional “showcase” website for **Ativa Pesquisas**, built as a portfolio project with a strong emphasis on technical credibility (biocorrosion mitigation, ecological by-products, alternative binders, and sustainable durability in aggressive environments).

---

## Tech Stack

- **React + Vite**
- **TypeScript**
- **React Router DOM** (multi-page routing)
- **Tailwind CSS v4** via **@tailwindcss/vite** (no `tailwindcss init -p`)

---

## Pages (v1 sitemap)

- Home
- Technology
- Applications
- About
- Projects
- Contact
- NotFound (404 fallback)

---

## Requirements

- **Node.js (LTS recommended)**
- **npm** (bundled with Node)

Check versions:

```bash
node -v
npm -v
```

---

## Run Locally (Development / Testing)

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

Vite will print the local URL (commonly `http://localhost:5173`).

> Vite uses HMR (Hot Module Replacement): save your files and the browser updates instantly.

---

## Production Build & Preview

Build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Project Structure (Essential)

```txt
src/
  assets/           # images (e.g., home-hero-01.webp, etc.)
  components/
    Header.tsx
    Footer.tsx
  layouts/
    SiteLayout.tsx
  pages/
    Home.tsx
    Technology.tsx
    Applications.tsx
    About.tsx
    Projects.tsx
    Contact.tsx
    NotFound.tsx
  router.tsx
  main.tsx
  index.css
```

---

## Conventions

### Commit Messages

Recommended: **Conventional Commits** (preferably in English):

- `feat: ...`
- `fix: ...`
- `chore: ...`
- `style: ...`

Examples:

- `feat: add hero image grid to home`
- `chore: configure tailwind vite plugin`

### Asset Naming

For a clear and consistent order:

- `src/assets/home/home-hero-01.webp`
- `src/assets/home/home-hero-02.webp`
- `src/assets/home/home-hero-03.webp`

Use lowercase, hyphens, and zero-padded numbering (`01`, `02`, `03`).

---

## Notes

- This project currently **does not use** `.env` files (no environment secrets/config needed).
- Layout is designed in an **industrial clean** style: text sections are typically constrained for readability, while image sections can be wider (hero).

---

## Scripts (Quick Reference)

- `npm run dev` — start development server
- `npm run build` — create production build
- `npm run preview` — preview production build locally
