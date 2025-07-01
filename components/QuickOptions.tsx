import OptionButton from "./OptionButton";

interface QuickOptionsProps {
  sendResponse: (category: string) => void;
  userName: string;
}

export default function QuickOptions({ sendResponse, userName }: QuickOptionsProps) {
  const options: Record<string, string> = {
    "¿Que haces?": "questions",
    "Contame un chiste": "jokes",
    "Mostrame un meme": "meme",
    "Quiero jugar a feli cards": "play"
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
