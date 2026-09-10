import { PhoneIcon, PinIcon, ClockIcon } from "./icons.jsx";
import { BUSINESS } from "../data/services.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-logo">{BUSINESS.name}</div>
          <p className="footer-tagline">Entspannung beginnt hier.</p>
        </div>

        <ul className="footer-details">
          <li>
            <PinIcon /> {BUSINESS.address}
          </li>
          <li>
            <PhoneIcon /> {BUSINESS.phone}
          </li>
          <li>
            <ClockIcon /> {BUSINESS.hours}
          </li>
        </ul>
      </div>

      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} {BUSINESS.name}</span>
      </div>
    </footer>
  );
}
