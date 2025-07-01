import Image from 'next/image';
import { ChatMessage } from "../hooks/useChat";
import { Card } from './Card';

const feliProfileImg = '/images/feli-profile.jpg';

export const FelipeChat = ({ message }: { message: ChatMessage }) => {
  return (
    <>
      {message.message.map((msg, index) => (
        <div key={index} className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src={feliProfileImg}
              />
            </div>
          </div>
          <div className="chat-header">
            Felipe
            <time className="text-xs opacity-50">{message.time}</time>
          </div>
          <div className="chat-bubble">
            {msg.text && <p>{msg.text}</p>}
            {msg.image && (
              <div className="mt-2 rounded-lg max-w-full">
                <Image
                  src={msg.image}
                  alt="Mensaje del chat"
                  width={600}
                  height={400}
                  className="rounded-lg"
                  onError={(e) => {
                    console.error(`Error loading image: ${msg.image}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            )}
            {msg.cardData && (
              <Card 
                card={msg.cardData} 
                className="mt-2"
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
}