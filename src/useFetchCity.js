import { useEffect, useState } from "react";

const API_KEY = `23ac294bcc1a68d3c8e011fec36af3bc`;

function useFetchCity(query) {
  const [city, setCity] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchCities() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`,
            { signal: controller.abort() }
          );
          if (!res.ok) throw new Error(`City not found 🛑`);

          const data = await res.json();
          if (data.cod === "404") throw new Error("City not found 🛑");

          setCity(data);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
            console.log(err.message);
            if (err.message === undefined && !(query.length <= 2)) {
              setError("City not found 🛑");
            }
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length <= 2) {
        setCity(null);
        setError("");
        return;
      }

      fetchCities();

      return () => {
        controller.abort();
      };
    },
    [query]
  );

  return { city, error, isLoading };
}

export default useFetchCity;
