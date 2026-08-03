/*
  NOKUNA Atmosphäre / Über uns Section
  Beton-Textur v2 Hintergrund, weisse Schrift (#FFFFFF)
  Echtes Foto der NOKUNA Bar eingebunden
*/

const CONCRETE_DARK = "https://private-us-east-1.manuscdn.com/sessionFile/tUJTqHz73ytRnf1iRkfWBV/sandbox/P0f8oV4qz0oorICoYdxEt9-img-1_1771486592000_na1fn_Y29uY3JldGUtdGV4dHVyZS12Mg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdFVKVHFIejczeXRSbmYxaVJrZldCVi9zYW5kYm94L1AwZjhvVjRxejBvb3JJQ29ZZHhFdDktaW1nLTFfMTc3MTQ4NjU5MjAwMF9uYTFmbl9ZMjl1WTNKbGRHVXRkR1Y0ZEhWeVpTMTJNZy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Ph9b~6ncliEgelnKyZviD-3tcA2MNL0OrFL~oeH~691Gr1UqTXgoU6S187ABq5pNYczSQ6c9dBoRzuaGa8tyfcXiTvJR0~emPqj3XTMip8Ji-NSs59YRTvAp4MildKtrnAvtx6UDBab2wEXF-fCuQ2LcEII-EkxgyLUqpV9kA2t4e2O-urJXAJhKG5KR1y7kOAp55KXKxShDMEkwFP1gHLMBuxvHiUPkHAjXDppkUTrrt471UqW8d2aSBQMckp5T93L9c3f0IbtCHrZ0dnJuKmHcBJhTLxnGtAnMSr9blaJDlZGSXjIOmWf0NRAw2POFP-fNWTNRBOINPLTzGJSE1A__";

const BAR_PHOTO = "/manus-storage/Foto08.11.25,132901_cbcb0b16.webp";

export default function AtmosphereSection() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      {/* Concrete texture — subtle */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${CONCRETE_DARK}")`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          opacity: 0.12,
        }}
      />
      {/* Warm overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(61, 50, 40, 0.06)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(200, 149, 108, 0.06) 0%, transparent 50%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="scroll-reveal text-center mb-6">
          <h2
            className="heading-display"
            style={{ color: "#FFFFFF", fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "0.2em", marginBottom: "12px" }}
          >
            Beton. Rauch. Atmosphäre.
          </h2>
          <span className="sr-only" role="heading" aria-level={2}>Einzigartige Atmosphäre in Luzern</span>
          <p style={{ color: "#C8956C", fontSize: "16px", fontWeight: 400, letterSpacing: "0.1em" }}>
            Nicht lauter. Besser.
          </p>
          <div className="accent-line mx-auto mt-6" />
        </div>

        {/* Photo + Text Layout */}
        <div className="scroll-reveal grid grid-cols-1 lg:grid-cols-2 mb-20" style={{ gap: "48px", alignItems: "center" }}>
          {/* Real NOKUNA Bar Photo */}
          <div
            className="relative overflow-hidden"
            style={{
              border: "1px solid rgba(200, 149, 108, 0.3)",
            }}
          >
            <img
              src={BAR_PHOTO}
              alt="NOKUNA Bar Interieur — Lounge-Bereich mit Sofas, DJ-Pult und Bar"
              className="w-full h-auto"
              style={{
                display: "block",
                minHeight: "300px",
                objectFit: "cover",
              }}
              loading="lazy"
            />
            {/* Subtle gold border glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 40px rgba(200, 149, 108, 0.1)",
              }}
            />
          </div>

          {/* Text */}
          <div>
            <p style={{ color: "#FFFFFF", fontSize: "16px", lineHeight: 1.9, fontWeight: 300, marginBottom: "20px" }}>
              NOKUNA ist erwachsene Abendkultur auf höchstem Niveau. Kein Club. Keine Massenbar. Ein Ort wo
              Qualität Standard ist — nicht die Ausnahme.
            </p>
            <p style={{ color: "#FFFFFF", fontSize: "16px", lineHeight: 1.9, fontWeight: 300, marginBottom: "20px" }}>
              Industrial Elegance trifft auf Premium-Genuss: Rohes Beton-Design, warme Lichter, tiefe Beats
              im Hintergrund. Ein Ort zum Ankommen, nicht zum Durchdrehen. Eine Bar mit Atmosphäre Luzern
              wie keine andere.
            </p>
            <p style={{ color: "#FFFFFF", fontSize: "16px", lineHeight: 1.9, fontWeight: 300 }}>
              Ob Afterwork am Donnerstag, ein ruhiger Abend unter Freunden oder das perfekte Weekend-Ritual —
              bei NOKUNA stimmt jedes Detail. Ausgehen Luzern neu definiert.
            </p>
          </div>
        </div>

        {/* 3 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 scroll-reveal" style={{ gap: "24px" }}>
          {/* Block 1: Shisha */}
          <div className="text-center p-8" style={{ backgroundColor: "rgba(44, 44, 44, 0.7)", border: "1px solid #3A3A3A" }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-4">
              <path d="M24 4v8M24 12c-4 0-8 4-8 8v4h16v-4c0-4-4-8-8-8zM16 24v4c0 2 1 4 3 5l-3 11h16l-3-11c2-1 3-3 3-5v-4" stroke="#C8956C" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="24" cy="8" r="2" stroke="#C8956C" strokeWidth="1.5" fill="none"/>
            </svg>
            <p className="heading-display mb-2" style={{ color: "#FFFFFF", fontSize: "20px", letterSpacing: "0.1em" }}>
              Premium Shisha
            </p>
            <p style={{ color: "#B0A090", fontSize: "14px", lineHeight: 1.6 }}>
              Professionell zubereitet. Nur die besten Tabaksorten.
            </p>
          </div>

          {/* Block 2: Cocktails */}
          <div className="text-center p-8" style={{ backgroundColor: "rgba(44, 44, 44, 0.7)", border: "1px solid #3A3A3A" }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-4">
              <path d="M14 8h20l-8 16v12h-4V24L14 8z" stroke="#C8956C" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 40h12" stroke="#C8956C" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M16 14h16" stroke="#C8956C" strokeWidth="1" strokeDasharray="2 2"/>
            </svg>
            <p className="heading-display mb-2" style={{ color: "#FFFFFF", fontSize: "20px", letterSpacing: "0.1em" }}>
              Handcrafted Cocktails
            </p>
            <p style={{ color: "#B0A090", fontSize: "14px", lineHeight: 1.6 }}>
              Kreative Signature Drinks. Sauber gemixt.
            </p>
          </div>

          {/* Block 3: Atmosphäre */}
          <div className="text-center p-8" style={{ backgroundColor: "rgba(44, 44, 44, 0.7)", border: "1px solid #3A3A3A" }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-4">
              <path d="M4 28c4-4 8-2 12-6s4-8 8-8 4 4 8 8 8 2 12 6" stroke="#C8956C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <path d="M4 36c4-4 8-2 12-6s4-8 8-8 4 4 8 8 8 2 12 6" stroke="#C8956C" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5"/>
            </svg>
            <p className="heading-display mb-2" style={{ color: "#FFFFFF", fontSize: "20px", letterSpacing: "0.1em" }}>
              Einzigartige Atmosphäre
            </p>
            <p style={{ color: "#B0A090", fontSize: "14px", lineHeight: 1.6 }}>
              Beton. Warme Lichter. Tiefe Beats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
