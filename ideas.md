# NOKUNA — Design Brainstorm

## Kontext
NOKUNA ist eine Premium Bar & Hookah Lounge in Luzern. Die Design-Vorgaben sind sehr klar: Industrial Elegance mit Beton-Ästhetik, rohen Materialien, warmem indirektem Licht und matten Oberflächen.

---

<response>
<text>

## Idee 1: "Brutalist Warmth" — Tadao Ando meets Wabi-Sabi

**Design Movement:** Brutalismus trifft auf japanische Wabi-Sabi-Ästhetik. Die Schönheit liegt im Unvollkommenen, im Rohen, im Ehrlichen.

**Core Principles:**
1. Materialehrlichkeit — Beton zeigt sich als das was er ist, ohne Verkleidung
2. Asymmetrische Balance — Layouts die bewusst ungleich gewichtet sind, aber trotzdem harmonisch wirken
3. Licht als Material — Warme Lichtquellen werden wie architektonische Elemente behandelt
4. Reduktion auf das Wesentliche — Jedes Element hat eine Funktion

**Color Philosophy:** Die Palette basiert auf natürlichen Materialien: Beton-Grautöne als Fundament, warmes Kupfer/Gold als das Licht das durch den Raum fällt. Das Gold ist nie dominant — es ist wie Kerzenlicht auf einer Betonwand.

**Layout Paradigm:** Asymmetrische Zweispalter mit bewusst ungleicher Gewichtung (60/40, 70/30). Sektionen wechseln zwischen fullwidth und contained. Grosse Weissräume als "Luft" zwischen den Elementen.

**Signature Elements:**
1. Subtile radiale Licht-Gradienten die wie Pendelleuchten auf Beton wirken
2. Dünne horizontale Kupfer-Linien als Sektions-Trenner
3. Condensed Uppercase Typography mit weitem Letter-Spacing

**Interaction Philosophy:** Minimal und respektvoll. Hover-States ändern nur die Farbe zu Kupfer. Keine springenden Animationen. Alles fühlt sich schwer und geerdet an.

**Animation:** Sektionen faden sanft ein (opacity + translateY). Scroll-basiert, nicht zeitbasiert. Langsam und bedächtig — wie Rauch der aufsteigt.

**Typography System:** Bebas Neue für Headlines (condensed, bold, uppercase, letter-spacing 3-5px). DM Sans für Body (clean, modern, regular weight). Hierarchie durch Grösse und Farbe, nicht durch Weight-Variationen.

</text>
<probability>0.08</probability>
</response>

---

<response>
<text>

## Idee 2: "Concrete Poetry" — Architektonischer Minimalismus

**Design Movement:** Architektonischer Minimalismus inspiriert von Peter Zumthor und John Pawson. Jeder Pixel ist durchdacht wie jeder Quadratmeter in einem Zumthor-Gebäude.

**Core Principles:**
1. Stille Präsenz — Die Website spricht leise aber bestimmt
2. Textur als Ornament — Beton-Texturen ersetzen jede Dekoration
3. Vertikaler Rhythmus — Strenge vertikale Proportionen und Abstände
4. Monochrome Tiefe — Tiefe entsteht durch Grauton-Abstufungen

**Color Philosophy:** Ein monochromes Grau-Spektrum von #1A1A1A bis #5C5C5C bildet die Architektur. Das Kupfer-Gold (#C8956C) ist der einzige Farbakzent — sparsam eingesetzt wie ein einzelnes Kunstwerk in einem Betonraum.

**Layout Paradigm:** Streng vertikale Komposition. Inhalte sind in schmalen Spalten zentriert (max-width 900px), durchbrochen von fullwidth Beton-Flächen. Wie ein Buch das man von oben nach unten liest.

**Signature Elements:**
1. Fullwidth Beton-Bänder zwischen Sektionen
2. Einzelne goldene Akzent-Linien (1px) als typografische Unterstreichungen
3. Grosse leere Flächen die "atmen"

**Interaction Philosophy:** Fast unsichtbar. Hover verändert nur Opacity oder Farbe. Buttons haben keine Hintergrund-Fills — nur Linien die sich bei Hover füllen.

**Animation:** Extrem subtil. Elemente erscheinen mit einer leichten Opacity-Transition (800ms). Kein translateY. Wie Nebel der sich langsam lichtet.

**Typography System:** Oswald für Headlines (condensed, uppercase, letter-spacing 4px). Inter für Body (clean, neutral). Headlines in Gold oder Off-White, Body in gedämpftem Beige.

</text>
<probability>0.05</probability>
</response>

---

<response>
<text>

## Idee 3: "Industrial Noir" — Berlin Underground meets Swiss Precision

**Design Movement:** Industrial Noir — die Dunkelheit und Rohheit Berliner Industrieräume kombiniert mit Schweizer Präzision und Qualitätsbewusstsein.

**Core Principles:**
1. Kontrast durch Materialwechsel — Beton, Holz, Metall wechseln sich ab
2. Dramatische Lichtführung — Warme Lichtinseln in der Dunkelheit
3. Typografische Dominanz — Text als architektonisches Element
4. Schichtung — Overlays, Texturen und Transparenzen erzeugen Tiefe

**Color Philosophy:** Fast-Schwarz als Basis, verschiedene Beton-Grautöne als "Räume", warmes Kupfer-Gold als das Licht das durch Fenster fällt. Das warme Dunkelbraun (#3D3228) kommt als Holz-Akzent in einzelnen Sektionen vor.

**Layout Paradigm:** Wechsel zwischen engen, komprimierten Bereichen und weiten, offenen Flächen. Wie der Rhythmus einer Bar: enge Eingangstür, dann öffnet sich der Raum. Asymmetrische Grids mit bewussten Brüchen.

**Signature Elements:**
1. CSS-generierte Rauch-Animation im Hero (sehr subtil)
2. Wechselnde Beton-Grautöne pro Sektion für visuellen Rhythmus
3. Metallische 1px Linien als strukturelle Elemente

**Interaction Philosophy:** Kontrolliert und präzise. Hover-States sind wie das Aufdrehen eines Dimmers — langsam, smooth, warm. Buttons füllen sich von links nach rechts bei Hover.

**Animation:** Scroll-triggered fade-ins mit leichtem translateY (20px). Staggered animations für Gruppen von Elementen. Timing: 600ms ease-out. Rauch-Animation im Hero: CSS keyframes mit transform und opacity.

**Typography System:** Bebas Neue für alle Headlines (condensed, bold, uppercase, letter-spacing 3-5px). DM Sans für Body und Beschreibungen. Akzent-Labels in DM Sans Light. Klare Hierarchie: H2 in Gold, Sublines in Beige, Body in Off-White.

</text>
<probability>0.07</probability>
</response>

---

## Gewählter Ansatz: Idee 3 — "Industrial Noir"

Dieser Ansatz passt am besten zu den NOKUNA-Vorgaben, weil er:
- Den Materialwechsel (Beton/Holz/Metall) am besten umsetzt
- Die dramatische Lichtführung als zentrales Design-Element nutzt
- Den Rauch-Effekt im Hero integriert
- Den visuellen Rhythmus durch wechselnde Beton-Grautöne erzeugt
- Die Berliner Industrieästhetik mit Schweizer Präzision verbindet
