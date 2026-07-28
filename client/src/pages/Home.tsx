/*
  NOKUNA One-Page Website — "Industrial Noir" Design
  ===================================================
  Design: Beton-Ästhetik, warmes indirektes Licht, matte Oberflächen
  Colors: #1A1A1A base, #C8956C gold accent, #F5F0EB text
  Fonts: Bebas Neue (headlines), DM Sans (body)
*/

import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ShishaSection from "@/components/ShishaSection";
import CocktailsSection from "@/components/CocktailsSection";
import AtmosphereSection from "@/components/AtmosphereSection";
import EventsSection from "@/components/EventsSection";
import MenuSection from "@/components/MenuSection";
import LocationSection from "@/components/LocationSection";
import ReservationSection from "@/components/ReservationSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#1A1A1A" }}>
      {/* Skip to content for accessibility */}
      <a
        href="#shisha"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2"
        style={{ backgroundColor: "#C8956C", color: "#1A1A1A" }}
      >
        Zum Inhalt springen
      </a>

      <h1 className="sr-only">NOKUNA — Premium Shisha & Cocktail Bar Luzern</h1>

      <Navigation />
      <main>
        <HeroSection />
        <ShishaSection />
        <CocktailsSection />
        <AtmosphereSection />
        <EventsSection />
        <MenuSection />
        <LocationSection />
        <ReservationSection />
      </main>
      <FooterSection />
    </div>
  );
}
