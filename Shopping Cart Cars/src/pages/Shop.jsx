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
    <main>
      {/* Verifica se acabou o loading e renderiza a lista de carros | o key é por causa do map, não é um prop que o componente recebe */}
      {!err && !loading && visibleCars.length === 0 && (
        <div>Nenhum carro nessa categoria.</div>
      )}

      {!loading && visibleCars.map((car) => <CarCard car={car} key={car.id} />)}

      {loading && <div>Loading...</div>}

      {err && (
        <div>
          <h2>Houve um problema</h2>
          <span>{err}</span>
        </div>
      )}
    </main>
  );
}

export default Shop;
