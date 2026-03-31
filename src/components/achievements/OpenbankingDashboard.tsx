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
            Open Banking <em className="italic text-tertiary-fixed-dim">Platform</em>
          </h2>
        </div>
        <div className="text-right shrink-0 pt-1">
          <div className="text-[11px] font-body text-on-surface-variant leading-relaxed">
            <strong className="text-secondary font-medium">Client:</strong> Major EU Bank<br />
            <strong className="text-secondary font-medium">Engagement:</strong> 12 months · $4.2M<br />
            <strong className="text-secondary font-medium">Team:</strong> 16-person cross-functional squad<br />
            <strong className="text-secondary font-medium">Sponsors:</strong> CPO · CDO · Legal/Compliance
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-px w-56 bg-tertiary-fixed-dim" />
      </header>

      {/* ── Dashboard grid ── */}
      <div className="grid grid-cols-[280px_1fr_1fr] gap-4">

        {/* Situation Card — col 1, spans 3 rows */}
        <div className="bg-surface-container-lowest rounded-xl p-5 border border-tertiary-fixed-dim/30 row-span-3">
          <CardLabel>Situation &amp; Mandate</CardLabel>
          <p className="text-xs font-body text-secondary leading-[1.75] mb-5">
            The bank had <strong className="text-on-surface font-medium">60+ internal APIs</strong> in production but{" "}
            <strong className="text-on-surface font-medium">zero external-facing developer surface</strong>. No portal,
            no sandbox, no partner onboarding, no commercial model leaving{" "}
            <strong className="text-on-surface font-medium">a substancial annual revenue</strong> on the table.
          </p>
          <div className="bg-error/5 border border-error/15 rounded-lg px-4 py-3.5 mb-4">
            <div className="text-[9.5px] font-label font-semibold uppercase tracking-[1.4px] text-error mb-2">
              ⚠ Burning Platform
            </div>
            <p className="text-xs font-body text-secondary leading-[1.65]">
              Open banking regulatory consultation expected within 18 months. Competitors already courting the same
              fintech ecosystem. Immovable 12-month deadline to MVP before the consultation window opened.
            </p>
          </div>
          <ul className="flex flex-col gap-2.5 mt-4">
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 text-[10px] mt-0.5 font-semibold">$</span>
              <span><strong className="text-amber-600 font-medium">CPO estimates $8–12M/yr</strong> in partner-driven revenue left unrealized</span>
            </li>
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-on-primary-container/10 text-on-primary-container flex items-center justify-center shrink-0 text-[10px] mt-0.5">⬡</span>
              <span><strong className="text-on-primary-container font-medium">60+ APIs</strong> locked internally with no external consumption channel</span>
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
              3<span className="font-body text-base font-normal text-on-surface-variant ml-0.5">Weeks</span> →2<span className="font-body text-base font-normal text-on-surface-variant ml-0.5">Days</span>
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
              [30+] <span className="font-body text-base font-normal text-on-surface-variant ml-0.5">partners</span>
            </div>
            <div className="text-xs font-body text-secondary leading-[1.5]">Largest partner cohort launch in bank history</div>
          </div>
          <ChangeBadge>✓ Record launch</ChangeBadge>
        </div>

        {/* Timeline Visual — col 2–3 */}
        <div className="col-start-2 col-span-2 bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/20 flex flex-col">
          <CardLabel>Partners & Developers Friction — Time-to-First-API-Call</CardLabel>
          <div className="flex flex-col gap-3.5 mt-2 flex-1 justify-center">
            <div className="flex items-center gap-3.5">
              <div className="text-[11px] font-body text-secondary w-[60px] text-right shrink-0">Before</div>
              <div className="flex-1 h-8 bg-surface-container rounded-md overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-error to-error/80 flex items-center pl-3 text-xs font-label font-semibold text-white rounded-md">
                  3 Weeks
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="text-[11px] font-body text-secondary w-[60px] text-right shrink-0">After</div>
              <div className="flex-1 h-8 bg-surface-container rounded-md overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-tertiary-fixed-dim to-tertiary-fixed-dim/80 flex items-center pl-3 text-xs font-label font-semibold text-primary rounded-md"
                  style={{ width: '9.5%', minWidth: '90px' }} /* 2/21 days — proportional bar width */
                >
                  2 Days
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
              { num: "04", title: "Open Banking Compliance", desc: "Native alignment with PSD2 : OAuth 2.0 & OID and FAPI 1.0/RTS Compliance", tags: ["PSD2", "Open Banking"] },
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

      {/* ── Results Row — 5 cards ── */}
      <div className="grid grid-cols-5 gap-3 mt-4">
        {[
          { label: "Ecosystem Growth", value: "[30+]", detail: "Fintech partners onboarded day one — bank's largest cohort launch ever", color: "text-tertiary-fixed-dim", bar: "bg-tertiary-fixed-dim" },
          { label: "Friction Slashed", value: "90%", detail: "Reduction in time-to-first-API-call — 3 weeks → 2 days", color: "text-on-primary-container", bar: "bg-on-primary-container" },
          { label: "New Revenue", value: "$1.2M", detail: "Annualized partner-driven revenue by month 9 — bank's first API revenue tier", color: "text-amber-600", bar: "bg-amber-500" },
          { label: "Regulatory Edge", value: "Top 3", detail: "Top 3 amongst banks with operational ecosystem when consultation paper dropped", color: "text-error", bar: "bg-error" },
          { label: "Account Growth", value: "$1.8M", detail: "Phase 2 extension — advanced analytics APIs & premium partner tiers", color: "text-purple-500", bar: "bg-purple-500" },
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
        <span>Professional Portfolio · Achievement 2 of 3</span>
        <span className="bg-surface-container px-2.5 py-1 rounded font-semibold uppercase tracking-[1px]">Laurent Vincentelli</span>
      </div>

    </div>
  );
}
