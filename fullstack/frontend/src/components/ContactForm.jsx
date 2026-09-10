import { useState } from "react";
import { CheckIcon } from "./icons.jsx";
import "./ContactForm.css";

const EMPTY = { vorname: "", nachname: "", email: "", telefon: "", nachricht: "" };

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  function update(field, value) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function validate() {
    const next = {};
    if (!values.email.trim()) next.email = "E-Mail ist erforderlich.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Bitte eine gültige E-Mail angeben.";
    if (!values.nachricht.trim()) next.nachricht = "Nachricht ist erforderlich.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    // No backend endpoint exists yet for the contact form — this simulates
    // the submit state locally rather than calling a route that isn't there.
    window.setTimeout(() => {
      setStatus("sent");
      setValues(EMPTY);
    }, 600);
  }

  if (status === "sent") {
    return (
      <div className="contact-success">
        <span className="contact-success-icon">
          <CheckIcon />
        </span>
        <h3>Vielen Dank!</h3>
        <p>Ihre Nachricht wurde übermittelt. Wir melden uns so schnell wie möglich.</p>
        <button type="button" className="btn btn-outline" onClick={() => setStatus("idle")}>
          Neue Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-row">
        <label>
          Vorname
          <input
            type="text"
            value={values.vorname}
            onChange={(e) => update("vorname", e.target.value)}
          />
        </label>
        <label>
          Nachname
          <input
            type="text"
            value={values.nachname}
            onChange={(e) => update("nachname", e.target.value)}
          />
        </label>
      </div>

      <label>
        E-Mail-Adresse *
        <input
          type="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <span className="contact-form-error">{errors.email}</span>}
      </label>

      <label>
        Telefonnummer
        <input
          type="tel"
          value={values.telefon}
          onChange={(e) => update("telefon", e.target.value)}
        />
      </label>

      <label>
        Nachricht *
        <textarea
          rows={4}
          value={values.nachricht}
          onChange={(e) => update("nachricht", e.target.value)}
          aria-invalid={Boolean(errors.nachricht)}
        />
        {errors.nachricht && <span className="contact-form-error">{errors.nachricht}</span>}
      </label>

      <button type="submit" className="btn" disabled={status === "sending"}>
        {status === "sending" ? "Wird gesendet…" : "Einreichen"}
      </button>
    </form>
  );
}
