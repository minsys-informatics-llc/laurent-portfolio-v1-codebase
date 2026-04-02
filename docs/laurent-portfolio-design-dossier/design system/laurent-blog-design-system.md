# Design System Strategy: The Editorial Intelligence Framework

## 1. Overview & Creative North Star

This design system rejects the "template" look of modern blogs in favor of a **High-End Editorial** experience. We move away from boxy, grid-locked layouts toward a sophisticated interplay of asymmetric white space and layered surfaces. 

By utilizing **Newsreader** (Serif) against **Manrope** (Sans-Serif), we establish a "Journal of Record" aesthetic. The system prioritizes content-first precision, using "Tonal Depth" instead of structural lines to guide the eye, creating an interface that feels like a premium digital publication rather than a standard CMS.

---

## 2. Color & Surface Architecture
The palette is rooted in deep, authoritative navies (`primary: #00113a`) and intellectual slates (`secondary: #515f74`). We use a technical electric blue (`tertiary_fixed_dim: #4cd6ff`) to signal data-driven AI elements.

### The "No-Line" Rule
Explicitly prohibit the use of 1px solid borders for sectioning or layout containment. Boundaries must be defined solely through background color shifts. To separate a "Featured Insights" section from the main feed, shift the background from `surface` to `surface_container_low`. 

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Hierarchy is achieved through "Tonal Stacking":
- **Base Layer:** `surface` (#faf8ff)
- **Content Sections:** `surface_container_low` (#f2f3ff)
- **Interactive Cards/Panels:** `surface_container_lowest` (#ffffff)
- **Overlays/Modals:** `surface_container_high` (#e2e7ff)

### Glass & Gradient Signature
To avoid a flat, "out-of-the-box" feel:
- **Floating Elements:** Use `surface_bright` at 80% opacity with a `24px` backdrop-blur for navigation bars.
- **Data Accents:** Use a linear gradient from `primary` (#00113a) to `primary_container` (#002366) for hero backgrounds to provide "visual soul" and depth.

---

## 3. Typography
The typographic system is built on a high-contrast scale to ensure an authoritative hierarchy.

| Level | Token | Font | Size | Intent |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Newsreader | 3.5rem | High-impact editorial headers. |
| **Headline**| `headline-md` | Newsreader | 1.75rem | Article titles & section starts. |
| **Title**   | `title-lg` | Manrope | 1.375rem | Sub-headers and card titles. |
| **Body**    | `body-lg` | Manrope | 1.0rem | Long-form reading; high legibility. |
| **Label**   | `label-md` | Inter | 0.75rem | Technical data, AI meta-tags. |

**Editorial Note:** Use `display-lg` with intentional asymmetry (e.g., left-aligned with a 33% margin-right) to create "breathing room" that feels custom-designed.

---

## 4. Elevation & Depth
We eschew traditional shadows in favor of **Tonal Layering** and **Ambient Light**.

### The Layering Principle
Place a `surface_container_lowest` card on a `surface_container_low` background. This creates a "soft lift" that is felt rather than seen. 

### Ambient Shadows
For floating elements (e.g., active TradingView-style panels), use a custom shadow:
- **Values:** `0px 12px 32px`
- **Color:** `on_surface` (#131b2e) at **4% opacity**.
- **The "Ghost Border" Fallback:** If accessibility requires a stroke, use `outline_variant` at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons
- **Primary:** `primary` background with `on_primary` text. Use `xl` (0.75rem) roundedness.
- **State Transition:** On hover, shift background to `primary_container`. Transition-duration: `200ms` cubic-bezier(0.4, 0, 0.2, 1).
- **Focus:** `2px` offset with `tertiary` (#00171e) ring.

### TradingView-Inspired News Panels
- **Style:** `surface_container_lowest` background. 
- **Header:** Use `label-md` in `on_surface_variant` for a technical, data-heavy look.
- **Selection State:** Do not use a border. Indicate selection with a `3px` vertical pill of `tertiary_fixed_dim` on the left edge and a background shift to `surface_container_high`.

### Blog Cards
- **Image:** 16:9 aspect ratio with `md` (0.375rem) corner radius.
- **Interaction:** On hover, the card should scale to `101%` with an ambient shadow increase.
- **Spacing:** Use `spacing.4` (1.4rem) between image and headline.

### Minimalist Timeline
- **Nodes:** `6px` solid circles using `tertiary_fixed_dim`.
- **Line:** `1px` vertical line using `outline_variant` at 20% opacity.
- **Layout:** Offset the text to the right using `spacing.6` (2rem).

### Input Fields
- **Container:** `surface_container_low` with a bottom-only `1px` stroke of `outline`.
- **Active State:** Bottom stroke thickens to `2px` and changes to `primary`.

---

## 6. Do’s and Don’ts

### Do
- **Do** use generous whitespace (`spacing.16` or `spacing.20`) between major editorial sections.
- **Do** use `tertiary_fixed_dim` for all AI-related data points or financial tickers to signify "Live" information.
- **Do** mix serif and sans-serif within the same component (e.g., a Newsreader title with a Manrope metadata label) to create an expert, curated feel.

### Don't
- **Don't** use 1px dividers to separate list items. Use `spacing.3` padding and background shifts instead.
- **Don't** use pure black (#000000) for text. Always use `on_surface` (#131b2e) to maintain a premium slate-toned depth.
- **Don't** use standard "drop shadows" with high opacity. They clutter the precision of the financial/AI aesthetic.
- **Don't** center-align long-form text. Editorial authority is best conveyed through disciplined, left-aligned typography.