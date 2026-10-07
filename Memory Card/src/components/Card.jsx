export default function Card({ pokemon, calculateScore }) {
  return (
    <section
      onClick={() => {
        calculateScore(pokemon.id);
      }}
      className="flex justify-center flex-col w-full max-w-45 min-h-50  border rounded-xl cursor-pointer"
    >
      <img src={pokemon.img} alt={pokemon.name} className="flex-1 p-2 " />
      <span className="bg-white text-blue-800 p-1 rounded-b-xl font-bold text-center capitalize ">
        {pokemon.name}
      </span>
    </section>
  );
}
