# NUVEX Website

**New Standard in Supply** — B2B Wholesale Apparel

---

## Only file you ever edit

```
src/content.json
```

Open it in Notepad. Change anything. Save. Push to GitHub. Done.

---

## File structure

```
nuvex/
├── src/
│   ├── App.jsx          ← Entire website (read only)
│   ├── App.css          ← All styling (read only)
│   ├── main.jsx         ← Entry point (never touch)
│   └── content.json     ← YOUR DATA (edit this only)
├── public/              ← Add images here
├── index.html           ← Never touch
├── package.json         ← Never touch
├── vite.config.js       ← Change base path once
└── .github/
    └── workflows/
        └── deploy.yml   ← Auto deploys on push
```

---

## First time setup

1. Install Node.js from nodejs.org
2. Install GitHub Desktop from desktop.github.com
3. Extract this zip to Desktop
4. Open terminal, run: `cd Desktop/nuvex-final && npm install`
5. Open GitHub Desktop → Add Existing Repository → select folder
6. Commit + Publish
7. Go to GitHub repo → Settings → Pages → gh-pages branch → Save

---

## Change your repo name in vite.config.js

```js
base: '/your-repo-name/',   // match your GitHub repo name exactly
```

If using custom domain (nuvex.in):
```js
base: '/',
```

---

## Update website

1. Open `src/content.json` in Notepad
2. Change what you want
3. Save
4. GitHub Desktop → Commit → Push
5. Live in 3 minutes

---

## Add a product

In `src/content.json`, find the `products` array and add:

```json
{
  "id": "05",
  "name": "Your Product Name",
  "desc": "Description here.",
  "specs": ["Spec 1", "Spec 2", "MOQ 50 pcs"],
  "tag": "New"
}
```

Set `"tag": null` if you don't want a badge.

---

## Move to Vercel/Netlify later

1. Push your code to GitHub (already done)
2. Go to vercel.com or netlify.com
3. Import your GitHub repo
4. They auto-detect Vite + React
5. Done — same site, faster hosting

---

## Contact

WhatsApp: +91 95222 33950
Email: orders@nuvex.in
