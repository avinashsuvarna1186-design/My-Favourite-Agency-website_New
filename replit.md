# My Favourite Agency (MFA) - Website Project

## Overview

This project is a multi-page marketing website for My Favourite Agency (MFA), a creative branding and design agency. Its primary purpose is to showcase the agency's portfolio and services through a modern, visually engaging, and highly animated web experience. Key capabilities include a dynamic galactic video background with parallax effects, a dark UI with glassmorphism elements, custom typography, massive scroll-triggered animations, and a responsive design optimized for presenting creative work. The project aims to establish MFA as a cutting-edge agency, attracting clients through a sophisticated and interactive online presence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built with **React 18** and **TypeScript**, using **Vite** for fast development and optimized builds. **Wouter** handles client-side routing, and **TanStack Query** manages server state.

**UI/UX Decisions:**
- **Design System**: Dark theme with a creative agency color palette (black, white, coral/orange, purple) defined in CSS variables, following color psychology principles. Uses the Inter font family.
- **UI Components**: **shadcn/ui** components (based on Radix UI) styled with **Tailwind CSS**, adhering to a "New York" style variant.
- **Swiss Design Integration**: Features a subtle 12-column vertical and 8-row horizontal grid overlay, consistent typographic hierarchy (eyebrow, primary headlines, secondary body, tertiary text), and a centralized icon surface design system for visual structure and consistency.
- **Glassmorphism Design**: A comprehensive frosted glass effect is applied universally across all Card components, using `rgba(255, 255, 255, 0.08)` background and `backdrop-filter: blur(20px) saturate(180%)`.
- **Gradient Flow Text Animation**: Major section headers feature an animated gradient effect, transitioning between coral orange and purple.

**Core Features & Implementations:**
- **Hero Section**: Implements a 3-layer parallax system with a video background, twinkling stars, and cosmic orbs, all responding to mouse movement.
- **Scroll-Based Parallax**: Full-page parallax scrolling with sections moving at different speeds (0.2x-0.5x) for depth, managed by a `ParallaxProvider` context for performance.
- **Massive Animated Text**: Large, decorative section titles (`MassiveText` component) animate into view using Intersection Observer.
- **Scroll Animations**: Utilizes a `useScrollAnimation` hook with IntersectionObserver for various fade, slide, and scale animations, including reduced-motion support.
- **Multi-page Structure**: Includes Home (`/`), About (`/about`), Work (`/work`), 404 Not Found (`/not-found`), Animation Demo (`/animations`), and a minimalist Swiss Home (`/swiss`) page.
- **Smart Cross-Page Navigation**: Sticky header intelligently navigates to sections on the Home page or directs to the Home page with a hash for external links. Header now includes direct link to Work page.
- **Department Showcase**: Organizes team members by specialization with individual philosophies and scrolling marquees.
- **Enhanced Work Section**: Detailed portfolio showcase with larger project cards, client names, service tags, descriptions, and quantified impact statistics.
- **Video Showreel**: Modal-based video showcase with configurable URL, accessibility features, and video statistics display.
- **Work Page with Tabbed Case Studies**: Dedicated portfolio page (`/work`) featuring:
  - Tabbed interface using shadcn Tabs for multiple client case studies
  - Data-driven structure for easy scalability (add new case studies to the `caseStudies` array)
  - Full case study for Dr. Lalit Rajpal Aesthetics with 6 sections: overview, challenges (3 items), approach (6 steps), visual deliverables (11 images), results metrics, and testimonial
  - **Visual Deliverables - Space-Optimized Design**:
    - Featured Hero Image: 1 large brand foundation image (logo structure)
    - Compact Grid: 10 deliverable images in 4-column layout (6 environmental + 4 print)
    - Hover-to-open lightbox: Hover over any image to instantly see it full-size in modal
    - Next/Previous navigation: Browse through all 11 images without closing the lightbox
    - Image counter: Shows current position (e.g., "3 / 11") at bottom of lightbox
    - Glassmorphism navigation buttons: Floating left/right controls with frosted glass effect
    - Lightbox lock mechanism: Prevents flickering when mouse moves over other images
    - 60% reduction in vertical space while maintaining visual impact
  - Glassmorphism styling with coral orange active tab state
  - Scroll animations and ParallaxProvider integration
  - Galactic video background consistent with site design
- **Floating CTA**: A conversion-optimized fixed action button appearing after the hero section, scrolling to the contact form.
- **Accessibility**: Implemented with `aria-hidden` for decorative elements, reduced-motion support, and semantic HTML.

### Backend Architecture

The backend uses **Express.js** with **Node.js** and **TypeScript**.
- **API Structure**: RESTful API endpoints prefixed with `/api`, centralized route registration, and JSON body parsing.
- **Data Layer**: Designed with an `IStorage` interface for flexible storage options, currently using an in-memory implementation (`MemStorage`) for development.

### Data Storage

- **Database**: **Drizzle ORM** configured for PostgreSQL compatibility, with schema defined in `shared/schema.ts` and validated using **Zod**. Migration files are output to `./migrations`.
- **Schema**: Currently includes a basic `users` table with UUID primary keys, username, and password fields, with type-safe schema inference.

## External Dependencies

### UI Libraries & Tools
- **Radix UI**: Unstyled, accessible component primitives.
- **Lucide React**, **React Icons**: Icon libraries.
- **Embla Carousel**: Touch-friendly carousel.
- **cmdk**: Command palette component.
- **react-day-picker**: Date picker.

### Database & ORM
- **@neondatabase/serverless**: Neon serverless PostgreSQL driver.
- **Drizzle ORM**: Type-safe SQL query builder.
- **connect-pg-simple**: PostgreSQL session store for Express.

### Development & Build Tools
- **Vite**: Frontend build tool.
- **@replit/vite-plugin-runtime-error-modal**, **@replit/vite-plugin-cartographer**, **@replit/vite-plugin-dev-banner**: Replit-specific development tooling.
- **esbuild**: JavaScript bundler for server code.
- **tsx**: TypeScript execution for development.
- **PostCSS** with **Autoprefixer**: CSS processing.

### Form Handling & Validation
- **react-hook-form**: Performant form state management.
- **@hookform/resolvers**: Validation resolver.
- **Zod**: Schema validation.

### Utilities
- **date-fns**: Date manipulation.
- **nanoid**: Unique ID generation.
- **tailwind-merge**: Tailwind class merging.

### Communication Integrations
- **WhatsApp**: Direct link integration (`wa.me/911234567890`).
- **Email**: `mailto:` links to `hello@myfavourite.agency`.

### Assets
- **Attached Assets**: Generated brand images, logo, work portfolio images.
- **Galactic Video**: Pixabay video background (`https://cdn.pixabay.com/video/2022/11/07/137651-769748627_large.mp4`).
- **Custom CSS**: For animations and effects.