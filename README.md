# Kiruthika A — Portfolio

A modern, dark-themed Java Full Stack Developer portfolio built with **React + Vite**.

---

## 🗂️ Project Structure

```
keerthi_portfolio/
├── index.html                        ← App entry point (loads fonts + Tabler Icons)
├── package.json                      ← Dependencies & scripts
├── vite.config.js                    ← Vite config
│
└── src/
    ├── main.jsx                      ← React root mount
    ├── index.css                     ← Global reset & CSS variables
    │
    └── Protofile_Profile/
        ├── App.jsx                   ← Router (BrowserRouter + Routes)
        │
        ├── Nav/
        │   ├── Nav.jsx               ← Sticky navbar + mobile sidebar
        │   └── Nav.scss              ← Navbar styles
        │
        ├── Home/
        │   ├── Home.jsx              ← Hero, Quick About, Skills Preview, Featured Projects
        │   ├── Home.scss             ← Home page styles
        │   └── kee.jpeg              ← Profile photo
        │
        ├── About/
        │   ├── About.jsx             ← Full bio, internships, certifications, skills
        │   └── About.scss            ← About page styles
        │
        ├── Project/
        │   ├── Projects.jsx          ← All 10 projects with search & filter
        │   └── Project.css           ← Projects page styles
        │
        └── Contact/
            ├── Contact.jsx           ← Contact form + info
            └── Contact.css           ← Contact page styles
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

---

## 📦 Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Framework  | React 19 + Vite                   |
| Routing    | React Router DOM v7               |
| Styling    | SCSS, Less, CSS (per component)   |
| Icons      | Tabler Icons (CDN)                |
| Fonts      | Syne + DM Sans (Google Fonts)     |

---

## ✨ Projects Included

| # | Project            | Category   |
|---|--------------------|------------|
| 1 | ShieldHer          | Full Stack |
| 2 | SportsZone         | Full Stack |
| 3 | Zivvo Chatbox      | Full Stack |
| 4 | AI Career Platform | Full Stack |
| 5 | Event Management   | Full Stack |
| 6 | Job Portal         | Full Stack |
| 7 | Portfolio Website  | Frontend   |
| 8 | Responsive UI Kit  | Frontend   |
| 9 | CRUD Application   | Java       |
|10 | Auth System        | Java       |

---

## 📄 Pages

- **Home** — Hero section, quick bio, skills chips, featured projects
- **About** — Full bio, internships, certifications, tech skills
- **Projects** — All 10 projects with live search + category filter
- **Contact** — Contact info + message form
