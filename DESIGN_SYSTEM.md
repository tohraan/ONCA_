# ONCA Design System - Implementation Guide

## Color Palette

### Primary Colors
- **Primary (Dark Green)**: `#00674F` - Main brand color, primary actions, links
- **Primary Dark**: `#004D3B` - Hover states, pressed states
- **Primary Light**: `#008060` - Subtle backgrounds, tints

### Secondary Colors
- **Secondary (Beige)**: `#F5F5DC` - Backgrounds, cards, surfaces
- **Secondary Dark**: `#E8E8C8` - Borders, dividers
- **Secondary Light**: `#FAFAED` - Page backgrounds

## Dark Mode Palette (ONCA Premium)

### Base Background
- **Deep Charcoal Green**: `#0F1512` - Replaces beige-900/50 in dark mode. Provides brand continuity and reduces eye strain.

### Surface / Card Background
- **Smoked Green Glass**: `rgba(24, 36, 30, 0.65)`
- **Glass Effect**:
  - `backdrop-filter: blur(18px)`
  - `border: 1px solid rgba(255, 255, 255, 0.06)`
  - `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45)`

### Primary Accent (Muted Emerald)
- **Color**: `#3FAF8A` - Used for CTAs, active states, and metrics in dark mode. Avoids neon glows to maintain trust.

### Secondary Accent (Warm Stone)
- **Color**: `#CBBFAE` - Replaces beige accents for secondary buttons, tags, and dividers.

### Text System
- **Primary Text**: `#E7ECE9`
- **Secondary Text**: `#A6B1AB`
- **Disabled/Meta Text**: `#6E7C75`

### Status Colors (Dark-safe)
- **Success**: `#4BC89E`
- **Warning**: `#E0B86B`
- **Error**: `#E06B6B`
- **Info**: `#6FA8DC`

### Borders & Dividers
- `rgba(255, 255, 255, 0.08)` - Subtle separation.

## Spacing
... (rest of the content remains)

### Font Families
- **Primary**: Plus Jakarta Sans (headings, UI elements)
- **Secondary**: Inter (body text, data)

### Font Sizes
- `text-xs`: 12px - Labels, captions
- `text-sm`: 14px - Body text, buttons
- `text-base`: 16px - Default body
- `text-lg`: 18px - Large body, subheadings
- `text-xl`: 20px - Card titles
- `text-2xl`: 24px - Section headings
- `text-3xl`: 30px - Page headings
- `text-4xl`: 36px - Hero headings

### Font Weights
- `font-normal`: 400 - Body text
- `font-medium`: 500 - Emphasis
- `font-semibold`: 600 - Subheadings
- `font-bold`: 700 - Headings
- `font-extrabold`: 800 - Hero text

## Spacing

### Consistent Padding
- **Card Padding**: `p-card` (32px / 2rem) - All card interiors
- **Section Spacing**: `gap-section` (40px / 2.5rem) - Between major sections
- **Component Gap**: `gap-4` (16px) - Between related components
- **Tight Gap**: `gap-2` (8px) - Between tightly related items

### Margin Scale
- `m-2`: 8px
- `m-4`: 16px
- `m-6`: 24px
- `m-8`: 32px
- `m-10`: 40px

## Border Radius

### Consistent Radii
- **Cards**: `rounded-card` (24px / 1.5rem) - All card containers
- **Buttons**: `rounded-button` (12px / 0.75rem) - All buttons
- **Inputs**: `rounded-input` (12px / 0.75rem) - All form inputs
- **Pills**: `rounded-full` - Badges, tags, pills

## Shadows

### Card Shadows
- **Default**: `shadow-card` - Resting state cards
- **Hover**: `shadow-card-hover` - Interactive card hover
- **Soft**: `shadow-soft` - Subtle elevation
- **Glow**: `shadow-glow` - Primary color glow effect

## Component Patterns

### Card Structure
```tsx
<div className="bg-white rounded-card p-card shadow-card border border-beige-200">
  {/* Card content */}
</div>
```

### Button Variants
```tsx
// Primary
<button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-button font-semibold transition-all">

// Secondary
<button className="bg-beige-200 hover:bg-beige-300 text-beige-800 px-6 py-3 rounded-button font-semibold transition-all">

// Ghost
<button className="bg-transparent hover:bg-beige-100 text-primary px-6 py-3 rounded-button font-semibold transition-all">
```

### Input Fields
```tsx
<input className="w-full px-4 py-3 bg-white border border-beige-200 rounded-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
```

### Section Headers
```tsx
<div className="mb-section">
  <h1 className="text-4xl font-bold text-beige-900 mb-2">Page Title</h1>
  <p className="text-lg text-beige-600">Description text</p>
</div>
```

## Usage Guidelines

1. **Always use design tokens** - Never use arbitrary values
2. **Consistent card padding** - All cards use `p-card`
3. **Consistent border radius** - Cards use `rounded-card`, buttons use `rounded-button`
4. **Color hierarchy** - Primary for actions, beige for surfaces, beige-600+ for text
5. **Shadow consistency** - Cards use `shadow-card`, interactive elements add `shadow-card-hover` on hover
6. **Typography scale** - Use defined sizes, avoid custom font sizes
7. **Spacing rhythm** - Use multiples of 4px (Tailwind's default scale)

## Color Application Rules

### Backgrounds
- Page: `bg-beige-50` or `bg-beige-100`
- Cards: `bg-white`
- Sections: `bg-beige-50`
- Hover states: `hover:bg-beige-100`

### Text
- Headings: `text-beige-900` or `text-beige-800`
- Body: `text-beige-700` or `text-beige-600`
- Secondary: `text-beige-500`
- Disabled: `text-beige-400`

### Borders
- Default: `border-beige-200`
- Subtle: `border-beige-100`
- Strong: `border-beige-300`

### Interactive Elements
- Primary action: `bg-primary hover:bg-primary-dark`
- Secondary action: `bg-beige-200 hover:bg-beige-300`
- Danger: `bg-red-500 hover:bg-red-600`
- Success: `bg-primary hover:bg-primary-dark`
