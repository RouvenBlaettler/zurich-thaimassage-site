import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import { LotusIcon, LeafIcon, HandsIcon, StoneIcon, QuoteIcon, DiamondPattern } from '../components/icons.jsx';
import './Home.css';

const massages = [
  {
    icon: LeafIcon,
    name: 'Aromaöl-Massage',
    text: 'Die Aromaölmassage verbindet sanfte Massagegriffe mit wohltuenden ätherischen Ölen, löst Verspannungen und schenkt tiefe Entspannung für Körper und Geist.',
  },
  {
    icon: HandsIcon,
    name: 'Traditionelle Thai-Massage',
    text: 'Die traditionelle Thai-Massage kombiniert sanfte Dehnungen und gezielte Drucktechniken, um Verspannungen zu lösen, neue Energie zu schenken und Körper sowie Geist in Einklang zu bringen.',
  },
  {
    icon: StoneIcon,
    name: 'Hot-Stone Massage',
    text: 'Die Hot-Stone-Massage kombiniert wohltuende Massagegriffe mit warmen Steinen, lockert Verspannungen und sorgt für tiefe Entspannung sowie ein angenehmes Wohlgefühl.',
  },
];

const testimonials = [
  'Sehr sauber, nett und tolle Massage. Professionell zu einem fairen Preis. Kann ich nur empfehlen!',
  'Fühle mich wie neu geboren, keine Beschwerden mehr, sehr sauber und professionell, Preis-Leistung stimmt.',
  'Einfach immer wieder top. Einer meiner Lieblingsadressen in Zürich!',
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <DiamondPattern id="pattern-hero" className="hero-pattern" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-content">
          <Reveal as="span" className="eyebrow eyebrow-light">
            Seit vielen Jahren in Zürich Seefeld
          </Reveal>
          <Reveal delay={80}>
            <LotusIcon className="hero-lotus" />
          </Reveal>
          <Reveal delay={140} as="h1" className="hero-title">
            Gesundheits-Thaimassage
            <br />
            Seefeld
          </Reveal>
          <Reveal delay={200} as="p" className="hero-tagline">
            Entspannung beginnt hier
          </Reveal>
          <Reveal delay={260} as="p" className="hero-quote">
            „In ruhiger Atmosphäre können Sie loslassen und entspannen. Achtsame Berührungen bringen Körper und
            Geist wieder ins Gleichgewicht.“
          </Reveal>
          <Reveal delay={320}>
            <Link to="/angebot" className="btn btn-gold btn-lg">
              Termin buchen
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section massages-section">
        <div className="container">
          <Reveal as="div" className="section-heading">
            <span className="eyebrow">Unsere Rituale</span>
            <h2>Massagen</h2>
          </Reveal>
          <div className="massages-grid">
            {massages.map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <article className="massage-card">
                  <div className="massage-icon">
                    <m.icon />
                  </div>
                  <h3>{m.name}</h3>
                  <p>{m.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="massages-cta">
            <Link to="/angebot" className="btn btn-outline-maroon">
              Alle Preise ansehen
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section quote-band">
        <div className="container">
          <Reveal as="p" className="quote-band-text">
            Entspannung beginnt hier
          </Reveal>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <Reveal as="div" className="section-heading">
            <span className="eyebrow eyebrow-light">Was unsere Gäste sagen</span>
            <h2 className="light-heading">Stimmen unserer Kundinnen und Kunden</h2>
          </Reveal>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <Reveal key={t} delay={i * 100} as="figure" className="testimonial-card">
                <QuoteIcon className="testimonial-quote-icon" />
                <blockquote>{t}</blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <Reveal as="div" className="contact-info">
            <h2>Adresse &amp; Öffnungszeiten</h2>
            <p className="contact-label">Adresse</p>
            <p>
              Münchhaldenstrasse 7
              <br />
              8008 Zürich
            </p>
            <p className="contact-label">Öffnungszeiten</p>
            <p>
              Montag – Samstag
              <br />
              10:30 – 21:00 Uhr
            </p>
            <p className="contact-label">Telefon</p>
            <p>+41 78 690 43 99</p>
            <div className="contact-map">
              <iframe
                title="Standort Gesundheits-Thaimassage Seefeld"
                src="https://www.google.com/maps?q=M%C3%BCnchhaldenstrasse%207%2C%208008%20Z%C3%BCrich&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={100} as="form" className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <h2>Kontakt aufnehmen</h2>
            <div className="form-row">
              <label>
                Vorname
                <input type="text" name="firstName" placeholder="Vorname" />
              </label>
              <label>
                Nachname
                <input type="text" name="lastName" placeholder="Nachname" />
              </label>
            </div>
            <div className="form-row">
              <label>
                E-Mail-Adresse *
                <input type="email" name="email" placeholder="E-Mail-Adresse" required />
              </label>
              <label>
                Telefonnummer
                <input type="tel" name="phone" placeholder="Telefonnummer" />
              </label>
            </div>
            <label>
              Nachricht *
              <textarea name="message" rows="4" placeholder="Ihre Nachricht" required />
            </label>
            <button type="submit" className="btn btn-gold">
              Einreichen
            </button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
