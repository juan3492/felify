"use client";

import { useEffect, useState } from 'react';

export default function TypingIndicator() {
  const [animationState, setAnimationState] = useState([true, false, false]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState(prev => {
        return prev.map((state, i) => 
          i === 0 ? !state : prev[i - 1]
        );
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-1 items-center">
      {animationState.map((isActive, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full ${
            isActive ? 'bg-felipePink' : 'bg-felipeCream'
          }`}
        />
      ))}
    </div>
  );
}
