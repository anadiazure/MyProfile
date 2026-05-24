# Anadi Mayank Kasaundhan — Portfolio

Personal portfolio and resume site for **Anadi Mayank Kasaundhan** — Lead Specialty Software Engineer, Modernization Lead, and Cloud & AI Architect (GCP, Kubernetes/OpenShift, GPU Platforms, MLOps).

Built with plain **HTML, CSS, and JavaScript** — no build step, no framework, no dependencies. Deploys anywhere static files run (GitHub Pages, Netlify, Vercel, S3, etc.).

## Live sections

**Portfolio (`index.html`)**
- Hero with title and contact
- Career highlights (key metrics: 18+ years, 20+ engineers led, ~55% GPU gain, 35% reliability uplift, etc.)
- About — professional summary and current role
- Core competencies — 8 categories spanning Cloud, Kubernetes, GPU/HPC, MLOps, Big Data, IaC, Security, Programming
- Selected projects — GCP Cloud Adoption, Enterprise GenAI Platform, Big Data Platform, GPU Hard Kill Switch patent
- Recognition — certifications (GCP, Azure, PMP, Terraform), education (IIM Bangalore, IIT Madras, UPTU), awards
- Contact

**Resume (`resume.html`)**
- Header with contact details
- Professional summary
- Work experience — 4 Wells Fargo roles (2013–Present) plus Oracle, Thomson Reuters, Birlasoft
- Select projects with measurable outcomes
- Core competencies (8 categories)
- Certifications
- Education
- Patent — GPU Hard Kill Switch
- Accolades — 6 awards across 11 years
- Print/save-PDF support with optimized print stylesheet

## Features

- **Light & dark theme** with system-preference detection and a manual toggle (saved to `localStorage`)
- **Responsive** layout, mobile-first, with a collapsible mobile nav
- **Accessible** — semantic HTML, ARIA labels, visible focus states, skip link, reduced-motion support
- **Print-ready resume** — clean Letter print styles, hide chrome, "Print / Save as PDF" button
- **Zero dependencies** — only Google Fonts (Inter) loaded from CDN; everything else is local
- **Fast** — under ~30 KB of CSS/JS, no bundler required

## Project structure

```
MyProfile/
├── index.html         # Portfolio page
├── resume.html        # CV / resume page with print support
├── css/
│   ├── style.css      # Shared styles, theme tokens, layout, components
│   └── resume.css     # Resume-specific styles + print rules
├── js/
│   └── main.js        # Theme toggle, mobile nav, print button
└── README.md
```

## Run locally

No build step required. Open `index.html` directly, or serve the folder with any static server:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Then visit http://localhost:8080.

## Deploy to GitHub Pages

1. Push to GitHub (already done — repo: `anadiazure/MyProfile`).
2. Go to **Settings → Pages**.
3. Under **Source**, choose the `main` branch and the root folder (`/`).
4. Save. The site will be available at `https://anadiazure.github.io/MyProfile/`.

## Print the resume as PDF

Open `resume.html` and click **Print / Save PDF** in the top-right (or use your browser's print dialog).

The print stylesheet automatically:
- Hides navigation, footer, and the print button
- Forces a light, high-contrast palette
- Sets Letter-size page margins
- Avoids breaking entries across pages

## Contact

- Email: [mayankanadi@gmail.com](mailto:mayankanadi@gmail.com)
- Phone: +91 8099066820
- LinkedIn: [linkedin.com/in/anadi-kasaundhan](https://www.linkedin.com/in/anadi-kasaundhan)
- GitHub: [github.com/anadiazure](https://github.com/anadiazure)
- Location: Hyderabad, India
