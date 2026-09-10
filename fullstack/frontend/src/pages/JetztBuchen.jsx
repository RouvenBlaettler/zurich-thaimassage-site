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
<<<<<<< HEAD
=======
  const [availableSlots, setAvailableSlots] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
>>>>>>> vanshbranch

  useEffect(() => {
    document.title = "Jetzt Buchen — Gesundheits-Thaimassage Seefeld";
  }, []);

<<<<<<< HEAD
=======
  useEffect(() => {
    if (!date) return;

    const formattedDate =
      `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

    fetch(`http://localhost:4000/api/slots?date=${formattedDate}`)
      .then((response) => response.json())
      .then((data) => {
        setAvailableSlots(data.data?.[formattedDate] ?? []);      });
  }, [date]);

>>>>>>> vanshbranch
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

<<<<<<< HEAD
=======
  async function handleBooking(event) {
    event.preventDefault();

    const formattedDate =
      `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

    const response = await fetch("http://localhost:4000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        bookingDate: formattedDate,
        bookingTime: time,
        massagetype: category,
      }),
  });

  const data = await response.json();

  console.log("Booking response:", data);

  if (!response.ok) {
    console.error("Booking fehlgeschlagen:", data);
    return;
  }

  setConfirmed(true);
}

>>>>>>> vanshbranch
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
<<<<<<< HEAD
=======

>>>>>>> vanshbranch
                {date ? (
                  <TimeSlots
                    date={date}
                    durationMinutes={parseMinutes(tier.label)}
<<<<<<< HEAD
=======
                    slots={availableSlots}
>>>>>>> vanshbranch
                    selected={time}
                    onSelect={setTime}
                  />
                ) : (
<<<<<<< HEAD
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
=======
                  <p className="booking-slots-empty">
                    Bitte zuerst ein Datum auswählen.
                  </p>
                )}

                {date && time && (
                  <form className="booking-form" onSubmit={handleBooking}>
                    <h3>Ihre Angaben</h3>

                    <div className="booking-form-row">
                      <div className="booking-form-field">
                        <label htmlFor="fname">Vorname</label>
                        <input
                          id="fname"
                          type="text"
                          value={firstname}
                          onChange={(event) => setFirstname(event.target.value)}
                          required
                        />
                      </div>

                      <div className="booking-form-field">
                        <label htmlFor="lname">Nachname</label>
                        <input
                          id="lname"
                          type="text"
                          value={lastname}
                          onChange={(event) => setLastname(event.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="booking-form-field">
                      <label htmlFor="email">E-Mail</label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn booking-confirm"
                    >
                      Termin bestätigen
                    </button>
                  </form>
                )}
>>>>>>> vanshbranch
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
