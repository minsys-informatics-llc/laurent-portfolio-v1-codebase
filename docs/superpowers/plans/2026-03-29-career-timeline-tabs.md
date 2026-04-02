# Career Timeline Centered Tabs Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the side-by-side career timelines on desktop with a premium, centered-tab interface consisting of "Corporate Journey" and "Entrepreneurial Journey" tabs, including professional subtitles and smooth animations.

**Architecture:** We will modify the `About.tsx` component to introduce a new desktop-only tab component within the "CAREER TIMELINE" section. This component will use the existing `activeTab` state to toggle between the corporate and entrepreneurial datasets. We'll use `motion/react` for the sliding underline indicator and content transitions.

**Tech Stack:** React, Tailwind CSS, Framer Motion (`motion/react`).

---

## Proposed Changes

### [Component] [About.tsx](file:///workspace/src/pages/About.tsx)

#### [MODIFY] [About.tsx](file:///workspace/src/pages/About.tsx)

We will restructure the "CAREER TIMELINE" section (starting around line 359).

### Task 1: Define Desktop Tab Content & State Logic

**Files:**
- Modify: `src/pages/About.tsx`

- [ ] **Step 1: Verify `activeTab` state works for both journeys**
  - Ensure `activeTab` of type `'corporate' | 'entrepreneurial'` is available and initialized correctly.
  - (Already exists in line 229: `const [activeTab, setActiveTab] = useState<'corporate' | 'entrepreneurial'>('corporate');`)

- [ ] **Step 2: Commit baseline state verification**
  ```bash
  git commit -m "chore: verify activeTab state for career timeline"
  ```

### Task 2: Implement Desktop Centered Tabs

**Files:**
- Modify: `src/pages/About.tsx`

- [ ] **Step 1: Replace side-by-side desktop panels with the new Tab Layout**
  - Locate the `hidden md:flex` container (lines 413-470).
  - Replace the 50/50 flex layout with a single-column layout containing the new centered tabs.

- [ ] **Step 2: Build the JourneyTabs Desktop Component**
  - Add a centered container for the tabs.
  - Implement "Corporate Journey" and "Entrepreneurial Journey" buttons.
  - Add subtitles: "Digital & AI Platforms Lead" and "Founder & Refounder".
  - Use `motion.div` for the sliding underline indicator.

```tsx
<div className="hidden md:block mb-16 relative">
  <div className="flex justify-center gap-16 border-b border-outline-variant/30 relative">
    {/* Corporate Tab */}
    <button 
      onClick={() => setActiveTab('corporate')}
      className={`pb-6 text-center transition-opacity duration-300 ${activeTab === 'corporate' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
    >
      <div className="font-headline text-2xl text-primary">Corporate Journey</div>
      <div className="font-label text-xs text-secondary uppercase tracking-widest mt-1">Digital & AI Platforms Lead</div>
    </button>

    {/* Entrepreneurial Tab */}
    <button 
      onClick={() => setActiveTab('entrepreneurial')}
      className={`pb-6 text-center transition-opacity duration-300 ${activeTab === 'entrepreneurial' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
    >
      <div className="font-headline text-2xl text-primary">Entrepreneurial Journey</div>
      <div className="font-label text-xs text-secondary uppercase tracking-widest mt-1">Founder & Refounder</div>
    </button>

    {/* Animated Underline */}
    <motion.div 
      className="absolute bottom-0 h-1 bg-primary"
      initial={false}
      animate={{ 
        x: activeTab === 'corporate' ? 'calc(50% - 250px)' : 'calc(50% + 50px)',
        width: activeTab === 'corporate' ? '200px' : '260px' // Adjust based on text width
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    />
  </div>
</div>
```

- [ ] **Step 3: Commit desktop tab implementation**
  ```bash
  git commit -m "feat: implement centered desktop tabs for career timeline"
  ```

### Task 3: Implement Centered Timeline Content for Desktop

**Files:**
- Modify: `src/pages/About.tsx`

- [ ] **Step 1: Update the content display to be centered and max-width on desktop**
  - Wrap the timeline entries in a `max-w-4xl mx-auto` container for desktop.
  - Ensure the content transitions smoothly when `activeTab` changes using `AnimatePresence` or regular `motion` wrappers.

- [ ] **Step 2: Remove the vertical divider and side-panel styling**
  - Ensure the desktop-specific layout only shows one journey at a time.

- [ ] **Step 3: Commit desktop timeline content updates**
  ```bash
  git commit -m "feat: center timeline content and add desktop transitions"
  ```

### Task 4: Final Refinement & Verification

**Files:**
- Modify: `src/pages/About.tsx`

- [ ] **Step 1: Verify Mobile View is Intact**
  - Check that the `md:hidden` section (lines 371-410) still works correctly.
- [ ] **Step 2: Visual Polish**
  - Adjust padding, font sizes, and animation speeds to match the "premium" feel.
- [ ] **Step 3: Final Commit**
  ```bash
  git commit -m "style: final polish for career timeline centered tabs"
  ```

---

## Verification Plan

### Automated Tests
- None available in project.

### Manual Verification
- **Visual Check (Desktop)**:
  - Open the "About" page on a desktop-sized browser.
  - Verify that the "Career Timeline" shows two centered tabs with subtitles.
  - Verify that the active tab is high-opacity and has an underline.
  - Click between tabs and verify the content updates with a smooth animation.
- **Visual Check (Mobile)**:
  - Switch to mobile viewport.
  - Verify that the mobile tabs are still present and functioning as before.
- **Responsiveness**:
  - Resize the browser and verify the transition between mobile and desktop tab styles happens at the `md` breakpoint (768px).
