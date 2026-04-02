# feature_hero-03-27-2026

## Sprint Backlog

Now we will work on improving the text content of the Hero section of the about page. Please find below the User stories I want you to develop and implement. 

US1 : As a the webmaster of Laurent' Blog I confirm We will be working on these two elements only
- Left side: Editorial badge, large headline with italicized terms, explainer text "With over two decades of experience at the intersection of global markets and emerging technologies"
- Right side:  profile image     
- We will be Focusing on the text/image content, NOT modifying the design / layout. 
- Use the same design system (/workspace/docs/laurent-blog-design-dossier/design system/laurent-blog-design-system.md) for the components, notably the new CTA buttons . 

US2 : As The webmaster I want the Editorial badge text content that is actually "EDITORIAL INTELLIGENCE" to be renamed "PROFESSIONAL PORTFOLIO" 

US3 : As The webmaster I want the Heading "About Laurent Vincentelli" to be renamed "Laurent Vincentelli"

US4 : As The webmaster I want to add a Subheading with the text title "_Digital & AI Platforms-to-Business (P2B) Lead_", italic font 

US5 : As The webmaster I want you to change the main text "With over two decades of experience at the intersection of global markets and emerging technologies, I have dedicated my career to decoding the complexities of the digital economy.

My expertise spans the foundational principles of **Business Strategy**, the transformative power of **Artificial Intelligence**, and the precision required for **High-Stakes Finance**. This blog serves as a repository for editorial intelligence—providing clarity in an era of noise." 

by the following one : (Please use the bullet points as is and use bold font following the markdown format)
"
I have spent **15+ years** building and scaling the platform layer that sits between raw compute and the people who need to use it.
- **The pattern:** a brilliant multidisciplinary team with world-class infrastructure access — and a missing platform layer costing them velocity.
- **The approach:** start with the customer, map the friction, build the platform, ship with cadence.
- **The result:** zero-friction vertical user experiences, translating on-premises and hyperscaler infrastructure into platforms that actually scale the business.
"

US6 : As The webmaster I want the text "The Digital Curator" to be replaces by 2 CTA button, the first CTA button "Achievements" and the Second one "Contact"


## Sprint Planning 

## Context

The About page hero section needs content updates to better reflect Laurent's professional positioning and provide clearer calls-to-action. This is a text/content-focused update that maintains the existing design and layout while refreshing the narrative about Laurent's expertise and experience. The updates are driven by the webmaster's requirements to better communicate Laurent's platform engineering background and provide navigation to key sections.

---

## Scope

**In Scope (Text Content Only):**

- Editorial badge text change
- Main heading update
- New subheading addition (italic, positioned below heading)
- Main explainer text replacement
- Decorative divider text replacement + 2 CTA buttons

**Out of Scope (No Layout/Design Changes):**

- Layout modifications
- Component restructuring
- Color scheme changes
- Image placement or sizing

---

## User Stories Breakdown

|US|Change|Current|New|Component|
|---|---|---|---|---|
|US2|Badge text|"EDITORIAL INTELLIGENCE"|"PROFESSIONAL PORTFOLIO"|Badge (line 142)|
|US3|Main heading|"About Laurent Vincentelli"|"Laurent Vincentelli"|H1 (line 146)|
|US4|Add subheading|(none)|"_Digital & AI Platforms-to-Business (P2B) Lead_" (italic)|New element after H1|
|US5|Main explainer text|2 paragraphs (expertise in Strategy/AI/Finance)|New text (15+ years platform layer)|Paragraph (lines 150-157)|
|US6|CTA replacement|"The Digital Curator" (decorative text)|2 buttons: "Achievements" + "Contact"|Replace divider section (lines 159-162)|

---

## Implementation Details

### File to Modify

**Primary:** `/workspace/src/pages/About.tsx`

### Changes by User Story

#### US2: Editorial Badge Text

- **Location:** Line 142 (within the badge `<div>`)
- **Change:** Replace text content "Editorial Intelligence" → "PROFESSIONAL PORTFOLIO"
- **No class/styling changes required** — use existing `tertiary-fixed` colors

#### US3: Main Heading

- **Location:** Line 146-148 (within `<h1>`)
- **Change:** Replace text content "About Laurent Vincentelli" → "Laurent Vincentelli"
- **Keep:** All existing styling classes (`font-headline text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.1] tracking-tight max-w-3xl`)

#### US4: New Subheading (Italic)

- **Location:** Insert new `<p>` element immediately after the `<h1>` (after line 148)
- **Content:** "_Digital & AI Platforms-to-Business (P2B) Lead_"
- **Styling:**
    - Font: `font-body` (Manrope)
    - Size: `text-lg` or `text-xl` (smaller than main heading, readable)
    - Weight: `font-medium`
    - Italic: `italic`
    - Color: `text-secondary` (matches body text color scheme)
    - Max-width: `max-w-3xl` (align with heading)
- **Example:**

jsx

````jsx
  <p className="font-body text-lg md:text-xl italic text-secondary max-w-3xl">
    Digital & AI Platforms-to-Business (P2B) Lead
  </p>
```

#### US5: Main Explainer Text Replacement
- **Location:** Lines 150-157 (replace entire 2-paragraph block)
- **Current text:** "With over two decades..." paragraph discussing Business Strategy, AI, Finance
- **New text:** Markdown-formatted with bullet points and bold terms:
```
  I have spent **15+ years** building and scaling the platform layer that sits between raw compute and the people who need to use it.
  - **The pattern:** a brilliant multidisciplinary team with world-class infrastructure access — and a missing platform layer costing them velocity.
  - **The approach:** start with the customer, map the friction, build the platform, ship with cadence.
  - **The result:** zero-friction vertical user experiences, translating on-premises and hyperscaler infrastructure into platforms that actually scale the business.
````

- **Styling:** Keep existing classes for body text (`text-lg lg:text-xl text-secondary max-w-3xl`)
- **Note:** Text includes markdown bold (`**text**`) and bullet points — will need to render as JSX with proper formatting or use a markdown renderer if available

#### US6: Replace Decorative Divider with CTA Buttons

- **Location:** Lines 159-162 (replace the decorative divider and "The Digital Curator" text)
- **Current:** Horizontal line + text label
- **New:** Two CTA buttons in a flex row
- **Button Pattern:** Based on Home page hero buttons (see design system exploration)
    - **Primary Button ("Achievements"):**

jsx

```jsx
    <button className="bg-on-primary text-primary px-8 py-3.5 rounded-xl font-medium font-body text-sm hover:bg-surface-container-low transition-all duration-300">
      Achievements
    </button>
```

- **Secondary Button ("Contact"):**

jsx

```jsx
    <button className="border border-on-primary/30 text-on-primary px-8 py-3.5 rounded-xl font-medium font-body text-sm hover:bg-on-primary/10 transition-all duration-300">
      Contact
    </button>
```

- **Layout:** Wrap in flex container with gap: `<div className="flex gap-4 mt-8">`
- **Note:** Buttons are currently placeholder `<button>` elements; wire up actual navigation/links later (e.g., scroll to #achievements section, link to contact form)

---

## Design System Compliance

✅ **Colors Used:**

- Editorial badge: `tertiary-fixed` (existing, no change)
- Main text: `text-secondary` (consistent with design system)
- CTA buttons: `on-primary` background (matches Home page pattern)

✅ **Typography:**

- Subheading: `font-body text-lg md:text-xl italic`
- Button text: `font-body font-medium text-sm` (matches Home page buttons)

✅ **Spacing & Alignment:**

- New subheading: `max-w-3xl` (aligns with heading max-width)
- Buttons: `flex gap-4` (standard spacing)
- Corner radius: `rounded-xl` (0.75rem, per design system)

---

## Implementation Steps

1. **Open** `/workspace/src/pages/About.tsx`
2. **Update US2** — Change badge text on line 142
3. **Update US3** — Change heading text on line 146
4. **Add US4** — Insert new italic subheading after line 148
5. **Update US5** — Replace explainer text paragraphs (lines 150-157)
6. **Update US6** — Replace decorative divider with button flex container (lines 159-162)
7. **Visual verification** — Check dev server to ensure:
    - New text renders correctly
    - Subheading is italic and properly positioned
    - CTA buttons display with correct styling and hover states
    - Layout remains intact (no unintended shifts)
    - Mobile responsive behavior maintained

---

## Files to Modify

- `/workspace/src/pages/About.tsx` — About page hero section

## Design System Reference

- `/workspace/docs/laurent-blog-design-dossier/design system/laurent-blog-design-system.md` — For button and typography patterns

---

## Testing & Verification

**Manual Testing:**

1. ✅ Load About page on dev server
2. ✅ Verify "PROFESSIONAL PORTFOLIO" appears in badge (uppercase, correct styling)
3. ✅ Verify "Laurent Vincentelli" appears as heading (no "About" prefix)
4. ✅ Verify italic subheading "_Digital & AI Platforms-to-Business (P2B) Lead_" appears below heading
5. ✅ Verify new 4-bullet explainer text renders with bold formatting
6. ✅ Verify "Achievements" and "Contact" buttons display in a row with correct colors/hover states
7. ✅ Check mobile view (tablet, phone) — responsive layout intact
8. ✅ Verify no layout shifts or unexpected visual changes

**Browser Dev Tools:**

- Inspect styling on new subheading (should show italic applied)
- Check button hover states trigger correctly
- Verify no console errors

---

## Notes

- No markdown rendering library is currently in use for the new bullet-point text — will need to either: (a) manually format with JSX elements, or (b) install a markdown-to-JSX library if preferred
- CTA button hrefs/onClick handlers will be wired up in a follow-up task once placement and styling are confirmed
- All changes maintain existing responsive behavior — no media query modifications needed

