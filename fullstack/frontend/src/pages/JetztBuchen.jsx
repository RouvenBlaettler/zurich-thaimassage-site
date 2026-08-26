import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Calendar from "../components/booking/Calendar.jsx";
import TimeSlots from "../components/booking/TimeSlots.jsx";
import { CheckIcon } from "../components/icons.jsx";
import { SERVICES } from "../data/services.js";
import "./JetztBuchen.css";

function parseMinutes(label) {
  return parseInt(label, 10);
}

export default function JetztBuchen() {
  const location = useLocation();
  const incoming = location.state;

  const [category, setCategory] = useState(incoming?.category ?? null);
  const [tier, setTier] = useState(incoming?.tier ?? null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    document.title = "Jetzt Buchen — Gesundheits-Thaimassage Seefeld";
  }, []);

  function chooseService(service, chosenTier) {
    setCategory(service.category);
    setTier(chosenTier);
    setDate(null);
    setTime(null);
  }

  function handleDateSelect(nextDate) {
    setDate(nextDate);
    setTime(null);
  }

  if (confirmed) {
    return (
      <section className="section-dark booking-page booking-confirmation">
        <div className="container booking-confirmation-inner">
          <span className="booking-confirmation-icon">
            <CheckIcon />
          </span>
          <h1>Termin gemerkt</h1>
          <p>
            {category} ({tier.label}) am{" "}
            {date.toLocaleDateString("de-CH", { weekday: "long", day: "numeric", month: "long" })} um {time} Uhr.
          </p>
          <p className="booking-confirmation-note">
            Die verbindliche Terminbuchung mit Bestätigung folgt in einem
            späteren Ausbauschritt — aktuell zeigt diese Seite nur den Ablauf.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-dark booking-page">
      <div className="container">
        <Reveal as="span" className="eyebrow">Termin buchen</Reveal>
        <Reveal as="h1" delay={70}>Jetzt Buchen</Reveal>
        <Reveal as="p" delay={140} className="section-lead">Wählen Sie ein Datum und eine Uhrzeit, die für Sie am besten passt.</Reveal>

        {!category || !tier ? (
          <Reveal as="div" className="booking-picker">
            {SERVICES.map((service) => (
              <div key={service.category} className="booking-picker-group">
                <h3>{service.category}</h3>
                <div className="booking-picker-tiers">
                  {service.tiers.map((serviceTier) => (
                    <button
                      key={serviceTier.label}
                      type="button"
                      className="btn btn-outline"
                      onClick={() => chooseService(service, serviceTier)}
                    >
                      {serviceTier.label} — CHF {serviceTier.price}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        ) : (
          <Reveal as="div" className="booking-flow">
            <div className="booking-summary-bar">
              <span>{category} · {tier.label} · CHF {tier.price}</span>
              <button type="button" className="booking-change" onClick={() => { setCategory(null); setTier(null); }}>
                Behandlung ändern
              </button>
            </div>

            <div className="booking-columns">
              <Calendar selectedDate={date} onSelect={handleDateSelect} />

              <div className="booking-slots-panel">
                <h3>Verfügbare Zeiten</h3>
                {date ? (
                  <TimeSlots
                    date={date}
                    durationMinutes={parseMinutes(tier.label)}
                    selected={time}
                    onSelect={setTime}
                  />
                ) : (
                  <p className="booking-slots-empty">Bitte zuerst ein Datum auswählen.</p>
                )}

                <button
                  type="button"
                  className="btn booking-confirm"
                  disabled={!date || !time}
                  onClick={() => setConfirmed(true)}
                >
                  Termin bestätigen
                </button>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
