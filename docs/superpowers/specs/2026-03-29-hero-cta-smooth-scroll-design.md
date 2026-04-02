# Spec: Hero CTA Modification & Smooth Scroll

For developing new features on the website **"Laurent's Blog"**, we use the **"complete software development workflow"** powered by **"Superpowers"**.

## Topic: Hero Section CTA Update

### Goal
Modify the **Hero Section (FR-AP-002)** on the [About.tsx](file:///workspace/src/pages/About.tsx) page to include three primary CTA buttons that allow users to smoothly scroll to key sections of the page.

### User Stories
- **As a user** browsing the hero section, I want to click on **"Career Timeline"** to be scrolled down smoothly to the **CAREER TIMELINE (FR-AP-003)** section.
- **As a user** browsing the hero section, I want to click on **"Skills"** to be scrolled down smoothly to the **SKILLS & EXPERTISE (FR-AP-002B)** section.
- **As a user** browsing the hero section, I want to click on **"Achievements"** to be scrolled down smoothly to the **CASE STUDIES & ACHIEVEMENTS (FR-AP-004)** section.

## Design

### 1. Section IDs
The following `id` attributes will be added to the target sections in [About.tsx](file:///workspace/src/pages/About.tsx):
- `id="career-timeline"` added to the **Dual Arc** section.
- `id="skills-expertise"` added to the **Skills & Expertise** section.
- `id="case-studies-achievements"` added to the **Case Studies & Achievements** section.

### 2. Hero CTA Buttons
The existing "Achievements" and "Contact" buttons will be replaced with three new buttons in a flex row:
- **Button 1**: "Career Timeline"
- **Button 2**: "Skills"
- **Button 3**: "Achievements"

**Styling**:
- Consistent with the existing theme using `bg-primary`, `text-on-primary`, and hover effects (`hover:scale-105`, `hover:bg-primary-container`).

### 3. Smooth-Scroll Implementation
We will use a programmatic `scrollToSection` helper function within the `About` component:

```tsx
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
```

This helper will be invoked via the `onClick` event of each CTA button.

## Verification Plan

### Automated Tests
- N/A for this UI-only change.
- Manual verification in the browser via `npm run dev` at [`http://localhost:3001/`](http://localhost:3001/).

### Manual Verification
- Click each of the three buttons in the Hero section and ensure:
    1. The page scrolls smoothly to the correct section.
    2. The button layout is responsive and visually consistent.
