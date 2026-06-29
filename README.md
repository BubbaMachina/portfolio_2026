# Bobby Samuels — Engineering Portfolio

A modular React portfolio for an electrical engineer, AI graduate student, educator and mechatronics builder. The site is intentionally data-driven: project content lives apart from page components, so a new build can be added without redesigning the interface.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`. The generated `dist` folder can be served by any static host.

## Add a project

1. Put project images in `public/assets/` using clear, lowercase filenames.
2. Add one object to `src/data/projects.ts`.
3. Set `featured: true` if the project should appear on the homepage.
4. Add optional `github`, `external`, and `gallery` values as the project grows.

The project archive, filters, detail page and next-project navigation are generated automatically.

## Switch the Projects page layout

`src/siteConfig.ts` contains one setting:

```ts
export const PROJECTS_PAGE_VARIANT = 'guided'
```

Change `guided` to `classic` to restore the previous compact hero-and-grid Projects page. Both implementations remain in the codebase, so this switch does not discard project content or require a revert.

## Update résumé content

- Edit web résumé sections in `src/data/resume.ts`.
- Replace `public/assets/Bobby-Samuels-Resume-June-2026.pdf` when the PDF changes.
- Keep the same filename, or update `resumeUrl` in `src/App.tsx`.

## Publish with GitHub Pages

Push to the `main` branch and enable **Settings → Pages → Source → GitHub Actions**. The included workflow builds and publishes the site. Hash-based routing keeps every project URL working on static hosting.

## Structure

```text
src/
  data/           # Projects, experience, skills and recognition
  App.tsx         # Page and reusable card components
  styles.css      # Complete visual system and responsive layout
public/assets/    # Project photography and downloadable résumé
```
