# Eswari's Portfolio

A personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. It includes sections for an introduction, about, skills, projects, internships, and a contact form.

## Getting started

### Requirements

- Node.js (LTS recommended)
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal after the server starts.

## Build

```bash
npm run build
npm run preview
```

The production build is generated in `dist/`. The preview command serves that build locally.

## Contact form configuration

The contact form uses Supabase to store messages. To enable it, create a `.env.local` file in the project root with the URL and anon key for your Supabase project:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Apply the SQL migration in `supabase/migrations/` to create the `contact_messages` table. Restart the development server after adding environment variables. Without these settings, the portfolio still runs, but the contact form is unavailable.

## Project structure

```text
src/
  components/    Portfolio page sections
  hooks/         Shared React hooks
  lib/           Supabase client setup
public/
  images/        Project images
  *.pdf          Resume and certificate
supabase/
  migrations/    Database schema migrations
```

## Available scripts

- `npm run dev` — start the Vite development server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build locally
