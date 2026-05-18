# 🌿 Mabopane Green Space Network – Front‑end

Welcome! This repository contains the public‑facing website for the **Mabopane Green Space Network**, a community‑driven non‑profit that connects, restores, and celebrates green spaces in Mabopane.

The site serves as a central hub for:
- Sharing news, events, and volunteer opportunities
- Showcasing green space projects and success stories
- Providing resources and contact information for the network

🌍 **Live site:** [coming soon via GitHub Pages]

---

## 👩🏾‍💻 Owner & Developer

**Tshegofatso** – project founder, developer, and maintainer.

- 📧 **Email:** [tshegofatso@duck.com](mailto:tshegofatso@duck.com)
- 🕊️ **Social:** @tshegofatsso (X, Instagram, Substack)

Feel free to reach out for collaboration, questions, or just to say hi! 🍃

---

## 🛠️ Tech & Tooling

The site is developed on the **Zo** platform – a local‑first development environment that runs the full stack (API + front‑end) on your machine. Once complete, the production build is deployed to **GitHub Pages** as a static site.

| Layer       | Technology                             |
| ----------- | -------------------------------------- |
| Front‑end   | React, Vite, Tailwind CSS              |
| Backend*    | Bun + Hono (API routes for dynamic needs) |
| Environment | Zo (handles dev server, builds, and deployment pipeline) |

*The backend is optional – the public site is entirely static. API routes are used during development when needed (e.g., file processing) and are not exposed on GitHub Pages.

---

## 💻 Local Development

### Using Zo (recommended)
If you have Zo installed, simply open this repository. Zo will handle the dev server, environment variables, and live preview automatically.

### Without Zo
You can also run the site with standard tooling.

**Prerequisites**
- Node.js (v18+) or Bun
- A package manager (npm, yarn, or bun)

**Setup**
```bash
git clone <repo-url>
cd mabopane-green-space-frontend
npm install   # or: bun install
```

Start the dev server

```bash
npm run dev   # or: bun dev
```

The site will open at http://localhost:5173 with hot‑reloading.

Build for production

```bash
npm run build
```

Static files are output to the dist/ folder – ready to be pushed to GitHub Pages.

---

🤝 Contributing

We love community contributions! Whether you’re fixing a typo, improving the design, or adding a new page, your help is welcome.

1. Fork this repo and create a new branch.
2. Make your changes and test them locally.
3. Open a pull request with a clear description.

If you’re new to web development, don’t worry – we’re happy to mentor. Check the issues labelled good first issue to get started.

---

📂 Project Structure

```
src/
  components/     # Reusable UI pieces (header, footer, cards)
  pages/          # Page components (Home, About, Events, …)
  assets/         # Images, icons, fonts
  App.tsx         # Main app layout & routing
  main.tsx        # React entry point
public/           # Static files (favicon, og:image, …)
index.html        # HTML shell
```

---

📜 License

This project is licensed under the MIT License – feel free to use, modify, and share.

---

Built with ☀️ and 🌱 by Tshegofatso and the Mabopane Green Space Network community.
