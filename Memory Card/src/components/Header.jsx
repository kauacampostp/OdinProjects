export default function Header({ score, bestScore}) {
  return (
    <header className="font-mono mb-8 p-4 bg-white text-blue-800 md:flex md:justify-between">
      <section className="flex-1">
        <h1 className="text-5xl font-black mb-3">Memory Card Game</h1>
        <p className="mb-5 md:mb-0">Don't click the same card twice!</p>
      </section>
      <section className="flex flex-col gap-1 p-2 w-full max-w-50 bg-blue-900 rounded-xl text-white text-xl font-bold ">
        <span>Score: {score}</span>
        <span>Best Score: {bestScore}</span>
      </section>
    </header>
  );
}
