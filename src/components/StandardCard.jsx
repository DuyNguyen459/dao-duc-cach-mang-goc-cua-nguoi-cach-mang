export default function StandardCard({ title, body, example }) {
  return (
    <article className="standard-card">
      <div className="standard-icon" aria-hidden="true">
        {title.slice(0, 1)}
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
      <small>{example}</small>
    </article>
  );
}
