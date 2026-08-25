// Small hand-built inline icon set so the design doesn't depend on any
// external icon library or stock photography — everything here is just
// SVG shapes styled with the page's own gold/maroon palette via `currentColor`.

export function LotusIcon({ className }) {
  const petals = 8;
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.6">
        {Array.from({ length: petals }).map((_, i) => (
          <ellipse key={i} cx="50" cy="30" rx="9" ry="21" transform={`rotate(${(360 / petals) * i} 50 50)`} />
        ))}
        <circle cx="50" cy="50" r="5" />
      </g>
    </svg>
  );
}

export function LeafIcon({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M32 56C18 50 12 36 16 20C34 20 48 30 50 46C44 52 38 55 32 56Z" strokeLinejoin="round" />
      <path d="M18 22C30 30 40 40 48 50" strokeLinecap="round" />
    </svg>
  );
}

export function HandsIcon({ className }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 34c-2-6 1-14 7-14 2-8 12-8 14 0 6 0 9 8 7 14" />
      <path d="M14 34c-6 4-6 14 2 18 8 4 24 4 32 0 8-4 8-14 2-18" />
    </svg>
  );
}

export function StoneIcon({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="32" cy="44" rx="22" ry="10" />
      <ellipse cx="32" cy="30" rx="15" ry="7" />
      <ellipse cx="32" cy="18" rx="9" ry="4.5" />
    </svg>
  );
}

export function QuoteIcon({ className }) {
  return (
    <svg viewBox="0 0 48 36" className={className} aria-hidden="true" fill="currentColor">
      <path d="M0 20C0 8 8 1 18 0v6c-6 1.5-9 5-9 10h9v14H0V20zM26 20c0-12 8-19 18-20v6c-6 1.5-9 5-9 10h9v14H26V20z" />
    </svg>
  );
}

export function DiamondPattern({ id, className }) {
  return (
    <svg className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id={id} width="64" height="64" patternUnits="userSpaceOnUse">
          <path d="M32 12 L46 32 L32 52 L18 32 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <circle cx="32" cy="32" r="2.4" fill="currentColor" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
