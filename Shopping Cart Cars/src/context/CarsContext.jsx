import { useEffect, createContext, useContext, useState } from "react";

const CarsContext = createContext(null);

export function CarsProvider({ children }) {
  const [carsList, setCarsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await fetch("data/cars.json");
        if (!response.ok) {
          throw new Error("Busca não encontra (404) ou erro no servidor (500)");
        }

        const data = await response.json();

        setCarsList(data);
      } catch (error) {
        setErr(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  function seachItem(id) {
    const infoItem = carsList.find(id);

    if (infoItem === undefined) {
      throw new Error("Item não encontrado");
    }

    return infoItem;
  }

  const value = {
    carsList,
    loading,
    err,
  };
  return <CarsContext.Provider value={value}>{children}</CarsContext.Provider>;
}

export function useCars() {
  const context = useContext(CarsContext);

  if (context === null) {
    throw new Error("useCars precisa estar dentro de um <CarsProvider>");
  }

  return context;
}

export default CarsContext;


// Verificar se estar correto e ir para proximo passo
