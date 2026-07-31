/*
  NOKUNA Footer
  Beton-Textur Hintergrund, goldene Trennlinie, Logo, Links, Social, Copyright
  Weisse Schrift (#FFFFFF)
  Instagram: @nokuna.bar, TikTok: @nokuna.ch, WhatsApp: +41 79 939 99 69
*/

// Removed Manus CDN URL

const footerLinks = [
  { label: "Shisha", href: "#shisha" },
  { label: "Cocktails", href: "#cocktails" },
  { label: "Events", href: "#events" },
  { label: "Menü", href: "#menu" },
  { label: "Reservieren", href: "#reservation" },
];

export default function FooterSection() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative" style={{ backgroundColor: "#1A1A1A" }}>
      {/* Concrete texture — very subtle */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.08,
        }}
      />

      {/* Gold separator line */}
      <div style={{ height: "1px", backgroundColor: "#C8956C", position: "relative", zIndex: 1 }} />

      <div className="container py-16 relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <img
            alt="NOKUNA" style={{ width: "100%", height: "auto" }} className="placeholder"
            alt="NOKUNA Logo"
            className="inline-block"
            style={{ height: "240px", width: "auto" }}
          />
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center mb-8" style={{ gap: "24px" }}>
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm uppercase tracking-[0.1em] transition-colors duration-300"
              style={{ color: "#B0A090", fontSize: "13px" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C8956C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#B0A090")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center mb-6" style={{ gap: "20px" }}>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/nokuna.bar?igsh=MWRvMzMwdWQwNjh1aA=="
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300"
            style={{ color: "#B0A090" }}
            aria-label="NOKUNA auf Instagram"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C8956C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#B0A090")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="18" cy="6" r="1" fill="currentColor"/>
            </svg>
          </a>
          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@nokuna.ch?_r=1&_t=ZN-942tgxxseec"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300"
            style={{ color: "#B0A090" }}
            aria-label="NOKUNA auf TikTok"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C8956C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#B0A090")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/41799399969"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300"
            style={{ color: "#B0A090" }}
            aria-label="NOKUNA auf WhatsApp"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C8956C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#B0A090")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>

        {/* Address & Phone */}
        <div className="text-center mb-8">
          <p style={{ color: "#B0A090", fontSize: "13px", marginBottom: "4px" }}>
            Obergrundstrasse 73, 6003 Luzern
          </p>
          <a
            href="tel:+41799399969"
            className="transition-colors duration-300"
            style={{ color: "#B0A090", fontSize: "14px" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C8956C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#B0A090")}
          >
            +41 79 939 99 69
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p style={{ color: "#666", fontSize: "12px", marginBottom: "4px" }}>
            &copy; 2026 NOKUNA. Alle Rechte vorbehalten.
          </p>
          <p style={{ color: "#3A3A3A", fontSize: "10px" }}>
            Premium Bar & Hookah Lounge Luzern
          </p>
        </div>
      </div>
    </footer>
  );
}
