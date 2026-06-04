import { useState } from 'react';

export default function DilemmaInteraction({ dilemma }) {
  const [choice, setChoice] = useState(null);
  const selected = choice === null ? null : dilemma.options[choice];

  return (
    <section className="dilemma-panel" aria-label="Tình huống tương tác">
      <div>
        <h3>Tình huống AI trong học tập</h3>
        <p>{dilemma.situation}</p>
      </div>
      <div className="dilemma-question">
        <strong>{dilemma.question}</strong>
        <div className="choice-row">
          {dilemma.options.map((option, index) => (
            <button
              type="button"
              key={option.label}
              className={choice === index ? `selected ${option.tone}` : ''}
              onClick={() => setChoice(index)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      {selected && (
        <div className={`feedback-card ${selected.tone}`}>
          <strong>Phản hồi</strong>
          <p>{selected.response}</p>
          <p>{dilemma.analysis}</p>
        </div>
      )}
    </section>
  );
}
