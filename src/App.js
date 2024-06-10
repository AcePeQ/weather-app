import Header from "./Header";
import Search from "./Search";
import Main from "./Main";

import { useEffect, useState } from "react";
import styles from "./App.module.css";

import Error from "./Error";
import Spinner from "./Spinner";
import Clouds from "./Clouds";
import City from "./City";
import useFetchCity from "./useFetchCity";

const API_KEY = `23ac294bcc1a68d3c8e011fec36af3bc`;

async function fetchCity(pos) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_KEY}&units=metric`
  );
  const data = await res.json();
  return data;
}

export default function App() {
  const [query, setQuery] = useState("");
  const { city, error, isLoading } = useFetchCity(query);

  const queryLength = query.length;

  function handleGetPosition() {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const data = await fetchCity(pos);
      setQuery(data.name);
    });
  }

  return (
    <div className={styles.app}>
      <Clouds queryLength={queryLength} />

      <Header queryLength={queryLength} />
      <Search
        query={query}
        setQuery={setQuery}
        handleGetPosition={handleGetPosition}
      />

      <Main>
        {isLoading && <Spinner />}
        {!isLoading && !error && city && <City city={city} />}
        {error && <Error error={error} />}
      </Main>
    </div>
  );
}
