import OptionButton from "./OptionButton";

interface QuickOptionsProps {
  sendResponse: (category: string) => void;
  userName: string;
}

export default function QuickOptions({ sendResponse, userName }: QuickOptionsProps) {
  const options: Record<string, string> = {
    "Contame algo": "questions",
    "Chiste": "jokes",
    "Meme": "meme",
    "Jugar a las cartas": "play"
  };

  return (
    !!userName ? (
      <div className="flex flex-wrap justify-center gap-2 p-3 bg-transparent">
        {Object.entries(options).map(([label, category]) => (
          <OptionButton
            key={label}
            label={label}
            onClick={() => sendResponse(category)}
          />
        ))}
      </div>
    ) : null
  );
}
