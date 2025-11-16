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
- Dark theme with creative agency color palette defined in CSS variables
- **Color Psychology Applied (November 2025)**:
  - Pure black background (#000000) - Sophistication, elegance, power
  - White text (#FFFFFF) - Purity, clarity, simplicity
  - Coral/Orange primary (#E97451 / HSL: 16° 80% 62%) - Energy, creativity, enthusiasm, warmth
  - Purple accent (#A855F7 / HSL: 270° 90% 65%) - Luxury, innovation, imagination, creativity
- Inter font family (Google Fonts) with weights 400-800
- Generous spacing system using Tailwind's py-16 to py-24 for sections
- Responsive grid layouts with CSS Grid for team cards and work showcase

**Swiss Design Integration (November 2025)**
- **Grid System**: All major sections feature subtle Swiss-style grid overlay with 12-column vertical and 8-row horizontal lines at 5% white opacity, providing visual structure without interfering with interactions (pointer-events-none, z-0)
- **Typography Hierarchy**: Consistent Swiss typographic system across all sections:
  - Eyebrow text: text-xs, uppercase, 0.3em letter-spacing, 60% opacity
  - Primary headlines: text-4xl md:text-5xl lg:text-6xl, bold, tight tracking
  - Secondary body: text-lg md:text-xl lg:text-2xl, 80% opacity, relaxed line-height (1.6)
  - Tertiary text: text-2xl md:text-3xl, medium weight
- **Icon Surface Design System**: Centralized icon background color using dedicated CSS variable (--icon-surface: 0 0% 10% / #1A1A1A light black) for consistent icon container styling across all components
- Applied to: HeroSection, AboutSection, ComparisonSection, HowWeWorkSection, FoundersSection, DepartmentShowcase, ServicesSection, EnhancedWorkSection, StatsSection, ClientLogosSection, TestimonialsSection, EnhancedContactForm, ContactSection

**Page Structure**
- Multi-page application with client-side routing via Wouter
- **Home Page** (`/`): Hero section with parallax effects, About section (Who We Are, tagline), Our Approach statement, Comparison section, Founders section, Department Showcase (team organized by specialization), Services, Enhanced Work section (detailed portfolio), Video Showreel, How We Work process, Testimonials, Contact form with FloatingCTA
- **About Page** (`/about`): Dedicated page featuring Who We Are, agency tagline, followed by Vision/Mission cards, Brand Story, and team member profiles
- Massive animated text sections between major content areas (ABOUT, SERVICES, WORK, OUR STORY, TESTIMONIALS, CONTACT on Home; ABOUT on About page)
- Sticky header with smart navigation (page links for Home/About, smooth scroll for sections within same page)
- Modal interactions for service details and video showreel using Radix Dialog
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
- **Scroll-Based Parallax**: Full-page parallax scrolling with sections moving at different speeds (0.2x-0.5x) to create depth
- **Our Approach Section**: Standalone highlighted section showcasing agency's unique "BUILD the brief" philosophy
- **About Page**: Dedicated page with agency tagline displayed as clean text ("strategy-first, design-obsessed, anti-mediocrity"), Vision/Mission cards, brand story, and team profiles
- **Spaced Typography**: Custom CSS classes for letter-spaced headings (.spaced-text, .spaced-text-lg) used throughout
- **Massive Animated Text**: Large decorative section titles (MassiveText component) that animate into view using Intersection Observer
- **Scroll Animations**: useScrollAnimation hook with proper cleanup, reduced-motion support, and various animation types
- **Interactive Service Carousel**: Embla-powered carousel showing 1-3 service cards with navigation arrows and swipe support
- **3D Card Animations**: "How We Work" cards feature 3D flip effect (10° Y-axis, 5° X-axis rotation) on hover
- **Typing Animation**: Agency tagline on About page features character-by-character reveal with blinking cursor
- **Glassmorphism Design System**: Comprehensive frosted glass effect applied universally across all Card components throughout the application:
  * Implemented via `.glass` class in index.css with properties: `background: rgba(255, 255, 255, 0.08)`, `backdrop-filter: blur(20px) saturate(180%)`, `border: 1px solid rgba(255, 255, 255, 0.25)`
  * All Card components inherit this glassmorphism effect automatically via the base Card component (client/src/components/ui/card.tsx)
  * Applied to: VisionMissionTeamSection (Vision/Mission/Team cards), OurApproachSection, ContactSection (form and info cards), DepartmentShowcase, VideoShowreel, ServicesSection, WorkSection, EnhancedWorkSection, HowWeWorkSection
  * TestimonialsSection features glassmorphism with custom gradient overlay: `linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(233, 116, 81, 0.6) 100%)`
  * Creates consistent depth and visual hierarchy while maintaining readability and brand aesthetics
- **Smart Navigation**: Header adapts to multi-page structure with Link components for page navigation and smooth scroll for within-page sections
- **Accessibility**: aria-hidden for decorative elements, reduced-motion support, proper semantic HTML

**Professional Enhancements** (November 2025)
Implemented comprehensive improvements to increase organization, build trust/credibility, and differentiate from competitors:

- **DepartmentShowcase Component**: Organizes team by 4 specializations (Brand Strategy, Visual Design, Content & Copy, Web & Digital) with department philosophies and scrolling name marquees. Each department features an icon, description, and absolute-positioned vertical accent bar for visual interest. Improves professional presentation over generic team layout.

- **EnhancedWorkSection Component**: Detailed portfolio showcase replacing basic work grid. Features larger project cards with client names, service tags/badges, project descriptions, and quantified impact stats (conversion rates, engagement metrics). Builds credibility through specific, measurable results and professional case study presentation.

- **VideoShowreel Component**: Modal-based video showcase differentiating agency's motion/video production capabilities. Includes:
  * Configurable via SHOWREEL_URL constant for easy video integration
  * shadcn Dialog with proper accessibility (aria-labels, focus trapping)
  * Conditional rendering: AspectRatio-wrapped iframe when URL provided, or branded "Coming Soon" placeholder with CTA to contact section
  * Video statistics display (150+ videos, 10M+ views, 95% satisfaction)
  * Play button uses shadcn Button component with proper interactions

- **FloatingCTA Component**: Conversion-optimized fixed action button appearing after hero scroll. Uses IntersectionObserver for performance (not scroll listener), ghost/outline variant with backdrop-blur for refined aesthetic, respects prefers-reduced-motion, and smoothly scrolls to contact section. Positioned bottom-right with proper z-index management.

**Technical Implementation**
- **ParallaxProvider Context**: Centralized scroll tracking with single RAF loop and event listener per page for optimal performance
- **ParallaxSection Component**: Reusable wrapper applying GPU-accelerated transforms (translate3d) with configurable speed factors
- **Parallax Architecture**: Shared context prevents duplicate scroll listeners, single requestAnimationFrame per page regardless of section count
- **ScrollAnimatedWrapper**: Component wrapper to apply scroll animations without React hook violations
- **useScrollAnimation**: Custom hook using IntersectionObserver with proper cleanup and reduced-motion detection
- **MassiveText**: Decorative text component with one-time animation trigger and proper cleanup
- **Stable Star Positions**: Pre-calculated STAR_POSITIONS array prevents render-time randomness
- **Performance Optimizations**: 
  - Single scroll listener with passive: true per page
  - GPU-accelerated transforms with will-change property
  - Proper cleanup of all observers, timers, and RAF loops
  - Reduced-motion accessibility respected throughout
  - Context-based state sharing prevents duplicate renders