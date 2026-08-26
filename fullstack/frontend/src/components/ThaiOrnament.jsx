/** Decorative inline-SVG lotus/flame line art, standing in for the studio
 * photography we don't have rights to reuse. `tone` picks the stroke color
 * against dark or light section backgrounds. */
export default function ThaiOrnament({ variant = "lotus", tone = "gold", className = "" }) {
  const stroke = tone === "gold" ? "#c9a15a" : "#f7f1e6";

  if (variant === "flame") {
    return (
      <svg
        className={className}
        viewBox="0 0 200 240"
        fill="none"
        stroke={stroke}
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <path d="M100 10c20 30 34 52 34 78 0 22-15 38-34 38s-34-16-34-38c0-8 2-16 6-24-2 10-1 18 4 24 3-16 10-28 24-40-6 14-6 24 0 34 8-12 14-24 0-72Z" />
        <circle cx="100" cy="150" r="6" />
        <path d="M60 230c0-30 18-50 40-50s40 20 40 50" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 220 220"
      fill="none"
      stroke={stroke}
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <g transform="translate(110,120)">
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={i}
            transform={`rotate(${i * 45})`}
            d="M0 0C10 -30 10 -70 0 -95C-10 -70 -10 -30 0 0Z"
          />
        ))}
      </g>
      <circle cx="110" cy="120" r="10" />
    </svg>
  );
}
