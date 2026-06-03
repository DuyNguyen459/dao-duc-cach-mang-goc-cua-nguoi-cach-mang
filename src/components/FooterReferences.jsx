export default function FooterReferences({ references }) {
  return (
    <footer id="references" className="references-footer">
      <div className="section-shell">
        <p className="eyebrow">Tài liệu tham khảo</p>
        <h2>Nguồn tham khảo chính</h2>
        <ul>
          {references.map((reference) => (
            <li key={reference}>{reference}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
