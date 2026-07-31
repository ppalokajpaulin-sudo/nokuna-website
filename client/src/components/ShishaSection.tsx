/*
  NOKUNA Shisha Section — Priorität #1
  Beton-Textur v2 sichtbar, weisse Schrift (#FFFFFF)
*/

// Removed Manus CDN URL

// Removed Manus CDN URL



export default function ShishaSection() {
  return (
    <section
      id="shisha"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#3A3A3A" }}
    >
      {/* Concrete texture background — sichtbar */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.25,
        }}
      />
      {/* Dark overlay to maintain readability */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(58, 58, 58, 0.75)" }} />

      {/* Warm light gradient from top right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 10%, rgba(200, 149, 108, 0.06) 0%, transparent 50%)",
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="scroll-reveal mb-16">
          <h2
            className="heading-display"
            style={{ color: "#C8956C", fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "0.2em", marginBottom: "12px" }}
          >
            Premium Shisha
          </h2>
          <span className="sr-only" role="heading" aria-level={2}>Premium Shisha in Luzern</span>
          <p style={{ color: "#B0A090", fontSize: "16px", fontWeight: 300, letterSpacing: "0.05em" }}>
            Professionell zubereitet. Beste Tabaksorten. Perfekter Rauch.
          </p>
          <div className="accent-line mt-6" />
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row" style={{ gap: "48px" }}>
          {/* Left Side — Text (60%) */}
          <div className="lg:w-3/5 scroll-reveal">
            <p
              className="mb-8"
              style={{
                color: "#FFFFFF",
                fontSize: "16px",
                lineHeight: 1.8,
                fontWeight: 300,
                maxWidth: "600px",
              }}
            >
              Bei NOKUNA ist Shisha keine Nebensache — sie ist eine Kunstform. Jede Hookah wird von Hand
              vorbereitet. Nur die besten Tabaksorten. Perfekt temperierte Kohle. Ein Raucherlebnis auf einem
              Level, das Luzern so nicht kennt. Als führende Shisha Bar Luzern setzen wir Massstäbe für
              Premium Hookah in der Zentralschweiz.
            </p>



            {/* CTA */}
            <a
              href="#reservation"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#reservation")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block uppercase tracking-[0.15em] text-sm px-8 py-3 transition-all duration-300"
              style={{
                border: "1px solid #C8956C",
                color: "#FFFFFF",
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
              Tisch reservieren
            </a>
          </div>

          {/* Right Side — Image (40%) */}
          <div className="lg:w-2/5 scroll-reveal">
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: "3/4",
                backgroundColor: "#2C2C2C",
                border: "1px solid #4A4A4A",
              }}
            >
              <img
                src={SHISHA_IMG}
                alt="Premium Shisha Hookah Lounge Luzern NOKUNA"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Subtle overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(26, 26, 26, 0.3) 0%, transparent 40%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
