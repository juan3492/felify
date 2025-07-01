export default function FelipeHeader() {
  return (
    <div className="sticky top-0 z-10 bg-felipe-cream p-4 flex items-center gap-2 border-b shadow-sm">
      <div className="avatar">
        <div className="w-10 rounded-full">
          <img src="/images/feli-profile.jpg" />
        </div>
      </div>
      <div className="font-bold text-lg">Felipe</div>
    </div>
  );
}