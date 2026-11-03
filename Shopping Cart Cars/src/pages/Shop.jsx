import { useCars } from "../context/CarsContext";
import CarCard from "../components/CarCard";

function Shop() {
  const { carsList, loading, err } = useCars();

  return (
    <main>
      {/* Verifica se acabou o loading e renderiza a lista de carros | o key é por causa do map, não é um prop que o componente recebe */}
      {!loading && carsList.map((car) => <CarCard car={car} key={car.id} />)}

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
