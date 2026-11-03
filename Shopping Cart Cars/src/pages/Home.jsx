import { useCars } from "../context/CarsContext";

function Home() {
  const { carsList } = useCars();
  console.log(carsList);
  return (
    <>
      <h1>This the Home</h1>
      {carsList.map((car) => {
        <div>{car}</div>;
      })}
    </>
  );
}

export default Home;
