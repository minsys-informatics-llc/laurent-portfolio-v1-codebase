import { useState } from "react";

const scrollToSection = (id: string) => {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const navLinks = [
  { name: "Timeline", sectionId: "career-timeline" },
  { name: "Skills", sectionId: "skills-expertise" },
  { name: "Achievements", sectionId: "case-studies-achievements" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0px_12px_32px_rgba(19,27,46,0.04)]">
      <div className="flex justify-between items-center h-20 px-6 md:px-12 w-full max-w-screen-2xl mx-auto">
        {/* Site Identity */}
        <button
          onClick={() => scrollToSection("top")}
          className="font-headline text-3xl font-bold text-primary tracking-tight"
        >
          Laurent Vincentelli
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.sectionId)}
              className="font-headline text-lg tracking-tight font-medium text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="https://linkedin.com/in/laurentvincentelli"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-medium hover:bg-primary-container transition-all duration-300 ease-in-out font-body text-sm inline-block"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-secondary hover:text-primary focus:outline-none"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-outline-variant/20 bg-white/95 backdrop-blur-xl">
          <div className="space-y-1 px-6 pb-4 pt-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToSection(link.sectionId);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left rounded-lg px-4 py-3 font-headline text-lg font-medium text-secondary hover:text-primary hover:bg-surface-container-low transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-3">
              <a
                href="https://laurent.vincentelli.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-primary text-on-primary px-6 py-2.5 rounded-xl font-medium font-body text-sm text-center block"
              >
                Visit my Blog
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
