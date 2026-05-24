# MyProfile

A personal portfolio and resume website built with plain **HTML, CSS, and JavaScript** — no build step, no framework, no dependencies. Deploys anywhere static files run (GitHub Pages, Netlify, Vercel, S3, etc.).

## Features

- **Two pages** — a portfolio (`index.html`) and a printable resume (`resume.html`)
- **Light & dark theme** with system-preference detection and a manual toggle (saved to `localStorage`)
- **Responsive** layout, mobile-first, with a collapsible mobile nav
- **Accessible** — semantic HTML, ARIA labels, visible focus states, skip link, reduced-motion support
- **Print-ready resume** — clean A4/Letter print styles, hide chrome, "Print / Save as PDF" button
- **Zero dependencies** — only Google Fonts (Inter) loaded from CDN; everything else is local
- **Fast** — under ~25 KB of CSS/JS, no bundler required

## Project structure

```
MyProfile/
├── index.html         # Portfolio (hero, about, skills, projects, contact)
├── resume.html        # CV / resume page with print support
├── css/
│   ├── style.css      # Shared styles, theme tokens, layout, components
│   └── resume.css     # Resume-specific styles + print rules
├── js/
│   └── main.js        # Theme toggle, mobile nav, print button
└── README.md
```

## Run locally

No build step required. Just open `index.html` in a browser, or serve the folder with any static server, for example:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Then visit http://localhost:8080.

## Customize

All content uses generic placeholders so you can find-and-replace your way to a finished site.

1. **Personal details** — search for `Your Name`, `Your City`, `you@example.com`, and the social URLs (`github.com/anadiazure`, `linkedin.com/`) in `index.html` and `resume.html` and replace with your own.
2. **Initials in the brand mark** — search for `YN` in both HTML files.
3. **Bio, projects, experience** — edit the text directly in the relevant section of `index.html` and `resume.html`.
4. **Theme color** — change `--accent` (and the dark-mode override) in `css/style.css` under the `:root` block.
5. **Skills / tags** — edit the `<ul class="tag-list">` lists.

## Deploy to GitHub Pages

1. Push to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, choose the branch (e.g. `main`) and the root folder (`/`).
4. Save. Your site will be available at `https://<your-username>.github.io/MyProfile/`.

## Print the resume as PDF

Open `resume.html` and click **Print / Save PDF** in the top-right (or use your browser's print dialog). The print stylesheet automatically:

- Hides navigation, footer, and the print button
- Forces a light, high-contrast palette
- Sets Letter-size page margins
- Avoids breaking entries across pages

## License

Free to use as a starting point for your own profile. Attribution is appreciated but not required.
