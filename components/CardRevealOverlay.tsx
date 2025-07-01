import { useState, useEffect } from 'react';
import { Card } from './Card';
import { ScratchToReveal } from './magicui/scratch-to-reveal';

interface CardRevealOverlayProps {
  card: { id: string; src: string; power: number } | null;
  onComplete: () => void;
  className?: string;
}

export function CardRevealOverlay({ card, onComplete, className = '' }: CardRevealOverlayProps) {
  

  if (!card) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${className}`}>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative z-10">
        <ScratchToReveal
          className="rounded-lg"
          minScratchPercentage={75}
          onComplete={() => {
            onComplete();
          }}
          width={400} height={600}
        >
          <img 
            src={card?.src} 
            alt={`Card ${card?.id}`} 
            className="w-full h-full object-cover rounded-lg mb-2"
          />
        </ScratchToReveal>
      </div>
    </div>
  );
}
