# Photographer Portfolio

A modern, performant portfolio website for photographers, built with [Astro](https://astro.build/) and [Storyblok](https://www.storyblok.com/) as a headless CMS.

## Features

- **Headless CMS**: Content managed via Storyblok, enabling easy updates and flexible page structures.
- **Astro Framework**: Fast, SEO-friendly static site generation.
- **Responsive Design**: Mobile-first layouts and components.
- **Dynamic Projects**: Projects and pages are managed as Storyblok entries.
- **Contact Form**: Submission form for visitors to send messages.
- **Component-based**: Reusable Astro components for layouts, buttons, rich text, and more.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- A [Storyblok](https://www.storyblok.com/) account

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/<your-username>/photographer-portfolio-astro.git
   cd photographer-portfolio-astro
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Configure Storyblok:

   - Create a `.env` file and add your Storyblok API key:
     ```
     STORYBLOK_API_KEY=your_storyblok_api_key
     ```

4. Start the development server:

   ```sh
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/components/` — Shared UI components
- `src/layouts/` — Page layouts
- `src/pages/` — Astro pages and dynamic routes
- `src/storyblok/` — Storyblok component mappings
- `public/` — Static assets

## Deployment

You can deploy this site to any static hosting provider (e.g., Vercel, Netlify, GitHub Pages).

## TODO

Add alignment conttrol in SbRichText
Pull types from SB
Add control for rebuilds

## License

MIT
