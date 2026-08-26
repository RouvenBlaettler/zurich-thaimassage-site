import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons.jsx";
import "./Calendar.css";

const WEEKDAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const MONTH_NAMES = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];

function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function isSameDay(a, b) {
  return a && b && a.toDateString() === b.toDateString();
}

/** Grid of Date objects for the month, Monday-first, padded with nulls. */
function buildMonthGrid(year, month) {
  const firstDay = new Date(year, month, 1);
  const startOffset = (firstDay.getDay() + 6) % 7; // Monday = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = Array(startOffset).fill(null);
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(new Date(year, month, day));
  }
  return cells;
}

export default function Calendar({ selectedDate, onSelect }) {
  const today = startOfDay(new Date());
  const [cursor, setCursor] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const cells = buildMonthGrid(cursor.getFullYear(), cursor.getMonth());
  const isCurrentMonth = cursor.getFullYear() === today.getFullYear() && cursor.getMonth() === today.getMonth();

  function isDisabled(date) {
    if (!date) return true;
    if (date < today) return true;
    if (date.getDay() === 0) return true; // Sundays closed
    return false;
  }

  function changeMonth(delta) {
    setCursor((prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1));
  }

  return (
    <div className="booking-calendar">
      <div className="booking-calendar-header">
        <button
          type="button"
          onClick={() => changeMonth(-1)}
          disabled={isCurrentMonth}
          aria-label="Vorheriger Monat"
        >
          <ChevronLeftIcon />
        </button>
        <span>{MONTH_NAMES[cursor.getMonth()]} {cursor.getFullYear()}</span>
        <button type="button" onClick={() => changeMonth(1)} aria-label="Nächster Monat">
          <ChevronRightIcon />
        </button>
      </div>

      <div className="booking-calendar-weekdays">
        {WEEKDAYS.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className="booking-calendar-grid">
        {cells.map((date, index) => {
          if (!date) return <span key={`pad-${index}`} className="booking-calendar-pad" />;

          const disabled = isDisabled(date);
          const selected = isSameDay(date, selectedDate);
          const isToday = isSameDay(date, today);

          return (
            <button
              key={date.toISOString()}
              type="button"
              className={`booking-calendar-day ${selected ? "is-selected" : ""} ${isToday ? "is-today" : ""}`}
              disabled={disabled}
              onClick={() => onSelect(date)}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
