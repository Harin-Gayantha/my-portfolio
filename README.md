Portfolio site built with Next.js (App Router) + Tailwind.

## Getting Started

1. Install dependencies:
```bash
npm install
```
2. Run the development server:
```bash
npm run dev
```
3. Open http://localhost:3000

## Customize content
- Home: `src/app/page.tsx`
- About: `src/app/about/page.tsx`
- Skills: `src/app/skills/page.tsx`
- Projects data: `src/data/projects.ts`
- Experience: `src/app/experience/page.tsx`
- Resume: place your PDF at `public/harin-resume.pdf`
- Contact: `src/app/contact/page.tsx`

## Deploy on Vercel
1. Push this folder to a GitHub repository
2. Import the repo at https://vercel.com/new
3. Framework preset: Next.js; default settings are fine

## Edit content without code
- About page: edit `content/about.md`
- Experience page: edit `content/experience.md`
- Projects: edit `content/projects.md` (each project uses title/description/tech/github lines)

After saving, refresh your browser. No code changes required.
