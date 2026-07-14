# Anushka Arora — Educator Portfolio

A single-page portfolio site (white + navy blue theme, light/dark mode) built for teaching / education roles.

## Run locally
```
npm install
npm start
```
Visit http://localhost:3000

## Deploy to Render (free)
1. Push this folder to a GitHub repo.
2. On https://render.com → **New +** → **Web Service** → connect the repo.
3. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** Node
4. Click **Deploy** — Render will give you a live URL like `anushka-portfolio.onrender.com`.

(Render also offers a "Static Site" service type. Since this project has no build step, that works
too — just set the **Publish directory** to `public`.)

## Add a new certificate later
1. Drop the certificate image into `public/assets/certs/`.
2. Open `public/script.js`, find the `CERTIFICATES` array at the top, and copy/paste one entry,
   filling in `title`, `issuer`, `date`, and `image` (the path to your new file).
3. Save, redeploy (or just refresh locally) — it appears in the grid automatically. No HTML editing needed.

## Update the CV
Replace `public/cv/Anushka_Arora_CV.docx` with a new file of the same name, or update the `href`
on the "Download CV" button inside `public/index.html` if you rename it.

## Theme
- The toggle button (top-right) switches light/dark; the choice is remembered per visitor.
- Colors live at the top of `public/style.css` under `:root` and `html[data-theme="dark"]` —
  edit `--navy-900`, `--gold`, etc. to adjust the palette.

## One thing to double-check
In the Education timeline, your CV listed the same year (2021–2022) for both Class X and Class XII,
which looked like a typo. I kept XII as printed and flagged Class X in the code (`index.html`) —
please confirm the correct year and update it.
