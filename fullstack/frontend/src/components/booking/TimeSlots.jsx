import "./TimeSlots.css";

export default function TimeSlots({
  date,
  durationMinutes,
  slots,
  selected,
  onSelect
}) {
  if (slots.length === 0) {
    return <p className="time-slots-empty">Keine Verfügbarkeit an diesem Tag.</p>;
  }

  return (
    <div className="time-slots">
      {slots.map((slot) => {
        const label = new Date(slot.start).toLocaleTimeString("de-CH", {
          hour: "2-digit",
          minute: "2-digit",
        });

        return (
          <button
            key={slot.start}
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