# Career Timeline Centered Tabs (Desktop-Specific)

## Overview
This specification details the transition from a side-by-side "Dual Arc" timeline on desktop to a more focused and premium "Professional Journey Tabs" component. This change is specifically for desktop devices to provide a more sophisticated user experience, while maintaining the existing mobile tab structure.

## Context
Laurent Vincentelli's professional story is a "Dual Arc" featuring both corporate leadership and entrepreneurial ventures. On large screens, showing both side-by-side currently makes the page feel crowded. Switching to a centered-tab experience will allow each journey to breathe while reinforcing the professional weight of the content.

## Design Details

### 1. Desktop Tab Component
- **Structure**: A horizontal tab bar with two options: "Corporate Journey" and "Entrepreneurial Journey".
- **Centered Alignment**: Both the tab headers (titles and subtitles) and the overall component must be centered in the viewport.
- **Subtitles**: Each tab will include a professional subtitle for context:
  - Corporate Journey: "Digital & AI Platforms Lead"
  - Entrepreneurial Journey: "Founder & Refounder"
- **Visual Style**:
  - Large, clear typography using the project's headline fonts.
  - A clean underline indicator that slides between active tabs.
  - Inactive tabs will use a subtle opacity (e.g., 40%) to draw focus to the active selection.
- **Responsiveness**: This design is strictly for desktop (768px and above).

### 2. Mobile Tab Component
- **Status**: No changes requested. The existing mobile-only tab component (currently `md:hidden`) will remain as-is.

### 3. Timeline Content
- **Display**: Switching tabs will toggle between the `corporateEntries` and `entrepreneurialEntries` data structures.
- **Animations**: Transitions between journeys will use `framer-motion` (implemented as `motion/react`) for a smooth, tactile feel.
- **Width**: The timeline content below the tabs will be centered and have a maximum width (e.g., `max-w-4xl`) to ensure readability on very wide screens.

## Technical Architecture

### Component Structure
- Update `src/pages/About.tsx`.
- Create a new `JourneyTabs` sub-component or modify the section structure within `About.tsx`.
- Use the existing `activeTab` state to drive both the desktop and mobile views.

### Styling
- Use the project's existing design system for colors and spacing.
- Ensure the vertical divider from the current side-by-side layout is removed in favor of the tabbed interface.

## Success Criteria
- [ ] On desktop screens (>=768px), the "Career Timeline" shows two centered tabs with subtitles.
- [ ] Switching tabs updates the timeline content below with smooth animations.
- [ ] The mobile view (<768px) remains unchanged.
- [ ] All titles, subtitles, and content are properly centered and visually balanced on desktop.
- [ ] The design feels "premium" and cohesive with the rest of the professional portfolio.

## Open Questions
- None at this time based on the latest brainstorming session.
