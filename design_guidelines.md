# Design Guidelines for My Favourite Agency (MFA)

## Design Approach
**Reference-Based with Dark UI Aesthetic** - Modern, edgy creative agency website with dark theme and warm accent colors. Think agencies like Locomotive, Active Theory with bold typography and smooth interactions.

## Color System
- **Background**: `#0f0f10` (near-black)
- **Primary Text**: `#e6eef7` (off-white)
- **Accent/CTA**: `#ffb84d` (warm gold/orange)
- **Muted Text**: `#9aa0a6` (gray for secondary content)

## Typography
- **Font Family**: Inter (Google Fonts, weights 400-800)
- **Hierarchy**: Bold headlines (800), medium subheadings (600), regular body (400)
- **Style**: Clean, modern sans-serif with generous letter-spacing on headings

## Layout System
- **Container**: Max-width 1100px, centered
- **Spacing**: Generous whitespace between sections (use py-16 to py-24 for section padding)
- **Grid**: CSS Grid for team cards, work showcase (4 columns desktop, responsive)

## Component Library

### Header
- Sticky navigation with MFA logo (left) and nav links (right)
- WhatsApp CTA button with accent color
- Background change on scroll (subtle dark overlay)

### Hero Section
- Full-width looping muted background video (`assets/banner.mp4`)
- Centered headline and subtext overlay on video
- Scroll-down indicator (animated chevron/arrow)

### Cards & Modals
- Vision/Mission cards with glassy surface effect
- Service cards: clickable, hover scale animation
- Modals: centered overlay with dark background blur, close on ESC or click-outside

### Buttons
- **Primary**: Accent-filled (`#ffb84d`), rounded corners
- **Secondary**: Outlined with accent border
- **Hover**: Subtle brightness increase or scale (1.05)
- **On Images**: Blurred background (backdrop-filter: blur)

### Forms
- Dark input fields with light borders
- Accent color on focus states
- Rounded corners matching button style

## Images
- **Hero**: Full-width video background (`banner.mp4`) with fallback image option
- **Work Showcase**: 4 project thumbnails (`work1.jpg` through `work4.jpg`) in grid layout
- **Logo**: SVG format (`assets/logo.svg`) for crisp rendering

## Interactions
- Smooth scroll to sections on navigation click
- Service modals open on card click
- Hover states on all interactive elements
- No distracting animations - keep it smooth and purposeful

## Responsive Breakpoints
- **Mobile**: Stack columns, full-width cards, hamburger menu consideration
- **Tablet**: 2-column grids where appropriate
- **Desktop**: Full multi-column layouts (3-4 columns for team/work)

## Section Specifications
1. **Header**: Sticky with logo and 6 nav items + WhatsApp CTA
2. **Hero**: Full viewport height with video, centered content
3. **About**: Vision/Mission cards (2-col), brand story, team grid (4 members)
4. **Comparison Table**: Two-column "Old Way vs MFA Way" (5 rows)
5. **Services**: 5 clickable cards opening modals with deliverables
6. **Work**: 4 project thumbnails in grid
7. **How We Work**: 3 key points with icons/numbers
8. **Testimonials**: 2 client quotes in card format
9. **Contact**: Split layout - form (left) + info/WhatsApp (right)
10. **Footer**: Logo + tagline (left), links (right)

## Accessibility
- Semantic HTML5 sections
- Proper heading hierarchy (h1 → h6)
- Alt text for images
- Keyboard navigation for modals
- Sufficient color contrast on dark backgrounds