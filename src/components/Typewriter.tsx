import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
}

export default function Typewriter({ text, speed = 100 }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayed(text.slice(0, ++index));

      if (index === text.length) clearInterval(timer); // Stop when the full text is displayed
    }, speed);
    return () => clearInterval(timer); // Cleanup the interval on unmount
  }, [text, speed]); // Re-run effect if text or speed changes
  return <span className="whitespace-pre">{displayed}</span>;
}