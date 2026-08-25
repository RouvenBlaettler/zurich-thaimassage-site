import { NavLink } from 'react-router-dom';
import { LotusIcon } from './icons.jsx';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <LotusIcon className="footer-lotus" />
          <div>
            <p className="footer-name">Gesundheits-Thaimassage Seefeld</p>
            <p className="footer-tag">Achtsame Berührungen für Körper und Geist</p>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer Navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/angebot">Angebot</NavLink>
          <NavLink to="/ueber-uns">Über uns</NavLink>
          <NavLink to="/jetzt-buchen">Jetzt buchen</NavLink>
        </nav>

        <div className="footer-contact">
          <p>Münchhaldenstrasse 7, 8008 Zürich</p>
          <p>+41 78 690 43 99</p>
          <p>Mo–Sa, 10:30–21:00 Uhr</p>
        </div>
      </div>
      <p className="footer-copyright">© {year} Gesundheits-Thaimassage Seefeld</p>
    </footer>
  );
}
