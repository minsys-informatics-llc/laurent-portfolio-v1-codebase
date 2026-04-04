import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { InsurancePlatformDashboard } from "../components/achievements/InsurancePlatformDashboard";
import { OpenbankingDashboard } from "../components/achievements/OpenbankingDashboard";
import { InternalDevPlatformDashboard } from "../components/achievements/InternalDevPlatformDashboard";
import { AIFactoryPlatformDashboard } from "../components/achievements/AIFactoryPlatformDashboard";
import { AchievementsCarousel } from "../components/AchievementsCarousel";

/* ─── Data ─── */

const corporateEntries = [
  {
    id: 1,
    date: "2023 — Present",
    role: "Engagement Manager",
    company: "Deloitte",
    description: "Leading Digital & AI Platform engagements (FSI, Telco) through 4 pillars: Client Relationship Management, Financial Management, Team Leadership, and Flow & Delivery Oversight.",
    side: "left" as const,
  },
  {
    id: 2,
    date: "2019 — 2023",
    role: "Senior Manager",
    company: "IBM",
    description: "Steered the Delivery and Adoption of Platform as a Service (PaaS) solutions for the Payments Industry, Telcos and Transportation. Bridging Technical Teams with Senior Leadership",
    side: "right" as const,
  },
  {
    id: 3,
    date: "2018 — 2019",
    role: "Manager",
    company: "Accenture",
    description: "Led the Design and Delivery of a Retailer's Internal Developer Platform, Supporting 300+ Engineers across E-Commerce, Supply Chain, and Loyalty Product Squads",
    side: "left" as const,
  },
  {
    id: 4,
    date: "2017 — 2018",
    role: "Cloud Solutions Architect",
    company: "OVH Cloud",
    description: "Designed GDPR (EU) 2016/679 Compliant Cloud Architecture Patterns for Financial and Public-Sector Clients. Led Pre-Sales Engineering for Cloud Platform (PaaS) Adoption.",
    side: "right" as const,
  },
  {
    id: 5,
    date: "2015 — 2016",
    role: "Senior Managing Consultant",
    company: "Capgemini",
    description: "Co-delivered a platform solution (PaaS) for mission-critical embedded systems for a Defence and Space programme in a classified environment.",
    side: "left" as const,
  },
  {
    id: 6,
    date: "2011 — 2015",
    role: "Senior Consultant",
    company: "Cognizant",
    description: "Co-Built and Managed Cloud Platforms (IaaS, PaaS, CaaS) Introducing Agile, DevOps and SRE Practices across Transformation Programmes in Banking and Telecoms.",
    side: "right" as const,
  },
  {
    id: 7,
    date: "2008 — 2011",
    role: "Head of Cloud Engineering",
    company: "GreenSaaS (Fiducial Cloud)",
    description: "GreenSaaS was one of the First Cloud Platform Providers in France, Designed and Built Multi-Tenant Infrastructures from the ground up. (acquired by Fiducial Group)",
    side: "left" as const,
  },
];

const entrepreneurialEntries = [
  {
    id: 1,
    date: "2026 — Present",
    role: "Refounder",
    company: "Minsys",
    description: "Minsys was refounded in 2026 as a Venture Building Micro-PE firm. Au Menu : Rewiring Main Street with high-multiple, next-gen business models. Visit : https://minsys.xyz",
    side: "left" as const,
  },
  {
    id: 2,
    date: "2020 — Present",
    role: "Founding Partner, LP",
    company: "WorkshopThinking LLP",
    description: "(Re)Thinking Digital & AI, Collaboratively : we catalyse high-intensity, practical workshops for Main Street Business Leaders to rewire their organization with Digital & AI.",
    side: "right" as const,
  },
  {
    id: 3,
    date: "2019-Present",
    role: "Founding Partner, LP",
    company: "Five Forces LLP",
    description: "Actionable Competitive Intelligence for Main Street: Mapping how your rivals leverage Digital & AI to disrupt your market and positioning you to strike back.",
    side: "left" as const,
  },
  {
    id: 4,
    date: "2016-2018",
    role: "Co-Founder",
    company: "Turbulences Engineering LLC",
    description: "Mothballed. A chaos engineering platform for SMBs. We proactively stress-test infrastructure, and build resilience so you can scale in confidence.",
    side: "right" as const,
  },
  {
    id: 5,
    date: "2014-2018",
    role: "Co-Founder",
    company: "Zeste LTS Systems LTD",
    description: "Mothballed. Protect Main Street Businesses. Zeste LTS is a SecOps platform that delivers seamless observability measures and automated countermeasures.",
    side: "left" as const,
  },
  {
    id: 6,
    date: "2011-2015",
    role: "Founder",
    company: "CloudLifters SARL",
    description: "Exited (M&A, 7x EBITDA). Cloud migration platform lift-and-shift only. Moving applications and data from any cloud to any cloud, with zero re-architecting.",
    side: "right" as const,
  },
  {
    id: 7,
    date: "2010",
    role: "Founder",
    company: "minsys.io",
    description: "minsys.io as in 'Minimally Viable Systems'. The prologue of my micro-entrepreneurial journey that is now refounded as Minsys ( https://minsys.xyz ) ",
    side: "left" as const,
  },
];

const caseStudies = [
  {
    id: 2,
    category: "Fintech",
    year: "EU",
    title: "Open Banking Platform",
    headline: "3 Weeks → 2 Days",
    headlineSub: "time-to-first-API-call",
    description:
      "Built the partner and developer portal for a major EU retail bank compressing time-to-first-API-call by 90% and launching 30+ fintech partners on day one, the bank's largest cohort ever.",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    category: "Energy & Utilities",
    year: "Global Conglomerate",
    title: "The AI Factory",
    headline: "98% Reduction",
    headlineSub: "AI service provisioning time",
    description:
      "Designed and delivered the missing platform layers for a major North American bank's AI factory — transforming raw GPU infrastructure into a self-service AI marketplace with unified governance and FinOps.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 1,
    category: "Insurtech",
    year: "North America",
    title: "Insurance-as-a-Service Platform",
    headline: "14 Weeks → 3 Weeks",
    headlineSub: "partner onboarding",
    description:
      "Transformed a Tier-1 North American carrier's stalled hyperscaler investment into a live API ecosystem,cutting partner onboarding from 14 weeks to under 3, clearing 140+ regulatory controls with zero findings.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    category: "Telecom",
    year: "EMEA",
    title: "Internal Developer Platform",
    headline: "[3x] Velocity",
    headlineSub: "Deployment frequency increase",
    description:
      "Designed and delivered a self-service IDP for a major EMEA telco reducing environment provisioning from 18 days to 4 hours, recovering $9M/yr in lost productivity, and achieving 500+ voluntary adopters.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
  },
];

const hardSkills = [
  {
    id: 1,
    title: "Digital & AI Platform as a Product",
    description: "Builds platforms the way great product teams build software with a roadmap, a backlog, and real customers. Turns Internal Developer Platforms and Enterprise AI hubs from IT cost centres into business-velocity engines.",
    tags: ["Lean Budget", "Roadmap & Backlog", "Business Velocity", "User Experience", "Design Thinking", "System Thinking"],
  },
  {
    id: 2,
    title: "Extended Enterprise & Ecosystem Management",
    description: "Designs and operates the partner and developer layer that extends platform reach beyond the enterprise from API gateway architecture to ISV onboarding programmes that turn technology alliances into scalable, governed revenue channels.",
    tags: ["API Gateway", "ISV Onboarding", "Partner Ecosystems", "Developer Portals", "Revenue Channels", "Ecosystem Governance"],
  },
  {
    id: 3,
    title: "Hybrid & Distributed Cloud (XaaS)",
    description: "Architects the cloud foundation across all major hyperscalers and on-prem, from greenfield cloud-native builds to sovereign and compliant hybrid patterns for regulated industries giving engineering teams the infrastructure runway to ship with confidence.",
    tags: ["AWS", "GCP", "Azure", "IBM Cloud", "K8s Ecosystem", "GSLB + Federated Control Plane"],
  },
  {
    id: 4,
    title: "Software Engineering Practices",
    description: "Embeds the culture and tooling that makes fast delivery safe by default : zero-trust security, observable systems, CI/CD pipelines, and event-driven architectures that hold up under production pressure.",
    tags: ["DevSecOps", "SRE", "MLOps", "FinOps", "API-first", "Microservices"],
  },
];

const hardSkillsFoundation = {
  title: "Frameworks & Methodologies",
  description: "Selects and applies the right delivery framework for the scale and context : from SAFe at programme level to Lean Six Sigma for operational efficiency driving execution without bureaucratic overhead.",
  tags: ["SAFe", "Kanban", "Scrum (PSM, PSPO)", "Lean Six Sigma Black Belt", "TOGAF", "Team Topologies", "OKR", "Value Stream Mapping"],
};

const softSkills = [
  {
    id: 1,
    title: "Executive & Stakeholder Communication",
    description: "Bridges technical depth and executive language making infrastructure decisions legible to C-suite sponsors with equal fluency in a boardroom and a sprint review.",
    tags: ["C-Suite Communication", "Executive Presence", "Technical Storytelling", "Stakeholder Mgmt", "Boardroom Fluency"],
  },
  {
    id: 2,
    title: "Team Leadership & Talent Development",
    description: "Builds, mentors, and scales high-performing cross-functional engineering teams around Lean and Agile delivery cultures.",
    tags: ["Team Building", "Mentoring", "Cross-functional Teams", "Lean Culture", "Agile Delivery", "Talent Scaling"],
  },
  {
    id: 3,
    title: "Cross-functional Collaboration & Alignment",
    description: "Drives consensus across engineering, product, legal, compliance, and commercial stakeholders without losing delivery momentum.",
    tags: ["Consensus Building", "Legal & Compliance", "Commercial Alignment", "Delivery Momentum"],
  },
  {
    id: 4,
    title: "Negotiation & Conflict Resolution",
    description: "Manages competing priorities across multi-vendor, multi-squad environments while preserving long-term partner and client relationships.",
    tags: ["Negotiation", "Conflict Resolution", "Multi-vendor", "Partner Relations", "Priority Mgmt"],
  },
];

const softSkillsFoundation = {
  title: "Entrepreneurial Mindset & Ownership",
  description: "Re-founder. Intrapreneur : Builds internal platforms as ventures, not projects. Comfortable with zero-to-one ambiguity and wired for execution.",
  tags: ["Re-founder", "Intrapreneur", "Zero-to-One", "Platform Ventures", "Execution", "Ambiguity Tolerance"],
};

/* ─── Component ─── */

export function Home() {
  const [activeTab, setActiveTab] = useState<'corporate' | 'entrepreneurial'>('corporate');
  const [activeSkillsTab, setActiveSkillsTab] = useState<'hard' | 'soft'>('hard');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper function to convert URLs to clickable links
  const renderDescriptionWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) =>
      urlRegex.test(part) ? (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          {part}
        </a>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <main className="flex-1 pt-5">

      {/* ═══════════════════════════════════════════
          HERO SECTION (FR-AP-002)
          Split layout: elevator pitch left, photo right
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-[819px] flex items-center overflow-hidden bg-surface py-20">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="inline-flex items-center px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-xs font-label uppercase tracking-widest font-semibold">
              Professional Portfolio
            </div>

            <div className="space-y-1">
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.1] tracking-tight">
                Laurent Vincentelli
              </h1>

              <p className="font-body text-xl md:text-2xl font-bold italic text-secondary">
                Digital &amp; AI Platforms Lead, Refounder
              </p>
            </div>

            <div className="space-y-6 text-lg md:text-xl text-secondary leading-relaxed font-body">
              <p>
                I have spent <strong className="text-on-surface">15+ years</strong> building and scaling the platform layer that sits between raw compute and the people who need to use it.
              </p>
              <ul className="space-y-3 list-none">
                <li className="flex gap-3">
                  <span className="text-on-surface">−</span>
                  <span><strong className="text-on-surface bg-tertiary-fixed px-2 py-1 rounded">The pattern:</strong> a brilliant multidisciplinary team with world-class infrastructure acces and a missing platform layer costing them velocity.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-on-surface">−</span>
                  <span><strong className="text-on-surface bg-tertiary-fixed px-2 py-1 rounded">The approach:</strong> Start with the customer, map the friction, systematically partner with stakeholders to secure funding/budget. Then hire Talent, assemble the right team topology, lead the value streams that build the platform, ship with cadence, and scale (or pivot).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-on-surface">−</span>
                  <span><strong className="text-on-surface bg-tertiary-fixed px-2 py-1 rounded">The result:</strong> zero-friction vertical user experiences, translating on-premises and hyperscaler infrastructure into platforms that actually scale the business.</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 pt-4">
              <button
                onClick={() => scrollToSection('career-timeline')}
                className="bg-primary text-on-primary px-8 py-3.5 rounded-xl font-medium font-body text-sm hover:bg-primary-container hover:scale-105 transition-all duration-300"
              >
                Career Timeline
              </button>
              <button
                onClick={() => scrollToSection('skills-expertise')}
                className="bg-primary text-on-primary px-8 py-3.5 rounded-xl font-medium font-body text-sm hover:bg-primary-container hover:scale-105 transition-all duration-300"
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
          </motion.div>

          {/* Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img
                alt="Laurent Vincentelli Profile"
                className="w-full h-full object-cover"
                src="/images/laurent-profile.jpg"
              />
            </div>
            {/* Decorative blur element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tertiary-fixed-dim/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CAREER TIMELINE (FR-AP-003)
          Dual Arc: Corporate + Entrepreneurial
          Desktop: 50/50 side-by-side panels with divider
          Mobile: Tab toggle (Employee / Founder)
      ═══════════════════════════════════════════ */}
      <section id="career-timeline" className="py-32 bg-surface-container-high">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

          {/* Section Header */}
          <div className="mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-xs font-label uppercase tracking-widest font-semibold mb-4">
              Timeline
            </div>
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">Career Timeline</h2>
            <p className="font-body text-secondary max-w-xl">
              Scaling a multi-dimensional career path towards a T-shaped profile with alternative streams (entrepreneurship and side ventures).
            </p>
          </div>

          {/* ── Mobile: Tab Toggle ── */}
          <div className="md:hidden">
            <div className="flex border-b border-outline-variant/30 mb-12">
              <button
                onClick={() => setActiveTab('corporate')}
                className={`flex-1 py-3 font-label font-bold text-sm uppercase tracking-widest transition-colors ${activeTab === 'corporate'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-secondary'
                  }`}
              >
                Employee
              </button>
              <button
                onClick={() => setActiveTab('entrepreneurial')}
                className={`flex-1 py-3 font-label font-bold text-sm uppercase tracking-widest transition-colors ${activeTab === 'entrepreneurial'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-secondary'
                  }`}
              >
                Founder
              </button>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-3 top-0 h-full w-px bg-outline-variant/30" />
              {(activeTab === 'corporate' ? corporateEntries : entrepreneurialEntries).map((entry, index) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative mb-12 last:mb-0"
                >
                  <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-tertiary-fixed-dim border-4 border-surface-container-low z-10 hover:scale-125 transition-transform" />
                  <span className="font-label text-tertiary-fixed-dim text-sm font-bold tracking-widest uppercase">{entry.date}</span>
                  <h3 className="font-headline text-2xl text-primary mt-2">{entry.role}</h3>
                  <p className="font-label text-secondary mb-2">{entry.company}</p>
                  <p className="text-on-surface-variant leading-relaxed">{renderDescriptionWithLinks(entry.description)}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Desktop: Centered Journey Tabs ── */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-surface-container-highest overflow-hidden rounded-xl shadow-sm mb-24 relative">
              {/* Corporate Tab */}
              <button
                onClick={() => setActiveTab('corporate')}
                className={`group relative px-10 text-left transition-all duration-300 hover:bg-surface-container-low py-6 ${activeTab === 'corporate' ? 'bg-surface-container-lowest' : 'bg-surface'
                  }`}
              >
                <div className="flex flex-col gap-2">
                  <span className="font-label text-xs tracking-widest uppercase text-on-surface-variant group-hover:text-secondary transition-colors">Path 01</span>
                  <h2 className={`font-headline text-3xl font-bold text-on-surface ${activeTab === 'corporate' ? '' : 'opacity-60'}`}>Corporate Journey</h2>
                  <p className="font-body text-sm text-on-surface-variant max-w-s mt-2">Digital & AI platforms Lead in Technology Consulting for Big Four and Big Tech. Building and scaling the platform layer that sits between raw compute and the people who need to use it.</p>
                </div>
                {/* Visual Indicator */}
                {activeTab === 'corporate' && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 w-full h-1 bg-tertiary-fixed z-20"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>

              {/* Entrepreneurial Tab */}
              <button
                onClick={() => setActiveTab('entrepreneurial')}
                className={`group relative px-10 text-left transition-all duration-300 hover:bg-surface-container-low py-6 ${activeTab === 'entrepreneurial' ? 'bg-surface-container-lowest' : 'bg-surface'
                  }`}
              >
                <div className="flex flex-col gap-2">
                  <span className="font-label text-xs tracking-widest uppercase text-on-surface-variant group-hover:text-secondary transition-colors">Path 02</span>
                  <h2 className={`font-headline text-3xl font-bold text-on-surface ${activeTab === 'entrepreneurial' ? '' : 'opacity-60'}`}>Entrepreneurial Journey</h2>
                  <p className="font-body text-sm text-on-surface-variant max-w-s mt-2">Refounder at the intersection of Micro-PE and Corporate Venturing. We buy Main Street businesses and use them as platforms to bootstrap and scale net-new business models.</p>
                </div>
                {/* Visual Indicator */}
                {activeTab === 'entrepreneurial' && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 w-full h-1 bg-tertiary-fixed z-20"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </div>

            {/* Journey Timeline Content */}
            <div className="max-w-6xl mx-auto relative px-4">
              {/* Centered Vertical Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 hidden md:block" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-4"
                >
                  {(activeTab === 'corporate' ? corporateEntries : entrepreneurialEntries).map((entry, index) => (
                    <div
                      key={entry.id}
                      className={`relative flex items-center mb-24 last:mb-0 ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                        }`}
                    >
                      {/* Central Point */}
                      <div className="absolute left-1/2 -ml-3 top-2 w-6 h-6 rounded-full bg-tertiary-fixed-dim border-4 border-surface-container-low z-20 hover:scale-125 transition-transform hidden md:block" />

                      {/* Content Card */}
                      <div className={`w-full md:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'md:pr-8 text-right' : 'md:pl-8 text-left'
                        }`}>
                        <span className="font-label text-tertiary-fixed-dim text-lg font-bold tracking-widest uppercase">{entry.date}</span>
                        <h4 className="font-headline text-4xl text-primary mt-4 mb-2">{entry.role}</h4>
                        <p className="font-label text-2xl text-secondary mb-6">{entry.company}</p>
                        <div className={`text-on-surface-variant text-xl leading-relaxed font-body ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                          }`}>
                          {renderDescriptionWithLinks(entry.description)}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SKILLS & EXPERTISE (FR-AP-002B)
          Tabbed Interface: Hard skills vs Soft skills
          Desktop: Tabs with 2-column grid content
          Mobile: Existing stacked layout (preserved)
      ═══════════════════════════════════════════ */}
      <section id="skills-expertise" className="py-32 bg-surface-container-lowest">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-xs font-label uppercase tracking-widest font-semibold mb-4">
                Skills
              </div>
              <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">Skills &amp; Expertise</h2>
              <p className="font-body text-secondary max-w-xl">
                Hard skills built over 15+ years. Soft skills forged across 30+ engagements. The synergy between them is the value I aim to provide to my customers..
              </p>
            </div>
            <button onClick={() => scrollToSection('top')} className="font-label text-xs font-bold uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-on-primary-container transition-colors">
              Back to top
            </button>
          </div>

          {/* ── Desktop: Tabbed Interface (Hard vs Soft Skills) ── */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-surface-container-highest overflow-hidden rounded-xl shadow-sm mb-20 relative">
              {/* Hard Skills Tab */}
              <button
                onClick={() => setActiveSkillsTab('hard')}
                className={`group relative px-10 text-left transition-all duration-300 hover:bg-surface-container-low py-6 ${activeSkillsTab === 'hard' ? 'bg-surface-container-lowest' : 'bg-surface'
                  }`}
              >
                <div className="flex flex-col gap-2">
                  <span className="font-label text-xs tracking-widest uppercase text-on-surface-variant group-hover:text-secondary transition-colors">Technologies & Flow</span>
                  <h2 className={`font-headline text-3xl font-bold text-on-surface ${activeSkillsTab === 'hard' ? '' : 'opacity-60'}`}>Hard Skills</h2>
                  <p className="font-body text-sm text-on-surface-variant max-w-xs mt-2"> From Digital & AI Technologies to Engineering Practices and Frameworks. </p>
                </div>
                {/* Visual Indicator */}
                {activeSkillsTab === 'hard' && (
                  <motion.div
                    layoutId="activeSkillsUnderline"
                    className="absolute bottom-0 left-0 w-full h-1 bg-tertiary-fixed z-20"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>

              {/* Soft Skills Tab */}
              <button
                onClick={() => setActiveSkillsTab('soft')}
                className={`group relative px-10 text-left transition-all duration-300 hover:bg-surface-container-low py-6 ${activeSkillsTab === 'soft' ? 'bg-surface-container-lowest' : 'bg-surface'
                  }`}
              >
                <div className="flex flex-col gap-2">
                  <span className="font-label text-xs tracking-widest uppercase text-on-surface-variant group-hover:text-secondary transition-colors">Leadership & Outcomes</span>
                  <h2 className={`font-headline text-3xl font-bold text-on-surface ${activeSkillsTab === 'soft' ? '' : 'opacity-60'}`}>Soft Skills</h2>
                  <p className="font-body text-sm text-on-surface-variant max-w-xs mt-2">People Centricity, Business Fluency and Entrepreneurial Mindset.</p>
                </div>
                {/* Visual Indicator */}
                {activeSkillsTab === 'soft' && (
                  <motion.div
                    layoutId="activeSkillsUnderline"
                    className="absolute bottom-0 left-0 w-full h-1 bg-tertiary-fixed z-20"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </div>

            {/* Skills Content Grid */}
            <div className="max-w-7xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkillsTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-2 gap-6">
                    {(activeSkillsTab === 'hard' ? hardSkills : softSkills).map((skill, index) => (
                      <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="bg-surface-container-lowest rounded-xl p-6 border border-tertiary-fixed/60 shadow-sm"
                        style={{ borderTop: '3px solid var(--color-primary)' }}
                      >
                        <h3 className="font-headline text-xl font-bold text-primary mb-2">{skill.title}</h3>
                        <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4">{skill.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {skill.tags.map((tag) => (
                            <span key={tag} className="bg-tertiary-fixed text-on-tertiary-fixed font-label text-xs font-semibold px-3 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Foundational Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="bg-surface-container-lowest rounded-xl p-6 border border-tertiary-fixed/60 shadow-sm"
                    style={{ borderTop: '4px solid var(--color-primary)' }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="font-headline text-xl font-bold text-primary mb-2">
                          {(activeSkillsTab === 'hard' ? hardSkillsFoundation : softSkillsFoundation).title}
                        </h3>
                        <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                          {(activeSkillsTab === 'hard' ? hardSkillsFoundation : softSkillsFoundation).description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 max-w-md md:justify-end">
                        {(activeSkillsTab === 'hard' ? hardSkillsFoundation : softSkillsFoundation).tags.map((tag) => (
                          <span key={tag} className="bg-tertiary-fixed text-on-tertiary-fixed font-label text-xs font-semibold px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── Mobile: stacked layout ── */}
          <div className="md:hidden space-y-12">
            {[
              { label: 'Hard Skills', items: hardSkills, foundation: hardSkillsFoundation },
              { label: 'Soft Skills', items: softSkills, foundation: softSkillsFoundation },
            ].map(({ label, items, foundation }) => (
              <div key={label}>
                <div className="font-label text-sm font-bold uppercase tracking-widest text-primary pb-2.5 border-b-2 border-tertiary-fixed-dim mb-4">
                  {label}
                </div>
                <div className="space-y-3">
                  {items.map((skill) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.4 }}
                      className="bg-surface-container-lowest rounded-xl p-4 border border-tertiary-fixed/60 shadow-sm"
                      style={{ borderTop: '3px solid var(--color-primary)' }}
                    >
                      <h3 className="font-headline text-lg font-bold text-primary mb-1 leading-snug">{skill.title}</h3>
                      <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-3">{skill.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {skill.tags.map((tag) => (
                          <span key={tag} className="bg-tertiary-fixed text-on-tertiary-fixed font-label text-[10px] font-semibold px-2.5 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="bg-surface-container-lowest rounded-xl p-4 border border-tertiary-fixed/60 shadow-sm"
                    style={{ borderTop: '3px solid var(--color-primary)' }}
                  >
                    <h3 className="font-headline text-lg font-bold text-primary mb-1 leading-snug">{foundation.title}</h3>
                    <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-3">{foundation.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {foundation.tags.map((tag) => (
                        <span key={tag} className="bg-tertiary-fixed text-on-tertiary-fixed font-label text-[10px] font-semibold px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CASE STUDIES & ACHIEVEMENTS (FR-AP-004)
          Single-card carousel: auto-rotate 6s, hover-pause
          Card reveal: AnimatePresence slide-down below carousel
      ═══════════════════════════════════════════ */}
      <section id="case-studies-achievements" className="py-32 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">
                Case Studies &amp; Achievements
              </h2>
              <p className="font-body text-secondary max-w-xl">
                Impact in Action: Detailed insights into pivotal professional engagements that define my track record of success.
              </p>
            </div>
            <button onClick={() => scrollToSection('top')} className="font-label text-xs font-bold uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-on-primary-container transition-colors">
              Back to top
            </button>
          </div>

          {/* Achievement carousel — single card, auto-rotating */}
          <AchievementsCarousel
            caseStudies={caseStudies}
            expandedCard={expandedCard}
            onToggleExpand={(id) => setExpandedCard(expandedCard === id ? null : id)}
          />

          {/* Card Reveal Animation — full-width panel below the carousel */}
          <AnimatePresence>
            {expandedCard !== null && (
              <motion.div
                id={`insight-panel-${expandedCard}`}
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
                  {expandedCard === 4 && <AIFactoryPlatformDashboard />}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>
    </main>
  );
}
