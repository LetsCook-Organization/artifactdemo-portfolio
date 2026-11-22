---
name: Synthetic Vanguard
colors:
  surface: '#111319'
  surface-dim: '#111319'
  surface-bright: '#37393f'
  surface-container-lowest: '#0c0e13'
  surface-container-low: '#191c21'
  surface-container: '#1d2025'
  surface-container-high: '#282a30'
  surface-container-highest: '#33353b'
  on-surface: '#e2e2ea'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e2e2ea'
  inverse-on-surface: '#2e3036'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dce6'
  primary: '#e0fdff'
  on-primary: '#00373a'
  primary-container: '#00f2fe'
  on-primary-container: '#006a70'
  inverse-primary: '#00696f'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#f1f8ff'
  on-tertiary: '#00354a'
  tertiary-container: '#b2e1ff'
  on-tertiary-container: '#00678c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ff6ff'
  primary-fixed-dim: '#00dce6'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#111319'
  on-background: '#e2e2ea'
  surface-variant: '#33353b'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 4.5rem
    fontWeight: '700'
    lineHeight: 5rem
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 2.75rem
    fontWeight: '700'
    lineHeight: 3.125rem
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 3rem
    fontWeight: '600'
    lineHeight: 3.5rem
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: 2rem
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Geist
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1.2rem
    letterSpacing: 0.02em
  label-telemetry:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.08em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an ultra-high-end, future-forward personal identity for a frontier AI/ML engineer and community architect. It communicates absolute technical rigor, taste, and quiet authority. The aesthetic blends **Refined Cyber-Minimalism** with **Boutique Editorial Glassmorphism**—stripping away visual noise in favor of high-precision spatial composition, atmospheric depth, and luminous feedback states.

### Core Tenets
- **Cinematic Precision**: Every element feels engineered rather than drawn. Borders are razor-sharp (1px), backgrounds layer from deep void to dark crystalline navy, and interactions react with instantaneous kinetic smoothness.
- **Atmospheric Luminosity**: Lighting is treated as directional data energy. Ambient mesh gradients provide depth behind cards without clouding readability, while electric cyan and violet glow tokens signify active compute, telemetry, and interactive affordances.
- **Telemetry & Density Balance**: Highly structured monospace metadata (latencies, model architectures, commit timelines) offsets bold, statuesque editorial display headers. Visual hierarchy delivers the story at a glance without text congestion.

## Colors

The palette operates in a calibrated deep-space dark spectrum. Pure blacks and abyssal navies absorb ambient distraction, allowing focused bursts of cyan and violet photonics to guide cognitive flow.

### Color Archetypes
- **Canvas & Voids**:
  - Root Canvas: `#030407` (The absolute void anchor)
  - Surface Primary: `#07090e` (Base layout surface)
  - Surface Raised / Glass: `#0c1017` at `0.65` alpha with layered optical blurs.
  - Surface Overlay: `#151c28` for popovers, inspection panels, and floating status docks.
- **Accents & Photonics**:
  - **Electric Cyan (`#00f2fe`)**: Primary intent, live telemetry indicators, active compute states, and terminal cursors.
  - **Ethereal Violet (`#8b5cf6`)**: Secondary brand depth, research milestones, model parameter highlights, and creative intelligence layers.
  - **Sapphire Atmospheric (`#38bdf8`)**: Tertiary support, active link hover bridges, and code syntax tokenization.
- **Neutrals & Text Hierarchy**:
  - Text Primary: `#f8fafc` (Slate 50, crisp foreground)
  - Text Secondary: `#94a3b8` (Slate 400, meta explanations, descriptive tags)
  - Text Tertiary / Monospace Dim: `#475569` (Slate 600, inactive telemetry, hashes)
  - Border Glass: `rgba(255, 255, 255, 0.08)` to `rgba(56, 189, 248, 0.2)` on active focus.

## Typography

The typographic system creates tension between machine-driven precision and cinematic presence:

- **Display & Headlines (`Space Grotesk`)**: Geometric, technical, and subtly brutalist with angular cuts that echo neural network topologies. Used for strong value assertions, hero introductions, and section titles.
- **Body & Editorial Narrative (`Geist`)**: Ultra-refined neutral sans with optimal glyph rendering at low contrast levels. Maintains effortless legibility on dark glass surfaces without halation.
- **Labels, Telemetry & Code (`JetBrains Mono`)**: Strict, high-legibility monospace reserved for live indicators, latency benchmarks, algorithmic tags, build numbers, and architectural labels. Always set with positive letter-spacing (`0.02em` to `0.08em`) for swift scan-ability.

## Layout & Spacing

The layout is built upon a 12-column dynamic fluid grid on desktop (max width `1320px`) stepping down to a 4-column flow on mobile viewport widths. 

### Breakpoints & Reflow
- **Desktop (>= 1024px)**: 12-column grid; `3rem` canvas margins; asymmetric modular arrangement (e.g., 7-column primary project view paired with 5-column technical metrics inspector).
- **Tablet (768px – 1023px)**: 8-column grid; `2rem` outer margins; vertical stacking of side panels below hero narratives.
- **Mobile (< 768px)**: 4-column grid; `1.25rem` margins; full-width stacked touch cards. Touch targets anchor within bottom thumb-reach zones.

### Vertical Spatial Cadence
- Macro-sections breathe with generous empty space (`5rem` to `7rem` gap) to maintain focus on standalone engineering milestones.
- Component-level spacing adheres strictly to 8-point harmonic multipliers: micro-badges use `space-xs` and `space-sm`, while internal glass cards use `space-md` through `space-lg`.

## Elevation & Depth

Visual hierarchy does not use murky drop shadows. Instead, it relies on **Atmospheric Translucency**, **Specular Edge Lighting**, and **Layered Mesh Halos**.

### Layering Structure
1. **L0 (Abyssal Void)**: Solid `#030407` with an extremely fine radial gradient grid overlay (`rgba(255, 255, 255, 0.03)` 1px dots spaced at 32px intervals).
2. **L1 (Mesh Underlay)**: Dynamic ambient radial blurs (`300px` to `500px` blur radius) running `#00f2fe` at `0.07` opacity and `#8b5cf6` at `0.06` opacity positioned beneath key focal points.
3. **L2 (Crystalline Glass Cards)**: Background `rgba(12, 16, 23, 0.7)` with `backdrop-filter: blur(20px)` and an ultra-thin perimeter: `1px solid rgba(255, 255, 255, 0.07)`.
4. **L3 (Interactive & Raised Overlays)**: Surface lifts slightly; border shifts to an inner luminous stroke `linear-gradient(135deg, rgba(0, 242, 254, 0.4), rgba(139, 92, 246, 0.1), rgba(255, 255, 255, 0.03))`, paired with a diffuse cyan-tinted ambient glow: `0 8px 32px -8px rgba(0, 242, 254, 0.15)`.

## Shapes

The design uses **Level 3 (Pill-shaped)** curvature selectively to enforce an ergonomic, tactile physical interface juxtaposed against sleek structured panels.

- **Buttons, System Badges, and Search/Filters**: True full pill geometry (`9999px` / `3rem`), inviting immediate physical interaction and effortless tap ergonomics.
- **Cards, Modals, and Media Frames**: Standardized at `rounded-xl` (`1.5rem` to `2rem`), softening the stark dark mode presentation and mirroring high-end hardware chassis industrial design.
- **Status Beads & Live Nodes**: Perfect circular geometries (`rounded-full`) accompanied by subtle pulsing wave effects.

## Components

### 1. Interactive Tactile Pill Buttons
- **Primary Action**: Pill radius, high-contrast cyan fill (`#00f2fe`) or intense gradient (`#00f2fe` to `#38bdf8`), deep obsidian text (`#030407`), `font-weight: 600`. Hover state triggers a subtle scaled-out electric cyan bloom (`box-shadow: 0 0 24px rgba(0, 242, 254, 0.4)`).
- **Secondary Ghost**: Transparent surface, pill radius, `1px solid rgba(255, 255, 255, 0.12)`, text `#f8fafc`. Hover introduces a glass tint `rgba(255, 255, 255, 0.05)` and shifts border to `rgba(0, 242, 254, 0.35)`.

### 2. Glassmorphic Project & Research Cards
- Encased in `1.5rem` radius shells with frosted backdrop blurs (`24px`).
- Features a subtle 1px dual-tone gradient outline that reflects virtual directional light from the top-left corner.
- Inner layout prioritizes visual proof: interactive interactive demos/graphs top, accompanied by a clean display title, concise value assertion, and bottom-anchored monospace tech-stack pills.

### 3. Telemetry Badges & Meta Tags
- Monospaced typography (`label-telemetry`), uppercase with wide tracking (`0.08em`).
- Visual indicator: Features an inline 6px glowing green or cyan live dot (representing live models, uptime, or community pulse).
- Background: Subtle charcoal tint (`rgba(255, 255, 255, 0.04)`) with micro 1px border (`rgba(255, 255, 255, 0.08)`), pill curvature.

### 4. Interactive Data & Code Inspect Strips
- Minified telemetry bars displaying inference speeds (e.g., `42ms`, `CUDA 12.4`, `PyTorch 2.3`).
- Clean terminal-style appearance with zero excessive ornament: dim slate borders, JetBrains Mono font, and subtle cyan syntax glow on copy or hover.

### 5. Input Fields & Search Directives
- Pill-shaped or soft-rounded (`1rem`) input fields with dark glass backgrounds (`#07090e`).
- Placeholder text in muted slate (`#475569`). Focus state replaces default outline with a concentrated `1px solid #00f2fe` and an inner cyan ray glow.