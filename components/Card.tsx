import type { Card } from '../hooks/useCardGame';

interface CardProps {
  card: Card | null;
  className?: string;
}

export function Card({ card, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      <img 
        src={card?.src} 
        alt={`Card ${card?.id}`} 
        className="w-full h-full object-cover rounded-lg mb-2"
      />
      <div className="text-center">
        <h3 className="font-bold text-lg">{card?.name}</h3>
        <p className="text-gray-600">Poder: {card?.power}</p>
      </div>
    </div>
  );
}
