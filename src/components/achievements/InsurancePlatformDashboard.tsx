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
          <div className="text-[11px] font-body text-on-surface-variant leading-relaxed">
            <strong className="text-secondary font-medium">Client:</strong> Tier-1 North American Insurance Carrier<br />
            <strong className="text-secondary font-medium">Engagement:</strong> 9 months · ~$2.8M<br />
            <strong className="text-secondary font-medium">Team:</strong> 12-person cross-functional squad<br />
            <strong className="text-secondary font-medium">Sponsors:</strong> CTO · CISO · CDO
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
            The carrier had spent <strong className="text-on-surface font-medium">18 months</strong> and{" "}
            <strong className="text-on-surface font-medium">~$2.6M/year</strong> building production-grade hyperscaler
            infrastructure — with <strong className="text-on-surface font-medium">zero external capabilities</strong>{" "}
            live in production.
          </p>
          <div className="bg-error/5 border border-error/15 rounded-lg px-4 py-3.5 mb-4">
            <div className="text-[9.5px] font-label font-semibold uppercase tracking-[1.4px] text-error mb-2">
              ⚠ Burning Platform
            </div>
            <p className="text-xs font-body text-secondary leading-[1.65]">
              CEO had publicly committed to a digital distribution strategy at an investor day. Two key brokerage
              partners threatening to explore competitors. Regulatory checkpoint 11 months away. MVP -MUST- be live in 9 months.
            </p>
          </div>
          <div className="bg-on-primary-container/5 border border-on-primary-container/15 rounded-lg px-4 py-3.5 mb-4">
            <div className="text-[9.5px] font-label font-semibold uppercase tracking-[1.4px] text-on-primary-container mb-2">
              ◆ My Mandate
            </div>
            <p className="text-xs font-body text-secondary leading-[1.65]">
              As the Platform lead, co-managed the Bid & Proposal with the Insurance SME Lead. Then led the platform delivery : steering 4 Value Streams towards MVP validation.
            </p>
          </div>
          <ul className="flex flex-col gap-2.5 mt-4">
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 text-[10px] mt-0.5 font-semibold">$</span>
              <span><strong className="text-amber-600 font-medium">~$2.6M/yr</strong> in cloud spend generating zero external revenue</span>
            </li>
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-on-primary-container/10 text-on-primary-container flex items-center justify-center shrink-0 text-[10px] mt-0.5">⬡</span>
              <span><strong className="text-on-primary-container font-medium">12 partners</strong> stalled in onboarding queues, some waiting 12+ months</span>
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
              14 <span className="font-body text-base font-normal text-on-surface-variant ml-0.5">Weeks</span> → 3 <span className="font-body text-base font-normal text-on-surface-variant ml-0.5">Weeks</span>
            </div>
            <div className="text-xs font-body text-secondary leading-[1.5]">8 partners live within 90 days of launch</div>
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
            <div className="text-xs font-body text-secondary leading-[1.5]">Across 140+ controls assessed</div>
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
                  14 Weeks
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
                  &lt;3 Weeks
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
              { num: "02", title: "Compliance by Design", desc: "VPC-isolated topologies and data residency controls as a standard", tags: ["VPC", "DATA RESIDENCY"] },
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

      {/* ── Results Row ── */}
      <div className="grid grid-cols-4 gap-3 mt-4">
        {[
          { label: "Accelerated GTM", value: "79%", detail: "Reduction in partner onboarding time — 14 weeks → under 3 weeks", color: "text-tertiary-fixed-dim", bar: "bg-tertiary-fixed-dim" },
          { label: "Regulatory Success", value: "0", detail: "Material findings across 140+ regulatory controls assessed", color: "text-on-primary-container", bar: "bg-on-primary-container" },
          { label: "Cost Reduction", value: "~$600K", detail: "Annual maintenance eliminated · Integration incidents down 70%", color: "text-amber-600", bar: "bg-amber-500" },
          { label: "Account Growth", value: "$1.5M", detail: "Phase 2 extension — analytics & monetization capabilities", color: "text-purple-500", bar: "bg-purple-500" },
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
        <span>Professional Portfolio · Achievement 1 of 4</span>
        <span className="bg-surface-container px-2.5 py-1 rounded font-semibold uppercase tracking-[1px]">LAURENT VINCENTELLI</span>
      </div>

    </div>
  );
}
