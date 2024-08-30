import React, { useState, useEffect } from "react";

function TypewriterEffect({ texts, typeSpeed = 150, deleteSpeed = 100, pauseTime = 1500 }) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (!deleting && charIndex < currentText.length) {
      // Typing effect
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (deleting && charIndex > 0) {
      // Deleting effect
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, deleteSpeed);
      return () => clearTimeout(timeout);
    } else if (!deleting && charIndex === currentText.length) {
      // Pause before deleting
      const timeout = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    } else if (deleting && charIndex === 0) {
      // Switch to next text
      setDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [texts, textIndex, charIndex, deleting, typeSpeed, deleteSpeed, pauseTime]);

  return <span>{displayText}</span>;
}

export default TypewriterEffect;
