/*
  NOKUNA Shisha Section — Priorität #1
  Beton-Textur v2 sichtbar, weisse Schrift (#FFFFFF)
*/

const SHISHA_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/tUJTqHz73ytRnf1iRkfWBV/sandbox/Ftog5APT8bANdVZRQustPk-img-3_1771352658000_na1fn_c2hpc2hhLWF0bW9zcGhlcmU.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdFVKVHFIejczeXRSbmYxaVJrZldCVi9zYW5kYm94L0Z0b2c1QVBUOGJBTmRWWlJRdXN0UGstaW1nLTNfMTc3MTM1MjY1ODAwMF9uYTFmbl9jMmhwYzJoaExXRjBiVzl6Y0dobGNtVS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jI0R4i3IMdfBZtoY8bXO03kOSo1v4rQ~bFjpXe1SQiNfJ93yK0PBp4tfe7bRrojdJku~YXK3wc0Ly5cLmCSNEiPOAvz4FN7yrhLfWSmQ580iq1C-naS-juqdnPnW71JZA6DxW9Ot2Tg-Ny9zgeVG8k1vM2jWCMmNtLlj8~DfyYlAJG~fPXh394WqweBWGIyHut1TkFPW6mSle5BJY6NCuNOCpnFJRds7m6ULy-cYrrdzkh9US9HTnAdV2grRNZOWt3l~Gee4eg49tTJs8Rc7IbWPhgl0Kzb1NqZrQXDu9SyWsOSaMQBOA39SVjiXZ-P2VjqAerLOdLV~BQ-xxE3E9A__";

const CONCRETE_LIGHT = "https://private-us-east-1.manuscdn.com/sessionFile/tUJTqHz73ytRnf1iRkfWBV/sandbox/P0f8oV4qz0oorICoYdxEt9-img-2_1771486598000_na1fn_Y29uY3JldGUtdGV4dHVyZS1saWdodA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdFVKVHFIejczeXRSbmYxaVJrZldCVi9zYW5kYm94L1AwZjhvVjRxejBvb3JJQ29ZZHhFdDktaW1nLTJfMTc3MTQ4NjU5ODAwMF9uYTFmbl9ZMjl1WTNKbGRHVXRkR1Y0ZEhWeVpTMXNhV2RvZEEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nsjn3Ax1HZcxNnq8Rg2iTPXqokKJm27zBcwz0W2znJ5ZU8vrzVE9Egg1jGtvL4gzXZBRznCjwRjKyrz~n97UxZD01CHqV2-04RbpvNwR~fztNCEtl-iDU3MPX~ppH1DSjk3H4aIpBmPonINXa6DlT~Cke0HpcLOmgbJeop~q7oOwAENHojiWwh5rO4IDGNlP~RZCgIYRXTcGPRYGGp~TvGkTk8UH4JeF2e9SaEjRqFiYBhwUZfNvRQJjIEuHdQaur4SGcihsPMdqPoVQmnRQiI1zdP3fAGXivI2QdyvqfOTt~PAruOXfPG0cw-7mVsMjUymFch2LkVUs-1VtqCyH4g__";



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
          backgroundImage: `url("${CONCRETE_LIGHT}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
