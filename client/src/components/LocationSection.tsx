/*
  NOKUNA Standort & Öffnungszeiten Section
  Beton-Textur, weisse Schrift (#FFFFFF)
  Kontaktdaten: +41 79 939 99 69, Instagram, TikTok
*/

const CONCRETE_LIGHT = "https://private-us-east-1.manuscdn.com/sessionFile/tUJTqHz73ytRnf1iRkfWBV/sandbox/P0f8oV4qz0oorICoYdxEt9-img-2_1771486598000_na1fn_Y29uY3JldGUtdGV4dHVyZS1saWdodA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdFVKVHFIejczeXRSbmYxaVJrZldCVi9zYW5kYm94L1AwZjhvVjRxejBvb3JJQ29ZZHhFdDktaW1nLTJfMTc3MTQ4NjU5ODAwMF9uYTFmbl9ZMjl1WTNKbGRHVXRkR1Y0ZEhWeVpTMXNhV2RvZEEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nsjn3Ax1HZcxNnq8Rg2iTPXqokKJm27zBcwz0W2znJ5ZU8vrzVE9Egg1jGtvL4gzXZBRznCjwRjKyrz~n97UxZD01CHqV2-04RbpvNwR~fztNCEtl-iDU3MPX~ppH1DSjk3H4aIpBmPonINXa6DlT~Cke0HpcLOmgbJeop~q7oOwAENHojiWwh5rO4IDGNlP~RZCgIYRXTcGPRYGGp~TvGkTk8UH4JeF2e9SaEjRqFiYBhwUZfNvRQJjIEuHdQaur4SGcihsPMdqPoVQmnRQiI1zdP3fAGXivI2QdyvqfOTt~PAruOXfPG0cw-7mVsMjUymFch2LkVUs-1VtqCyH4g__";

const openingHours = [
  { day: "Montag – Donnerstag", time: "11:00 – 00:30" },
  { day: "Freitag", time: "11:00 – 02:00" },
  { day: "Samstag", time: "13:00 – 02:00" },
  { day: "Sonntag", time: "13:00 – 00:30" },
];

export default function LocationSection() {
  return (
    <section
      id="kontakt"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#3A3A3A" }}
    >
      {/* Concrete texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${CONCRETE_LIGHT}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
        }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(58, 58, 58, 0.8)" }} />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 50%, rgba(200, 149, 108, 0.05) 0%, transparent 50%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="scroll-reveal mb-16">
          <h2
            className="heading-display"
            style={{ color: "#C8956C", fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "0.2em", marginBottom: "12px" }}
          >
            Find Us
          </h2>
          <span className="sr-only" role="heading" aria-level={2}>Standort & Öffnungszeiten</span>
          <div className="accent-line mt-4" />
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row scroll-reveal" style={{ gap: "48px" }}>
          {/* Left: Info */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <p className="heading-display mb-4" style={{ color: "#FFFFFF", fontSize: "22px", letterSpacing: "0.1em" }}>
                NOKUNA
              </p>

              {/* Address */}
              <div className="mb-6">
                <p style={{ color: "#B0A090", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>
                  Adresse
                </p>
                <p style={{ color: "#FFFFFF", fontSize: "15px" }}>Obergrundstrasse 73</p>
                <p style={{ color: "#FFFFFF", fontSize: "15px" }}>6003 Luzern, Schweiz</p>
              </div>

              {/* Parking */}
              <div className="mb-6">
                <p style={{ color: "#B0A090", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>
                  Parkmöglichkeiten
                </p>
                <p style={{ color: "#FFFFFF", fontSize: "15px" }}>Parkhaus Himmelrich 3</p>
                <p style={{ color: "#B0A090", fontSize: "13px" }}>Bundesstrasse 16, 6003 Luzern</p>
              </div>

              {/* Opening Hours */}
              <div className="mb-6">
                <p style={{ color: "#B0A090", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>
                  Öffnungszeiten
                </p>
                <div>
                  {openingHours.map((h) => (
                    <div key={h.day} className="flex justify-between py-1" style={{ maxWidth: "320px" }}>
                      <span style={{ color: "#B0A090", fontSize: "14px" }}>{h.day}</span>
                      <span style={{ color: h.time === "Geschlossen" ? "#666" : "#FFFFFF", fontSize: "14px" }}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="mb-4">
                <p style={{ color: "#B0A090", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>
                  Telefon & WhatsApp
                </p>
                <a
                  href="tel:+41799399969"
                  className="block transition-colors duration-300"
                  style={{ color: "#FFFFFF", fontSize: "15px" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C8956C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                >
                  +41 79 939 99 69
                </a>
                <a
                  href="https://wa.me/41799399969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-2 transition-colors duration-300"
                  style={{ color: "#C8956C", fontSize: "14px", gap: "6px" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#C8956C")}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Per WhatsApp schreiben
                </a>
              </div>

              {/* Email */}
              <div className="mb-6">
                <p style={{ color: "#B0A090", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>
                  E-Mail
                </p>
                <a
                  href="mailto:info@nokuna.ch"
                  className="transition-colors duration-300"
                  style={{ color: "#FFFFFF", fontSize: "15px" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C8956C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                >
                  info@nokuna.ch
                </a>
              </div>

              {/* Social Media */}
              <div className="flex items-center" style={{ gap: "16px" }}>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/nokuna.bar?igsh=MWRvMzMwdWQwNjh1aA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-colors duration-300"
                  style={{ gap: "8px", color: "#B0A090" }}
                  aria-label="NOKUNA auf Instagram"
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C8956C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#B0A090")}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="18" cy="6" r="1" fill="currentColor"/>
                  </svg>
                  <span style={{ fontSize: "13px" }}>@nokuna.bar</span>
                </a>
                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@nokuna.ch?_r=1&_t=ZN-942tgxxseec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-colors duration-300"
                  style={{ gap: "8px", color: "#B0A090" }}
                  aria-label="NOKUNA auf TikTok"
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C8956C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#B0A090")}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontSize: "13px" }}>@nokuna.ch</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Google Maps Embed */}
          <div className="lg:w-1/2">
            <div
              className="w-full overflow-hidden"
              style={{
                aspectRatio: "4/3",
                border: "1px solid #4A4A4A",
                minHeight: "300px",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.5!2d8.3!3d47.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sObergrundstrasse+73%2C+6003+Luzern!5e0!3m2!1sde!2sch!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(80%) invert(92%) contrast(90%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NOKUNA Standort — Obergrundstrasse 73, 6003 Luzern"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
