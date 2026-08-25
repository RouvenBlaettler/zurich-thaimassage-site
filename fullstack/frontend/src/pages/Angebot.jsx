import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import { DiamondPattern, LotusIcon } from '../components/icons.jsx';
import { categories, services } from '../data/services.js';
import './Angebot.css';

export default function Angebot() {
  const [active, setActive] = useState('Alle Services');
  const filtered = active === 'Alle Services' ? services : services.filter((s) => s.category === active);

  return (
    <>
      <section className="offer-hero">
        <DiamondPattern id="pattern-angebot" className="offer-hero-pattern" />
        <LotusIcon className="offer-hero-lotus" />
        <div className="container">
          <Reveal as="h1">Jetzt Termin buchen</Reveal>
          <Reveal delay={100} as="p" className="offer-hero-sub">
            Buchen Sie Ihren Wunschtermin ganz einfach online
          </Reveal>
        </div>
      </section>

      <section className="section offer-list-section">
        <div className="container">
          <div className="offer-tabs" role="tablist" aria-label="Service-Filter">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                className={`offer-tab${active === cat ? ' active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <ul className="offer-rows">
            {filtered.map((service) => (
              <li key={service.id} className="offer-row">
                <span className="offer-row-name">{service.name}</span>
                <span className="offer-row-price">CHF {service.price}</span>
                <Link
                  to="/jetzt-buchen"
                  state={{ service: { name: service.name, price: service.price } }}
                  className="btn btn-gold offer-row-btn"
                >
                  Jetzt buchen
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
