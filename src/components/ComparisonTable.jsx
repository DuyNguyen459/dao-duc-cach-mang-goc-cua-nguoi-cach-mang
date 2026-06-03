export default function ComparisonTable({ rows }) {
  return (
    <div className="comparison-table" role="table" aria-label="So sánh kỷ luật và đổi mới">
      <div className="comparison-row comparison-head" role="row">
        <strong>Góc nhìn</strong>
        <strong>Kỷ luật thép</strong>
        <strong>Đổi mới sáng tạo</strong>
      </div>
      {rows.map(([label, left, right]) => (
        <div className="comparison-row" role="row" key={label}>
          <strong>{label}</strong>
          <p>{left}</p>
          <p>{right}</p>
        </div>
      ))}
    </div>
  );
}
