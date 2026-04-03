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

export function AIFactoryPlatformDashboard() {
  return (
    <div className="bg-surface-container-low rounded-xl p-8">

      {/* ── Header ── */}
      <header className="flex justify-between items-start mb-8 pb-6 border-b border-outline-variant/30 relative">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-label font-semibold uppercase tracking-[1.8px] text-tertiary-fixed-dim mb-2">
            <span className="w-1.5 h-1.5 bg-tertiary-fixed-dim rounded-[1px] rotate-45 inline-block" />
            Achievement 4 — Professional Portfolio
          </div>
          <h2 className="font-headline text-3xl text-on-surface leading-tight">
            The AI <em className="italic text-tertiary-fixed-dim">Factory</em>
          </h2>
        </div>
        <div className="text-right shrink-0 pt-1">
          <div className="text-[11px] font-body text-on-surface-variant leading-relaxed">
            <strong className="text-secondary font-medium">Client:</strong> Tier-1 North American Bank<br />
            <strong className="text-secondary font-medium">Engagement:</strong> 10 months ongoing · $4M+<br />
            <strong className="text-secondary font-medium">Team:</strong> 18-person cross-functional squad<br />
            <strong className="text-secondary font-medium">Sponsors:</strong> CTO · Head of I&O
          </div>
          <div className="mt-2 flex items-center justify-end gap-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-label font-semibold bg-tertiary-fixed/20 text-tertiary-fixed-dim px-2.5 py-1 rounded-full">
              ✓ Phase 1 MVP Delivered
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-label font-semibold bg-on-primary-container/10 text-on-primary-container px-2.5 py-1 rounded-full">
              ▶ Scaling into Phase 2
            </span>
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
            The CTO had invested heavily in{" "}
            <strong className="text-on-surface font-medium">AI-optimized infrastructure</strong>{" "}
            (Layer 1 — Compute, Networking, Storage) but AI services consumers were unable to use it.
            Teams needing AI capabilities were stuck doing{" "}
            <strong className="text-on-surface font-medium">raw infrastructure plumbing</strong>{" "}
            instead of building AI solutions.
          </p>
          <div className="bg-error/5 border border-error/15 rounded-lg px-4 py-3.5 mb-3">
            <div className="text-[9.5px] font-label font-semibold uppercase tracking-[1.4px] text-error mb-2">
              ⚠ Burning Platform
            </div>
            <p className="text-xs font-body text-secondary leading-[1.65]">
              C-suite AI strategy stalled. Internal AI teams blocked — no self-service catalogue,
              no governance, no cost visibility. The gap between raw compute and consumable AI
              services was widening every quarter.
            </p>
          </div>
          <div className="bg-on-primary-container/5 border border-on-primary-container/15 rounded-lg px-4 py-3.5 mb-4">
            <div className="text-[9.5px] font-label font-semibold uppercase tracking-[1.4px] text-on-primary-container mb-2">
              ◆ The Missing Layers
            </div>
            <p className="text-xs font-body text-secondary leading-[1.65]">
              CTO assumed Layer 1 alone was sufficient. AI consumers wanted a ready-to-consume
              services catalogue — not raw compute to wire themselves. We proposed a MVP platform
              layers (2 &amp; 3) to bridge the gap. My role : lead the Bid & Proposal then Lead the MVP's 4 Value Streams
            </p>
          </div>
          <ul className="flex flex-col gap-2.5 mt-4">
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 text-[10px] mt-0.5">◼</span>
              <span><strong className="text-purple-600 font-medium">No platform layer</strong> between raw GPUs and AI consumers</span>
            </li>
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 text-[10px] mt-0.5 font-semibold">$</span>
              <span><strong className="text-amber-600 font-medium">GPU underutilization</strong> — expensive infrastructure sitting idle</span>
            </li>
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-error/10 text-error flex items-center justify-center shrink-0 text-[10px] mt-0.5 font-semibold">!</span>
              <span><strong className="text-error font-medium">Zero cost visibility</strong> — no FinOps, no chargeback, no ROI tracking</span>
            </li>
            <li className="flex gap-2.5 items-start text-xs font-body leading-[1.55] text-secondary">
              <span className="w-5 h-5 rounded-[5px] bg-on-primary-container/10 text-on-primary-container flex items-center justify-center shrink-0 text-[10px] mt-0.5">◇</span>
              <span><strong className="text-on-primary-container font-medium">Weeks to provision</strong> any AI workload — manual, fragmented process</span>
            </li>
          </ul>
        </div>

        {/* KPI 1 — AI Service Provisioning */}
        <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/20 flex flex-col justify-between min-h-[120px]">
          <div>
            <CardLabel>AI Service Provisioning</CardLabel>
            <div className="font-headline text-[42px] leading-none text-on-surface mb-1">
              ∞ → 2 <span className="font-body text-base font-normal text-on-surface-variant ml-0.5">Hours</span>
            </div>
            <div className="text-xs font-body text-secondary leading-[1.5]">Self-service catalogue live — first AI workloads onboarded via templates</div>
          </div>
          <ChangeBadge>▼ Order-of-magnitude reduction</ChangeBadge>
        </div>

        {/* KPI 2 — GPU Utilization */}
        <div className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/20 flex flex-col justify-between min-h-[120px]">
          <div>
            <CardLabel>GPU Utilization</CardLabel>
            <div className="font-headline text-[42px] leading-none text-on-surface mb-1">
              [+40%] <span className="font-body text-base font-normal text-on-surface-variant ml-0.5">uplift</span>
            </div>
            <div className="text-xs font-body text-secondary leading-[1.5]">Dynamic scheduling &amp; orchestration maximizing accelerator throughput</div>
          </div>
          <ChangeBadge>✓ MVP validated</ChangeBadge>
        </div>

        {/* Architecture Visual — col 2–3 */}
        <div className="col-start-2 col-span-2 bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/20 flex flex-col">
          <CardLabel>AI Factory Architecture — MVP's Three-Layer Blueprint</CardLabel>
          <div className="flex flex-col gap-2 mt-1 flex-1 justify-center">
            {/* Layer 3 — Experience */}
            <div className="flex items-stretch rounded-lg overflow-hidden min-h-[52px]">
              <div className="w-[110px] flex items-center justify-center text-[10px] font-label font-bold tracking-[1px] uppercase text-white bg-tertiary-fixed-dim shrink-0 px-3 py-2 text-center leading-tight">
                Layer 3<br />Experience
              </div>
              <div className="flex-1 flex items-center px-4 py-2.5 text-[11.5px] font-body text-secondary gap-3 flex-wrap bg-tertiary-fixed/5 border border-tertiary-fixed-dim/12 border-l-0 rounded-r-lg">
                <TechTag>AI as a Service Catalog</TechTag>
                <TechTag>XOps &amp; Agents Mgmt</TechTag>
                <TechTag>RAG</TechTag>
                <TechTag>Training Environments</TechTag>
                <TechTag>MLOps/ModelOps</TechTag>
                <TechTag>Inference Gateways</TechTag>
                <TechTag>Frontier Gateways</TechTag>
                <span className="ml-auto text-[9px] font-label font-bold tracking-[1.2px] uppercase px-1.5 py-0.5 rounded bg-tertiary-fixed/12 text-tertiary-fixed-dim">◆ My Scope</span>
              </div>
            </div>
            {/* Layer 2 — AI OS */}
            <div className="flex items-stretch rounded-lg overflow-hidden min-h-[52px]">
              <div className="w-[110px] flex items-center justify-center text-[10px] font-label font-bold tracking-[1px] uppercase text-white bg-on-primary-container shrink-0 px-3 py-2 text-center leading-tight">
                Layer 2<br />AI Operating System
              </div>
              <div className="flex-1 flex items-center px-4 py-2.5 text-[11.5px] font-body text-secondary gap-3 flex-wrap bg-on-primary-container/5 border border-on-primary-container/12 border-l-0 rounded-r-lg">
                <TechTag variant="blue">Scheduling (Slurm in K8s)</TechTag>
                <TechTag variant="blue">Orchestration (K8s ecosystem)</TechTag>
                <TechTag variant="blue">Inference (Dynamo + vLLM)</TechTag>
                <TechTag variant="blue">IAM</TechTag>
                <TechTag variant="blue">FinOps</TechTag>
                <TechTag variant="blue">Policy-as-Code</TechTag>
                <span className="ml-auto text-[9px] font-label font-bold tracking-[1.2px] uppercase px-1.5 py-0.5 rounded bg-tertiary-fixed/12 text-tertiary-fixed-dim">◆ My Scope</span>
              </div>
            </div>
            {/* Layer 1 — Infra */}
            <div className="flex items-stretch rounded-lg overflow-hidden min-h-[52px]">
              <div className="w-[110px] flex items-center justify-center text-[10px] font-label font-bold tracking-[1px] uppercase text-white bg-on-surface-variant shrink-0 px-3 py-2 text-center leading-tight">
                Layer 1<br />Infra
              </div>
              <div className="flex-1 flex items-center px-4 py-2.5 text-[11.5px] font-body text-secondary gap-3 flex-wrap bg-on-surface-variant/5 border border-on-surface-variant/12 border-l-0 rounded-r-lg">
                <span className="text-[9px] font-label font-semibold tracking-[0.5px] px-1.5 py-0.5 rounded bg-on-surface-variant/10 text-on-surface-variant">CPUs</span>
                <span className="text-[9px] font-label font-semibold tracking-[0.5px] px-1.5 py-0.5 rounded bg-on-surface-variant/10 text-on-surface-variant">GPUs &amp; ASICs</span>
                <span className="text-[9px] font-label font-semibold tracking-[0.5px] px-1.5 py-0.5 rounded bg-on-surface-variant/10 text-on-surface-variant">Networking Fabric</span>
                <span className="text-[9px] font-label font-semibold tracking-[0.5px] px-1.5 py-0.5 rounded bg-on-surface-variant/10 text-on-surface-variant">Storage</span>
                <span className="text-[9px] font-label font-semibold tracking-[0.5px] px-1.5 py-0.5 rounded bg-on-surface-variant/10 text-on-surface-variant">Colocation</span>
                <span className="ml-auto text-[9px] font-label font-bold tracking-[1.2px] uppercase px-1.5 py-0.5 rounded bg-on-surface-variant/10 text-on-surface-variant">Pre-existing</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-3.5 text-[13px] font-body text-secondary">
            MVP's Layers 3 &amp; 2 transform raw compute into a <strong className="text-tertiary-fixed-dim font-semibold">consumable, governed AI marketplace</strong>
          </div>
        </div>

        {/* Value Streams — col 2–3 */}
        <div className="col-start-2 col-span-2 bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/20">
          <CardLabel>MVP Delivery — Four Value Streams</CardLabel>
          <div className="grid grid-cols-4 gap-2.5">
            {[
              { num: "VS 01", layer: "Layer 3", title: "\"AI as a Service\" Catalog", desc: "Federated catalogue of one-click templates: RAG, Training, MLOps, inference and frontier model gateways", tags: [{ label: "Self-Service" }, { label: "Templates" }] },
              { num: "VS 02", layer: "Layer 3", title: "XOps & Agents Management", desc: "MLOps/ModelOps lifecycle — build, train, deploy, monitor. Frontier & open-weight model integration. Agent engineering", tags: [{ label: "MLOps" }, { label: "Agents" }, { label: "ModelOps" }] },
              { num: "VS 03", layer: "Layer 2", title: "Scheduling & Orchestration", desc: "Inference runtimes (vLLM, Dynamo), Kubernetes-native control plane, Run:ai dynamic GPU sharing, Slurm HPC schedulers", tags: [{ label: "K8s", v: "blue" as const }, { label: "vLLM", v: "blue" as const }, { label: "Slurm", v: "blue" as const }] },
              { num: "VS 04", layer: "Layer 2", title: "Governance, Security & FinOps", desc: "Policy-as-code, unified IAM, federated infra management, AI FinOps with full P&L cost visibility and ROI tracking", tags: [{ label: "IAM", v: "purple" as const }, { label: "FinOps", v: "purple" as const }, { label: "Policy", v: "purple" as const }] },
            ].map((s) => (
              <div key={s.num} className="bg-surface-container border border-outline-variant/20 rounded-lg p-3.5 hover:border-tertiary-fixed-dim/30 transition-colors">
                <div className="text-[9px] font-label font-bold tracking-[1px] text-on-surface-variant mb-1">{s.num}</div>
                <div className={`text-[8px] font-label font-bold tracking-[0.8px] uppercase px-1.5 py-0.5 rounded inline-block mb-1.5 ${s.layer === "Layer 3" ? "bg-tertiary-fixed/20 text-tertiary-fixed-dim" : "bg-on-primary-container/10 text-on-primary-container"}`}>
                  {s.layer}
                </div>
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
          { label: "Provisioning Speed", value: "~90%", detail: "Reduction in time-to-provision AI services — weeks to hours via self-service", color: "text-tertiary-fixed-dim", bar: "bg-tertiary-fixed-dim" },
          { label: "GPU Utilization", value: "+40%", detail: "Accelerator throughput uplift via dynamic scheduling & workload orchestration", color: "text-on-primary-container", bar: "bg-on-primary-container" },
          { label: "Cost Transparency", value: "100%", detail: "Unified FinOps view — hybrid cost tracking, chargeback & ROI per AI project", color: "text-amber-600", bar: "bg-amber-500" },
          { label: "Catalogue Live", value: "[5]", detail: "AI service templates in production — RAG, fine-tuning, inference, gateways & more", color: "text-purple-500", bar: "bg-purple-500" },
          { label: "Governance", value: "Unified", detail: "IAM, policy-as-code & audit trail across hybrid on-prem & cloud estate", color: "text-error", bar: "bg-error" },
          { label: "Phase 2 Scope", value: "Scale", detail: "Expanding to full enterprise — agentic workflows, physical AI & advanced FinOps", color: "text-on-surface-variant", bar: "bg-outline-variant" },
        ].map((r) => (
          <div key={r.label} className="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/20 relative overflow-hidden">
            <div className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${r.bar}`} />
            <div className={`text-[9.5px] font-label font-semibold uppercase tracking-[1.4px] mb-2.5 ${r.color}`}>{r.label}</div>
            <div className="font-headline text-[28px] leading-none text-on-surface mb-1.5">{r.value}</div>
            <div className="text-[11px] font-body text-secondary leading-[1.5]">{r.detail}</div>
          </div>
        ))}
      </div>

      {/* ── Leadership Callout ── */}
      <div className="mt-4 bg-gradient-to-br from-surface-container-lowest to-tertiary-fixed/5 border border-tertiary-fixed-dim/30 rounded-xl p-5 flex gap-6 items-start">
        <div className="text-tertiary-fixed-dim text-xl shrink-0 mt-0.5">◆</div>
        <div className="flex-1">
          <div className="text-[9.5px] font-label font-bold uppercase tracking-[1.4px] text-tertiary-fixed-dim mb-1.5">
            Leadership Under Pressure — Navigating Competing Priorities
          </div>
          <p className="text-xs font-body text-secondary leading-[1.65] mb-4">
            The defining challenge was{" "}
            <strong className="text-on-surface font-medium">orchestrating 4 interdependent value streams</strong>{" "}
            under a single MVP deadline with a CTO who initially believed only infrastructure mattered.
            I led the RFP that reframed the problem: the bank didn't need more compute — it needed the{" "}
            <strong className="text-on-surface font-medium">missing platform layers</strong> that turn raw GPUs
            into consumable AI services. Three deliberate moves made the difference:
          </p>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { num: "MOVE 01", text: <><strong className="text-on-surface font-medium">Sequenced Layer 2 before Layer 3</strong> — ensured scheduling, governance and FinOps were operational before exposing the self-service catalogue, preventing ungoverned GPU sprawl from day one.</> },
              { num: "MOVE 02", text: <><strong className="text-on-surface font-medium">Ringfenced the FinOps stream</strong> — cost transparency was the CTO's #1 anxiety. I staffed it as a parallel track rather than a Phase 2 deferral, delivering unified cost visibility within the MVP timeline.</> },
              { num: "MOVE 03", text: <><strong className="text-on-surface font-medium">MVP-scoped the catalogue to 5 templates</strong> — resisted pressure to launch all service types at once. Focused on the highest-demand patterns (RAG, fine-tuning, inference) to prove value fast and earn trust for Phase 2 expansion.</> },
            ].map((m) => (
              <div key={m.num} className="bg-surface-container rounded-lg p-3 border border-outline-variant/20">
                <div className="text-[9px] font-label font-bold uppercase tracking-[1px] text-tertiary-fixed-dim mb-2">{m.num}</div>
                <div className="text-[11px] font-body text-secondary leading-[1.6]">{m.text}</div>
              </div>
            ))}
          </div>
          <div className="text-[12px] font-body text-secondary">
            Phase 1 MVP validated →{" "}
            <strong className="text-on-primary-container font-semibold">Now scaling into Phase 2</strong>{" "}
            — agentic workflows, extended AI services &amp; enterprise-wide rollout
          </div>
          <div className="mt-3 pt-3 border-t border-outline-variant/20 text-xs font-body text-secondary leading-[1.65]">
            <strong className="text-on-surface font-medium">Key reframe:</strong> The Head of I&O was mandated by
            the CTO to "build the missing layer." Our value proposition was the{" "}
            <strong className="text-on-surface font-medium">platform-as-a-product approach</strong> — Layer 3 (the
            experience layer) and Layer 2 (the AI OS) — that sits between raw compute and the people who need to
            consume it. This reframe won the RFP and is now the blueprint being scaled across the enterprise.
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="mt-6 flex justify-between items-center text-[10px] font-label text-on-surface-variant">
        <span>Professional Portfolio · Achievement 4 of 4</span>
        <div className="flex items-center gap-3">
          <span className="bg-surface-container px-2.5 py-1 rounded font-semibold uppercase tracking-[1px]">LAURENT VINCENTELLI</span>
        </div>
      </div>
    </div>
  );
}
