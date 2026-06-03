export default function AIDeclaration({ declaration }) {
  return (
    <section id="declaration" className="narrative-section declaration-section">
      <div className="section-shell certificate">
        <div className="certificate-symbols" aria-hidden="true">
          <span>AI</span>
          <span>✓</span>
          <span>BOOK</span>
        </div>
        <p className="eyebrow">Minh bạch học thuật</p>
        <h2>{declaration.title}</h2>
        <p>{declaration.body}</p>
        <div className="mark-row">
          {declaration.marks.map((mark) => (
            <span key={mark}>{mark}</span>
          ))}
        </div>
        <a className="primary-button" href="#references">
          Kết thúc thuyết trình
        </a>
      </div>
    </section>
  );
}
