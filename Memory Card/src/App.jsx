import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemons, setClickedPokemons] = useState([]);
  const [gameResult, setGameResult] = useState(null);

  async function getPokemons() {
    const ids = new Set();

    while (ids.size < 15) {
      const randomId = Math.floor(Math.random() * 1025) + 1;
      ids.add(randomId);
    }

    const arrayPokemons = await Promise.all(
      [...ids].map(async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        const pokemonData = await response.json();

        return {
          id: pokemonData.id,
          name: pokemonData.name,
          img: pokemonData.sprites.front_default,
        };
      }),
    );

    setPokemonArray(shuffleArray(arrayPokemons));
  }

  function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[i],
      ];
    }

    return shuffled;
  }

  function calculateScore(id) {
    const isRight = checkAnswer(id);

    if (!isRight) {
      setScore(0);
      setClickedPokemons([]);
      setGameResult(false);
      return;
    }

    const newScore = score + 1;
    setScore(newScore);

    if (newScore > bestScore) {
      setBestScore(newScore);
    }

    if (clickedPokemons.length + 1 === pokemonArray.length) {
      setGameResult(true);
      return;
    }
    setPokemonArray(shuffleArray(pokemonArray));
  }

  function checkAnswer(id) {
    if (clickedPokemons.includes(id)) {
      return false;
    }

    setClickedPokemons([...clickedPokemons, id]);
    return true;
  }

  function restartGame() {
    setScore(0);
    setClickedPokemons([]);
    setGameResult(null);
    setPokemonArray([]);
    getPokemons();
  }

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-indigo-900 text-white">
        <Header score={score} bestScore={bestScore} />
        <main className="ml-5 flex flex-wrap gap-5">
          {pokemonArray.map((pokemon) => {
            return (
              <Card
                pokemon={pokemon}
                key={pokemon.id}
                calculateScore={calculateScore}
              />
            );
          })}
        </main>
      </div>

      {gameResult === true || gameResult === false ? (
        <Result result={gameResult} restart={restartGame} />
      ) : null}
    </>
  );
}

export default App;
