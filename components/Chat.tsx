"use client";

import { useRef, useEffect } from "react";
import { ChatMessage } from "../hooks/useChat";
import { UserChat  } from "./UserChat";
import { FelipeChat } from "./FelipeChat";

export default function Chat({ messages, userName }: { messages: ChatMessage[], userName: string }) {
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages]);

  return (  
    <div
      ref={chatRef}
      className="flex-1 overflow-y-auto px-4 py-2 flex flex-col w-full h-full"
    >
      <div className="space-y-2 flex flex-col justify-end">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`${
              msg.isUser ? "self-end" : "self-start"
            }`}
          >
            {msg.isUser 
              ? <UserChat message={msg} userName={userName} />
              : <FelipeChat message={msg} />
            }
          </div>
        ))}
      </div>
    </div>
  );
}
