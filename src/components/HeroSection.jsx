export default function HeroSection({ hero, onStart }) {
  return (
    <section id="hero" className="hero-section narrative-section">
      <div className="hero-visual" aria-hidden="true">
        <span className="root-line root-a" />
        <span className="root-line root-b" />
        <span className="root-line root-c" />
      </div>
      <div className="section-shell hero-grid hero-grid-clean">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <div className="hero-actions">
            <button type="button" className="primary-button" onClick={onStart}>
              Bắt đầu thuyết trình
            </button>
            <span className="scroll-hint"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
