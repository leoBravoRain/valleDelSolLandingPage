'use client';

import { useEffect, useState } from 'react';

interface HeroProps {
  staticText: string;
  animatedWords: string[];
  animationSpeed?: number;
}

export default function Hero({
  staticText,
  animatedWords,
  animationSpeed = 3000,
}: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % animatedWords.length);
        setIsVisible(true);
      }, 300);
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [animatedWords.length, animationSpeed]);

  return (
    <section className="relative min-h-screen flex items-end justify-center pb-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
          <span>{staticText}</span>
          <span className="inline-block ml-2 min-w-[320px] text-left">
            <span
              className={`inline-block transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              {animatedWords[currentIndex]}
            </span>
          </span>
        </h1>
      </div>
    </section>
  );
}
