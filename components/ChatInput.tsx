"use client";

import { useState } from "react";
import { SendHorizonal } from "lucide-react";

export default function ChatInput({ onSend, userName }: 
  { onSend: (message: string) => void, userName: string }) {
  const [message, setMessage] = useState("");

  const send = () => {
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
  };  

  return (
    <div className="sticky bottom-0 z-10 bg-felipeCream p-3 flex items-center gap-2">
      {userName ? (
        <div className="flex-1 rounded-full px-4 py-2 bg-transparent border-2 border-red-500 border-dashed text-center italic text-red-500 opacity-50">
          <span className="bg-white px-1">OH NOOOOOOOO FELI TIRO EL CHAT</span>
        </div>
      ) : (
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="¿Como te llamas?"
          className="flex-1 rounded-full px-4 py-2 bg-white border border-gray-300 outline-none text-sm"
        />
      )}
      <button
        disabled={!!userName}
        onClick={send}
        className="p-2 bg-felipe-gray text-white rounded-full hover:scale-105 transition"
        style={{ opacity: !!userName ? 0.5 : 1, cursor: !!userName ? "not-allowed" : "pointer" }}
      >
        <SendHorizonal size={20} />
      </button>
    </div>
  );
}
