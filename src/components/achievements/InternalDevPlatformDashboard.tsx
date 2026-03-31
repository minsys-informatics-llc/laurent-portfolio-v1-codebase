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
    variant === "blue" ? "bg-on-primary-container/10 text-on-primary-container" :
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
          <div className="text-[11px] font-body text-on-surface-variant leading-relaxed">
            <strong className="text-secondary font-medium">Client:</strong> Major EMEA Telecom Operator<br />
            <strong className="text-secondary font-medium">Engagement:</strong> 14 months · $4.4M<br />
            <strong className="text-secondary font-medium">Team:</strong> 15-person cross-functional squad<br />
            <strong className="text-secondary font-medium">Sponsors:</strong> CTO · VP Engineering
          </div>
          <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-label font-semibold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">
            ⚠ 2 prior platform attempts had failed
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
            <strong className="text-on-surface font-medium">800+ engineers</strong> across{" "}
            <strong className="text-on-surface font-medium">18 distinct CI/CD toolchains</strong>. Over{" "}
            <strong className="text-on-surface font-medium">40% of sprint capacity</strong> consumed by platform toil
            — costing an estimated <strong className="text-on-surface font-medium">$11M/year</strong> in lost productivity.
          </p>
          <div className="bg-error/5 border border-error/15 rounded-lg px-4 py-3.5 mb-3">
            <div className="text-[9.5px] font-label font-semibold uppercase tracking-[1.4px] text-error mb-2">⚠ Burning Platform</div>
            <p className="text-xs font-body text-secondary leading-[1.65]">
              Security audit surfaced 3 material findings from inconsistent infrastructure. CTO received board
              directive: "fix the developer experience or accept the risk in writing."
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3.5 mb-4">
            <div className="text-[9.5px] font-label font-semibold uppercase tracking-[1.4px] text-amber-700 mb-2">⟳ Two Prior Failures</div>
            <p className="text-xs font-body text-secondary leading-[1.65]">
              Attempt 1: abandoned after 8 months due to low adoption. Attempt 2: shelved when sponsoring VP left.
              Engineering leadership deeply skeptical.
            </p>
          </div>
          <ul className="flex flex-col gap-2.5 mt-4">
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 text-[10px] mt-0.5 font-semibold">$</span>
              <span><strong className="text-amber-600 font-medium">$11M/yr</strong> in engineering productivity lost to toil</span>
            </li>
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 text-[10px] mt-0.5">⊞</span>
              <span><strong className="text-purple-600 font-medium">18 toolchains</strong> — 7 years of fragmentation</span>
            </li>
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-error/10 text-error flex items-center justify-center shrink-0 text-[10px] mt-0.5 font-semibold">!</span>
              <span><strong className="text-error font-medium">Board directive</strong> — existential mandate, not optional</span>
            </li>
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-on-primary-container/10 text-on-primary-container flex items-center justify-center shrink-0 text-[10px] mt-0.5">◇</span>
              <span><strong className="text-on-primary-container font-medium">30% adoption</strong> target to prove sustainability</span>
            </li>
          </ul>
        </div>

        {/* KPI 1 — Env Provisioning */}
        <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/20 flex flex-col justify-between min-h-[120px]">
          <div>
            <CardLabel>Env Provisioning</CardLabel>
            <div className="font-headline text-[42px] leading-none text-on-surface mb-1">
              18 <span className="font-body text-base font-normal text-on-surface-variant ml-0.5">Days</span> → 4 <span className="font-body text-base font-normal text-on-surface-variant ml-0.5">Hours</span>
            </div>
            <div className="text-xs font-body text-secondary leading-[1.5]">5,600 engineering hours saved in year one</div>
          </div>
          <ChangeBadge>▼ 99% reduction</ChangeBadge>
        </div>

        {/* KPI 2 — Voluntary Adoption */}
        <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/20 flex flex-col justify-between min-h-[120px]">
          <div>
            <CardLabel>Voluntary Adoption</CardLabel>
            <div className="font-headline text-[42px] leading-none text-on-surface mb-1">
              [500+] <span className="font-body text-base font-normal text-on-surface-variant ml-0.5">Engineers</span>
            </div>
            <div className="text-xs font-body text-secondary leading-[1.5]">[2.5× the 30% target] — highest in operator history</div>
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
              <div className="text-[10px] font-label font-semibold text-tertiary-fixed-dim mt-1">[$9M/yr]<br />recovered</div>
            </div>
            {/* After state */}
            <div className="flex-1">
              <div className="text-[10px] font-label font-semibold uppercase tracking-[1px] text-on-surface-variant mb-2">After</div>
              <div className="h-10 bg-surface-container rounded-md overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-tertiary-fixed-dim to-tertiary-fixed-dim/70 flex items-center pl-3 text-xs font-label font-semibold text-primary rounded-md"
                  style={{ width: '30%', minWidth: '60px' }} /* 12/40 — proportional to before bar */
                >
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
                  {s.tags.map((t) => <TechTag key={t.label} variant={"v" in t ? t.v : undefined}>{t.label}</TechTag>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Results Row — 6 cards ── */}
      <div className="grid grid-cols-6 gap-3 mt-4">
        {[
          { label: "Time Savings", value: "99%", detail: "Env provisioning: 18 days → 4 hours · [5.6K hrs saved yr 1]", color: "text-tertiary-fixed-dim", bar: "bg-tertiary-fixed-dim" },
          { label: "Velocity", value: "3×", detail: "Deploy frequency increase · [5G feature shipped 2 months early]", color: "text-on-primary-container", bar: "bg-on-primary-container" },
          { label: "Toil Recovery", value: "$9M", detail: "Annual productivity recovered — 40% → 12% sprint toil", color: "text-amber-600", bar: "bg-amber-500" },
          { label: "Adoption", value: "[500+]", detail: "[2.5× target] · highest adoption of any internal tool ever", color: "text-purple-500", bar: "bg-purple-500" },
          { label: "Security", value: "0", detail: "Material findings in categories that triggered the board directive", color: "text-error", bar: "bg-error" },
          { label: "Account Growth", value: "$1.7M", detail: "Phase 2 — DB provisioning & ML pipelines · team internalized", color: "text-on-surface-variant", bar: "bg-outline-variant" },
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
            At month 3, internal NPS across the first 25 squads came back at{" "}
            <strong className="text-on-surface font-medium">+12</strong> — developers liked the portal but didn't trust
            it, trained by two prior failures to expect abandonment. I made three moves:
          </p>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { num: "MOVE 01", text: <><strong className="text-on-surface font-medium">Embedded engineers</strong> — 1 platform engineer in each of the 5 highest-volume squads for 4-week pair-programming rotations. Built trust through proximity.</> },
              { num: "MOVE 02", text: <><strong className="text-on-surface font-medium">Public platform SLA</strong> — published uptime targets and incident retros visible to all 800+ engineers. No internal team had ever done this.</> },
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
        <span>Professional Portfolio · Achievement 3 of 3</span>
        <span className="bg-surface-container px-2.5 py-1 rounded font-semibold uppercase tracking-[1px]">LAURENT VINCENTELLI</span>
      </div>

    </div>
  );
}
