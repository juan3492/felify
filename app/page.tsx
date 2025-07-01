'use client';

import Chat from '@/components/Chat';
import FelipeHeader from '@/components/FelipeHeader';
import ChatInput from '@/components/ChatInput';
import QuickOptions from '@/components/QuickOptions';
import { useChat } from '../hooks/useChat';
import { CardRevealOverlay } from '@/components/CardRevealOverlay';

export default function Home() {
  const { messages, sendMessage, sendResponse, userName, revealingCard, handleRevealComplete } = useChat();

  return (
    <div 
    className="h-screen flex flex-col bg-felipeCream"
    style={{
      backgroundImage: `linear-gradient(rgba(251, 213, 229,0.8), rgba(251, 213, 229,0.8)), url(/images/chat-bg.jpg)`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
    >
      <FelipeHeader />
      <Chat messages={messages} userName={userName} />
      <QuickOptions sendResponse={sendResponse} userName={userName} />  
      <ChatInput onSend={sendMessage} userName={userName}/>
      <CardRevealOverlay card={revealingCard} onComplete={handleRevealComplete} />
    </div>
  );
}
