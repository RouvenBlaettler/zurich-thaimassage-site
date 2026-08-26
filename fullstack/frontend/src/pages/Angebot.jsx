import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import ThaiOrnament from "../components/ThaiOrnament.jsx";
import { CATEGORIES, SERVICES } from "../data/services.js";
import "./Angebot.css";

export default function Angebot() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const listRef = useRef(null);
  const [pill, setPill] = useState(null);

  useEffect(() => {
    document.title = "Angebot & Preise — Gesundheits-Thaimassage Seefeld";
  }, []);

  const activeIndex = CATEGORIES.indexOf(activeCategory);

  useLayoutEffect(() => {
    const list = listRef.current;
    const activeEl = list?.children[activeIndex];
    if (!activeEl) return;
    const listRect = list.getBoundingClientRect();
    const elRect = activeEl.getBoundingClientRect();
    setPill({ left: elRect.left - listRect.left, width: elRect.width });
  }, [activeIndex]);

  const visibleServices =
    activeCategory === CATEGORIES[0]
      ? SERVICES
      : SERVICES.filter((service) => service.category === activeCategory);

  function handleBook(service, tier) {
    navigate("/jetzt-buchen", { state: { category: service.category, tier } });
  }

  return (
    <>
      <section className="angebot-hero">
        <ThaiOrnament variant="lotus" className="angebot-hero-ornament" />
        <div className="container">
          <Reveal as="span" className="eyebrow">Preise & Behandlungen</Reveal>
          <Reveal as="h1" delay={70}>Unser Angebot</Reveal>
          <Reveal as="p" delay={140}>Wählen Sie eine Behandlung und buchen Sie direkt Ihren Wunschtermin.</Reveal>
        </div>
      </section>

      <section className="section-light angebot-list">
        <div className="container">
          <div className="angebot-filters" ref={listRef}>
            {pill && <span className="angebot-filter-pill" style={{ left: pill.left, width: pill.width }} />}
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                className={`angebot-filter ${category === activeCategory ? "is-active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="angebot-rows">
            {visibleServices.map((service) =>
              service.tiers.map((tier) => (
                <Reveal key={`${service.category}-${tier.label}`} as="div" className="angebot-row">
                  <div>
                    <h3>{service.category}</h3>
                    <span className="angebot-row-tier">{tier.label}</span>
                  </div>
                  <span className="angebot-row-price">CHF {tier.price}</span>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => handleBook(service, tier)}
                  >
                    Jetzt Buchen
                  </button>
                </Reveal>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
