import { useEffect } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import ThaiOrnament from "../components/ThaiOrnament.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import ContactForm from "../components/ContactForm.jsx";
import GoogleMap from "../components/GoogleMap.jsx";
import { SERVICES, TESTIMONIALS, BUSINESS } from "../data/services.js";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    document.title = "Gesundheits-Thaimassage Seefeld — Zürich";
  }, []);

  return (
    <>
      <section className="home-hero">
        <ThaiOrnament variant="flame" className="home-hero-ornament home-hero-ornament-1" />
        <ThaiOrnament variant="lotus" className="home-hero-ornament home-hero-ornament-2" />
        <div className="container home-hero-content">
          <Reveal as="span" className="eyebrow">Entspannung beginnt hier</Reveal>
          <Reveal as="h1" delay={70}>Gesundheits-Thaimassage Seefeld</Reveal>
          <Reveal as="p" delay={140}>
            In ruhiger Atmosphäre können Sie loslassen und entspannen. Achtsame
            Berührungen bringen Körper und Geist wieder ins Gleichgewicht.
          </Reveal>
          <Reveal delay={210} className="home-hero-actions">
            <Link to="/jetzt-buchen" className="btn">Termin buchen</Link>
            <Link to="/angebot" className="btn btn-outline">Angebot ansehen</Link>
          </Reveal>
        </div>
      </section>

      <section className="section-light home-services">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">Unsere Massagen</span>
            <h2>Für jedes Bedürfnis die passende Behandlung</h2>
          </Reveal>
          <div className="home-services-grid">
            {SERVICES.map((service, index) => (
              <Reveal key={service.category} delay={index * 60}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light home-testimonials">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">Stimmen unserer Gäste</span>
            <h2>Was unsere Kundinnen und Kunden sagen</h2>
          </Reveal>
          <div className="home-testimonials-grid">
            {TESTIMONIALS.map((quote, index) => (
              <Reveal key={quote} delay={index * 60}>
                <TestimonialCard quote={quote} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark home-contact">
        <div className="container home-contact-grid">
          <Reveal as="div">
            <span className="eyebrow">Kontakt</span>
            <h2>Schreiben Sie uns</h2>
            <p className="section-lead">{BUSINESS.address}</p>
            <ContactForm />
          </Reveal>
          <Reveal delay={80}>
            <GoogleMap address={BUSINESS.address} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
