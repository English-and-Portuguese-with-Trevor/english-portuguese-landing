import { useEffect, useRef, useState } from "react";

const CYCLE_MS = 3200;
const FADE_MS = 350;

const phrases = [
  { text: "Learn English.", lang: "en" },
  { text: "Aprenda Português.", lang: "pt" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef(null);

  const stopAutoCycle = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const startAutoCycle = () => {
    stopAutoCycle();
    intervalRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setVisible(true);
      }, FADE_MS);
    }, CYCLE_MS);
  };

  useEffect(() => {
    startAutoCycle();
    return stopAutoCycle;
  }, []);

  const goTo = (i) => {
    stopAutoCycle();
    setVisible(false);
    setTimeout(() => {
      setIndex(i);
      setVisible(true);
    }, FADE_MS);
  };

  const current = phrases[index];
  return (
    <section className="hero" id="hero">
      <div className="hero-ghost">
        <span>&amp;</span>
      </div>
      <div className="layer-dots" />
      <div className="hero-content">
        <p className="hero-eyebrow">Language Lessons with Trevor</p>
        <h1
          className="hero-name"
          lang={current.lang}
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.35s ease" }}
        >
          {current.text}
        </h1>
        <p className="hero-tagline">One teacher, two languages.</p>
        <div className="hero-cta">
          <a
            className="btn btn-sky"
            href="#english"
            onMouseEnter={() => goTo(0)}
            onMouseLeave={startAutoCycle}
          >
            Start with English
          </a>
          <a
            className="btn btn-gold"
            href="#portuguese"
            onMouseEnter={() => goTo(1)}
            onMouseLeave={startAutoCycle}
          >
            Comece com Português
          </a>
        </div>
      </div>
    </section>
  );
}
