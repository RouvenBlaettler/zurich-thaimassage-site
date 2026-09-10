import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MenuIcon, CloseIcon } from "./icons.jsx";
import "./Navbar.css";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/angebot", label: "Angebot" },
  { to: "/ueber-uns", label: "Über uns" },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const listRef = useRef(null);
  const [pill, setPill] = useState(null);

  const activeIndex = LINKS.findIndex(
    (link) => link.to === "/" ? location.pathname === "/" : location.pathname.startsWith(link.to)
  );

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list || activeIndex === -1) return;
    const activeEl = list.children[activeIndex];
    if (!activeEl) return;

    const measure = () => {
      const listRect = list.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();
      setPill({ left: elRect.left - listRect.left, width: elRect.width });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeIndex, menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-logo">
          Gesundheits-Thaimassage
          <span>SEEFELD</span>
        </NavLink>

        <nav className="navbar-tabs" ref={listRef} aria-label="Hauptnavigation">
          {pill && <span className="navbar-pill" style={{ left: pill.left, width: pill.width }} />}
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `navbar-tab ${isActive ? "is-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/jetzt-buchen" className="btn navbar-cta">
          Jetzt Buchen
        </NavLink>

        <button
          className="navbar-menu-btn"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Menü schliessen" : "Menü öffnen"}
          aria-expanded={menuOpen}
        >
          <span className="navbar-menu-icon-stack">
            <MenuIcon className="navbar-menu-icon navbar-menu-icon-open" />
            <CloseIcon className="navbar-menu-icon navbar-menu-icon-close" />
          </span>
        </button>
      </div>

      <div className={`navbar-mobile ${menuOpen ? "is-open" : ""}`}>
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) => `navbar-mobile-link ${isActive ? "is-active" : ""}`}
          >
            {link.label}
          </NavLink>
        ))}
        <NavLink to="/jetzt-buchen" className="btn navbar-mobile-cta">
          Jetzt Buchen
        </NavLink>
      </div>
    </header>
  );
}
