import { Link } from "react-router-dom";
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
    <main className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-10">
      {/* Banner de boas-vindas */}
      <section className="rounded-2xl bg-cyan-800 text-white px-6 py-10 text-center sm:py-16">
        <h1 className="text-3xl font-bold sm:text-5xl">
          Encontre seu próximo carro
        </h1>
        <p className="mt-3 text-cyan-100 sm:text-lg">
          Confira as ofertas e escolha por categoria.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-6 bg-white text-cyan-800 rounded-lg px-6 py-2 font-semibold hover:bg-cyan-50"
        >
          Ver todos os carros
        </Link>
      </section>

      {/* Categorias: no celular rolam de lado se não couberem; de sm pra cima quebram linha */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Categorias</h2>
        <div className="flex flex-wrap gap-3">
          {categoriesList.map((cat) => (
            <Link
              key={cat}
              to={`/shop?category=${encodeURIComponent(cat)}`}
              className="rounded-full border border-cyan-800 text-cyan-800 px-5 py-2 font-semibold capitalize hover:bg-cyan-800 hover:text-white transition"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Ofertas: mesmo grid da Shop */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Ofertas Especiais!</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {carsFeatureList.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
