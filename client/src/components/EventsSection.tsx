/*
  NOKUNA Events Section — Priorität #3
  Beton-Textur v2 + Event-Bild Hintergrund, weisse Schrift (#FFFFFF)
*/

// Removed Manus CDN URL

// Removed Manus CDN URL

const eventFeatures = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6l3-6z" stroke="#C8956C" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: "Private Events & Geburtstage",
    desc: "Exklusive Feiern in einzigartiger Atmosphäre",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="16" rx="1" stroke="#C8956C" strokeWidth="1.5" fill="none"/>
        <path d="M4 12h24M12 8v16" stroke="#C8956C" strokeWidth="1"/>
      </svg>
    ),
    title: "Firmen-Afterworks & Teamevents",
    desc: "Der perfekte Rahmen für Business und Team",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke="#C8956C" strokeWidth="1.5" fill="none"/>
        <path d="M16 10v6l4 4" stroke="#C8956C" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Exklusive Abende auf Anfrage",
    desc: "Massgeschneiderte Erlebnisse für besondere Anlässe",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 24V12l8-6 8 6v12H8z" stroke="#C8956C" strokeWidth="1.5" fill="none"/>
        <path d="M14 24v-6h4v6" stroke="#C8956C" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Individuelle Drink- & Shisha-Pakete",
    desc: "Personalisierte Packages für jeden Anlass",
  },
];

export default function EventsSection() {
  return (
    <section
      id="events"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#3A3A3A" }}
    >
      {/* Concrete texture background */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.15,
        }}
      />
      {/* Event image overlay */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.1,
        }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(58, 58, 58, 0.82)" }} />

      <div className="container relative z-10">
        {/* Header */}
        <div className="scroll-reveal mb-8">
          <h2
            className="heading-display"
            style={{ color: "#C8956C", fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "0.2em", marginBottom: "12px" }}
          >
            Events & Private Bookings
          </h2>
          <span className="sr-only" role="heading" aria-level={2}>Events & Private Bookings in Luzern</span>
          <p style={{ color: "#B0A090", fontSize: "16px", fontWeight: 300, letterSpacing: "0.05em" }}>
            Dein Abend. Dein Stil.
          </p>
          <div className="accent-line mt-6" />
        </div>

        {/* Text */}
        <p
          className="scroll-reveal mb-12"
          style={{ color: "#FFFFFF", fontSize: "16px", lineHeight: 1.8, fontWeight: 300, maxWidth: "700px" }}
        >
          Von privaten Geburtstagen über Firmen-Afterworks bis zu exklusiven Abenden — NOKUNA bietet den
          Rahmen für besondere Anlässe. Premium Shisha, handgemixte Cocktails und eine Atmosphäre die man
          nicht reproduzieren kann. Als Event Location Luzern setzen wir auf Qualität statt Quantität.
          Geburtstag feiern Luzern oder Firmen Event Luzern — bei uns stimmt der Rahmen.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 scroll-reveal mb-12" style={{ gap: "16px" }}>
          {eventFeatures.map((feature) => (
            <div
              key={feature.title}
              className="p-6 transition-all duration-300"
              style={{
                backgroundColor: "rgba(44, 44, 44, 0.7)",
                border: "1px solid #4A4A4A",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C8956C")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#4A4A4A")}
            >
              <div className="mb-3">{feature.icon}</div>
              <p className="heading-display mb-1" style={{ color: "#FFFFFF", fontSize: "16px", letterSpacing: "0.1em" }}>
                {feature.title}
              </p>
              <p style={{ color: "#B0A090", fontSize: "13px" }}>{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="scroll-reveal">
          <a
            href="#reservation"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#reservation")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block uppercase tracking-[0.15em] text-sm px-10 py-4 transition-all duration-300"
            style={{
              backgroundColor: "#C8956C",
              color: "#1A1A1A",
              fontWeight: 600,
              fontSize: "14px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#8B7355")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C8956C")}
          >
            Event anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
