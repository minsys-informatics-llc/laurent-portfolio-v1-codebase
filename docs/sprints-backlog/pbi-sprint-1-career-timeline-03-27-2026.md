# pbi-sprint-1-career-timeline-03-27-2026

## Sprint Overview

**Sprint:** Sprint 1 - Career Timeline Dual Arc Layout
**Date:** March 27, 2026
**Status:** Completed
**Branch:** `feature/career-timeline-1-03-27-2026`

This sprint introduced a major structural evolution of the Career Timeline section (FR-AP-003) on the About page. The single unified timeline was replaced with a dual-panel layout — "The Dual Arc" — reflecting Laurent's two parallel careers: one as a corporate executive and one as a founder/entrepreneur.

---

## Context & Motivation

Laurent has a dual career:
- **Corporate Career:** Executive leadership across finance, strategy, and AI platforms
- **Entrepreneurial Career:** Founder/entrepreneur journey running in parallel

The existing single-column alternating timeline failed to communicate this duality. A dual-panel layout was designed to tell both stories simultaneously, giving each career equal visual weight and narrative space.

---

## Completed User Stories

### US-CT-001: Redesign Section Title to "The Dual Arc"

**Objective:** Replace the section title to reflect the dual-career narrative.

**Implementation:**
- Section title changed from: `The Professional Arc`
- Changed to: `The Dual Arc`
- Subtitle updated from: "A chronological journey through leadership roles and strategic pivots."
- Subtitle updated to: "Two parallel careers, one professional story."

**File Modified:** `/workspace/src/pages/About.tsx` (line ~214)

**Impact:** Immediately communicates the dual-career concept to the reader before they engage with the timeline content.

---

### US-CT-002: Desktop Dual-Panel Layout (50/50 Side-by-Side)

**Objective:** Implement a two-panel side-by-side layout for desktop screens.

**Implementation:**
- Replaced the alternating left/right single timeline with a `flex` container
- **Left Panel (50%):** "The Corporate Journey" — single-column vertical timeline
- **Right Panel (50%):** "The Entrepreneurial Journey" — single-column vertical timeline
- Visible vertical divider (`w-px bg-outline-variant/30`) separates both panels
- Each panel has its own underlined panel header (`border-b border-outline-variant/30`)
- `pr-16` / `pl-16` padding creates breathing room around the divider

**Single-Column Timeline Layout (per panel):**
- Vertical line on the left: `absolute left-3 w-px bg-outline-variant/30`
- Dot nodes: `absolute -left-5 top-1 w-4 h-4 rounded-full bg-tertiary-fixed-dim`
- Hover scale animation on dots: `hover:scale-125 transition-transform`
- Scroll-triggered entrance animations via `whileInView`

**Data Sources:**
- Left panel: `timelineEntries` (existing corporate career data)
- Right panel: `entrepreneurialEntries` (placeholder — same data, to be replaced in next sprint)

**File Modified:** `/workspace/src/pages/About.tsx`

**Impact:** Desktop users see both careers simultaneously, reinforcing the dual-arc narrative with clear visual separation.

---

### US-CT-003: Mobile Tab Toggle (Employee / Founder)

**Objective:** Provide an intuitive mobile experience for navigating between the two timelines.

**Implementation:**
- Added `useState<'corporate' | 'entrepreneurial'>('corporate')` to the About component
- Added `import { useState } from "react"` to the file imports
- Two tab buttons: **"Employee"** (default active) and **"Founder"**
- Active tab styling: `text-primary border-b-2 border-primary`
- Inactive tab styling: `text-secondary`
- Tab content toggles between `timelineEntries` and `entrepreneurialEntries`
- Mobile timeline uses `animate` (not `whileInView`) for smooth tab-switch transitions

**Tab Design:**
- Full-width flex row: `flex border-b border-outline-variant/30`
- Each tab is `flex-1` for equal 50/50 width
- Font: `font-label font-bold text-sm uppercase tracking-widest`
- Transition: `transition-colors`

**File Modified:** `/workspace/src/pages/About.tsx`

**Impact:** Mobile users can toggle between their employee and founder timelines with a clean, app-like tab interface.

---

## Technical Implementation

### Files Modified

**Primary:** `/workspace/src/pages/About.tsx`
- Added `import { useState } from "react"` (line 1)
- Added `const entrepreneurialEntries = timelineEntries` placeholder (line ~73)
- Added `const [activeTab, setActiveTab] = useState<...>('corporate')` inside component
- Replaced entire Career Timeline section JSX with dual-panel layout

### Architecture Decisions

**Why `flex` instead of CSS Grid for panels?**
The `flex` layout with a `w-px flex-shrink-0` divider element allows the divider to sit naturally between two equal panels without extra grid configuration. It also makes the divider easier to style independently.

**Why separate `animate` vs `whileInView` for mobile?**
Mobile tab switches require immediate animation feedback (`animate`), while desktop scroll-triggered entries use `whileInView` for a more cinematic reveal. Using `whileInView` on mobile tabs would cause entries to appear invisible if already scrolled past.

**Why `entrepreneurialEntries = timelineEntries` as placeholder?**
Rather than hardcoding empty entries or dummy data, reusing the existing data array allows the layout to be visually validated immediately. The entrepreneurial content will be populated in a dedicated follow-up sprint.

---

## Design System Compliance

✅ **Colors:**
- Dot nodes: `bg-tertiary-fixed-dim` (consistent with previous timeline design)
- Divider: `bg-outline-variant/30` (consistent with existing design system)
- Active tab: `text-primary border-primary`
- Panel headers: `text-primary`

✅ **Typography:**
- Section title: `font-headline text-4xl md:text-5xl`
- Panel headers: `font-headline text-2xl`
- Entry role: `font-headline text-2xl`
- Entry date: `font-label text-sm uppercase tracking-widest`
- Entry company: `font-label text-secondary`
- Entry description: `text-on-surface-variant`

✅ **Spacing:**
- Panel padding: `pr-16` / `pl-16`
- Entry spacing: `mb-12 last:mb-0`
- Section padding: `py-32` (unchanged)

✅ **Animation:**
- Desktop: `whileInView` with `opacity: 0 → 1, y: 20 → 0`
- Mobile: `animate` with `opacity: 0 → 1, y: 20 → 0`
- Stagger: `delay: index * 0.05`

✅ **Responsive:**
- Desktop panels: `hidden md:flex`
- Mobile tabs: `md:hidden`

---

## Testing & Verification

✅ **Desktop View:**
- [x] Two panels display side-by-side at equal width
- [x] Vertical divider renders between panels
- [x] Both panel headers display correctly
- [x] Single-column timelines render with dots and vertical lines
- [x] Scroll animations trigger correctly
- [x] Dot hover scale effect works

✅ **Mobile View:**
- [x] Tab bar displays with "Employee" and "Founder" tabs
- [x] "Employee" tab active by default
- [x] Switching tabs toggles timeline content
- [x] Active tab highlighted with primary color and border
- [x] Timeline renders correctly in single-column layout

✅ **Dev Server:**
- [x] Hot-reload functioning correctly
- [x] No TypeScript errors
- [x] No console errors or warnings

---

## Scope Adherence

**In Scope (Completed):**
- ✅ Section title update
- ✅ Desktop 50/50 dual-panel layout
- ✅ Single-column vertical timeline per panel
- ✅ Visible panel divider
- ✅ Mobile tab toggle
- ✅ Placeholder entrepreneurial content

**Out of Scope (Next Sprint):**
- ❌ Actual entrepreneurial career data entry
- ❌ Different visual styling per panel (color differentiation)
- ❌ Filtering or sorting timeline entries
- ❌ Case studies section modifications

---

## Future Considerations

### Follow-up Items for Next Sprint

1. **US-CT-004:** Populate "The Entrepreneurial Journey" with real founder/entrepreneur career data
2. **US-CT-005:** Consider visual differentiation between panels (e.g., different dot colors per career track)
3. **US-CT-006:** Add entry count badges to each panel header
4. **US-CT-007:** Explore timeline filtering by date range or category

---

## Summary

Sprint 1 of the Career Timeline work successfully established the dual-arc foundation. The section now communicates Laurent's dual-career identity through a clean, responsive layout that works across all screen sizes. The placeholder entrepreneurial content is ready to be replaced with real data in the next sprint, without requiring any structural changes to the layout.

**Status:** ✅ Ready for review and integration into main branch.

---

## Sign-Off

**Completed By:** Claude Haiku 4.5 (AI Assistant)
**Reviewed By:** Laurent Vincentelli (Webmaster)
**Date:** March 27, 2026
**Branch:** `feature/career-timeline-1-03-27-2026`
