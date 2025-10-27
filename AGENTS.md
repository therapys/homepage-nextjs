# AGENTS.md

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production (also runs type checking)
- `npm run lint` - Run ESLint
- `npm start` - Start production server

## Architecture
- Next.js 14 App Router with TypeScript
- Pages: `/` (home), `/blog`, `/projects`, `/gallery`
- Structure: `src/app/` contains all routes using Next.js App Router conventions
- Styling: Tailwind CSS + custom CSS variables in `globals.css` for scientific paper aesthetic
- No database or backend - static/SSG site

## Code Style
- TypeScript with strict mode enabled
- Use `@/*` imports for internal modules (maps to `./src/*`)
- Tailwind utility classes preferred, custom CSS in `globals.css` for theme
- Component naming: PascalCase for components, lowercase for pages (Next.js convention)
- Links: Use `<a>` tags with standard HTML attributes, styled with Tailwind
- No code comments unless complex logic requires explanation
- CSS: Uses CSS variables for theming with light/dark mode support
