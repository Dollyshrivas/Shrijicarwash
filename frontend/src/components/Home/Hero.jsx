import React, { useEffect, useState } from "react";
import heroImage from "../../assets/Car Cleaning.jpg";

function Home() {
  const headline = "Have your vehical experience";
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [visibleHeadline, setVisibleHeadline] = useState(
    prefersReducedMotion ? headline : ""
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    let characterIndex = 0;
    const typingTimer = window.setInterval(() => {
      characterIndex += 1;
      setVisibleHeadline(headline.slice(0, characterIndex));

      if (characterIndex === headline.length) {
        window.clearInterval(typingTimer);
      }
    }, 85);

    return () => window.clearInterval(typingTimer);
  }, [headline, prefersReducedMotion]);

  return (
    <div
      className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: "center", backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 px-4">
          {visibleHeadline}
          <span className="typing-cursor" aria-hidden="true">|</span>
        </h1>

        <p className="text-gray-400 mb-6 px-4">
          Drive premium cars with elegance and comfort
        </p>

        <a href="/#services" className="inline-block bg-white text-black px-6 py-3 rounded-full hover:bg-black hover:text-zinc-200">
          Explore Services
        </a>
      </div>
    </div>
  );
}

export default Home;