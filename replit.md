# My Favourite Agency (MFA) - Website Project

## Overview

This is a single-page marketing website for My Favourite Agency (MFA), a creative branding and design agency. The application is built as a modern React-based web application with a Node.js/Express backend, featuring a dark UI aesthetic with warm accent colors, smooth scrolling interactions, and responsive design optimized for agency portfolio presentation.

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
- Single-page application with smooth scroll navigation
- Sections: Hero (with video background concept), About, Work, Services, Comparison, How We Work, Testimonials, Contact, Footer
- Sticky header with navigation and WhatsApp CTA
- Modal interactions for service details using Radix Dialog

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
- Video background support planned for hero section (`assets/banner.mp4`)