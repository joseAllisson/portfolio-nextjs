import { useEffect, useState } from "react";

const WORDS = ["Frontend", "Backend", "Fullstack"];
const TYPING_DELAY = 100;
const DELETING_DELAY = 50;
const PAUSE_AFTER_WORD = 1500;

export function TypewriterHero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIndex];

    // Ao terminar de digitar a palavra: espera PAUSE_AFTER_WORD e começa a apagar
    if (!isDeleting && charIndex === word.length) {
      const t = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_WORD);
      return () => clearTimeout(t);
    }

    // Ao terminar de apagar: passa para a próxima palavra e começa a digitar
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % WORDS.length);
      return;
    }

    const delay = isDeleting ? DELETING_DELAY : TYPING_DELAY;
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCharIndex((c) => c - 1);
      } else {
        setCharIndex((c) => c + 1);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [wordIndex, charIndex, isDeleting]);

  const word = WORDS[wordIndex];
  const visibleText = word.slice(0, charIndex);

  return (
    <span className="typewriter-hero">
      <span className="typewriter-text">{visibleText}</span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
}

