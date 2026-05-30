# Bastien Ferrari Portfolio

Single-page React + Tailwind CSS portfolio for Bastien Ferrari.

## Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Structure

```text
src/
  App.jsx
  main.jsx
  styles.css
  components/
    Button.jsx
    Card.jsx
    Divider.jsx
    ExperienceCard.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    ProjectCard.jsx
    SectionContainer.jsx
    SkillCard.jsx
    Tag.jsx
  data/
    portfolio.js
  hooks/
    useReveal.js
public/
  assets/
    images/
    videos/
    pdf/
      cv-bastien-ferrari.pdf
```

## Asset Replacement

- The CV buttons use `public/assets/pdf/cv-bastien-ferrari.pdf`.
- Add future screenshots to `public/assets/images`.
- Add future video exports or preview clips to `public/assets/videos`.
- VocalDigest slides live in `public/assets/images/vocaldigest`.
- The `.mov` files in `public/assets/videos` are local symlinks to the originals on the Mac to avoid duplicating several gigabytes.
- PriceLabs case-study PDF lives at `public/assets/pdf/pricelabs-portfolio-analytics.pdf`, with preview image at `public/assets/images/cleangenius/pricelabs-preview.png`.
- VocalDigest includes a clickable image gallery with lightbox and mobile swipe navigation.
- Project media is configured in `src/data/portfolio.js` and rendered by `src/components/ProjectCard.jsx`.

The public asset URL remains `/assets/...` in the browser.
