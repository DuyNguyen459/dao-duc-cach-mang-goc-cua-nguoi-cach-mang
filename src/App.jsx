import { useEffect, useMemo, useState } from 'react';
import AIDeclaration from './components/AIDeclaration.jsx';
import FooterReferences from './components/FooterReferences.jsx';
import HeroSection from './components/HeroSection.jsx';
import NarrativeSection from './components/NarrativeSection.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import { declaration, dilemma, hero, navItems, references, sections } from './data/content.js';

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function App() {
  const [activeId, setActiveId] = useState('hero');
  const [progress, setProgress] = useState(0);
  const orderedIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.35, 0.65] }
    );

    orderedIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateProgress);
    };
  }, [orderedIds]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (!['ArrowRight', 'ArrowLeft'].includes(event.key)) return;
      const index = orderedIds.indexOf(activeId);
      const nextIndex = event.key === 'ArrowRight' ? index + 1 : index - 1;
      const nextId = orderedIds[Math.max(0, Math.min(orderedIds.length - 1, nextIndex))];
      scrollToSection(nextId);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeId, orderedIds]);

  const activeIndex = orderedIds.indexOf(activeId);
  const previousId = orderedIds[Math.max(0, activeIndex - 1)];
  const nextId = orderedIds[Math.min(orderedIds.length - 1, activeIndex + 1)];

  return (
    <>
      <ProgressBar progress={progress} />

      <main>
        <HeroSection hero={hero} onStart={() => scrollToSection('duc-la-goc-intro')} />
        {sections.map((section) => (
          <NarrativeSection key={section.id} section={section} dilemma={dilemma} />
        ))}
        <AIDeclaration declaration={declaration} />
        <FooterReferences references={references} />
      </main>

      <div className="section-controls" aria-label="Điều khiển thuyết trình">
        <button type="button" onClick={() => scrollToSection(previousId)} disabled={activeIndex <= 0}>
          Trước
        </button>
        <span>
          {String(activeIndex + 1).padStart(2, '0')} / {String(orderedIds.length).padStart(2, '0')}
        </span>
        <button type="button" onClick={() => scrollToSection(nextId)} disabled={activeIndex >= orderedIds.length - 1}>
          Tiếp
        </button>
      </div>
    </>
  );
}
