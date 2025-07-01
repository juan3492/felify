// Tipos para las respuestas del chatbot
export type ChatMessageType = { 
  image?: string | null;
  text?: string | null;
  cardData?: { 
    id: string;
    src: string;
    power: number;
    name: string;
  };
  isScratchCard?: boolean;
};

// Funcion que devuelve el dia de la semana actual
export const getWeekDay = (): string => {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  const today = new Date();
  return days[today.getDay()];
};

// Funcion que devuelve cuantos dias faltan para halloween
export const daysToHalloween = (): number => {
  const today = new Date();
  const halloween = new Date(today.getFullYear(), 9, 31);
  const diffTime = halloween.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};



// Tipo para las respuestas del chatbot
export type FelipeResponses = Record<string, ChatMessageType[][]>;

// Tipo para los resultados del juego
export interface GameResult {
  playerCard: { id: string; src: string; power: number };
  botCard: { id: string; src: string; power: number };
  message: string;
}

// Datos de imágenes disponibles
export const chatbotImages: Record<string, string> = {
  welcome: '/images/welcome.png',
  meme: '/images/meme.png',
  cat: '/images/cat.png',
};

export const chatbotMemes: Record<string, string> = {
  memePovSobrecito: '/images/memes/pov-sobrecito.jpg',
  memeCajaCanil: '/images/memes/caja-canil.jpg',
  memeCarteraNueva: '/images/memes/cartera-nueva.jpg',
  memeMirarMal: '/images/memes/mirar-mal.jpg',
  memeCuandoComes: '/images/memes/cuando-comes.jpg',
  memeDeViolencia: '/images/memes/de-violencia.jpg',
  memeDeComer: '/images/memes/de-comer.jpg',
  testMeme: '/images/memes/test-meme.jpg',
  memeAdopcion: '/images/memes/adopcion.jpg',
  memeHalloween: '/images/memes/halloween.jpg',
};

// Respuestas del chatbot organizadas por categoría
export const felipeResponses: FelipeResponses = {
  greetings: [
    [
      { text: "¡Hola! Soy Felipe." },
      { text: "¡Bienvenido!" },
      { text: "¿Cómo estás?" }
    ],
    [
      { text: "¡Hola!" },
      { text: "Soy Felipe" },
      { text: "¿Qué tal tu día?" }
    ]
  ],
  jokes: [
    [
      { text: "¿Quieres escuchar un chiste? 😄" },
      { text: "¡Tengo uno genial para ti!" }
    ],
    [
      { text: "¡Tengo un chiste genial para ti!" },
      { text: "¿Te gustan los chistes de programación?" }
    ],
    [
      { text: "Aquí tienes un chiste divertido:" },
      { text: "¡Espero que te guste!" }
    ]
  ],
  questions: [
    [
      { text: "¿Quieres ver un meme?" },
      { image: chatbotImages.meme },
      { text: "¡Es muy divertido!" }
    ],
    [
      { text: "¿Quieres escuchar un maullido?" },
      { image: chatbotImages.cat },
      { text: "¡Es muy tierno!" }
    ],
    [
      { text: "¿Quieres contarme un chiste?" },
      { text: "¡Me encantan los buenos chistes!" }
    ],
    [
      { text: "¿Quieres hablar de la vida en general?" },
      { text: "¡Siempre estoy dispuesto a conversar!" }
    ]
  ],
  meme: [
    [
      { text: "Kirara se ve feliz 😊" },
      { image: chatbotMemes.testMeme },
      { text: "¡Espero que te guste!" }
    ],
    [
      { text: "😮😮😮😮" },
      { image: chatbotMemes.memePovSobrecito },
      { text: "¡Comprame un sobrecito!" }
    ],
    [
      { text: "😹😹😹" },
      { image: chatbotMemes.memeCajaCanil },
      { text: "¡Espero que falte mucho para que vayamos al veterinario" }
    ],
    [
      { text: "ohhhh esa cartera es para mi?" },
      { image: chatbotMemes.memeCarteraNueva },
      { text: "👜👛👜👝" }
    ],
    [
      { text: "😾😾😾😾" },
      { image: chatbotMemes.memeMirarMal },
    ],
    [
      { text: "🤔🤔🤔🤔" },
      { image: chatbotMemes.memeCuandoComes },
      { text: "¿Para mí no hay nada? 🤨" },
    ],
    [
      { text: `${getWeekDay()} de violencia 😼👊` },
      { image: chatbotMemes.memeDeViolencia },
    ],
    [
      { text: `${getWeekDay()} de comer algo rico 🍔` },
      { image: chatbotMemes.memeDeComer },
      {text: "Mi hermana mayor es muy linda 🥰"},
      {text: "En especial cuando le traen su anvorguesita feliz 🥰"},
    ],
    [
      { text: "Jejeje. Quiero a mi mamá solo para mí 🤗" },
      { image: chatbotMemes.memeAdopcion },
    ],
    [
      { text: "Ya me quiero disfrazar 🎃" },
      { image: chatbotMemes.memeHalloween },
      { text: `Solo faltan ${daysToHalloween()} dias 👻👽🎃` },
    ],
  ]
};

export const feliCards: Record<string, { src: string; power: number; name: string; }> = {
  feliSSJ: { src: '/images/cards/Feli-Super-Saiyajin.jpeg', power: 2700, name: "Feli Super Saiyajin"},
  feliCotton: { src: '/images/cards/Feli-orejitas-de-algodon.jpeg', power: 1000, name: "Feli orejitas de algodón"},
  feliMagoOscuro: { src: '/images/cards/Feli-Mago-Oscuro.jpeg', power: 2500, name: "Feli Mago Oscuro"},
  feliCaballerodelaOrdendelosSobrecitos: { src: '/images/cards/Feli-Caballero-de-la-Orden-de-los-Sobrecitos.jpeg', power: 2000, name: "Feli Caballero de la Orden de los Sobrecitos"},
  kiraraGatitaForajida: { src: '/images/cards/Kirara-Gatita-Forajida.jpeg', power: 1800, name: "Kirara Gatita Forajida"},
  kiraraSuperHeroina: { src: '/images/cards/Kirara-Super-Heroina.jpeg', power: 1900, name: "Kirara Super Heroína"},
  kiraraSamuraiRosa: { src: '/images/cards/Kirara-Samurai-Rosa.jpeg', power: 2600, name: "Kirara Samurai Rosa"},
  ramsesCerbero: { src: '/images/cards/Ramses-Cerbero.jpeg', power: 2100, name: "Ramsés Cerbero"},
  ramsesElFaraonInmortal: { src: '/images/cards/Ramses-el-Faraon-Inmortal.jpeg', power: 2400, name: "Ramsés El Faraón Inmortal"},
  ramsesPerroPolicia: { src: '/images/cards/Ramses-Perro-Policia.jpeg', power: 1400, name: "Ramsés Perro Policía"},
};

// Función utilitaria para obtener mensajes aleatorios por categoría
export const getRandomResponse = (category: string): ChatMessageType[] => {
  const responses = felipeResponses[category];
  if (!responses) return [{ text: "No tengo respuesta para esa categoría" }];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
};

// Función utilitaria para obtener todas las respuestas de una categoría
export const getResponsesByCategory = (category: string): ChatMessageType[][] => {
  return felipeResponses[category] ?? [];
};
