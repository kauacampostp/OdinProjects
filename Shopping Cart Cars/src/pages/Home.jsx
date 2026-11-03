import { NavLink } from "react-router-dom";
import CarCard from "../components/CarCard";
import { useCars } from "../context/CarsContext";

function Home() {
  const { carsList } = useCars();
  const carsFeatureList = carsList.filter((car) => {
    return car.featured === true;
  });

  const categoriesSet = new Set(carsList.map((car) => car.category));
  const categoriesList = Array.from(categoriesSet);

  return (
    <main>
      <section>
        <h1>Ofertas Especiais!</h1>
        {carsFeatureList.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </section>

      <section>
        <h1>Categorias</h1>

        {categoriesList.map((cat) => (
          <NavLink key={cat} to={`/shop?category=${encodeURIComponent(cat)}`}>
            {cat}
          </NavLink>
        ))}
      </section>
    </main>
  );
}

export default Home;
