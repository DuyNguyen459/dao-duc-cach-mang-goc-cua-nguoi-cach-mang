export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item}>
          <span />
          <p>{item}</p>
        </li>
      ))}
    </ol>
  );
}
