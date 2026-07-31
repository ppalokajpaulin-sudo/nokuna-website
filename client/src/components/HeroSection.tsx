/*
  NOKUNA Hero Section — 100vh Fullscreen
  Beton-Textur v2 Hintergrund (rissig, sichtbar), Rauch-Effekt, Logo zentriert
  Weisse Schrift (#FFFFFF)
*/

// Removed Manus CDN URL - using CSS background instead

export default function HeroSection() {
  const handleScrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    // Use hash navigation instead of scrollIntoView
    window.location.hash = "shisha";
  };

  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: "100vh", minHeight: "600px", backgroundColor: "#1A1A1A" }}
      aria-label="Hero"
    >
      {/* Concrete Texture Background — sichtbar */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.6,
        }}
      />

      {/* Dark vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(26,26,26,0.3) 0%, rgba(26,26,26,0.75) 100%)",
        }}
      />

      {/* Warm radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, rgba(200, 149, 108, 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Smoke elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: "300px",
              height: "400px",
              left: `${20 + i * 25}%`,
              bottom: "10%",
              background: `radial-gradient(ellipse, rgba(200, 149, 108, 0.04) 0%, transparent 70%)`,
              animation: `smoke-drift ${12 + i * 4}s ease-in-out infinite`,
              animationDelay: `${i * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Logo — SVG Text instead of CDN image */}
        <h1
          className="heading-display"
          style={{
            fontSize: "clamp(60px, 15vw, 140px)",
            color: "#FFFFFF",
            marginBottom: "24px",
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            letterSpacing: "0.1em",
            fontWeight: 700,
          }}
        >
          NOKUNA
        </h1>

        {/* Accent line */}
        <div className="accent-line mx-auto" style={{ marginBottom: "24px", width: "80px" }} />

        {/* Subline */}
        <p
          className="heading-display"
          style={{
            color: "#C8956C",
            fontSize: "clamp(16px, 2.5vw, 22px)",
            letterSpacing: "0.2em",
            marginBottom: "12px",
          }}
        >
          Premium Shisha & Cocktails in Luzern
        </p>

        {/* Tagline */}
        <p
          style={{
            color: "#B0A090",
            fontSize: "clamp(14px, 1.5vw, 16px)",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.05em",
            marginBottom: "40px",
          }}
        >
          Beton. Rauch. Perfekte Drinks.
        </p>

        {/* CTA Button */}
        <a
          href="#shisha"
          onClick={handleScrollDown}
          className="uppercase tracking-[0.15em] text-sm px-8 py-3 transition-all duration-300"
          style={{
            border: "1px solid #C8956C",
            color: "#FFFFFF",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
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
          Entdecke NOKUNA
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ animation: "scroll-bounce 2s ease-in-out infinite" }}
      >
        <svg
          width="20"
          height="30"
          viewBox="0 0 20 30"
          fill="none"
          style={{ opacity: 0.5 }}
        >
          <path d="M10 0L10 24" stroke="#B0A090" strokeWidth="1" />
          <path d="M4 18L10 24L16 18" stroke="#B0A090" strokeWidth="1" fill="none" />
        </svg>
      </div>
    </section>
  );
}
