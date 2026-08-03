/*
  NOKUNA Cocktails Section — Priorität #2
  Beton-Textur v2 Hintergrund, weisse Schrift (#FFFFFF)
  Echte Cocktail-Fotos eingebunden
*/

const CONCRETE_DARK = "https://private-us-east-1.manuscdn.com/sessionFile/tUJTqHz73ytRnf1iRkfWBV/sandbox/P0f8oV4qz0oorICoYdxEt9-img-1_1771486592000_na1fn_Y29uY3JldGUtdGV4dHVyZS12Mg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdFVKVHFIejczeXRSbmYxaVJrZldCVi9zYW5kYm94L1AwZjhvVjRxejBvb3JJQ29ZZHhFdDktaW1nLTFfMTc3MTQ4NjU5MjAwMF9uYTFmbl9ZMjl1WTNKbGRHVXRkR1Y0ZEhWeVpTMTJNZy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Ph9b~6ncliEgelnKyZviD-3tcA2MNL0OrFL~oeH~691Gr1UqTXgoU6S187ABq5pNYczSQ6c9dBoRzuaGa8tyfcXiTvJR0~emPqj3XTMip8Ji-NSs59YRTvAp4MildKtrnAvtx6UDBab2wEXF-fCuQ2LcEII-EkxgyLUqpV9kA2t4e2O-urJXAJhKG5KR1y7kOAp55KXKxShDMEkwFP1gHLMBuxvHiUPkHAjXDppkUTrrt471UqW8d2aSBQMckp5T93L9c3f0IbtCHrZ0dnJuKmHcBJhTLxnGtAnMSr9blaJDlZGSXjIOmWf0NRAw2POFP-fNWTNRBOINPLTzGJSE1A__";

// Echte NOKUNA Cocktail-Fotos
const COCKTAIL_MOJITO = "/manus-storage/LUPSTUDIOS-18_05d3d67e.webp";
const COCKTAIL_ESPRESSO = "/manus-storage/LUPSTUDIOS-22_3e2e1c57.webp";
const COCKTAIL_BARTENDER = "/manus-storage/LUPSTUDIOS-13_ac519f46.webp";

const signatureCocktails = [
  { name: "Matcha Ritual" },
  { name: "Urban Heat" },
  { name: "Bloom Spirit" },
  { name: "Night Ember" },
];

const categories = [
  { name: "Klassiker" },
  { name: "Spritz" },
  { name: "Mocktails" },
  { name: "Longdrinks" },
  { name: "Shots" },
];

export default function CocktailsSection() {
  return (
    <section
      id="cocktails"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#2C2C2C" }}
    >
      {/* Concrete texture background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${CONCRETE_DARK}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(44, 44, 44, 0.8)" }} />

      {/* Subtle warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(200, 149, 108, 0.05) 0%, transparent 50%)",
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="scroll-reveal mb-16">
          <h2
            className="heading-display"
            style={{ color: "#C8956C", fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "0.2em", marginBottom: "12px" }}
          >
            Cocktails & Drinks
          </h2>
          <span className="sr-only" role="heading" aria-level={2}>Cocktail Bar Luzern — Signature Drinks &amp; Klassiker</span>
          <p style={{ color: "#B0A090", fontSize: "16px", fontWeight: 300, letterSpacing: "0.05em" }}>
            Sauber gemixt. Kreativ. Kein Standard.
          </p>
          <div className="accent-line mt-6" />
        </div>

        {/* 3 Cocktail Photos Grid */}
        <div className="scroll-reveal mb-16 grid grid-cols-1 md:grid-cols-3" style={{ gap: "16px" }}>
          {/* Mojito Cocktail */}
          <div
            className="relative overflow-hidden group"
            style={{ border: "1px solid rgba(200, 149, 108, 0.2)" }}
          >
            <img
              src={COCKTAIL_MOJITO}
              alt="Mojito Cocktail bei NOKUNA Luzern"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ height: "450px" }}
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(26,26,26,0.6) 0%, transparent 50%)",
              }}
            />
          </div>

          {/* Premium Spirituosen Regal — in der Mitte */}
          <div
            className="relative overflow-hidden group"
            style={{ border: "1px solid rgba(200, 149, 108, 0.2)" }}
          >
            <img
              src="/manus-storage/LUPSTUDIOS-10_f8f4f9c7.webp"
              alt="Premium Spirituosen Regal bei NOKUNA Bar Luzern"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ height: "450px" }}
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(26,26,26,0.6) 0%, transparent 50%)",
              }}
            />
          </div>

          {/* Espresso Martini with Shaker */}
          <div
            className="relative overflow-hidden group"
            style={{ border: "1px solid rgba(200, 149, 108, 0.2)" }}
          >
            <img
              src={COCKTAIL_ESPRESSO}
              alt="Espresso Martini mit Kupfer-Shaker bei NOKUNA Luzern"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ height: "450px" }}
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(26,26,26,0.6) 0%, transparent 50%)",
              }}
            />
          </div>
        </div>

        {/* Signature Cocktails */}
        <div className="scroll-reveal mb-16">
          <p
            className="uppercase tracking-[0.15em] text-sm mb-6"
            style={{ color: "#B0A090", fontWeight: 500 }}
          >
            Signature Cocktails
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "16px" }}>
            {signatureCocktails.map((cocktail) => (
              <div
                key={cocktail.name}
                className="p-6 transition-all duration-300"
                style={{
                  backgroundColor: "rgba(26, 26, 26, 0.7)",
                  borderBottom: "1px solid #C8956C",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.border = "1px solid #C8956C")}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = "none";
                  e.currentTarget.style.borderBottom = "1px solid #C8956C";
                }}
              >
                <p
                  className="heading-display"
                  style={{ color: "#C8956C", fontSize: "20px", letterSpacing: "0.1em" }}
                >
                  {cocktail.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Overview */}
        <div className="scroll-reveal mb-12">
          <p
            className="uppercase tracking-[0.15em] text-sm mb-6"
            style={{ color: "#B0A090", fontWeight: 500 }}
          >
            Kategorien
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5" style={{ gap: "12px" }}>
            {categories.map((cat) => (
              <a
                key={cat.name}
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="p-4 text-center transition-all duration-300"
                style={{
                  backgroundColor: "rgba(58, 58, 58, 0.6)",
                  border: "1px solid #4A4A4A",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#C8956C";
                  e.currentTarget.querySelector<HTMLElement>(".cat-name")!.style.color = "#C8956C";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#4A4A4A";
                  e.currentTarget.querySelector<HTMLElement>(".cat-name")!.style.color = "#FFFFFF";
                }}
              >
                <p className="cat-name text-sm transition-colors duration-300" style={{ color: "#FFFFFF", fontWeight: 500 }}>
                  {cat.name}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* SEO text */}
        <p className="scroll-reveal mb-8" style={{ color: "#B0A090", fontSize: "14px", lineHeight: 1.8, maxWidth: "700px" }}>
          Als Cocktail Bar Luzern bieten wir handgemixte Signature Cocktails und klassische Drinks auf
          höchstem Niveau. Ob beste Cocktails Luzern oder Premium Drinks nach Feierabend — bei NOKUNA
          wird jeder Drink mit Sorgfalt zubereitet.
        </p>

        {/* CTAs */}
        <div className="scroll-reveal flex flex-wrap" style={{ gap: "16px" }}>
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
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
            Zur vollen Karte
          </a>
          <a
            href="#reservation"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#reservation")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block uppercase tracking-[0.15em] text-sm px-8 py-3 transition-all duration-300"
            style={{
              backgroundColor: "#C8956C",
              color: "#1A1A1A",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#8B7355";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#C8956C";
            }}
          >
            Reservieren
          </a>
        </div>
      </div>
    </section>
  );
}
