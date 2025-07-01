// hooks/useChat.ts
"use client";

import { useState, useCallback } from "react";
import { ChatMessageType, felipeResponses, getRandomResponse, feliCards } from "../lib/chatbotData";
import { useCardGame } from './useCardGame';

// Tipos necesarios para el juego
interface GameResult {
  playerCard: { id: string; src: string; power: number };
  botCard: { id: string; src: string; power: number };
  message: string;
}

export interface ChatMessage {
  message: ChatMessageType[];
  isUser: boolean;
  time: string;
}

export function useChat() {
  // Estado inicial
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      message: [{ text: "¡Hola! Soy Felipe." }, { text: "Escribime solo tu nombre" }],
      isUser: false,
      time: new Date().toLocaleTimeString(),
    },
  ]);
  const [userName, setUserName] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [currentGameResult, setCurrentGameResult] = useState<GameResult | null>(null);
  const [revealingCard, setRevealingCard] = useState<{ id: string; src: string; power: number } | null>(null);

  const { playRound } = useCardGame();

  // Función para manejar el final de la revelación
  const handleRevealComplete = useCallback(() => {
    if (revealingCard) {
      
      // Ocultar el overlay
      setRevealingCard(null);
      setMessages((prev) => [
        ...prev,
        {
          message: [
            { text: "¡Mi carta es:" },
            { cardData: revealingCard }
          ],
          isUser: true,
          time: new Date().toLocaleTimeString(),
        },
      ]);

      setTimeout(() => {     
        // Continuar con el juego
        continueGame();
      }, 1500);
      // Añadir la carta del usuario al chat
    }
  }, [revealingCard]);

  // Función para continuar el juego después de revelar la carta
  const continueGame = useCallback(() => {
    if (currentGameResult) {

      setMessages((prev) => [
        ...prev,
        {
          message: [
            { text: "¡Excelente! Ahora veré mi carta..." },
          ],
          isUser: false,
          time: new Date().toLocaleTimeString(),
        },
      ]);
      
      setTimeout(() => {     
        setMessages((prev) => [
          ...prev,
          {
            message: [
              { text: "Mi carta es:" },
              { cardData: currentGameResult.botCard },
              { text: currentGameResult.message }
            ],
            isUser: false,
            time: new Date().toLocaleTimeString(),
          },
        ]);
        setCurrentGameResult(null);
      }, 1500);
      
    }
  }, [currentGameResult]);

  // Función para enviar mensajes del usuario
  const sendMessage = useCallback((message: string) => {
    if (!message.trim()) return;
    const time = new Date().toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Si es el primer mensaje, lo usamos como nombre
    if (!userName) {
      setUserName(message);
      setMessages((prev) => [
        ...prev,
        {
          message: [{ text: message }],
          isUser: true,
          time
        },
        {
          message: [
            { text: `¡Hola ${message}!` },
            { text: "¡Bienvenido al chat de Felipe!" },
            { text: "Puedes usar los botones de abajo para interactuar conmigo" }
          ],
          isUser: false,
          time
        }
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          message: [{ text: message }],
          isUser: true,
          time
        }
      ]);
    }
  }, [userName]);


  const getCategoryText = (category: string): string => {
    switch (category) {
      case 'greetings':
        return 'Saludame!';
      case 'jokes':
        return 'Contame un chiste';
      case 'questions':
        return 'Contame algo de vos!';
      case 'meme':
        return 'Mandame un meme!';
      default:
        return 'No disponible para esta categoria';
    }
  };

  // Función para enviar la respuesta de Felipe
  const sendResponse = useCallback((category: string): void => {
    const time = new Date().toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Si es la categoría 'play', jugamos una ronda de cartas
    if (category === 'play') {
      const gameResult = playRound();
      setCurrentGameResult(gameResult);
      
      // Primero mostramos un mensaje indicando que se va a jugar
      setMessages((prev) => [
        ...prev,
        {
          message: [
            { text: "¡Juguemos a las cartas!" },
            { text: "Vamos a ver quien gana!" }
          ],
          isUser: true,
          time,
        },
      ]);
      
      // Luego mostramos el overlay de revelación
      setRevealingCard(gameResult.playerCard);
    } else {

      setMessages((prev) => [
        ...prev,
        {
          message: [{ text: getCategoryText(category) }],
          isUser: true,
          time,
        },
      ]);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            message: getRandomResponse(category),
            isUser: false,
            time,
          },
        ]);
      }, 500);
    }
  }, [playRound]);

  return {
    messages,
    userName,
    isTyping,
    chatInput,
    setChatInput,
    sendMessage,
    sendResponse,
    continueGame,
    revealingCard,
    handleRevealComplete
  };
}