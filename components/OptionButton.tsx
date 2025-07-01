"use client";
import { ShinyButton } from "./magicui/shiny-button";

type OptionButtonProps = {
  label: string;
  onClick: () => void;
};

export default function OptionButton({ label, onClick }: OptionButtonProps) {
  return (
    <ShinyButton
      onClick={onClick}
      className="px-4 py-2 bg-white rounded-full text-sm hover:bg-felipe-blue transition"
    >
      {label}
    </ShinyButton>
  );
}