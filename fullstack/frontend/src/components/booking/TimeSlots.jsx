import "./TimeSlots.css";

const OPEN_MINUTES = 10 * 60 + 30; // 10:30
const CLOSE_MINUTES = 21 * 60; // 21:00
const STEP_MINUTES = 30;

function formatMinutes(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function buildSlots(date, durationMinutes) {
  const slots = [];
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  for (let start = OPEN_MINUTES; start + durationMinutes <= CLOSE_MINUTES; start += STEP_MINUTES) {
    if (isToday && start <= nowMinutes) continue;
    slots.push(start);
  }
  return slots;
}

export default function TimeSlots({ date, durationMinutes, selected, onSelect }) {
  const slots = buildSlots(date, durationMinutes);

  if (slots.length === 0) {
    return <p className="time-slots-empty">Keine Verfügbarkeit an diesem Tag.</p>;
  }

  return (
    <div className="time-slots">
      {slots.map((minutes) => {
        const label = formatMinutes(minutes);
        return (
          <button
            key={minutes}
            type="button"
            className={`time-slot ${selected === label ? "is-selected" : ""}`}
            onClick={() => onSelect(label)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
