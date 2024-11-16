import React, { useState, useEffect } from 'react';

const texts = [
  "Unlock deeper insights from your video content with our advanced AI analysis platform.",
  "Transform your video strategy with real-time AI-powered content analysis.",
  "Understand viewer engagement and optimize your content with deep learning.",
  "Automatically extract key moments and insights from any video format.",
  "Scale your video analysis with enterprise-grade AI technology."
];

export function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 500); // Half of the transition duration
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[60px] flex items-center justify-center">
      <p
        className={`text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed text-center transition-all duration-500 ${
          isAnimating ? "opacity-0 transform -translate-y-2" : "opacity-100 transform translate-y-0"
        }`}
      >
        {texts[currentIndex]}
      </p>
    </div>
  );
}