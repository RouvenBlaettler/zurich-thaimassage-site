import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import { LotusIcon } from '../components/icons.jsx';
import './UeberUns.css';

const points = [
  {
    n: '1',
    title: 'Persönliche und individuelle Behandlung',
    text: 'Jeder Mensch ist einzigartig – deshalb richten wir jede Behandlung gezielt auf Ihre persönlichen Bedürfnisse aus. Wir nehmen uns Zeit, hören Ihnen aufmerksam zu und passen unsere Arbeit sorgfältig an Ihr Körpergefühl und Ihre Ziele an.',
  },
  {
    n: '2',
    title: 'Qualität, Fachwissen und Sorgfalt',
    text: 'Unsere Arbeit basiert auf fundiertem Fachwissen, Erfahrung und einem hohen Qualitätsanspruch. Mit präziser Technik und viel Feingefühl schaffen wir Behandlungen, die nachhaltig wirken und spürbar guttun.',
  },
  {
    n: '3',
    title: 'Vertrauen, Ruhe und Menschlichkeit',
    text: 'In entspannter Atmosphäre stehen Ihr Wohlbefinden und Ihr Vertrauen im Mittelpunkt. Ein respektvoller Umgang, Diskretion und echte Leidenschaft für unsere Arbeit sind für uns selbstverständlich.',
  },
];

export default function UeberUns() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <Reveal as="span" className="eyebrow eyebrow-light">
            Gesundheits-Thaimassage Seefeld
          </Reveal>
          <Reveal delay={100} as="h1">
            Loslassen. Durchatmen. Ankommen. Massagen, die Körper und Seele berühren.
          </Reveal>
        </div>
      </section>

      {points.map((p, i) => (
        <section key={p.n} className={`section about-point ${i % 2 === 0 ? 'band-gold' : 'band-maroon'}`}>
          <div className={`container about-point-inner${i % 2 === 1 ? ' reverse' : ''}`}>
            <Reveal className="about-point-text">
              <span className="eyebrow">Was uns von anderen unterscheidet</span>
              <h2>
                {p.n}. {p.title}
              </h2>
              <p>{p.text}</p>
            </Reveal>
            <Reveal delay={100} className="about-point-visual" aria-hidden="true">
              <LotusIcon />
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section about-cta">
        <div className="container">
          <Reveal as="h2">Erleben Sie Ruhe, die bleibt.</Reveal>
          <Reveal delay={100}>
            <Link to="/angebot" className="btn btn-gold btn-lg">
              Termin buchen
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
