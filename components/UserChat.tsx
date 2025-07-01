import { ChatMessage } from "../hooks/useChat";
import { Card } from './Card';

const userProfileImg = '/images/user-profile.webp';

export const UserChat = ({ message, userName }: { message: ChatMessage, userName: string }) => {
  return (
    <div className="chat chat-end justify-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={userProfileImg}
          />
        </div>
      </div>
      <div className="chat-header">
        {userName}
        <time className="text-xs opacity-50">{message.time}</time>
      </div>
      <div className="chat-bubble">
        {message.message.map((msg, index) => (
          <div key={index} className="mb-2">
            {msg.text && <p>{msg.text}</p>}
            {msg.image && (
              <img
                src={msg.image}
                alt="Mensaje del chat"
                className="mt-2 rounded-lg max-w-full"
              />
            )}
            {msg.cardData && (
              <Card 
                card={msg.cardData} 
                className="mt-2"
              />
            )}
          </div>
        ))}
      </div>
      <div className="chat-footer opacity-50">Visto!</div>
    </div>
  );
};