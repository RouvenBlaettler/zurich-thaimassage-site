import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LotusIcon } from './icons.jsx';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/angebot', label: 'Angebot' },
  { to: '/ueber-uns', label: 'Über uns' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <LotusIcon className="brand-lotus" />
          <span className="brand-text">
            <span className="brand-name">Gesundheits-Thaimassage</span>
            <span className="brand-place">Seefeld</span>
          </span>
        </NavLink>

        <nav className="nav-links" aria-label="Hauptnavigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-pill${isActive ? ' active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/jetzt-buchen" className="btn btn-gold navbar-cta">
          Jetzt buchen
        </NavLink>

        <button
          className={`navbar-burger${open ? ' is-open' : ''}`}
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`navbar-mobile-wrap${open ? ' is-open' : ''}`}>
        <nav className="navbar-mobile" aria-label="Mobile Navigation" aria-hidden={!open}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-pill${isActive ? ' active' : ''}`}
              onClick={() => setOpen(false)}
              tabIndex={open ? undefined : -1}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/jetzt-buchen"
            className="btn btn-gold"
            onClick={() => setOpen(false)}
            tabIndex={open ? undefined : -1}
          >
            Jetzt buchen
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
