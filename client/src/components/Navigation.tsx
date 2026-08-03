/*
  NOKUNA Navigation — Fixed Top
  Transparent auf Hero, beim Scrollen Beton-Textur mit Blur
  Logo links, Links rechts, CTA "Reservieren"
  Weisse Schrift (#FFFFFF)
*/

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Shisha", href: "#shisha" },
  { label: "Cocktails", href: "#cocktails" },
  { label: "Events", href: "#events" },
  { label: "Menü", href: "#menu" },
  { label: "Über uns", href: "#about" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(26, 26, 26, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(74, 74, 74, 0.3)" : "1px solid transparent",
        }}
        aria-label="Hauptnavigation"
      >
        <div className="container flex items-center justify-between" style={{ height: "140px" }}>
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663163726953/xTdiFxceotaSZaCX.png"
              alt="NOKUNA Logo"
              style={{ height: "210px", width: "auto" }}
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center" style={{ gap: "32px" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm uppercase tracking-[0.15em] transition-colors duration-300"
                style={{
                  color: "#B0A090",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "13px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C8956C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#B0A090")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={(e) => handleNavClick(e, "#reservation")}
              className="text-sm uppercase tracking-[0.1em] px-5 py-2 transition-all duration-300"
              style={{
                border: "1px solid #C8956C",
                color: "#FFFFFF",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#C8956C";
                e.currentTarget.style.color = "#1A1A1A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#FFFFFF";
              }}
            >
              Reservieren
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center"
            style={{ width: "30px", height: "30px", gap: "5px" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Menü schliessen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
          >
            <span
              className="block transition-all duration-300"
              style={{
                width: "24px",
                height: "1px",
                backgroundColor: "#FFFFFF",
                transform: mobileOpen ? "rotate(45deg) translateY(4px)" : "none",
              }}
            />
            <span
              className="block transition-all duration-300"
              style={{
                width: "24px",
                height: "1px",
                backgroundColor: "#FFFFFF",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block transition-all duration-300"
              style={{
                width: "24px",
                height: "1px",
                backgroundColor: "#FFFFFF",
                transform: mobileOpen ? "rotate(-45deg) translateY(-4px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-40 lg:hidden flex flex-col items-center justify-center transition-all duration-500"
        style={{
          backgroundColor: "rgba(26, 26, 26, 0.98)",
          backdropFilter: "blur(20px)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
      >
        <div className="flex flex-col items-center" style={{ gap: "32px" }}>
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="heading-display transition-colors duration-300"
              style={{
                color: "#FFFFFF",
                fontSize: "32px",
                letterSpacing: "0.15em",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.4s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s, color 0.3s`,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C8956C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={(e) => handleNavClick(e, "#reservation")}
            className="mt-4 px-8 py-3 uppercase tracking-[0.15em] text-sm transition-all duration-300"
            style={{
              border: "1px solid #C8956C",
              color: "#FFFFFF",
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#C8956C";
              e.currentTarget.style.color = "#1A1A1A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#FFFFFF";
            }}
          >
            Reservieren
          </a>
        </div>
      </div>
    </header>
  );
}
