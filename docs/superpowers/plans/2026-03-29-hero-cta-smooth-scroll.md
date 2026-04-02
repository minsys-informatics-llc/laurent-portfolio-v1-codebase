# Hero CTA Smooth Scroll Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Modify the [About.tsx](file:///workspace/src/pages/About.tsx) Hero section with three CTA buttons and implement smooth scrolling to their respective sections.

**Architecture:** We will add `id` attributes to header/section elements and use a programmatic `scrollToSection` helper function in the `About` component.

**Tech Stack:** React, motion/react, Tailwind CSS.

---

### Task 1: Add Section IDs

**Files:**
- Modify: [About.tsx](file:///workspace/src/pages/About.tsx)

- [ ] **Step 1: Add id="career-timeline"**
  Add `id="career-timeline"` to the section starting at line 340.

- [ ] **Step 2: Add id="skills-expertise"**
  Add `id="skills-expertise"` to the section starting at line 462.

- [ ] **Step 3: Add id="case-studies-achievements"**
  Add `id="case-studies-achievements"` to the section starting at line 648.

- [ ] **Step 4: Commit**
```bash
git add src/pages/About.tsx
git commit -m "feat(about): add ids to sections for smooth scroll"
```

### Task 2: Add smooth scroll helper

**Files:**
- Modify: [About.tsx](file:///workspace/src/pages/About.tsx)

- [ ] **Step 1: Define scrollToSection helper**
  Inside the `About` function component, add the helper:
```tsx
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
```

- [ ] **Step 2: Commit**
```bash
git add src/pages/About.tsx
git commit -m "feat(about): add scrollToSection helper function"
```

### Task 3: Replace Hero CTA Buttons

**Files:**
- Modify: [About.tsx](file:///workspace/src/pages/About.tsx)

- [ ] **Step 1: Replace existing buttons**
  Replace lines 304-311 with three new buttons: "Career Timeline", "Skills", and "Achievements".
```tsx
            <div className="flex flex-wrap gap-4 mt-8 pt-4">
              <button 
                onClick={() => scrollToSection('career-timeline')}
                className="bg-primary text-on-primary px-8 py-3.5 rounded-xl font-medium font-body text-sm hover:bg-primary-container hover:scale-105 transition-all duration-300"
              >
                Career Timeline
              </button>
              <button 
                onClick={() => scrollToSection('skills-expertise')}
                className="bg(primary) text-on-primary px-8 py-3.5 rounded-xl font-medium font-body text-sm hover:bg-primary-container hover:scale-105 transition-all duration-300"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('case-studies-achievements')}
                className="bg-primary text-on-primary px-8 py-3.5 rounded-xl font-medium font-body text-sm hover:bg-primary-container hover:scale-105 transition-all duration-300"
              >
                Achievements
              </button>
            </div>
```
(Wait, I just noticed `bg(primary)` typo in my thought above, I will fix it in the actual call).

- [ ] **Step 2: Commit**
```bash
git add src/pages/About.tsx
git commit -m "feat(about): replace hero cta buttons and link to scroll helper"
```

### Task 4: Verification

- [ ] **Step 1: Verify in Browser**
  1. Open [http://localhost:3001/](http://localhost:3001/).
  2. Click "Career Timeline" -> Scroll to Dual Arc section.
  3. Click "Skills" -> Scroll to Skills & Expertise section.
  4. Click "Achievements" -> Scroll to Case Studies & Achievements section.

- [ ] **Step 2: Mark implementation as complete**
