import React, { useEffect, useState } from "react";

const links = [
  { label: "Home", to: "#home", id: "home" },
  { label: "About", to: "#about", id: "about" },
  { label: "Timeline", to: "#timeline", id: "timeline" },
  { label: "Projects", to: "#projects", id: "projects" },
  { label: "Contact", to: "#contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);

      const current = links
        .map((link) => document.getElementById(link.id))
        .filter(Boolean)
        .findLast((section) => section.offsetTop <= window.scrollY + 160);

      if (current) {
        setActiveSection(current.id);
      }
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-teal-300 via-cyan-300 to-amber-300 transition-transform duration-200"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          className="group flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
          href="#home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-black text-slate-950 shadow-lg shadow-teal-400/20 transition-transform duration-300 group-hover:scale-105">
            JS
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
            Jyoti Singh
          </span>
        </a>

        <div
          className="flex max-w-[72vw] items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1 shadow-2xl shadow-slate-950/30"
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a
              className={`relative whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition-all duration-300 sm:px-4 sm:text-sm ${
                activeSection === link.id
                  ? "bg-white text-slate-950 shadow-lg shadow-teal-400/20"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
              key={link.to}
              href={link.to}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
