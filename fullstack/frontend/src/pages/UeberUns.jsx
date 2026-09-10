import { useEffect } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import ThaiOrnament from "../components/ThaiOrnament.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import { TESTIMONIALS } from "../data/services.js";
import "./UeberUns.css";

const POINTS = [
  {
    title: "Persönliche und individuelle Behandlung",
    text: "Jeder Mensch ist einzigartig – deshalb richten wir jede Behandlung gezielt auf Ihre persönlichen Bedürfnisse aus. Wir nehmen uns Zeit, hören Ihnen aufmerksam zu und passen unsere Arbeit sorgfältig an Ihr Körpergefühl und Ihre Ziele an.",
  },
  {
    title: "Qualität, Fachwissen und Sorgfalt",
    text: "Unsere Arbeit basiert auf fundiertem Fachwissen, Erfahrung und einem hohen Qualitätsanspruch. Mit präziser Technik und viel Feingefühl schaffen wir Behandlungen, die nachhaltig wirken und spürbar guttun.",
  },
  {
    title: "Vertrauen, Ruhe und Menschlichkeit",
    text: "In entspannter Atmosphäre stehen Ihr Wohlbefinden und Ihr Vertrauen im Mittelpunkt. Ein respektvoller Umgang, Diskretion und echte Leidenschaft für unsere Arbeit sind für uns selbstverständlich.",
  },
];

export default function UeberUns() {
  useEffect(() => {
    document.title = "Über uns — Gesundheits-Thaimassage Seefeld";
  }, []);

  return (
    <>
      <section className="ueberuns-hero">
        <ThaiOrnament variant="flame" className="ueberuns-hero-ornament" />
        <div className="container">
          <Reveal as="span" className="eyebrow">Über uns</Reveal>
          <Reveal as="h1" delay={70}>Loslassen. Durchatmen. Ankommen.</Reveal>
          <Reveal as="p" delay={140} className="section-lead">Massagen, die Körper und Seele berühren.</Reveal>
        </div>
      </section>

      <section className="section-light ueberuns-points">
        <div className="container ueberuns-points-grid">
          {POINTS.map((point, index) => (
            <Reveal key={point.title} delay={index * 60} className="ueberuns-point">
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-dark ueberuns-testimonials">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">Stimmen unserer Gäste</span>
            <h2>Was unsere Kundinnen und Kunden sagen</h2>
          </Reveal>
          <div className="ueberuns-testimonials-grid">
            {TESTIMONIALS.map((quote, index) => (
              <Reveal key={quote} delay={index * 60}>
                <TestimonialCard quote={quote} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={180} className="ueberuns-cta">
            <Link to="/jetzt-buchen" className="btn">Termin buchen</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
