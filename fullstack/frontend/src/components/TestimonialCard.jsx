import "./TestimonialCard.css";

export default function TestimonialCard({ quote }) {
  return (
    <figure className="testimonial-card">
      <span className="testimonial-mark">"</span>
      <blockquote>{quote}</blockquote>
    </figure>
  );
}
