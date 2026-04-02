# Achievements Dashboard Integration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign 3 HTML executive dashboards to match the About page design system, then integrate them into the Case Studies & Achievements section (FR-AP-004) with a card-reveal animation.

**Architecture:** Each dashboard becomes a self-contained React TSX component using Tailwind v4 design tokens from `src/index.css`. The case studies section in `About.tsx` is refactored to 3 real achievement cards; clicking "Read Insight" on any card toggles a full-width `AnimatePresence` panel that slides in below the grid revealing the corresponding dashboard component.

**Tech Stack:** React 19 · TypeScript · Tailwind v4 (CSS-variable tokens) · Framer Motion (`motion/react`) · Vite · No test framework (`npm run lint` = TypeScript type-check)

---

## Design System Token Reference

Before starting, memorize this mapping from the old HTML CSS variables to the portfolio's Tailwind classes:

| HTML Variable | Tailwind Class / Value |
|---|---|
| `--bg: #F4F5F7` | `bg-surface-container-low` |
| `--surface: #FFF` | `bg-surface-container-lowest` |
| `--surface-raised: #F0F1F3` | `bg-surface-container` |
| `--text-primary: #1A1D21` | `text-on-surface` |
| `--text-secondary: #5A6170` | `text-secondary` |
| `--text-muted: #8C95A3` | `text-on-surface-variant` |
| `--accent: #2E9E6E` (green) | `text-tertiary-fixed-dim` / `bg-tertiary-fixed/20` |
| `--accent-dim: rgba(46,158,110,0.10)` | `bg-tertiary-fixed/20` |
| `--danger: #C9503E` | `text-error` / `bg-error/10` |
| `--warning: #D48A2C` | amber: `text-amber-600` / `bg-amber-100` |
| `--blue: #3A7BD5` | `text-on-primary-container` / `bg-on-primary-container/10` |
| `--serif` (Instrument Serif) | `font-headline` (Newsreader) |
| `--sans` (DM Sans) | `font-body` (Manrope) + `font-label` (Inter) |
| `--border` | `border-outline-variant/20` |
| `--border-accent` | `border-tertiary-fixed-dim/30` |

---

## File Map

| Action | Path | Purpose |
|---|---|---|
| Create | `src/components/achievements/InsurancePlatformDashboard.tsx` | Achievement 1 dashboard component |
| Create | `src/components/achievements/OpenbankingDashboard.tsx` | Achievement 2 dashboard component |
| Create | `src/components/achievements/InternalDevPlatformDashboard.tsx` | Achievement 3 dashboard component |
| Modify | `src/pages/About.tsx` lines 124–173 | Replace placeholder `caseStudies` data with 3 real achievement entries |
| Modify | `src/pages/About.tsx` lines 243–244 | Add `expandedCard` state |
| Modify | `src/pages/About.tsx` lines 657–713 | Refactor FR-AP-004 section: 3-card grid + reveal panel |

---

## Task 1: Create `InsurancePlatformDashboard.tsx`

**Files:**
- Create: `src/components/achievements/InsurancePlatformDashboard.tsx`

### Reusable sub-components (defined within the file, not exported)

The file uses three local helpers used by all dashboard tasks. Define them in `InsurancePlatformDashboard.tsx` first and copy them verbatim into dashboards 2 and 3.

```tsx
// Card label row (dot + uppercase label)
function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1.5 text-[9.5px] font-label font-semibold uppercase tracking-[1.6px] text-on-surface-variant mb-3.5">
      <span className="w-1 h-1 rounded-full bg-on-surface-variant shrink-0" />
      {children}
    </div>
  );
}

// Positive change badge (green)
function ChangeBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1 text-[11px] font-label font-semibold px-2 py-0.5 rounded bg-tertiary-fixed/30 text-tertiary-fixed-dim mt-2.5 w-fit">
      {children}
    </div>
  );
}

// Tech tag pill
function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[9px] font-label font-semibold tracking-[0.5px] px-1.5 py-0.5 rounded bg-tertiary-fixed/20 text-tertiary-fixed-dim">
      {children}
    </span>
  );
}
```

- [ ] **Step 1: Create the file with imports and local helpers**

```tsx
// src/components/achievements/InsurancePlatformDashboard.tsx
import React from "react";

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1.5 text-[9.5px] font-label font-semibold uppercase tracking-[1.6px] text-on-surface-variant mb-3.5">
      <span className="w-1 h-1 rounded-full bg-on-surface-variant shrink-0" />
      {children}
    </div>
  );
}

function ChangeBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1 text-[11px] font-label font-semibold px-2 py-0.5 rounded bg-tertiary-fixed/30 text-tertiary-fixed-dim mt-2.5 w-fit">
      {children}
    </div>
  );
}

function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[9px] font-label font-semibold tracking-[0.5px] px-1.5 py-0.5 rounded bg-tertiary-fixed/20 text-tertiary-fixed-dim">
      {children}
    </span>
  );
}
```

- [ ] **Step 2: Write the component skeleton and header**

```tsx
export function InsurancePlatformDashboard() {
  return (
    <div className="bg-surface-container-low rounded-xl p-8">

      {/* ── Header ── */}
      <header className="flex justify-between items-start mb-8 pb-6 border-b border-outline-variant/30 relative">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-label font-semibold uppercase tracking-[1.8px] text-tertiary-fixed-dim mb-2">
            <span className="w-1.5 h-1.5 bg-tertiary-fixed-dim rounded-[1px] rotate-45 inline-block" />
            Achievement 1 — Professional Portfolio
          </div>
          <h2 className="font-headline text-3xl text-on-surface leading-tight">
            Insurance-as-a-Service <em className="italic text-tertiary-fixed-dim">Platform</em>
          </h2>
        </div>
        <div className="text-right shrink-0 pt-1">
          <div className="text-xs font-body font-medium text-secondary mb-1">
            Digital &amp; AI Platform Lead / Engagement Manager
          </div>
          <div className="text-[11px] font-body text-on-surface-variant leading-relaxed">
            <strong className="text-secondary font-medium">Client:</strong> Tier-1 Canadian Insurance Carrier<br />
            <strong className="text-secondary font-medium">Engagement:</strong> [9 months] · [~$2.8M]<br />
            <strong className="text-secondary font-medium">Team:</strong> 12-person cross-functional squad<br />
            <strong className="text-secondary font-medium">Sponsors:</strong> CTO · CISO · CDO
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-px w-56 bg-tertiary-fixed-dim" />
      </header>

      {/* ── Dashboard grid ── */}
      {/* ── Results row ── */}
      {/* ── Leadership callout ── */}
      {/* ── Footer ── */}

    </div>
  );
}
```

- [ ] **Step 3: Write the dashboard grid (situation + KPIs + timeline + value streams)**

Replace the `{/* ── Dashboard grid ── */}` comment with:

```tsx
      {/* ── Dashboard grid ── */}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: '280px 1fr 1fr' }}
      >
        {/* Situation Card — col 1, spans 3 rows */}
        <div className="bg-surface-container-lowest rounded-xl p-5 border border-tertiary-fixed-dim/30 row-span-3">
          <CardLabel>Situation &amp; Mandate</CardLabel>
          <p className="text-xs font-body text-secondary leading-[1.75] mb-5">
            The carrier had spent <strong className="text-on-surface font-medium">18 months</strong> and{" "}
            <strong className="text-on-surface font-medium">[~$4M/year]</strong> building production-grade hyperscaler
            infrastructure — with <strong className="text-on-surface font-medium">zero external capabilities</strong>{" "}
            live in production.
          </p>
          <div className="bg-error/5 border border-error/15 rounded-lg px-4 py-3.5 mb-4">
            <div className="text-[9.5px] font-label font-semibold uppercase tracking-[1.4px] text-error mb-2">
              ⚠ Burning Platform
            </div>
            <p className="text-xs font-body text-secondary leading-[1.65]">
              CEO had publicly committed to a digital distribution strategy at an investor day. Two key brokerage
              partners threatening to explore competitors. Regulatory checkpoint [6 months] away.
            </p>
          </div>
          <ul className="flex flex-col gap-2.5 mt-4">
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 text-[10px] mt-0.5 font-semibold">$</span>
              <span><strong className="text-amber-600 font-medium">[~$4M/yr]</strong> in cloud spend generating zero external revenue</span>
            </li>
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-on-primary-container/10 text-on-primary-container flex items-center justify-center shrink-0 text-[10px] mt-0.5">⬡</span>
              <span><strong className="text-on-primary-container font-medium">[12 partners]</strong> stalled in onboarding queues, some waiting 12+ months</span>
            </li>
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-error/10 text-error flex items-center justify-center shrink-0 text-[10px] mt-0.5 font-semibold">!</span>
              <span><strong className="text-error font-medium">Board + regulatory</strong> deadlines creating an immovable timeline</span>
            </li>
          </ul>
        </div>

        {/* KPI 1 — Partner Onboarding */}
        <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/20 flex flex-col justify-between min-h-[120px]">
          <div>
            <CardLabel>Partner Onboarding</CardLabel>
            <div className="font-headline text-[42px] leading-none text-on-surface mb-1">
              14→3 <span className="font-body text-base font-normal text-on-surface-variant ml-0.5">wks</span>
            </div>
            <div className="text-xs font-body text-secondary leading-[1.5]">[8 partners] live within 90 days of launch</div>
          </div>
          <ChangeBadge>▼ 79% reduction</ChangeBadge>
        </div>

        {/* KPI 2 — Regulatory Audit */}
        <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/20 flex flex-col justify-between min-h-[120px]">
          <div>
            <CardLabel>Regulatory Audit</CardLabel>
            <div className="font-headline text-[42px] leading-none text-on-surface mb-1">
              0 <span className="font-body text-base font-normal text-on-surface-variant ml-0.5">findings</span>
            </div>
            <div className="text-xs font-body text-secondary leading-[1.5]">Across [140+] controls assessed</div>
          </div>
          <ChangeBadge>✓ First-pass clean</ChangeBadge>
        </div>

        {/* Timeline Visual — col-start-2, spans cols 2–3 */}
        <div className="col-start-2 col-span-2 bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/20 flex flex-col">
          <CardLabel>GTM Acceleration — Partner Onboarding Timeline</CardLabel>
          <div className="flex flex-col gap-3.5 mt-2 flex-1 justify-center">
            <div className="flex items-center gap-3.5">
              <div className="text-[11px] font-body text-secondary w-[60px] text-right shrink-0">Before</div>
              <div className="flex-1 h-8 bg-surface-container rounded-md overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-error to-error/80 flex items-center pl-3 text-xs font-label font-semibold text-white rounded-md">
                  14 weeks
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="text-[11px] font-body text-secondary w-[60px] text-right shrink-0">After</div>
              <div className="flex-1 h-8 bg-surface-container rounded-md overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-tertiary-fixed-dim to-tertiary-fixed-dim/80 flex items-center pl-3 text-xs font-label font-semibold text-primary rounded-md"
                  style={{ width: '21.4%', minWidth: '90px' }}
                >
                  &lt;3 wks
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-3.5 text-[13px] font-body text-secondary">
            Partners go from LOI to first API call <strong className="text-tertiary-fixed-dim font-semibold">4.7× faster</strong>
          </div>
        </div>

        {/* Value Streams — col-start-2, spans cols 2–3 */}
        <div className="col-start-2 col-span-2 bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/20">
          <CardLabel>Delivery — Four Value Streams</CardLabel>
          <div className="grid grid-cols-4 gap-2.5">
            {[
              { num: "01", title: "API Gateway & Management", desc: "Multi-tenant gateway with rate limits, OAuth2/OIDC, tenant isolation", tags: ["Kong", "AWS", "OAuth2"] },
              { num: "02", title: "Compliance by Design", desc: "VPC-isolated topologies enforcing PIPEDA & provincial data residency", tags: ["VPC", "PIPEDA"] },
              { num: "03", title: "SLA & Observability", desc: "Full observability stack with C-suite-ready uptime dashboards", tags: ["Monitoring", "SLA"] },
              { num: "04", title: "Portfolio Enablement", desc: "Domain capabilities as versioned, self-service API products", tags: ["Policy", "Claims"] },
            ].map((s) => (
              <div key={s.num} className="bg-surface-container border border-outline-variant/20 rounded-lg p-3.5 hover:border-tertiary-fixed-dim/30 transition-colors">
                <div className="text-[9px] font-label font-bold tracking-[1px] text-on-surface-variant mb-2">{s.num}</div>
                <div className="text-[12.5px] font-label font-semibold text-on-surface leading-snug mb-1.5">{s.title}</div>
                <div className="text-[11px] font-body text-on-surface-variant leading-[1.55]">{s.desc}</div>
                <div className="flex flex-wrap gap-1 mt-2.5">
                  {s.tags.map((t) => <TechTag key={t}>{t}</TechTag>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
```

- [ ] **Step 4: Write the results row and leadership callout**

Replace the `{/* ── Results row ── */}` and following comments with:

```tsx
      {/* ── Results Row ── */}
      <div className="grid grid-cols-4 gap-3 mt-4">
        {[
          { label: "Accelerated GTM",     value: "79%",       detail: "Reduction in partner onboarding time — 14 weeks → under 3 weeks", color: "text-tertiary-fixed-dim",   bar: "bg-tertiary-fixed-dim"   },
          { label: "Regulatory Success",  value: "0",         detail: "Material findings across [140+] regulatory controls assessed",     color: "text-on-primary-container", bar: "bg-on-primary-container" },
          { label: "Cost Reduction",      value: "[~$600K]",  detail: "Annual maintenance eliminated · Integration incidents down [70%]", color: "text-amber-600",            bar: "bg-amber-500"            },
          { label: "Account Growth",      value: "[$1.5M]",   detail: "Phase 2 extension — analytics & monetization capabilities",        color: "text-purple-500",           bar: "bg-purple-500"           },
        ].map((r) => (
          <div key={r.label} className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/20 relative overflow-hidden">
            <div className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${r.bar}`} />
            <div className={`text-[9.5px] font-label font-semibold uppercase tracking-[1.4px] mb-2.5 ${r.color}`}>{r.label}</div>
            <div className="font-headline text-[30px] leading-none text-on-surface mb-1.5">{r.value}</div>
            <div className="text-[11.5px] font-body text-secondary leading-[1.5]">{r.detail}</div>
          </div>
        ))}
      </div>

      {/* ── Leadership Callout ── */}
      <div className="mt-4 bg-gradient-to-br from-surface-container-lowest to-tertiary-fixed/5 border border-tertiary-fixed-dim/30 rounded-xl p-5 flex gap-6 items-start">
        <div className="text-tertiary-fixed-dim text-xl shrink-0 mt-0.5">◆</div>
        <div>
          <div className="text-[9.5px] font-label font-bold uppercase tracking-[1.4px] text-tertiary-fixed-dim mb-1.5">
            Leadership Under Pressure — Key Decision
          </div>
          <p className="text-xs font-body text-secondary leading-[1.65]">
            At month 3, the incumbent integration vendor missed a critical delivery. I{" "}
            <strong className="text-on-surface font-medium">pulled the work in-house</strong>, deliberately delaying
            observability dashboards by 4 weeks to protect the partner onboarding timeline — a tradeoff negotiated
            directly with the CTO. I also{" "}
            <strong className="text-on-surface font-medium">descoped the real-time billing module</strong> from initial
            release, arguing that partner connectivity had to come before monetization. Both decisions proved correct.
          </p>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="mt-6 flex justify-between items-center text-[10px] font-label text-on-surface-variant">
        <span>Laurent — Professional Portfolio · Achievement 1 of 3</span>
        <span className="bg-surface-container px-2.5 py-1 rounded font-semibold uppercase tracking-[1px]">Confidential</span>
      </div>
```

- [ ] **Step 5: Verify TypeScript compiles**

Run: `cd /workspace && npm run lint`
Expected: No errors

- [ ] **Step 6: Commit**

```bash
git add src/components/achievements/InsurancePlatformDashboard.tsx
git commit -m "feat: add InsurancePlatformDashboard TSX component with portfolio design system"
```

---

## Task 2: Create `OpenbankingDashboard.tsx`

**Files:**
- Create: `src/components/achievements/OpenbankingDashboard.tsx`

This follows the same structure as Task 1. Copy the three helper components (`CardLabel`, `ChangeBadge`, `TechTag`) verbatim, then write the export.

- [ ] **Step 1: Create the file with helpers and header**

```tsx
// src/components/achievements/OpenbankingDashboard.tsx
import React from "react";

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1.5 text-[9.5px] font-label font-semibold uppercase tracking-[1.6px] text-on-surface-variant mb-3.5">
      <span className="w-1 h-1 rounded-full bg-on-surface-variant shrink-0" />
      {children}
    </div>
  );
}

function ChangeBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1 text-[11px] font-label font-semibold px-2 py-0.5 rounded bg-tertiary-fixed/30 text-tertiary-fixed-dim mt-2.5 w-fit">
      {children}
    </div>
  );
}

function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[9px] font-label font-semibold tracking-[0.5px] px-1.5 py-0.5 rounded bg-tertiary-fixed/20 text-tertiary-fixed-dim">
      {children}
    </span>
  );
}

export function OpenbankingDashboard() {
  return (
    <div className="bg-surface-container-low rounded-xl p-8">

      {/* ── Header ── */}
      <header className="flex justify-between items-start mb-8 pb-6 border-b border-outline-variant/30 relative">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-label font-semibold uppercase tracking-[1.8px] text-tertiary-fixed-dim mb-2">
            <span className="w-1.5 h-1.5 bg-tertiary-fixed-dim rounded-[1px] rotate-45 inline-block" />
            Achievement 2 — Professional Portfolio
          </div>
          <h2 className="font-headline text-3xl text-on-surface leading-tight">
            Partner &amp; Developer <em className="italic text-tertiary-fixed-dim">Hub</em>
          </h2>
        </div>
        <div className="text-right shrink-0 pt-1">
          <div className="text-xs font-body font-medium text-secondary mb-1">
            Digital &amp; AI Platform Lead / Engagement Manager
          </div>
          <div className="text-[11px] font-body text-on-surface-variant leading-relaxed">
            <strong className="text-secondary font-medium">Client:</strong> Major Canadian Retail Bank<br />
            <strong className="text-secondary font-medium">Engagement:</strong> [10 months] · [$3.2M]<br />
            <strong className="text-secondary font-medium">Team:</strong> [16-person] cross-functional squad<br />
            <strong className="text-secondary font-medium">Sponsors:</strong> CPO · Chief Digital Officer · Legal/Compliance
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-px w-56 bg-tertiary-fixed-dim" />
      </header>
```

- [ ] **Step 2: Write the dashboard grid**

```tsx
      {/* ── Dashboard grid ── */}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: '280px 1fr 1fr' }}
      >
        {/* Situation Card */}
        <div className="bg-surface-container-lowest rounded-xl p-5 border border-tertiary-fixed-dim/30 row-span-3">
          <CardLabel>Situation &amp; Mandate</CardLabel>
          <p className="text-xs font-body text-secondary leading-[1.75] mb-5">
            The bank had <strong className="text-on-surface font-medium">[60+ internal APIs]</strong> in production but{" "}
            <strong className="text-on-surface font-medium">zero external-facing developer surface</strong>. No portal,
            no sandbox, no partner onboarding, no commercial model — leaving{" "}
            <strong className="text-on-surface font-medium">[$8–12M in annual revenue]</strong> on the table.
          </p>
          <div className="bg-error/5 border border-error/15 rounded-lg px-4 py-3.5 mb-4">
            <div className="text-[9.5px] font-label font-semibold uppercase tracking-[1.4px] text-error mb-2">
              ⚠ Burning Platform
            </div>
            <p className="text-xs font-body text-secondary leading-[1.65]">
              Open banking regulatory consultation expected within [12 months]. Competitors already courting the same
              fintech ecosystem. Immovable [7-month deadline] to MVP before the consultation window opened.
            </p>
          </div>
          <ul className="flex flex-col gap-2.5 mt-4">
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 text-[10px] mt-0.5 font-semibold">$</span>
              <span><strong className="text-amber-600 font-medium">[$8–12M/yr]</strong> in partner-driven revenue left unrealized</span>
            </li>
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-on-primary-container/10 text-on-primary-container flex items-center justify-center shrink-0 text-[10px] mt-0.5">⬡</span>
              <span><strong className="text-on-primary-container font-medium">[60+ APIs]</strong> locked internally with no external consumption channel</span>
            </li>
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-error/10 text-error flex items-center justify-center shrink-0 text-[10px] mt-0.5 font-semibold">!</span>
              <span><strong className="text-error font-medium">Regulatory + competitive</strong> pressure — first-mover advantage at stake</span>
            </li>
          </ul>
        </div>

        {/* KPI 1 — Time-to-First-API-Call */}
        <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/20 flex flex-col justify-between min-h-[120px]">
          <div>
            <CardLabel>Time-to-First-API-Call</CardLabel>
            <div className="font-headline text-[42px] leading-none text-on-surface mb-1">
              3wk→2 <span className="font-body text-base font-normal text-on-surface-variant ml-0.5">days</span>
            </div>
            <div className="text-xs font-body text-secondary leading-[1.5]">Partner friction slashed by 90%</div>
          </div>
          <ChangeBadge>▼ 90% reduction</ChangeBadge>
        </div>

        {/* KPI 2 — Day-One Launch */}
        <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/20 flex flex-col justify-between min-h-[120px]">
          <div>
            <CardLabel>Day-One Launch</CardLabel>
            <div className="font-headline text-[42px] leading-none text-on-surface mb-1">
              [40+] <span className="font-body text-base font-normal text-on-surface-variant ml-0.5">partners</span>
            </div>
            <div className="text-xs font-body text-secondary leading-[1.5]">[Largest partner cohort launch in bank history]</div>
          </div>
          <ChangeBadge>✓ Record launch</ChangeBadge>
        </div>

        {/* Timeline Visual — col 2–3 */}
        <div className="col-start-2 col-span-2 bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/20 flex flex-col">
          <CardLabel>Developer Friction — Time-to-First-API-Call</CardLabel>
          <div className="flex flex-col gap-3.5 mt-2 flex-1 justify-center">
            <div className="flex items-center gap-3.5">
              <div className="text-[11px] font-body text-secondary w-[60px] text-right shrink-0">Before</div>
              <div className="flex-1 h-8 bg-surface-container rounded-md overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-error to-error/80 flex items-center pl-3 text-xs font-label font-semibold text-white rounded-md">
                  3 weeks (21 days)
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="text-[11px] font-body text-secondary w-[60px] text-right shrink-0">After</div>
              <div className="flex-1 h-8 bg-surface-container rounded-md overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-tertiary-fixed-dim to-tertiary-fixed-dim/80 flex items-center pl-3 text-xs font-label font-semibold text-primary rounded-md"
                  style={{ width: '9.5%', minWidth: '90px' }}
                >
                  2 days
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-3.5 text-[13px] font-body text-secondary">
            Partners go from sign-up to first live API call <strong className="text-tertiary-fixed-dim font-semibold">10.5× faster</strong>
          </div>
        </div>

        {/* Value Streams — col 2–3 */}
        <div className="col-start-2 col-span-2 bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/20">
          <CardLabel>Delivery — Four Value Streams</CardLabel>
          <div className="grid grid-cols-4 gap-2.5">
            {[
              { num: "01", title: "Developer Portal & API Marketplace", desc: "Self-service portal with versioned catalogs, OpenAPI docs & sandbox environments", tags: ["Apigee", "Confluent", "React"] },
              { num: "02", title: "Tiered Partner Onboarding", desc: "3-tier model (Sandbox → Registered → Certified ISV) with automated KYB/KYC", tags: ["KYB/KYC", "IP Guards"] },
              { num: "03", title: "Roadmap Governance & Feedback", desc: "C-suite feedback loop merging telemetry, partner NPS & regulatory tracking", tags: ["NPS", "Telemetry"] },
              { num: "04", title: "Open Banking Compliance", desc: "Native alignment with FDX and draft Canadian open banking standards", tags: ["FDX", "Open Banking"] },
            ].map((s) => (
              <div key={s.num} className="bg-surface-container border border-outline-variant/20 rounded-lg p-3.5 hover:border-tertiary-fixed-dim/30 transition-colors">
                <div className="text-[9px] font-label font-bold tracking-[1px] text-on-surface-variant mb-2">{s.num}</div>
                <div className="text-[12.5px] font-label font-semibold text-on-surface leading-snug mb-1.5">{s.title}</div>
                <div className="text-[11px] font-body text-on-surface-variant leading-[1.55]">{s.desc}</div>
                <div className="flex flex-wrap gap-1 mt-2.5">
                  {s.tags.map((t) => <TechTag key={t}>{t}</TechTag>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
```

- [ ] **Step 3: Write the results row (5 cols), leadership callout, and footer**

```tsx
      {/* ── Results Row ── */}
      <div className="grid grid-cols-5 gap-3 mt-4">
        {[
          { label: "Ecosystem Growth",  value: "[40+]",   detail: "Fintech partners onboarded day one — bank's largest cohort launch ever",          color: "text-tertiary-fixed-dim",   bar: "bg-tertiary-fixed-dim"   },
          { label: "Friction Slashed",  value: "90%",     detail: "Reduction in time-to-first-API-call — 3 weeks → 2 days",                          color: "text-on-primary-container", bar: "bg-on-primary-container" },
          { label: "New Revenue",       value: "[$1.2M]", detail: "Annualized partner-driven revenue by month 9 — bank's first API revenue tier",     color: "text-amber-600",            bar: "bg-amber-500"            },
          { label: "Regulatory Edge",   value: "1st",     detail: "[Only Tier-1 bank with operational ecosystem when consultation paper dropped]",    color: "text-error",                bar: "bg-error"                },
          { label: "Account Growth",    value: "[$1.8M]", detail: "Phase 2 extension — advanced analytics APIs & premium partner tiers",             color: "text-purple-500",           bar: "bg-purple-500"           },
        ].map((r) => (
          <div key={r.label} className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/20 relative overflow-hidden">
            <div className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${r.bar}`} />
            <div className={`text-[9.5px] font-label font-semibold uppercase tracking-[1.4px] mb-2.5 ${r.color}`}>{r.label}</div>
            <div className="font-headline text-[30px] leading-none text-on-surface mb-1.5">{r.value}</div>
            <div className="text-[11.5px] font-body text-secondary leading-[1.5]">{r.detail}</div>
          </div>
        ))}
      </div>

      {/* ── Leadership Callout ── */}
      <div className="mt-4 bg-gradient-to-br from-surface-container-lowest to-tertiary-fixed/5 border border-tertiary-fixed-dim/30 rounded-xl p-5 flex gap-6 items-start">
        <div className="text-tertiary-fixed-dim text-xl shrink-0 mt-0.5">◆</div>
        <div>
          <div className="text-[9.5px] font-label font-bold uppercase tracking-[1.4px] text-tertiary-fixed-dim mb-1.5">
            Leadership Under Pressure — Key Decision
          </div>
          <p className="text-xs font-body text-secondary leading-[1.65]">
            At month 4, Legal flagged the automated KYB/KYC workflow as insufficient for Certified ISV partners —
            demanding full manual review that would have created a{" "}
            <strong className="text-on-surface font-medium">6-week bottleneck per partner</strong>. I brokered a
            compromise: <strong className="text-on-surface font-medium">automated approval for Sandbox and Registered
            tiers</strong> with a streamlined human-in-the-loop review only for Certified ISVs. This preserved
            frictionless onboarding for 90% of partners while satisfying Legal's risk appetite. I also{" "}
            <strong className="text-on-surface font-medium">descoped the real-time revenue sharing dashboard</strong>{" "}
            from initial release, keeping the team focused on partner activation — the revenue model launched 8 weeks
            later in a fast-follow.
          </p>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="mt-6 flex justify-between items-center text-[10px] font-label text-on-surface-variant">
        <span>Laurent — Professional Portfolio · Achievement 2 of 3</span>
        <span className="bg-surface-container px-2.5 py-1 rounded font-semibold uppercase tracking-[1px]">Confidential</span>
      </div>

    </div>
  );
}
```

- [ ] **Step 4: Verify TypeScript compiles**

Run: `cd /workspace && npm run lint`
Expected: No errors

- [ ] **Step 5: Commit**

```bash
git add src/components/achievements/OpenbankingDashboard.tsx
git commit -m "feat: add OpenbankingDashboard TSX component with portfolio design system"
```

---

## Task 3: Create `InternalDevPlatformDashboard.tsx`

**Files:**
- Create: `src/components/achievements/InternalDevPlatformDashboard.tsx`

Achievement 3 differs from 1 & 2 in the middle panel: instead of a bar-chart timeline it uses a "toil comparison" (before/after side-by-side bars) and also has a more complex leadership callout (3 moves + NPS arc). The results row has 6 result cards.

- [ ] **Step 1: Create the file with helpers, header, and dashboard grid**

```tsx
// src/components/achievements/InternalDevPlatformDashboard.tsx
import React from "react";

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1.5 text-[9.5px] font-label font-semibold uppercase tracking-[1.6px] text-on-surface-variant mb-3.5">
      <span className="w-1 h-1 rounded-full bg-on-surface-variant shrink-0" />
      {children}
    </div>
  );
}

function ChangeBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-1 text-[11px] font-label font-semibold px-2 py-0.5 rounded bg-tertiary-fixed/30 text-tertiary-fixed-dim mt-2.5 w-fit">
      {children}
    </div>
  );
}

function TechTag({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "blue" | "purple" }) {
  const variantClass =
    variant === "blue"   ? "bg-on-primary-container/10 text-on-primary-container" :
    variant === "purple" ? "bg-purple-100 text-purple-600" :
                           "bg-tertiary-fixed/20 text-tertiary-fixed-dim";
  return (
    <span className={`text-[9px] font-label font-semibold tracking-[0.5px] px-1.5 py-0.5 rounded ${variantClass}`}>
      {children}
    </span>
  );
}

export function InternalDevPlatformDashboard() {
  return (
    <div className="bg-surface-container-low rounded-xl p-8">

      {/* ── Header ── */}
      <header className="flex justify-between items-start mb-8 pb-6 border-b border-outline-variant/30 relative">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-label font-semibold uppercase tracking-[1.8px] text-tertiary-fixed-dim mb-2">
            <span className="w-1.5 h-1.5 bg-tertiary-fixed-dim rounded-[1px] rotate-45 inline-block" />
            Achievement 3 — Professional Portfolio
          </div>
          <h2 className="font-headline text-3xl text-on-surface leading-tight">
            Internal Developer <em className="italic text-tertiary-fixed-dim">Platform</em>
          </h2>
        </div>
        <div className="text-right shrink-0 pt-1">
          <div className="text-xs font-body font-medium text-secondary mb-1">
            Senior Manager / Digital &amp; AI Platform Lead
          </div>
          <div className="text-[11px] font-body text-on-surface-variant leading-relaxed">
            <strong className="text-secondary font-medium">Client:</strong> Major Canadian Telecom Operator<br />
            <strong className="text-secondary font-medium">Engagement:</strong> 18 months · [$5.1M]<br />
            <strong className="text-secondary font-medium">Team:</strong> [20-person] cross-functional squad<br />
            <strong className="text-secondary font-medium">Sponsors:</strong> CTO · VP Engineering
          </div>
          <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-label font-semibold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">
            ⚠ 2 prior platform attempts had failed
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-px w-56 bg-tertiary-fixed-dim" />
      </header>

      {/* ── Dashboard grid ── */}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: '280px 1fr 1fr' }}
      >
        {/* Situation Card */}
        <div className="bg-surface-container-lowest rounded-xl p-5 border border-tertiary-fixed-dim/30 row-span-3">
          <CardLabel>Situation &amp; Mandate</CardLabel>
          <p className="text-xs font-body text-secondary leading-[1.75] mb-5">
            <strong className="text-on-surface font-medium">2,000+ engineers</strong> across{" "}
            <strong className="text-on-surface font-medium">[18 distinct CI/CD toolchains]</strong>. Over{" "}
            <strong className="text-on-surface font-medium">40% of sprint capacity</strong> consumed by platform toil
            — costing an estimated <strong className="text-on-surface font-medium">[$28M/year]</strong> in lost productivity.
          </p>
          <div className="bg-error/5 border border-error/15 rounded-lg px-4 py-3.5 mb-3">
            <div className="text-[9.5px] font-label font-semibold uppercase tracking-[1.4px] text-error mb-2">⚠ Burning Platform</div>
            <p className="text-xs font-body text-secondary leading-[1.65]">
              Security audit surfaced [3 material findings] from inconsistent infrastructure. CTO received board
              directive: "fix the developer experience or accept the risk in writing."
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3.5 mb-4">
            <div className="text-[9.5px] font-label font-semibold uppercase tracking-[1.4px] text-amber-700 mb-2">⟳ Two Prior Failures</div>
            <p className="text-xs font-body text-secondary leading-[1.65]">
              Attempt 1: abandoned after [8 months] due to low adoption. Attempt 2: shelved when sponsoring VP left.
              Engineering leadership deeply skeptical.
            </p>
          </div>
          <ul className="flex flex-col gap-2.5 mt-4">
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 text-[10px] mt-0.5 font-semibold">$</span>
              <span><strong className="text-amber-600 font-medium">[$28M/yr]</strong> in engineering productivity lost to toil</span>
            </li>
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 text-[10px] mt-0.5">⊞</span>
              <span><strong className="text-purple-600 font-medium">[18 toolchains]</strong> — [7 years] of fragmentation</span>
            </li>
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-error/10 text-error flex items-center justify-center shrink-0 text-[10px] mt-0.5 font-semibold">!</span>
              <span><strong className="text-error font-medium">Board directive</strong> — existential mandate, not optional</span>
            </li>
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-on-primary-container/10 text-on-primary-container flex items-center justify-center shrink-0 text-[10px] mt-0.5">◇</span>
              <span><strong className="text-on-primary-container font-medium">[30% adoption]</strong> target to prove sustainability</span>
            </li>
          </ul>
        </div>

        {/* KPI 1 — Env Provisioning */}
        <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/20 flex flex-col justify-between min-h-[120px]">
          <div>
            <CardLabel>Env Provisioning</CardLabel>
            <div className="font-headline text-[42px] leading-none text-on-surface mb-1">
              18d→4 <span className="font-body text-base font-normal text-on-surface-variant ml-0.5">hrs</span>
            </div>
            <div className="text-xs font-body text-secondary leading-[1.5]">[14,000 engineering hours] saved in year one</div>
          </div>
          <ChangeBadge>▼ 99% reduction</ChangeBadge>
        </div>

        {/* KPI 2 — Voluntary Adoption */}
        <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/20 flex flex-col justify-between min-h-[120px]">
          <div>
            <CardLabel>Voluntary Adoption</CardLabel>
            <div className="font-headline text-[42px] leading-none text-on-surface mb-1">
              [600+] <span className="font-body text-base font-normal text-on-surface-variant ml-0.5">devs</span>
            </div>
            <div className="text-xs font-body text-secondary leading-[1.5]">[3× the 30% target] — highest in operator history</div>
          </div>
          <ChangeBadge>✓ 18 months</ChangeBadge>
        </div>

        {/* Toil Comparison Visual — col 2–3 */}
        <div className="col-start-2 col-span-2 bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/20">
          <CardLabel>Platform Toil — Sprint Capacity Recovery</CardLabel>
          <div className="flex items-center gap-4 mt-3">
            {/* Before state */}
            <div className="flex-1">
              <div className="text-[10px] font-label font-semibold uppercase tracking-[1px] text-on-surface-variant mb-2">Before</div>
              <div className="h-10 bg-surface-container rounded-md overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-error to-error/70 flex items-center pl-3 text-xs font-label font-semibold text-white rounded-md">
                  ~40%
                </div>
              </div>
              <div className="text-[11px] font-body text-secondary mt-1.5">
                <strong className="text-on-surface font-medium">40%</strong> of sprint capacity lost to toil
              </div>
            </div>
            {/* Arrow */}
            <div className="text-center shrink-0">
              <div className="text-2xl text-tertiary-fixed-dim">→</div>
              <div className="text-[10px] font-label font-semibold text-tertiary-fixed-dim mt-1">[$19M/yr]<br />recovered</div>
            </div>
            {/* After state */}
            <div className="flex-1">
              <div className="text-[10px] font-label font-semibold uppercase tracking-[1px] text-on-surface-variant mb-2">After</div>
              <div className="h-10 bg-surface-container rounded-md overflow-hidden">
                <div className="h-full bg-gradient-to-r from-tertiary-fixed-dim to-tertiary-fixed-dim/70 flex items-center pl-3 text-xs font-label font-semibold text-primary rounded-md" style={{ width: '30%', minWidth: '60px' }}>
                  12%
                </div>
              </div>
              <div className="text-[11px] font-body text-secondary mt-1.5">
                <strong className="text-on-surface font-medium">12%</strong> — thousands of hours returned to product
              </div>
            </div>
          </div>
          <div className="mt-3 text-center text-[12px] font-body text-secondary">
            Deployment frequency <strong className="text-tertiary-fixed-dim font-semibold">3× increase</strong> across all adopting squads · [5G feature shipped 2 months early]
          </div>
        </div>

        {/* Value Streams — col 2–3 */}
        <div className="col-start-2 col-span-2 bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/20">
          <CardLabel>Delivery — Four Value Streams</CardLabel>
          <div className="grid grid-cols-4 gap-2.5">
            {[
              { num: "01", title: "Self-Service Developer Portal", desc: "Unified portal integrating CI/CD, env provisioning & secrets management", tags: [{ label: "Backstage" }, { label: "GitLab CI" }, { label: "Tekton" }] },
              { num: "02", title: "Golden Path Templates", desc: "Security-hardened scaffolding for microservices & data pipelines — 3 weeks → automated", tags: [{ label: "Terraform", v: "blue" as const }, { label: "Crossplane", v: "blue" as const }, { label: "Vault", v: "blue" as const }] },
              { num: "03", title: "Observability-as-a-Service", desc: "Centralized telemetry — squads instrument once, platform manages the rest", tags: [{ label: "Prometheus", v: "purple" as const }, { label: "Grafana", v: "purple" as const }, { label: "OTel", v: "purple" as const }] },
              { num: "04", title: "Developer Experience Metrics", desc: "DORA & SPACE frameworks for real-time squad health & platform ROI", tags: [{ label: "DORA" }, { label: "SPACE" }] },
            ].map((s) => (
              <div key={s.num} className="bg-surface-container border border-outline-variant/20 rounded-lg p-3.5 hover:border-tertiary-fixed-dim/30 transition-colors">
                <div className="text-[9px] font-label font-bold tracking-[1px] text-on-surface-variant mb-2">{s.num}</div>
                <div className="text-[12.5px] font-label font-semibold text-on-surface leading-snug mb-1.5">{s.title}</div>
                <div className="text-[11px] font-body text-on-surface-variant leading-[1.55]">{s.desc}</div>
                <div className="flex flex-wrap gap-1 mt-2.5">
                  {s.tags.map((t) => <TechTag key={t.label} variant={t.v}>{t.label}</TechTag>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
```

- [ ] **Step 2: Write the results row (6 cols), leadership callout (with 3 moves), and footer**

```tsx
      {/* ── Results Row — 6 cards ── */}
      <div className="grid grid-cols-6 gap-3 mt-4">
        {[
          { label: "Time Savings",    value: "99%",     detail: "Env provisioning: 18 days → 4 hours · [14K hrs saved yr 1]",             color: "text-tertiary-fixed-dim",   bar: "bg-tertiary-fixed-dim"   },
          { label: "Velocity",        value: "3×",      detail: "Deploy frequency increase · [5G feature shipped 2 months early]",         color: "text-on-primary-container", bar: "bg-on-primary-container" },
          { label: "Toil Recovery",   value: "[$19M]",  detail: "Annual productivity recovered — 40% → 12% sprint toil",                  color: "text-amber-600",            bar: "bg-amber-500"            },
          { label: "Adoption",        value: "[600+]",  detail: "[3× target] · highest adoption of any internal tool ever",               color: "text-purple-500",           bar: "bg-purple-500"           },
          { label: "Security",        value: "0",       detail: "Material findings in categories that triggered the board directive",       color: "text-error",                bar: "bg-error"                },
          { label: "Account Growth",  value: "[$2.2M]", detail: "Phase 2 — DB provisioning & ML pipelines · team internalized",           color: "text-on-surface-variant",   bar: "bg-outline"              },
        ].map((r) => (
          <div key={r.label} className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/20 relative overflow-hidden">
            <div className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${r.bar}`} />
            <div className={`text-[9.5px] font-label font-semibold uppercase tracking-[1.4px] mb-2.5 ${r.color}`}>{r.label}</div>
            <div className="font-headline text-[28px] leading-none text-on-surface mb-1.5">{r.value}</div>
            <div className="text-[11px] font-body text-secondary leading-[1.5]">{r.detail}</div>
          </div>
        ))}
      </div>

      {/* ── Leadership Callout — Adoption Battle ── */}
      <div className="mt-4 bg-gradient-to-br from-surface-container-lowest to-tertiary-fixed/5 border border-tertiary-fixed-dim/30 rounded-xl p-5 flex gap-6 items-start">
        <div className="text-tertiary-fixed-dim text-xl shrink-0 mt-0.5">◆</div>
        <div className="flex-1">
          <div className="text-[9.5px] font-label font-bold uppercase tracking-[1.4px] text-tertiary-fixed-dim mb-1.5">
            Leadership Under Pressure — Winning the Adoption Battle
          </div>
          <p className="text-xs font-body text-secondary leading-[1.65] mb-4">
            The defining challenge was <strong className="text-on-surface font-medium">adoption, not architecture</strong>.
            At month 3, internal NPS across the first 50 squads came back at{" "}
            <strong className="text-on-surface font-medium">+12</strong> — developers liked the portal but didn't trust
            it, trained by two prior failures to expect abandonment. I made three moves:
          </p>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { num: "MOVE 01", text: <><strong className="text-on-surface font-medium">Embedded engineers</strong> — 1 platform engineer in each of the 5 highest-volume squads for 4-week pair-programming rotations. Built trust through proximity.</> },
              { num: "MOVE 02", text: <><strong className="text-on-surface font-medium">Public platform SLA</strong> — published uptime targets and incident retros visible to all 2,000+ engineers. No internal team had ever done this.</> },
              { num: "MOVE 03", text: <><strong className="text-on-surface font-medium">"New mandatory, legacy voluntary"</strong> — convinced CTO to mandate Golden Paths for new services only. Guaranteed adoption floor without forced-migration backlash.</> },
            ].map((m) => (
              <div key={m.num} className="bg-surface-container rounded-lg p-3 border border-outline-variant/20">
                <div className="text-[9px] font-label font-bold uppercase tracking-[1px] text-tertiary-fixed-dim mb-2">{m.num}</div>
                <div className="text-[11px] font-body text-secondary leading-[1.6]">{m.text}</div>
              </div>
            ))}
          </div>
          <div className="text-[12px] font-body text-secondary">
            NPS: <strong className="text-error font-semibold">+12</strong> at month 3 →{" "}
            <strong className="text-tertiary-fixed-dim font-semibold">+48</strong> by month 9 — adoption accelerating organically
          </div>
          <div className="mt-3 pt-3 border-t border-outline-variant/20 text-xs font-body text-secondary leading-[1.65]">
            <strong className="text-on-surface font-medium">Deliberate descope:</strong> I deferred database provisioning
            from initial release — <strong className="text-on-surface font-medium">4 teams claimed ownership</strong> of
            various DB clusters, making it the most politically sensitive module. We delivered it in Phase 2 after the
            platform had earned enough credibility to navigate the ownership politics from a position of strength.
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="mt-6 flex justify-between items-center text-[10px] font-label text-on-surface-variant">
        <span>Laurent — Professional Portfolio · Achievement 3 of 3</span>
        <span className="bg-surface-container px-2.5 py-1 rounded font-semibold uppercase tracking-[1px]">Confidential</span>
      </div>

    </div>
  );
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `cd /workspace && npm run lint`
Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add src/components/achievements/InternalDevPlatformDashboard.tsx
git commit -m "feat: add InternalDevPlatformDashboard TSX component with portfolio design system"
```

---

## Task 4: Update `About.tsx` — case studies data, grid, and reveal animation

**Files:**
- Modify: `src/pages/About.tsx`

This task has 4 sub-steps: update imports, update data, add state, and refactor the section JSX.

- [ ] **Step 1: Add dashboard imports at the top of `About.tsx`**

After the existing `import { motion } from "motion/react";` line (line 2), add:

```tsx
import { AnimatePresence, motion } from "motion/react";
import { InsurancePlatformDashboard } from "../components/achievements/InsurancePlatformDashboard";
import { OpenbankingDashboard } from "../components/achievements/OpenbankingDashboard";
import { InternalDevPlatformDashboard } from "../components/achievements/InternalDevPlatformDashboard";
```

Note: `motion` is already imported — **replace** the existing `import { motion } from "motion/react"` with the line above (which adds `AnimatePresence`).

- [ ] **Step 2: Replace the `caseStudies` array (lines 124–173)**

Delete the existing 6-entry `caseStudies` array and replace with:

```tsx
const caseStudies = [
  {
    id: 1,
    category: "Insurance",
    year: "2024",
    title: "Insurance-as-a-Service Platform",
    headline: "14→3 wks",
    headlineSub: "partner onboarding",
    description:
      "Transformed a Tier-1 Canadian carrier's stalled hyperscaler investment into a live API ecosystem — cutting partner onboarding from 14 weeks to under 3, clearing 140+ regulatory controls with zero findings.",
  },
  {
    id: 2,
    category: "Fintech",
    year: "2023",
    title: "Open Banking Partner & Developer Hub",
    headline: "3wk→2 days",
    headlineSub: "time-to-first-API-call",
    description:
      "Built the partner and developer portal for a major Canadian retail bank — compressing time-to-first-API-call by 90% and launching 40+ fintech partners on day one, the bank's largest cohort ever.",
  },
  {
    id: 3,
    category: "Telecom",
    year: "2022",
    title: "Internal Developer Platform",
    headline: "18d→4 hrs",
    headlineSub: "environment provisioning",
    description:
      "Designed and delivered a self-service IDP for a major Canadian telco — reducing environment provisioning from 18 days to 4 hours, recovering [$19M/yr] in lost productivity, and achieving [600+] voluntary adopters.",
  },
];
```

- [ ] **Step 3: Add `expandedCard` state inside the `About()` component**

Find the existing state declaration on line 244:
```tsx
const [activeTab, setActiveTab] = useState<'corporate' | 'entrepreneurial'>('corporate');
```

Add the new state on the line immediately after:
```tsx
const [expandedCard, setExpandedCard] = useState<number | null>(null);
```

- [ ] **Step 4: Refactor the FR-AP-004 section (lines 657–713)**

Replace the entire `{/* CASE STUDIES & ACHIEVEMENTS (FR-AP-004) */}` section with the following. The grid changes from `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (6 items) to `grid-cols-1 lg:grid-cols-3` (3 items). The card no longer has an image — instead it shows the key metric as a visual focal point. Clicking the CTA toggles expansion.

```tsx
      {/* ═══════════════════════════════════════════
          CASE STUDIES & ACHIEVEMENTS (FR-AP-004)
          3-card grid: 3×1 desktop, 1×3 tablet, 1×3 mobile
          Card reveal: AnimatePresence slide-down below grid
      ═══════════════════════════════════════════ */}
      <section className="py-32 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">
                Case Studies &amp; Achievements
              </h2>
              <p className="font-body text-secondary max-w-xl">
                Deep dives into pivotal professional projects and strategic victories.
              </p>
            </div>
            <button className="font-label text-xs font-bold uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-on-primary-container transition-colors">
              View Full Portfolio
            </button>
          </div>

          {/* 3-card grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`bg-surface-container-lowest p-6 rounded-xl transition-all duration-300 shadow-[0px_12px_32px_rgba(19,27,46,0.04)] border ${
                  expandedCard === study.id
                    ? "border-tertiary-fixed-dim/60 shadow-[0px_12px_32px_rgba(19,27,46,0.08)]"
                    : "border-transparent hover:scale-[101%]"
                }`}
              >
                {/* Key metric focal point — replaces the image */}
                <div className="bg-surface-container rounded-lg px-6 py-8 mb-6 text-center">
                  <div className="font-headline text-4xl text-primary leading-none mb-1">{study.headline}</div>
                  <div className="font-label text-[10px] text-tertiary-fixed-dim uppercase tracking-widest font-bold mt-2">
                    {study.headlineSub}
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
                  onClick={() => setExpandedCard(expandedCard === study.id ? null : study.id)}
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
              </motion.div>
            ))}
          </div>

          {/* Card Reveal Animation — full-width panel below the grid */}
          <AnimatePresence>
            {expandedCard !== null && (
              <motion.div
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
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>
```

- [ ] **Step 5: Verify TypeScript compiles**

Run: `cd /workspace && npm run lint`
Expected: No errors

- [ ] **Step 6: Smoke-test in browser**

Run: `npm run dev`

Check in browser at `http://localhost:3000`:
1. Case Studies section shows exactly 3 cards (not 6)
2. Each card shows the key metric (e.g., "14→3 wks") in the focal area
3. Clicking "Read Insight" on card 1 slides open the InsurancePlatformDashboard below the grid
4. Clicking "Read Insight" on card 2 collapses card 1's panel and slides open card 2's
5. Clicking "Close Insight" (or the same card again) collapses the panel
6. On mobile (`<lg`) the cards stack vertically and the reveal panel still appears below the grid
7. The dashboard grid is horizontally scrollable on narrow viewports (`overflow-x-auto`)
8. All design tokens (navy primary, sky-blue tertiary-fixed-dim, Newsreader headlines, Manrope body, Inter labels) are applied correctly

- [ ] **Step 7: Commit**

```bash
git add src/pages/About.tsx
git commit -m "feat: replace placeholder case studies grid with real achievement cards and AnimatePresence reveal panel (FR-AP-004)"
```

---

## Self-Review Checklist

### Spec coverage

| Requirement | Task that covers it |
|---|---|
| Redesign 3 HTML dashboards to match design system | Tasks 1, 2, 3 |
| Keep layout components, change design | Tasks 1–3: same sections (header, situation, KPIs, timeline, value streams, results, callout) |
| Replace 6-card grid with 3-card grid (3×1 desktop, 1×3 tablet/mobile) | Task 4 Step 4: `grid-cols-1 lg:grid-cols-3` |
| "Read Insight" CTA on each card | Task 4 Step 4: button with `onClick` toggle |
| Card Reveal Animation sliding down from below card | Task 4 Step 4: `AnimatePresence` + `motion.div` height animation |
| Reveal spreads full width | Task 4 Step 4: reveal div is a sibling of the grid, not inside it |
| Content of dashboard displayed in reveal | Task 4 Step 4: conditional render of dashboard components |

### Placeholder scan

No "TBD", "TODO", or "implement later" strings found in this plan. All code blocks are complete and executable.

### Type consistency

- `expandedCard: number | null` — used consistently in `useState`, comparison operators, and `AnimatePresence key`
- Dashboard component names: `InsurancePlatformDashboard`, `OpenbankingDashboard`, `InternalDevPlatformDashboard` — consistent across import statements and JSX usage
- `caseStudies[].id` is `number` (1, 2, 3) — matches the `expandedCard === study.id` comparisons

---

**Plan complete and saved to `docs/superpowers/plans/2026-03-29-achievements-dashboard-integration.md`.**

Two execution options:

**1. Subagent-Driven (recommended)** — Fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** — Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**
