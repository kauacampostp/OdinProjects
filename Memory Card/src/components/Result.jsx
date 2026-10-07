export default function Result({ result, restart }) {
  let buttonT = "";
  let resultT = "";
  if (result) {
    buttonT = "Play Again";
    resultT = "You Win";
  } else {
    buttonT = "Try Again";
    resultT = "You Lose";
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <aside className="bg-white p-8 rounded-xl shadow-2xl max-w-sm text-center transform scale-100 transition-all">
        <h3 className="text-2xl font-bold text-green-600 mb-2">{resultT}</h3>
        <button onClick={restart} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">{buttonT}</button>
      </aside>
    </div>
  );
}
