export default function ProgressBar({ progress }) {
  return (
    <div className="progress-track" aria-hidden="true">
      <span style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
