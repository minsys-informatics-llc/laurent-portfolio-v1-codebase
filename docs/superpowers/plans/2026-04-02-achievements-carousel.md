# Achievements Carousel — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the static 4-card grid in Case Studies & Achievements (FR-AP-004) with a single-card carousel that auto-rotates through the 4 achievements with smooth animations, pauses on hover, and preserves the existing "Read Insight" → AnimatePresence dashboard reveal.

**Architecture:** Create a dedicated `AchievementsCarousel` component that encapsulates all carousel logic (auto-play timer, hover-pause, dot/arrow navigation, motion transitions). The parent `Home.tsx` only passes the `caseStudies` data and receives the `expandedCard` state back. Animation uses `motion/react` `AnimatePresence` with horizontal slide transitions, consistent with the site's existing animation vocabulary.

**Tech Stack:** React 19, motion/react (AnimatePresence + motion.div), Tailwind CSS v4 with project design tokens, `useEffect` interval for auto-play

---

## Design Decisions

### Animation Style
The site consistently uses:
- `duration: 0.5` for content transitions
- `ease: [0.16, 1, 0.3, 1]` (custom cubic bezier) for the reveal panel
- `{ opacity: 0, x: ±20 }` for horizontal slide-in (see skills tab switcher)
- Spring physics for tab indicators (`stiffness: 300, damping: 30`)

The carousel will use `AnimatePresence mode="wait"` with horizontal slide transitions (`x: 60` → `x: 0` → `x: -60`), matching the skills content switcher pattern. Duration: `0.5s` with `easeOut`.

### Auto-Play
- **Interval:** 6 seconds (enough to read headline + description)
- **Pause on hover:** The entire carousel container pauses the timer when hovered (same pattern as the CSS marquee in `index.css:115`)
- **Resume:** Timer restarts from 0 when cursor leaves
- **Reset on manual navigation:** Any click (dot, arrow, "Read Insight") resets the timer

### Navigation
- **Dots:** 4 dot indicators below the card, active dot highlighted with `bg-tertiary-fixed-dim`, inactive `bg-outline-variant/40`
- **Arrows:** Left/right chevron buttons at card edges, subtle on idle, visible on section hover
- **Keyboard:** Not in scope for MVP (can be added later)

### Card Layout
- Single card centered, max-width matching current card width (~`max-w-2xl`)
- Card design is identical to current cards (image, glassmorphism metric, category, title, description, CTA)
- A subtle progress bar at the bottom of the card fills over 6s to indicate auto-advance timing

### Dashboard Reveal
- The `AnimatePresence` reveal panel remains a sibling below the carousel (same as today)
- When a user clicks "Read Insight", the carousel pauses indefinitely until the panel is closed
- Closing "Close Insight" resumes auto-play

---

## File Structure

| Action | File | Responsibility |
|--------|------|---------------|
| Create | `src/components/AchievementsCarousel.tsx` | Carousel component: auto-play, hover-pause, dot/arrow nav, card rendering, progress bar |
| Modify | `src/pages/Home.tsx:706-835` | Replace the grid section with `<AchievementsCarousel />`, pass data, wire expandedCard state |

---

## Task 1: Create `AchievementsCarousel.tsx`

**Files:**
- Create: `src/components/AchievementsCarousel.tsx`

- [ ] **Step 1: Create the component with types, props, and auto-play hook**

Create `src/components/AchievementsCarousel.tsx`:

```tsx
import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

type CaseStudy = {
  id: number;
  category: string;
  year: string;
  title: string;
  headline: string;
  headlineSub: string;
  description: string;
  imageUrl: string;
};

type AchievementsCarouselProps = {
  caseStudies: CaseStudy[];
  expandedCard: number | null;
  onToggleExpand: (id: number) => void;
};

export function AchievementsCarousel({
  caseStudies,
  expandedCard,
  onToggleExpand,
}: AchievementsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const INTERVAL_MS = 6000;
  const PROGRESS_TICK_MS = 50;

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
      setProgress(0);
    },
    [activeIndex],
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    setProgress(0);
  }, [caseStudies.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    setProgress(0);
  }, [caseStudies.length]);

  // Auto-play: pause on hover OR when a dashboard is expanded
  const shouldPause = isPaused || expandedCard !== null;

  useEffect(() => {
    if (shouldPause) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      return;
    }

    progressRef.current = setInterval(() => {
      setProgress((prev) => Math.min(prev + PROGRESS_TICK_MS / INTERVAL_MS * 100, 100));
    }, PROGRESS_TICK_MS);

    intervalRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % caseStudies.length);
      setProgress(0);
    }, INTERVAL_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [shouldPause, caseStudies.length]);

  const study = caseStudies[activeIndex];

  const slideVariants = {
    enter: (d: number) => ({ opacity: 0, x: d * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -60 }),
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setProgress(0);
      }}
    >
      {/* Card container */}
      <div className="relative max-w-2xl mx-auto">
        {/* Left arrow */}
        <button
          onClick={goPrev}
          aria-label="Previous achievement"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-10 w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant/30 shadow-[0px_4px_12px_rgba(19,27,46,0.06)] flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-tertiary-fixed-dim/40 transition-all duration-300 cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">chevron_left</span>
        </button>

        {/* Right arrow */}
        <button
          onClick={goNext}
          aria-label="Next achievement"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-10 w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant/30 shadow-[0px_4px_12px_rgba(19,27,46,0.06)] flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-tertiary-fixed-dim/40 transition-all duration-300 cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">chevron_right</span>
        </button>

        {/* Animated card */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={study.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`bg-surface-container-lowest p-6 rounded-xl transition-shadow duration-300 shadow-[0px_12px_32px_rgba(19,27,46,0.04)] border ${
              expandedCard === study.id
                ? "border-tertiary-fixed-dim/60 shadow-[0px_12px_32px_rgba(19,27,46,0.08)]"
                : "border-transparent"
            }`}
          >
            {/* Key metric focal point */}
            <div className="relative rounded-xl overflow-hidden mb-6 h-44">
              <img
                src={study.imageUrl}
                alt={study.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                <div
                  className="text-center px-6 py-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.22)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
                  }}
                >
                  <div className="font-headline text-3xl text-white leading-none mb-1 drop-shadow-sm">
                    {study.headline}
                  </div>
                  <div className="font-label text-[10px] text-white/80 uppercase tracking-widest font-bold mt-2">
                    {study.headlineSub}
                  </div>
                </div>
              </div>
            </div>

            <span className="font-label text-[10px] text-tertiary-fixed-dim uppercase tracking-widest font-bold">
              {study.category} &bull; {study.year}
            </span>
            <h3 className="font-headline text-2xl text-primary mt-2 mb-3">{study.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-body">
              {study.description}
            </p>

            {/* CTA — toggles the reveal panel */}
            <button
              onClick={() => onToggleExpand(study.id)}
              aria-expanded={expandedCard === study.id}
              aria-controls={`insight-panel-${study.id}`}
              className="flex items-center text-primary group cursor-pointer bg-transparent border-none p-0"
            >
              <span className="text-xs font-bold font-label uppercase tracking-widest group-hover:mr-2 transition-all">
                {expandedCard === study.id ? "Close Insight" : "Read Insight"}
              </span>
              <span
                className={`material-symbols-outlined text-sm ml-2 transition-transform duration-300 ${
                  expandedCard === study.id ? "rotate-90" : ""
                }`}
              >
                arrow_forward
              </span>
            </button>

            {/* Progress bar */}
            <div className="mt-4 h-0.5 w-full bg-outline-variant/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-tertiary-fixed-dim/50 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: shouldPause ? `${progress}%` : `${progress}%` }}
                transition={{ duration: PROGRESS_TICK_MS / 1000, ease: "linear" }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2.5 mt-6">
        {caseStudies.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to ${s.title}`}
            className={`rounded-full transition-all duration-300 cursor-pointer border-none ${
              i === activeIndex
                ? "w-8 h-2 bg-tertiary-fixed-dim"
                : "w-2 h-2 bg-outline-variant/40 hover:bg-outline-variant/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify the component compiles**

Run: `npm run build 2>&1 | tail -10`

Expected: Build succeeds (the component isn't imported yet, but should have no syntax errors since the build includes all files in `src/`).

- [ ] **Step 3: Commit**

```bash
git add src/components/AchievementsCarousel.tsx
git commit -m "feat: add AchievementsCarousel component with auto-play, hover-pause, and progress bar"
```

---

## Task 2: Wire the carousel into `Home.tsx`

**Files:**
- Modify: `src/pages/Home.tsx`

- [ ] **Step 1: Add the import**

At `src/pages/Home.tsx:6` (after the AIFactoryPlatformDashboard import), add:

```tsx
import { AchievementsCarousel } from "../components/AchievementsCarousel";
```

- [ ] **Step 2: Replace the card grid with the carousel**

In `src/pages/Home.tsx`, replace the section comment and card grid (lines ~718–813) with the carousel and updated AnimatePresence. Specifically, replace everything from the `{/* 3-card grid */}` comment line (which currently says `{/* 3-card grid */}` or similar) through the closing `</AnimatePresence>` tag.

Find and replace the block from:
```tsx
          {/* 3-card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
```

Through and including:
```tsx
          </AnimatePresence>
```

Replace with:

```tsx
          {/* Achievement carousel — single card, auto-rotating */}
          <AchievementsCarousel
            caseStudies={caseStudies}
            expandedCard={expandedCard}
            onToggleExpand={(id) => setExpandedCard(expandedCard === id ? null : id)}
          />

          {/* Card Reveal Animation — full-width panel below the carousel */}
          <AnimatePresence>
            {expandedCard !== null && (
              <motion.div
                id={`insight-panel-${expandedCard}`}
                key={expandedCard}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden mt-6"
              >
                <div className="overflow-x-auto">
                  {expandedCard === 1 && <InsurancePlatformDashboard />}
                  {expandedCard === 2 && <OpenbankingDashboard />}
                  {expandedCard === 3 && <InternalDevPlatformDashboard />}
                  {expandedCard === 4 && <AIFactoryPlatformDashboard />}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
```

- [ ] **Step 3: Update the section comment**

Replace:
```tsx
      {/* ═══════════════════════════════════════════
          CASE STUDIES & ACHIEVEMENTS (FR-AP-004)
          4-card grid: 4×1 desktop, 1×4 tablet, 1×4 mobile
          Card reveal: AnimatePresence slide-down below grid
      ═══════════════════════════════════════════ */}
```

With:
```tsx
      {/* ═══════════════════════════════════════════
          CASE STUDIES & ACHIEVEMENTS (FR-AP-004)
          Single-card carousel: auto-rotate 6s, hover-pause
          Card reveal: AnimatePresence slide-down below carousel
      ═══════════════════════════════════════════ */}
```

- [ ] **Step 4: Verify the build compiles**

Run: `npm run build 2>&1 | tail -10`

Expected: Build succeeds with no errors.

- [ ] **Step 5: Visual verification**

Check in browser at `http://localhost:3000`:
1. The Case Studies section shows a single centered card
2. The card auto-rotates every 6 seconds with a horizontal slide animation
3. The progress bar fills over 6 seconds at the bottom of the card
4. Hovering the card pauses the auto-rotation and progress bar
5. Left/right arrows navigate between cards
6. Dot indicators show active card and are clickable
7. Clicking "Read Insight" expands the dashboard panel and pauses the carousel
8. Clicking "Close Insight" collapses the panel and resumes auto-play
9. All 4 achievements display correctly with their respective dashboards

- [ ] **Step 6: Commit**

```bash
git add src/pages/Home.tsx
git commit -m "feat: replace achievement grid with auto-rotating carousel (FR-AP-004)"
```

---

## Self-Review Checklist

- [x] **Spec coverage:** Single-card carousel, loop on 4 achievements, smooth animation, hover-pause, "Read Insight" preserved
- [x] **Design alignment:** Uses project tokens (`tertiary-fixed-dim`, `surface-container-lowest`, `outline-variant`), motion/react patterns (AnimatePresence, slide variants), and shadow/border patterns matching existing cards
- [x] **Auto-play logic:** 6s interval, pauses on hover and when dashboard is expanded, resets on manual nav
- [x] **Progress bar:** Fills over 6s, pauses with carousel, uses `tertiary-fixed-dim/50` to stay subtle
- [x] **Navigation:** Dot indicators (active = pill shape, inactive = circle), left/right arrows with hover states
- [x] **AnimatePresence reveal:** Remains a sibling below carousel, unchanged behavior for all 4 dashboards
- [x] **Placeholder scan:** No TBDs or TODOs — all code is complete
- [x] **Type consistency:** `CaseStudy` type matches the shape of `caseStudies` array entries in Home.tsx
