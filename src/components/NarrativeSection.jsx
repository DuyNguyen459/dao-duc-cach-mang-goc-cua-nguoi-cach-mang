import ComparisonTable from './ComparisonTable.jsx';
import DilemmaInteraction from './DilemmaInteraction.jsx';
import QuoteBlock from './QuoteBlock.jsx';
import StandardCard from './StandardCard.jsx';
import Timeline from './Timeline.jsx';

export default function NarrativeSection({ section, dilemma }) {
  const isDark = section.id === 'inner-enemy';

  return (
    <section id={section.id} className={`narrative-section ${isDark ? 'dark-section' : ''}`}>
      <div className="section-shell section-grid">
        <aside className="section-meta">
          <span>{section.number}</span>
          <p>{section.member}</p>
          <strong>{section.kicker}</strong>
        </aside>

        <div className="section-body">
          {section.videoUrl ? (
            <div className="intro-layout">
              <div className="intro-content">
                <div className="section-heading">
                  <h2>{section.title}</h2>
                  <p>{section.lead}</p>
                </div>
              </div>
              <div className="intro-video">
                <div className="video-container">
                  <video width="100%" height="auto" controls style={{ borderRadius: '8px' }}>
                    <source src={section.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          ) : (
            <div className="section-heading">
              <h2>{section.title}</h2>
              <p>{section.lead}</p>
            </div>
          )}
          
          {section.causes && (
            <div className="point-grid">
              {section.causes.map((cause) => (
                <article key={cause}>
                  <p>{cause}</p>
                </article>
              ))}
            </div>
          )}
          
          {section.reflection && (
            <div className="reflection-box">
              <p>{section.reflection}</p>
            </div>
          )}

          {section.points && (
            <div className="point-grid">
              {section.points.map((point) => (
                <article key={point}>
                  <p>{point}</p>
                </article>
              ))}
            </div>
          )}

          {section.cards && (
            <div className="concept-strip">
              {section.cards.map(([title, body]) => (
                <article key={title}>
                  <span />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          )}

          {section.standards && (
            <div className="standards-grid">
              {section.standards.map(([title, body, example]) => (
                <StandardCard key={title} title={title} body={body} example={example} />
              ))}
            </div>
          )}

          {section.warnings && (
            <div className="warning-grid">
              {section.warnings.map(([title, body]) => (
                <article key={title}>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          )}

          {section.timeline && <Timeline items={section.timeline} />}

          {section.solutions && (
            <div className="solution-row">
              {section.solutions.map((solution) => (
                <span key={solution}>{solution}</span>
              ))}
            </div>
          )}

          {section.pillars && (
            <div className="pillar-map">
              {section.pillars.map((pillar) => (
                <span key={pillar} className={pillar === 'Đạo đức' ? 'focus' : ''}>
                  {pillar}
                </span>
              ))}
            </div>
          )}

          {section.citations && (
            <div className="citation-grid">
              {section.citations.map(([source, note]) => (
                <article key={source}>
                  <strong>{source}</strong>
                  <p>{note}</p>
                </article>
              ))}
            </div>
          )}

          {section.compare && <ComparisonTable rows={section.compare} />}

          {section.dare && (
            <div className="dare-orbit">
              {section.dare.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          )}

          {section.id === 'genz' && <DilemmaInteraction dilemma={dilemma} />}

          {section.quote && <QuoteBlock quote={section.quote} />}
        </div>
      </div>
    </section>
  );
}
