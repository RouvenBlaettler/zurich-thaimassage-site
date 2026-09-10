import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./icons.jsx";
import "./ServiceCard.css";

export default function ServiceCard({ service }) {
  const fromPrice = Math.min(...service.tiers.map((tier) => tier.price));

  return (
    <Link to="/angebot" className="service-card">
      <span className="eyebrow">ab CHF {fromPrice}</span>
      <h3>{service.category}</h3>
      <p>{service.description}</p>
      <span className="service-card-link">
        Mehr erfahren <ArrowRightIcon />
      </span>
    </Link>
  );
}
