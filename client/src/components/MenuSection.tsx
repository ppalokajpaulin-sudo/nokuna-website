/*
  NOKUNA Menü Section — Vollständig mit Tab-Navigation
  Beton-Textur Hintergrund, weisse Schrift (#FFFFFF)
*/

import { useState, useRef, useEffect } from "react";

const CONCRETE_DARK = "https://private-us-east-1.manuscdn.com/sessionFile/tUJTqHz73ytRnf1iRkfWBV/sandbox/P0f8oV4qz0oorICoYdxEt9-img-1_1771486592000_na1fn_Y29uY3JldGUtdGV4dHVyZS12Mg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdFVKVHFIejczeXRSbmYxaVJrZldCVi9zYW5kYm94L1AwZjhvVjRxejBvb3JJQ29ZZHhFdDktaW1nLTFfMTc3MTQ4NjU5MjAwMF9uYTFmbl9ZMjl1WTNKbGRHVXRkR1Y0ZEhWeVpTMTJNZy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Ph9b~6ncliEgelnKyZviD-3tcA2MNL0OrFL~oeH~691Gr1UqTXgoU6S187ABq5pNYczSQ6c9dBoRzuaGa8tyfcXiTvJR0~emPqj3XTMip8Ji-NSs59YRTvAp4MildKtrnAvtx6UDBab2wEXF-fCuQ2LcEII-EkxgyLUqpV9kA2t4e2O-urJXAJhKG5KR1y7kOAp55KXKxShDMEkwFP1gHLMBuxvHiUPkHAjXDppkUTrrt471UqW8d2aSBQMckp5T93L9c3f0IbtCHrZ0dnJuKmHcBJhTLxnGtAnMSr9blaJDlZGSXjIOmWf0NRAw2POFP-fNWTNRBOINPLTzGJSE1A__";

interface MenuItem {
  name: string;
  price: string;
  desc?: string;
}

interface MenuCategory {
  label: string;
  subcategories: {
    title?: string;
    items: MenuItem[];
    note?: string;
  }[];
}

const menuData: MenuCategory[] = [
  {
    label: "Shisha",
    subcategories: [
      {
        items: [
          { name: "Shisha", price: "35" },
          { name: "Zusätzlicher Kopf", price: "14" },
        ],
      },
      {
        title: "Tabak-Auswahl",
        items: [
          { name: "Watermelon Chill", price: "" },
          { name: "Lemon Chill", price: "" },
          { name: "Cold Peach", price: "" },
          { name: "Black Nana", price: "" },
          { name: "African Queen", price: "" },
          { name: "Black Box", price: "" },
          { name: "Ananas", price: "" },
          { name: "Grüne Minze", price: "" },
          { name: "Persischer Apfel", price: "" },
          { name: "FFM", price: "" },
          { name: "Okolom", price: "" },
        ],
      },
    ],
  },
  {
    label: "Cocktails",
    subcategories: [
      {
        title: "Klassiker — je CHF 15",
        items: [
          { name: "Negroni", price: "15", desc: "Herb & stark" },
          { name: "Margarita", price: "15", desc: "Frisch & salzig" },
          { name: "Espresso Martini", price: "15", desc: "Der Wachmacher" },
          { name: "Amaretto Sour", price: "15", desc: "Mandelaroma trifft auf Zitrone" },
          { name: "Old Fashioned", price: "15", desc: "Klassisch & stark" },
          { name: "Mai Tai", price: "15", desc: "Tiki-Klassiker" },
        ],
      },
      {
        title: "Signatures — je CHF 16",
        items: [
          { name: "Matcha Ritual", price: "16" },
          { name: "Urban Heat", price: "16" },
          { name: "Bloom Spirit", price: "16" },
          { name: "Night Ember", price: "16" },
        ],
      },
    ],
  },
  {
    label: "Spritz",
    subcategories: [
      {
        title: "Mit Alkohol — je CHF 12",
        items: [
          { name: "Apero Spritz", price: "12", desc: "Der italienische Klassiker – frisch & fruchtig" },
          { name: "Strawberry Spritz", price: "12", desc: "Sommerlich süss" },
          { name: "Hugo", price: "12", desc: "Leicht & blumig" },
          { name: "Rose Blossom Spritz", price: "12", desc: "Blumig & Elegant" },
        ],
      },
      {
        title: "Alkoholfrei — je CHF 9",
        items: [
          { name: "Citrus Garden Spritz", price: "9", desc: "Frisch & Spritzig" },
          { name: "Berry Hibiscus Spritz", price: "9", desc: "Fruchtig & Blumig" },
          { name: "Virgin Strawberry Spritz", price: "9", desc: "Süss & leicht" },
          { name: "Virgin Hugo", price: "9", desc: "Leicht & Blumig" },
        ],
      },
    ],
  },
  {
    label: "Mocktails",
    subcategories: [
      {
        title: "Klassiker — je CHF 11",
        items: [
          { name: "Virgin Mojito", price: "11", desc: "Erfrischend ohne Alkohol" },
          { name: "Virgin Colada", price: "11", desc: "Tropisch & cremig" },
          { name: "Virgin Berry Tonic", price: "11", desc: "Fruchtig & leicht" },
          { name: "Virgin Sunrise", price: "11", desc: "Fruchtig" },
        ],
      },
      {
        title: "Signatures — je CHF 12",
        items: [
          { name: "Green Ritual", price: "12" },
          { name: "Bloom Zero", price: "12" },
          { name: "Urban Chill", price: "12" },
          { name: "Golden Flow", price: "12" },
        ],
      },
    ],
  },
  {
    label: "Longdrinks",
    subcategories: [
      {
        title: "Vodka",
        items: [
          { name: "Stoli", price: "9" },
          { name: "Grey Goose", price: "11" },
        ],
      },
      {
        title: "Gin",
        items: [
          { name: "Hendrick's", price: "11" },
          { name: "The Botanist", price: "12" },
          { name: "Nordés", price: "13" },
        ],
      },
      {
        title: "Whiskey",
        items: [
          { name: "Jack Daniel's", price: "9" },
          { name: "Chivas 12", price: "11" },
          { name: "Bruichladdich Classic Laddie", price: "14" },
          { name: "Kavalan Ex-Bourbon Oak", price: "15" },
        ],
      },
      {
        title: "Rum",
        items: [
          { name: "Kraken Spiced", price: "11" },
          { name: "Barceló Imperial", price: "13" },
        ],
        note: "Alle Longdrinks werden mit Softdrinks, Tonic oder Red Bull serviert. Softdrinkpreise gelten zusätzlich.",
      },
    ],
  },
  {
    label: "Wein & Bier",
    subcategories: [
      {
        title: "Wein & Bubbles",
        items: [
          { name: "Weisswein 1", price: "7 / 32", desc: "Glas / Flasche" },
          { name: "Weisswein 2", price: "9 / 42", desc: "Glas / Flasche" },
          { name: "Rotwein 1", price: "7 / 32", desc: "Glas / Flasche" },
          { name: "Rotwein 2", price: "9 / 42", desc: "Glas / Flasche" },
          { name: "Miraval Rosé", price: "12 / 55", desc: "Glas / Flasche" },
          { name: "Prosecco", price: "8" },
        ],
      },
      {
        title: "Bier",
        items: [
          { name: "Schützengarten Lager Offen 5dl", price: "7" },
          { name: "Schützengarten Kloster Offen 5dl", price: "8" },
          { name: "Schützengarten Lager Offen 3dl", price: "5" },
          { name: "Schützengarten Klosterbier Offen 3dl", price: "6" },
          { name: "Birra Moretti Flasche 33cl", price: "6" },
          { name: "Corona Flasche 33cl", price: "7" },
          { name: "Schützengarten Alkoholfrei Flasche 33cl", price: "5" },
        ],
      },
      {
        title: "Hard Seltzer",
        items: [
          { name: "White Claw Peach", price: "7" },
          { name: "White Claw Mango", price: "7" },
          { name: "White Claw Lime", price: "7" },
        ],
      },
    ],
  },
  {
    label: "Kaffee & Tee",
    subcategories: [
      {
        title: "Kaffee",
        items: [
          { name: "Kaffee Crème", price: "4.50" },
          { name: "Espresso", price: "4" },
          { name: "Doppio", price: "5.50" },
          { name: "Americano", price: "5.50" },
          { name: "Cappuccino", price: "6" },
          { name: "Latte Macchiato", price: "6" },
          { name: "Espresso Tonic", price: "7" },
          { name: "Nokuna Eiskaffee", price: "7" },
        ],
      },
      {
        title: "Tee",
        items: [
          { name: "Grüner Tee", price: "5" },
          { name: "Pfefferminztee", price: "5" },
          { name: "Kamillentee", price: "5" },
          { name: "Schwarztee (Earl Grey)", price: "5" },
          { name: "Früchtetee", price: "5" },
        ],
      },
      {
        title: "Matcha",
        items: [
          { name: "Matcha Latte", price: "7" },
          { name: "Iced Matcha Latte", price: "7.50", desc: "Classic, Vanille, Mango, Erdbeere" },
          { name: "Matcha Chai Latte", price: "7.50" },
        ],
      },
    ],
  },
  {
    label: "Food",
    subcategories: [
      {
        title: "Snacks & Apéro",
        items: [
          { name: "Pinsa Margherita", price: "12" },
          { name: "Pinsa Prosciutto e Rucola", price: "15" },
          { name: "Pinsa Veggie", price: "14" },
          { name: "Oriental Mezze Plate", price: "14", desc: "Hummus, Babaganoush, Tsatsiki, Fladenbrot" },
          { name: "Käseplatte", price: "15", desc: "Regionale Käseauswahl, Trauben, Fladenbrot" },
        ],
      },
    ],
  },
  {
    label: "Shots & Flaschen",
    subcategories: [
      {
        title: "Shots",
        items: [
          { name: "Nokuna Shot", price: "5" },
          { name: "Berliner Luft", price: "6" },
          { name: "Tequila", price: "7" },
          { name: "Frangelico Liqueur", price: "7" },
        ],
      },
      {
        title: "Flaschen",
        items: [
          { name: "Grey Goose", price: "130" },
          { name: "Hendrick's", price: "130" },
          { name: "Nordés", price: "150" },
          { name: "The Botanist", price: "140" },
          { name: "Jack Daniel's", price: "100" },
          { name: "Chivas 12", price: "130" },
          { name: "Moët Ice Champagner", price: "115" },
        ],
      },
      {
        title: "Softdrinks",
        items: [
          { name: "Valser Still / Prickelnd", price: "5" },
          { name: "Coca Cola / Zero", price: "5" },
          { name: "Fanta / Sprite", price: "5" },
          { name: "Fuse Tea (Peach / Lemon)", price: "5" },
          { name: "Bitter Lemon / Tonic / Ginger Ale", price: "5" },
          { name: "Crodino", price: "5" },
          { name: "Sanbitter", price: "5" },
          { name: "Red Bull (Classic / Zero / Edition)", price: "6" },
          { name: "El Tony Mate", price: "6" },
          { name: "Nokuna Lemonade Hausgemacht", price: "6" },
          { name: "Nokuna Iced Tea Hausgemacht", price: "6" },
        ],
      },
    ],
  },
];

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-baseline py-2" style={{ borderBottom: "1px dotted #3A3A3A" }}>
      <span style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 400 }}>{item.name}</span>
      <span className="flex-1 mx-3" style={{ borderBottom: "1px dotted #4A4A4A", minWidth: "20px", height: "1px", alignSelf: "center" }} />
      {item.price && (
        <span style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 400, whiteSpace: "nowrap" }}>
          CHF {item.price}
        </span>
      )}
    </div>
  );
}

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabsRef.current) {
      const activeEl = tabsRef.current.children[activeTab] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeTab]);

  const currentCategory = menuData[activeTab];

  return (
    <section
      id="menu"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      {/* Concrete texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${CONCRETE_DARK}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }}
      />

      {/* Subtle warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 20%, rgba(200, 149, 108, 0.04) 0%, transparent 50%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="scroll-reveal mb-12">
          <h2
            className="heading-display"
            style={{ color: "#C8956C", fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "0.2em", marginBottom: "12px" }}
          >
            Menü
          </h2>
          <div className="accent-line mt-4" />
        </div>

        {/* Tab Navigation */}
        <div
          ref={tabsRef}
          className="scroll-reveal flex overflow-x-auto pb-4 mb-10 hide-scrollbar"
          style={{ gap: "4px", borderBottom: "1px solid #3A3A3A", scrollbarWidth: "none" }}
        >
          {menuData.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(i)}
              className="whitespace-nowrap px-4 py-3 text-sm uppercase tracking-[0.1em] transition-all duration-300 shrink-0"
              style={{
                color: activeTab === i ? "#C8956C" : "#B0A090",
                borderBottom: activeTab === i ? "2px solid #C8956C" : "2px solid transparent",
                backgroundColor: "transparent",
                fontWeight: activeTab === i ? 500 : 400,
                fontSize: "13px",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== i) e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                if (activeTab !== i) e.currentTarget.style.color = "#B0A090";
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="scroll-reveal" style={{ maxWidth: "700px" }}>
          {currentCategory.subcategories.map((sub, idx) => (
            <div key={idx} className="mb-8">
              {sub.title && (
                <p
                  className="uppercase tracking-[0.1em] text-sm mb-4"
                  style={{ color: "#C8956C", fontWeight: 500, fontSize: "14px" }}
                >
                  {sub.title}
                </p>
              )}
              <div>
                {sub.items.map((item) => (
                  <div key={item.name}>
                    <MenuItemRow item={item} />
                    {item.desc && (
                      <p className="pb-2" style={{ color: "#B0A090", fontSize: "12px", paddingLeft: "4px" }}>
                        {item.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              {sub.note && (
                <p className="mt-3" style={{ color: "#B0A090", fontSize: "12px", fontStyle: "italic" }}>
                  {sub.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
