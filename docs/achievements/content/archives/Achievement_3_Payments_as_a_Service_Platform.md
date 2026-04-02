# Achievement 3: Payments-as-a-Service Platform

**Role:** Senior Manager / Digital & AI Platform Lead

**Situation:** A major Canadian payments network operator was preparing to launch its next-generation real-time payments product — but had no platform layer to deliver it through. The challenge was dual-sided: **14 enterprise clients** running on legacy bilateral integration agreements needed a modern, governed API surface to consume the new rails, while a growing fintech ecosystem of **~80 prospective developers** had no way to build on top of the network at all. The legacy integration model was expensive — **each new enterprise onboarding required ~$400K in custom point-to-point engineering and took 6+ months** — and couldn't scale. Meanwhile, **a competing payments network had already launched a developer sandbox, and two enterprise clients had formally flagged the lack of a modern integration layer as a renewal risk.** The operator needed to move on both fronts simultaneously or risk losing market position on the enterprise side and relevance on the fintech side.

**Task:** As Program Lead, I directed a cross-functional team of 35+ practitioners across engineering, architecture, and consulting on a **$6.5M, 22-month engagement** — the largest platform program in the operator's history. I held dual accountability: managing client executive sponsors (CEO of the payments network, CTO, Head of Product) while delivering a unified platform strategy comprising two interoperable layers — an Enterprise Delivery Platform (EDP) for institutional clients and a Partner & Developer Hub (PDH) for the fintech ecosystem. **The first enterprise cohort had to be live within 10 months to protect two at-risk client renewals, while the developer portal had a 14-month deadline tied to a public product announcement the operator had already committed to.**

**Action:** I owned the combined platform roadmap, backlog, and end-to-end delivery across four value streams:

- **Enterprise API Gateway & Integration:** Delivered a secure, multi-tenant layer that abstracted heavy ISO 20022 message complexity behind clean, versioned REST and event-driven APIs for enterprise consumers.
- **Compliance & Security Processing:** Implemented per-client SLAs, dedicated priority traffic lanes, and a real-time fraud signal integration layer strictly adhering to PCI-DSS and FINTRAC compliance.
- **Developer Hub & Sandboxing:** Built a dedicated portal with robust sandbox environments simulating real-time gross settlement, allowing fintech developers to test integrations without touching production rails.
- **Partner Tiering & DevRel Enablement:** Designed a commercialization-ready partner tiering model with legal-backed IP guardrails, and established a Developer Relations function to drive community advocacy and documentation standards.

**The defining challenge came at month 7. The EDP and PDH shared a common authentication and entitlement layer, and the enterprise security team demanded a bespoke, on-premise HSM-backed token vault — a requirement that would have added 4 months and ~$800K to the program. I proposed an alternative: a cloud-native vault architecture with a hardware root-of-trust bridge that satisfied the security team's cryptographic requirements while staying within the existing cloud footprint. I spent three weeks in direct negotiation with the CISO, walking through threat models until we reached sign-off. The decision saved the timeline and became the operator's reference pattern for future platform builds.**

**I also made a deliberate sequencing call early on: I launched the EDP 4 months ahead of the PDH rather than waiting for a simultaneous release. This was politically uncomfortable — the product team wanted a "big bang" launch story — but I argued that protecting the at-risk enterprise renewals was the existential priority. The staggered approach let us incorporate enterprise feedback into the PDH design, and the product team eventually credited the sequencing with making the developer portal significantly stronger at launch.**

**Result:**

- **Enterprise Adoption:** Onboarded **8 major enterprise clients within 10 months**, completely replacing legacy bilateral agreements — **securing ~$18M in combined annual transaction volume on the new rails and protecting the two at-risk renewals**.
- **Ecosystem Growth:** Achieved **200+ active developer accounts within 6 months** of the portal launch, **with 35 fintech applications reaching production integration by month 9**.
- **Operational Efficiency:** Delivered a packaged transaction monitoring and reconciliation dashboard that slashed client support ticket volume by 35%, **saving an estimated $500K/year in Tier-2 support costs**.
- **Delivery Excellence:** Delivered the combined EDP and PDH program on-time and within budget across the full 22-month engagement — **one of only two programs in the operator's history to hit both milestones**.
- **Account Growth:** **The operator extended into a $2.4M Phase 2 focused on cross-border payment APIs and advanced fraud analytics, and Laurent's team was specifically requested for continuity.**
