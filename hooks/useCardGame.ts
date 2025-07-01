import { useState } from 'react';
import { feliCards } from '../lib/chatbotData';

export interface Card {
  id: string;
  src: string;
  power: number;
  name: string;
}

export interface GameResult {
  playerCard: Card;
  botCard: Card;
  winner: 'player' | 'bot' | 'draw';
  message: string;
}

export function useCardGame() {
  const [gameState, setGameState] = useState<null | GameResult>(null);

  const getRandomCard = (): Card => {
    const cardIds = Object.keys(feliCards);
    const randomId = cardIds[Math.floor(Math.random() * cardIds.length)];
    const cardData = feliCards[randomId as keyof typeof feliCards];
    return {
      id: randomId,
      src: cardData.src,
      power: cardData.power,
      name: cardData.name
    };
  };

  const playRound = (): GameResult => {
    const playerCard = getRandomCard();
    const botCard = getRandomCard();

    let winner: 'player' | 'bot' | 'draw' = 'draw';
    let message = '';

    if (playerCard.power > botCard.power) {
      winner = 'player';
      message = '¡Ganaste! Tu carta tiene mas poder que la mia. 🙀🙀🙀';
    } else if (playerCard.power < botCard.power) {
      winner = 'bot';
      message = '¡Perdiste! Mi carta es más poderosa. muaja 😼';
    } else {
      message = '¡Empate! Las cartas tienen el mismo poder.😸';
    }

    const result: GameResult = {
      playerCard,
      botCard,
      winner,
      message
    };

    setGameState(result);
    return result;
  };

  const resetGame = () => {
    setGameState(null);
  };

  return {
    gameState,
    playRound,
    resetGame
  };
}