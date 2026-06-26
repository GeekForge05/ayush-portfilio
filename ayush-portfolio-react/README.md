# Ayush Kumar Pandey — Cybersecurity Portfolio

A production-ready, dark "Red Team" themed portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**. Showcases cybersecurity projects, certifications, experience, and skills with a recruiter-friendly, professional design — no matrix rain, no hacker-movie clichés.

---

## ✨ Features

- **Signature hero animation** — a terminal-style "boot sequence" types out the hero quote line by line, then reveals identity details
- **Dark / Light mode toggle** with persisted preference (`localStorage`)
- **Glassmorphism cards** throughout, consistent dark-red accent system
- **Scroll-triggered animations** via Framer Motion (`whileInView`)
- **Live GitHub stats** (repos / followers / contribution graph) with graceful fallback if the API is unreachable
- **Working contact form** (opens the visitor's email client via `mailto:`)
- **Fully responsive** — mobile, tablet, desktop
- **SEO-ready** — meta tags, Open Graph, Twitter cards, `robots.txt`
- **Accessible** — visible keyboard focus states, semantic landmarks, `prefers-reduced-motion` respected
- **Single source of truth for content** — all text lives in `src/data/portfolioData.js`, so updating your portfolio never requires touching component code

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Certifications.jsx
│   │   ├── Education.jsx
│   │   ├── AchievementsRoadmap.jsx
│   │   ├── GithubStats.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── SectionHeading.jsx
│   ├── data/
│   │   └── portfolioData.js      ← all editable content lives here
│   ├── hooks/
│   │   └── useTheme.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── .eslintrc.cjs
└── .gitignore
```

---

## 🚀 Installation

**Requirements:** Node.js 18+ and npm.

```bash
# 1. Move into the project folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

This outputs a static, optimized build to the `dist/` folder.

### Preview the production build locally

```bash
npm run preview
```

---

## ✏️ Editing Your Content

You almost never need to touch a component file. Open:

```
src/data/portfolioData.js
```

This single file contains your name, bio, skills, projects, certifications, experience, education, achievements, and learning roadmap as plain JavaScript objects/arrays. Edit the values and the whole site updates.

To change colors, open `src/index.css` (the `:root` and `.light` CSS variable blocks) and `tailwind.config.js`.

To change fonts, edit the Google Fonts `<link>` in `index.html` and the `fontFamily` block in `tailwind.config.js`.

---

## 🌐 Deployment to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
cd portfolio
vercel
```

Follow the prompts (link/create a project, accept the defaults — Vercel auto-detects Vite). For production deploys:

```bash
vercel --prod
```

### Option B — Vercel Dashboard (GitHub integration)

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects the **Vite** framework preset. Confirm these build settings (usually pre-filled):
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**. You'll get a live URL (e.g. `your-portfolio.vercel.app`) within a minute.
5. (Optional) Add a custom domain under **Project → Settings → Domains**.

### Environment variables

None required — this project has no backend and uses only public, unauthenticated APIs (GitHub's public REST API for the contribution stats).

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev) | UI library |
| [Vite](https://vitejs.dev) | Build tool / dev server |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide React](https://lucide.dev) | Icon set |

---

## 📐 Design System

| Token | Value |
|---|---|
| Background | `#0D1117` |
| Card | `#161B22` |
| Primary accent | `#FF4D4D` |
| Secondary accent | `#B22222` |
| Text | `#E6EDF3` |
| Display font | Space Grotesk |
| Body font | Inter |
| Mono / accent font | JetBrains Mono |

Colors are implemented as CSS variables (`src/index.css`) so the dark/light toggle works across every Tailwind utility class without duplicating styles.

---

## 📄 License

This project was generated for personal portfolio use by Ayush Kumar Pandey. Feel free to adapt it for your own purposes.
