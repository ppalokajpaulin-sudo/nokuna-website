/*
  NOKUNA Reservation Section
  Beton-Textur Hintergrund, weisse Schrift (#FFFFFF)
  WhatsApp: +41 79 939 99 69, Instagram: @nokuna.bar
*/

import { useState } from "react";
import { toast } from "sonner";

// Removed Manus CDN URL

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
    shishaPreorder: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link with form data
    const subject = encodeURIComponent(`Reservation NOKUNA — ${formData.date} ${formData.time}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `E-Mail: ${formData.email}\n` +
      `Telefon: ${formData.phone || "Nicht angegeben"}\n` +
      `Datum: ${formData.date}\n` +
      `Uhrzeit: ${formData.time}\n` +
      `Personen: ${formData.guests}\n` +
      `Shisha vorbestellen: ${formData.shishaPreorder ? "Ja" : "Nein"}\n` +
      `Nachricht: ${formData.message || "—"}`
    );
    window.location.href = `mailto:info@nokuna.ch?subject=${subject}&body=${body}`;
    toast.success("E-Mail-Programm wird geöffnet. Bitte sende die E-Mail ab.");
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: "rgba(44, 44, 44, 0.7)",
    border: "1px solid #4A4A4A",
    color: "#FFFFFF",
    padding: "12px 16px",
    width: "100%",
    fontSize: "14px",
    fontFamily: "'DM Sans', sans-serif",
    transition: "border-color 0.3s",
    borderRadius: "2px",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    color: "#B0A090",
    fontSize: "12px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    marginBottom: "6px",
    display: "block",
  };

  return (
    <section
      id="reservation"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      {/* Concrete texture */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.1,
        }}
      />

      {/* Warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(200, 149, 108, 0.06) 0%, transparent 50%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="scroll-reveal text-center mb-12">
          <h2
            className="heading-display"
            style={{ color: "#C8956C", fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "0.2em", marginBottom: "12px" }}
          >
            Reservieren
          </h2>
          <span className="sr-only" role="heading" aria-level={2}>Tisch reservieren</span>
          <p style={{ color: "#B0A090", fontSize: "16px", fontWeight: 300, letterSpacing: "0.05em" }}>
            Dein Tisch wartet.
          </p>
          <div className="accent-line mx-auto mt-6" />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="scroll-reveal mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "20px" }}>
            {/* Name */}
            <div className="sm:col-span-2">
              <label style={labelStyle} htmlFor="res-name">Name *</label>
              <input
                id="res-name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Dein Name"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#C8956C")}
                onBlur={(e) => (e.target.style.borderColor = "#4A4A4A")}
              />
            </div>

            {/* Email */}
            <div>
              <label style={labelStyle} htmlFor="res-email">E-Mail *</label>
              <input
                id="res-email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="deine@email.ch"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#C8956C")}
                onBlur={(e) => (e.target.style.borderColor = "#4A4A4A")}
              />
            </div>

            {/* Phone */}
            <div>
              <label style={labelStyle} htmlFor="res-phone">Telefon</label>
              <input
                id="res-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+41 XX XXX XX XX"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#C8956C")}
                onBlur={(e) => (e.target.style.borderColor = "#4A4A4A")}
              />
            </div>

            {/* Date */}
            <div>
              <label style={labelStyle} htmlFor="res-date">Datum *</label>
              <input
                id="res-date"
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                style={{ ...inputStyle, colorScheme: "dark" }}
                onFocus={(e) => (e.target.style.borderColor = "#C8956C")}
                onBlur={(e) => (e.target.style.borderColor = "#4A4A4A")}
              />
            </div>

            {/* Time */}
            <div>
              <label style={labelStyle} htmlFor="res-time">Uhrzeit *</label>
              <select
                id="res-time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                style={{ ...inputStyle, appearance: "none" as const }}
                onFocus={(e) => (e.target.style.borderColor = "#C8956C")}
                onBlur={(e) => (e.target.style.borderColor = "#4A4A4A")}
              >
                <option value="" style={{ color: "#666" }}>Uhrzeit wählen</option>
                {["11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"].map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Guests */}
            <div className="sm:col-span-2">
              <label style={labelStyle} htmlFor="res-guests">Anzahl Personen *</label>
              <select
                id="res-guests"
                name="guests"
                required
                value={formData.guests}
                onChange={handleChange}
                style={{ ...inputStyle, appearance: "none" as const }}
                onFocus={(e) => (e.target.style.borderColor = "#C8956C")}
                onBlur={(e) => (e.target.style.borderColor = "#4A4A4A")}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={String(n)}>{n} {n === 1 ? "Person" : "Personen"}</option>
                ))}
                <option value="10+">10+ Personen</option>
              </select>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label style={labelStyle} htmlFor="res-message">Nachricht</label>
              <textarea
                id="res-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Besondere Wünsche oder Anmerkungen..."
                style={{ ...inputStyle, resize: "vertical" as const }}
                onFocus={(e) => (e.target.style.borderColor = "#C8956C")}
                onBlur={(e) => (e.target.style.borderColor = "#4A4A4A")}
              />
            </div>

            {/* Shisha Preorder Checkbox */}
            <div className="sm:col-span-2 flex items-center" style={{ gap: "10px" }}>
              <input
                id="res-shisha"
                type="checkbox"
                name="shishaPreorder"
                checked={formData.shishaPreorder}
                onChange={handleChange}
                className="w-4 h-4"
                style={{
                  accentColor: "#C8956C",
                  backgroundColor: "#2C2C2C",
                  border: "1px solid #4A4A4A",
                }}
              />
              <label htmlFor="res-shisha" style={{ color: "#FFFFFF", fontSize: "14px" }}>
                Ich möchte Shisha vorbestellen
              </label>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-8 uppercase tracking-[0.15em] text-sm py-4 transition-all duration-300"
            style={{
              backgroundColor: "#C8956C",
              color: "#1A1A1A",
              fontWeight: 600,
              fontSize: "14px",
              border: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#8B7355")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C8956C")}
          >
            Anfrage senden
          </button>

          {/* Note */}
          <p className="text-center mt-6" style={{ color: "#B0A090", fontSize: "13px", lineHeight: 1.6 }}>
            Reservationen werden innert 24 Stunden bestätigt. Für kurzfristige Anfragen kontaktiere uns direkt.
          </p>

          {/* Alternative Contact */}
          <div className="flex flex-col sm:flex-row justify-center mt-6" style={{ gap: "16px" }}>
            <a
              href="https://wa.me/41799399969"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm transition-colors duration-300 py-2 inline-flex items-center justify-center"
              style={{ color: "#C8956C", textDecoration: "underline", textUnderlineOffset: "4px", gap: "6px" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#C8956C")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Per WhatsApp reservieren
            </a>
            <a
              href="https://www.instagram.com/nokuna.bar?igsh=MWRvMzMwdWQwNjh1aA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm transition-colors duration-300 py-2 inline-flex items-center justify-center"
              style={{ color: "#C8956C", textDecoration: "underline", textUnderlineOffset: "4px", gap: "6px" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#C8956C")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none"/>
              </svg>
              Schreib uns auf Instagram
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
