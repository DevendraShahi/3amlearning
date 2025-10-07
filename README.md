# 3AMLearn - AI-Powered Full-Stack University E-Learning Platform

## Project Overview

3AMLearn is a zero-cost, AI-powered full-stack e-learning platform tailored for university students. It allows semester-wise course browsing, syllabus uploads by admins, and AI-generated educational content (notes, FAQs, summaries) with future plans for AI Q&A and collaborative projects.

---

## Tech Stack

- **Frontend & Backend:** Next.js 15 (App Router, React 18 server components)
- **Database/Auth:** Supabase (PostgreSQL, auth, storage)
- **Styling/UI:** Tailwind CSS, shadcn/ui (headless components), Radix UI primitives
- **Automation & AI Workflows:** n8n (open-source automation for syllabus parsing, AI resource generation)
- **Icons:** Heroicons (React-optimized SVG icons)
- **Optional:** Cloudinary for image/media storage (future phases)

---

## Key Features Implemented

- Dynamic semester-wise course browsing powered by Supabase data.
- Responsive, accessible, and modern UI with light/dark theme switching.
- Admin syllabus upload (planned for next phase).
- AI content generation integration planned using n8n.
- Clean project structure and ESLint/Prettier enforced coding standards.

---

## Folder Structure

```

/app - Next.js routes and server components (pages)
/components - Reusable UI components (Navbar, ThemeSwitcher, Hero, SemesterCards)
/lib - API wrappers/helpers (Supabase clients, course fetchers)
/styles - Tailwind style imports and overrides
.env.local - Environment variables (Supabase URLs/keys, API keys)
/README.md - Project documentation
tailwind.config.js - Tailwind CSS config (dark mode, etc.)
next.config.js - Next.js configuration
package.json - NPM dependencies and scripts

```

---

## Setup and Running Locally

1. Clone the repo and navigate into the project folder.

2. Create a Supabase project and add the following tables:
   - `courses` (schema example):
     ```
     create table courses (
       id uuid default uuid_generate_v4() primary key,
       title text not null,
       code text not null,
       semester integer not null,
       description text,
       created_at timestamp with time zone default timezone('utc'::text, now())
     );
     ```

3. Seed sample courses:
   - `seed sample course`:
     ````
     insert into courses (title, code, semester, description) values
     ('Introduction to Computer Science', 'CS101', 1, 'Basics of computer science and programming.'),
     ('Data Structures', 'CS201', 2, 'Study of data organization and algorithms.'),
     ('Operating Systems', 'CS301', 3, 'Concepts of OS, concurrency, and memory management.');
     ```
     ````

4. Configure `.env.local` file with your Supabase credentials:
    -`.env.local` Configure:
   
        ```
        NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
        NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
        ```

6. Install dependencies and run dev server:

```
npm install
npm run dev

```

6. Visit `http://localhost:3000` to explore the homepage and `/semester/[n]` pages.

---

## Development Highlights

- **Course Data Fetching:** Centralized `lib/supabaseClient.ts` and `lib/courses.ts` to fetch semester and course data via Supabase client.
- **Dynamic Routing:** Next.js 15 App router dynamic `[semester]/page.tsx` displays courses per semester.
- **UI Components:** Reusable Navbar with theme switching, Hero landing section, Semester Cards listing with Heroicons.
- **Theme Switching:** Implemented with shadcn/ui Switch component, toggling Tailwind dark mode (`darkMode: 'class'`).
- **Styling:** Tailwind CSS utility driven design ensures responsiveness, dark theme, and modern UI patterns.

---

## Next Steps / Planned Features

- Admin syllabus PDF upload UI + backend integration.
- n8n automation flows to parse PDFs and push extracted content to Supabase.
- AI resource generation pipelines: summaries, FAQs, solved question papers.
- User Authentication with Supabase Auth for student/admin roles.
- Collaborative projects and instant AI-driven Q&A chatbot.
- SEO enhancements and accessibility compliance.

---

## Code Formatting & Quality

- ESLint and Prettier configured for consistent code style.
- Fully typed with TypeScript.
- Clean component separation and folder structure for scalability.

---

## Contact / Support

Feel free to open issues or pull requests for bugs, feature requests, or questions.

Happy learning & building!

