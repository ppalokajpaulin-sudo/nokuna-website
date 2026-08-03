/*
  NOKUNA Events Section — Priorität #3
  Beton-Textur v2 + Event-Bild Hintergrund, weisse Schrift (#FFFFFF)
*/

const EVENT_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/tUJTqHz73ytRnf1iRkfWBV/sandbox/Ftog5APT8bANdVZRQustPk-img-5_1771352634000_na1fn_ZXZlbnQtYXRtb3NwaGVyZQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdFVKVHFIejczeXRSbmYxaVJrZldCVi9zYW5kYm94L0Z0b2c1QVBUOGJBTmRWWlJRdXN0UGstaW1nLTVfMTc3MTM1MjYzNDAwMF9uYTFmbl9aWFpsYm5RdFlYUnRiM053YUdWeVpRLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QlGjiyr6TS7vRYCdmp94qnW9T3wYjYmSHK6qPXeRiMExKF2Nqx99GA6ZWeylW72htrFXbJkJ7BdgzbPKb5Jhv0QUeCMX6rBOeRPAdsRzO78du0gFpfATb-9xYvcBh7yPxcDVPd-wQn~hmIF5V9~UrUmvMqY7hcZ6FAXzeBN2qrCII4xQAuBVe5MfJ7qMoVzNcu7xVfPubB14U1NojZ8MPz1nbEgQ9T5Psq3u1CXLwrvSuTjDsZKeAPDH0E6BHdi23z8aVbsTQHmVI64Z1raDMYd2IkIzn--TmVMSx~uWnG8DBgrpHfoqGfeeKvb4AdVcgv6S8sxvdrSrj8pSA~MdXA__";

const CONCRETE_LIGHT = "https://private-us-east-1.manuscdn.com/sessionFile/tUJTqHz73ytRnf1iRkfWBV/sandbox/P0f8oV4qz0oorICoYdxEt9-img-2_1771486598000_na1fn_Y29uY3JldGUtdGV4dHVyZS1saWdodA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdFVKVHFIejczeXRSbmYxaVJrZldCVi9zYW5kYm94L1AwZjhvVjRxejBvb3JJQ29ZZHhFdDktaW1nLTJfMTc3MTQ4NjU5ODAwMF9uYTFmbl9ZMjl1WTNKbGRHVXRkR1Y0ZEhWeVpTMXNhV2RvZEEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nsjn3Ax1HZcxNnq8Rg2iTPXqokKJm27zBcwz0W2znJ5ZU8vrzVE9Egg1jGtvL4gzXZBRznCjwRjKyrz~n97UxZD01CHqV2-04RbpvNwR~fztNCEtl-iDU3MPX~ppH1DSjk3H4aIpBmPonINXa6DlT~Cke0HpcLOmgbJeop~q7oOwAENHojiWwh5rO4IDGNlP~RZCgIYRXTcGPRYGGp~TvGkTk8UH4JeF2e9SaEjRqFiYBhwUZfNvRQJjIEuHdQaur4SGcihsPMdqPoVQmnRQiI1zdP3fAGXivI2QdyvqfOTt~PAruOXfPG0cw-7mVsMjUymFch2LkVUs-1VtqCyH4g__";

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
          backgroundImage: `url("${CONCRETE_LIGHT}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />
      {/* Event image overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${EVENT_IMG}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
