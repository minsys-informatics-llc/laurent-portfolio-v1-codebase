export function Footer() {
  const scrollLinks = [
    { name: "Career Timeline", sectionId: "career-timeline" },
    { name: "Skills & Expertise", sectionId: "skills-expertise" },
    { name: "Case Studies", sectionId: "case-studies-achievements" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full py-16 px-6 md:px-12 bg-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-screen-2xl mx-auto">
        {/* Left: Branding */}
        <div className="space-y-4">
          <div className="font-headline text-xl font-bold text-primary">
            Laurent Vincentelli
          </div>
          <p className="font-body text-sm uppercase tracking-widest text-outline max-w-md leading-relaxed">
            &copy; {new Date().getFullYear()} Laurent Vincentelli. Professional Portfolio.
          </p>
        </div>

        {/* Right: Links */}
        <div className="flex flex-wrap md:justify-end gap-x-8 gap-y-4 font-body text-sm uppercase tracking-widest">
          {scrollLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.sectionId)}
              className="text-outline hover:text-primary hover:underline decoration-primary/30 underline-offset-4 transition-all duration-300"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-screen-2xl mx-auto mt-12 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/laurentvincentelli"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-variant transition-colors"
            aria-label="LinkedIn"
          >
            <span className="material-symbols-outlined text-primary text-xl">brand_family</span>
          </a>
        </div>
        <a
          href="https://minsys.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="font-label text-xs font-bold uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-on-primary-container transition-colors"
        >
          Visit minsys.xyz
        </a>
        <div className="text-outline text-[10px] font-label uppercase tracking-widest">
          Curated on Earth &bull; Distributed Globally
        </div>
      </div>
    </footer>
  );
}
