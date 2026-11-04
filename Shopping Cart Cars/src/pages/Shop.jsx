import { useCars } from "../context/CarsContext";
import CarCard from "../components/CarCard";
import { useSearchParams } from "react-router-dom";

function Shop() {
  const { carsList, loading, err } = useCars();

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const visibleCars = category
    ? carsList.filter((car) => car.category === category)
    : carsList;

  return (
    <main className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Shop</h1>

      {/* Mensagens ficam fora do grid, para ocuparem a largura toda */}
      {!err && !loading && visibleCars.length === 0 && (
        <div className="text-gray-600">Nenhum carro nessa categoria.</div>
      )}

      {loading && <div className="text-gray-600">Loading...</div>}

      {err && (
        <div className="rounded-lg bg-red-50 text-red-800 p-4">
          <h2 className="font-semibold">Houve um problema</h2>
          <span>{err}</span>
        </div>
      )}

      {/* O key é por causa do map, não é um prop que o componente recebe */}
      {!loading && visibleCars.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCars.map((car) => (
            <CarCard car={car} key={car.id} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Shop;