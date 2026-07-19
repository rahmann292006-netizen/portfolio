# Abdul Rahman — AI Engineer Portfolio

Premium personal portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

Dark, glassmorphic UI inspired by Apple, OpenAI, and Vercel — designed for recruiters and internship applications.

## Features

- Hero with typing animation and CTAs
- About, Skills, Learning Timeline, Projects
- GitHub stats / contribution graph placeholders
- Certifications, Resume download, Contact
- Scroll progress bar, loading screen, Framer Motion transitions
- Fully responsive & SEO-friendly meta tags

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 | UI |
| Vite 8 | Build tooling |
| Tailwind CSS 4 | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install

```bash
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          # Replace with your real resume
├── src/
│   ├── components/         # Section & shared UI components
│   ├── data.js             # Content config (skills, projects, links)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Tailwind + design tokens
├── index.html              # SEO meta tags
└── package.json
```

## Customize

1. **Social links & email** — edit `src/data.js` → `socials`
2. **Projects / GitHub URLs** — update each project’s `github` and `demo` fields
3. **Resume** — replace `public/resume.pdf` with your PDF
4. **Photo** — swap the Hero photo placeholder in `src/components/Hero.jsx`
5. **Certifications** — update titles, issuers, and years in `src/data.js`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run oxlint |

## License

Personal portfolio — free to adapt for your own use.
