import "./GoogleMap.css";

export default function GoogleMap({ address }) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`;

  return (
    <div className="google-map">
      <iframe
        title={`Standort: ${address}`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
