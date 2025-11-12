# My Favourite Agency (MFA) - Website Project

## Overview

This is a multi-page marketing website for My Favourite Agency (MFA), a creative branding and design agency. The application is built as a modern React-based web application with a Node.js/Express backend, featuring:
- Galactic video background with 3-layer parallax depth effects (video 0.1x, stars 0.3x, cosmic orbs 0.5x mouse movement)
- Dark UI aesthetic with glassmorphism elements and warm accent colors
- Spaced-out creative typography inspired by modern agency design
- Massive animated section titles that trigger on scroll
- Comprehensive scroll-triggered animations throughout all sections
- Smooth scrolling interactions with reduced-motion accessibility support
- Multi-page routing with Wouter for navigation between Home and About pages
- Responsive design optimized for agency portfolio presentation

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (alternative to React Router)
- **TanStack Query** (React Query) for server state management and data fetching

**UI Component System**
- **shadcn/ui** components built on Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **class-variance-authority** and **clsx** for dynamic className management
- Component library follows "New York" style variant from shadcn/ui

**Design System**
- Dark theme with custom color palette defined in CSS variables
- Near-black background (#0f0f10), off-white text (#e6eef7), warm gold accent (#ffb84d)
- Inter font family (Google Fonts) with weights 400-800
- Generous spacing system using Tailwind's py-16 to py-24 for sections
- Responsive grid layouts with CSS Grid for team cards and work showcase

**Page Structure**
- Multi-page application with client-side routing via Wouter
- **Home Page** (`/`): Hero section with parallax effects, About section (Who We Are, tagline, Vision/Mission, Brand Story, Team), Our Approach statement, Comparison section, Services, Work showcase, How We Work process, Testimonials, Contact form
- **About Page** (`/about`): Dedicated page featuring the same About content (Who We Are, agency tagline, Vision/Mission cards, Brand Story, and team member profiles)
- Massive animated text sections between major content areas (ABOUT, SERVICES, WORK, TESTIMONIALS, CONTACT on Home; ABOUT on About page)
- Sticky header with smart navigation (page links for Home/About, smooth scroll for sections within same page)
- Modal interactions for service details using Radix Dialog
- All sections feature scroll-triggered animations (fade-in, slide-left, slide-right, scale-in)

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with TypeScript
- Development mode uses Vite middleware for HMR and SSR capabilities
- Production mode serves pre-built static assets

**API Structure**
- RESTful API endpoints prefixed with `/api`
- Centralized route registration in `server/routes.ts`
- Request/response logging middleware for API calls
- JSON body parsing with raw body preservation for webhook support

**Data Layer**
- In-memory storage implementation (`MemStorage`) for development
- Interface-based storage design (`IStorage`) allows easy swapping to persistent storage
- Currently implements basic user CRUD operations (expandable for contact forms, etc.)

### Data Storage

**Database Configuration**
- **Drizzle ORM** configured for PostgreSQL compatibility
- Schema defined in `shared/schema.ts` with Zod validation
- Migration files output to `./migrations` directory
- Database URL configured via environment variable `DATABASE_URL`
- Currently includes a basic users table schema (likely placeholder for future contact/inquiry storage)

**Schema Design**
- Users table with UUID primary keys, username, and password fields
- Zod schemas for validation via `drizzle-zod` integration
- Type-safe schema inference for TypeScript

### External Dependencies

**Third-Party UI Libraries**
- **Radix UI** - Comprehensive set of unstyled, accessible component primitives (accordion, dialog, dropdown, popover, etc.)
- **Lucide React** - Icon library for consistent iconography
- **React Icons** - Additional icons (specifically Dribbble icon for social links)
- **Embla Carousel** - Touch-friendly carousel component
- **cmdk** - Command palette/menu component
- **react-day-picker** - Date picker functionality

**Database & ORM**
- **@neondatabase/serverless** - Neon serverless PostgreSQL driver
- **Drizzle ORM** - Type-safe SQL query builder and ORM
- **connect-pg-simple** - PostgreSQL session store for Express

**Development Tools**
- **@replit/vite-plugin-runtime-error-modal** - Enhanced error reporting in Replit environment
- **@replit/vite-plugin-cartographer** - Replit-specific development tooling
- **@replit/vite-plugin-dev-banner** - Development mode indicator

**Build Tools**
- **esbuild** - Fast JavaScript bundler for server code
- **tsx** - TypeScript execution for development
- **PostCSS** with Autoprefixer for CSS processing

**Form Handling**
- **react-hook-form** - Performant form state management
- **@hookform/resolvers** - Validation resolver integration
- **Zod** - Schema validation for forms and API data

**Utilities**
- **date-fns** - Date manipulation and formatting
- **nanoid** - Unique ID generation
- **tailwind-merge** - Intelligent Tailwind class merging

**Communication Integrations**
- WhatsApp link integration (`wa.me/911234567890`) for direct client contact
- Email contact form (uses `mailto:` links to `hello@myfavourite.agency`)

**Assets**
- Generated brand images stored in `attached_assets/generated_images/`
- Logo, work portfolio images, and branding assets
- Galactic video background from Pixabay (https://cdn.pixabay.com/video/2022/11/07/137651-769748627_large.mp4)
- Custom animation CSS for parallax, typing effects, and scroll-triggered animations

**Key Features**
- **Hero Section**: 3-layer parallax system with video background, twinkling stars, and cosmic orbs that respond to mouse movement
- **Our Approach Section**: Standalone highlighted section showcasing agency's unique "BUILD the brief" philosophy
- **About Page**: Dedicated page with agency tagline displayed as clean text ("strategy-first, design-obsessed, anti-mediocrity"), Vision/Mission cards, brand story, and team profiles
- **Spaced Typography**: Custom CSS classes for letter-spaced headings (.spaced-text, .spaced-text-lg) used throughout
- **Massive Animated Text**: Large decorative section titles (MassiveText component) that animate into view using Intersection Observer
- **Scroll Animations**: useScrollAnimation hook with proper cleanup, reduced-motion support, and various animation types
- **Glassmorphism UI**: Frosted glass effect on hero badges and buttons using backdrop-filter
- **Smart Navigation**: Header adapts to multi-page structure with Link components for page navigation and smooth scroll for within-page sections
- **Accessibility**: aria-hidden for decorative elements, reduced-motion support, proper semantic HTML

**Technical Implementation**
- **ScrollAnimatedWrapper**: Component wrapper to apply scroll animations without React hook violations
- **useScrollAnimation**: Custom hook using IntersectionObserver with proper cleanup and reduced-motion detection
- **MassiveText**: Decorative text component with one-time animation trigger and proper cleanup
- **Stable Star Positions**: Pre-calculated STAR_POSITIONS array prevents render-time randomness
- **Performance**: All IntersectionObservers properly disconnect, timers are cleared, animations respect user preferences