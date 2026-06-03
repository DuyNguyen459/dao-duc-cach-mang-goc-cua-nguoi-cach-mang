export default function QuoteBlock({ quote }) {
  return (
    <blockquote className="quote-block">
      <span>“</span>
      <p>{quote}</p>
    </blockquote>
  );
}
