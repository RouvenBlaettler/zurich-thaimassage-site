import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import './JetztBuchen.css';

const WEEKDAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
const MONTH_NAMES = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
];

function buildCalendar(year, month) {
  const firstDay = new Date(year, month, 1);
  const startOffset = (firstDay.getDay() + 6) % 7; // Monday-first grid
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

export default function JetztBuchen() {
  const location = useLocation();
  const selectedService = location.state?.service ?? { name: 'Traditionelle Thai-Massage', price: 70 };

  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDay, setSelectedDay] = useState(null);

  const cells = useMemo(() => buildCalendar(viewDate.getFullYear(), viewDate.getMonth()), [viewDate]);

  function changeMonth(delta) {
    setSelectedDay(null);
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + delta, 1));
  }

  return (
    <section className="section booking-section">
      <div className="container">
        <Link to="/angebot" className="booking-back">
          ← Zurück zum Angebot
        </Link>

        <div className="booking-grid">
          <Reveal as="div" className="booking-calendar-card">
            <h1>Termin buchen</h1>
            <p className="booking-sub">Wählen Sie ein Datum, das für Sie am besten passt.</p>

            <div className="booking-month-nav">
              <button onClick={() => changeMonth(-1)} aria-label="Vorheriger Monat">
                ‹
              </button>
              <span>
                {MONTH_NAMES[viewDate.getMonth()]} {viewDate.getFullYear()}
              </span>
              <button onClick={() => changeMonth(1)} aria-label="Nächster Monat">
                ›
              </button>
            </div>

            <div className="booking-weekdays">
              {WEEKDAYS.map((w) => (
                <span key={w}>{w}</span>
              ))}
            </div>
            <div className="booking-days">
              {cells.map((day, i) =>
                day ? (
                  <button
                    key={i}
                    className={`booking-day${selectedDay === day ? ' selected' : ''}`}
                    onClick={() => setSelectedDay(day)}
                  >
                    {day}
                  </button>
                ) : (
                  <span key={i} className="booking-day empty" />
                ),
              )}
            </div>

            {selectedDay && (
              <p className="booking-availability">
                {selectedDay}. {MONTH_NAMES[viewDate.getMonth()]} {viewDate.getFullYear()} ausgewählt — die
                Online-Terminbuchung wird in Kürze freigeschaltet.
              </p>
            )}
          </Reveal>

          <Reveal delay={120} as="aside" className="booking-summary">
            <h2>Details zur Behandlung</h2>
            <p className="booking-service-name">{selectedService.name}</p>
            <p className="booking-service-price">CHF {selectedService.price}</p>
            <p className="booking-note">
              Die direkte Online-Buchung mit Zahlung folgt in einer späteren Ausbaustufe. Für einen Termin
              erreichen Sie uns aktuell telefonisch.
            </p>
            <a href="tel:+41786904399" className="btn btn-gold">
              +41 78 690 43 99
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
