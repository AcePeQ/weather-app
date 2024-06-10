import styles from "./City.module.css";

function City({ city }) {
  const {
    main: { temp, feels_like: feelLike, pressure },
    sys: { country },
    name,
    wind: { speed },
  } = city;
  const { main, description, icon } = city.weather[0];

  const weatherIconSrc = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <div className={styles.cityStyle}>
      <h2 className={styles.cityName}>
        {name}, {country}
      </h2>

      <div className={styles.boxInfo}>
        <div className={styles.curWeather}>
          <img
            className={styles.img}
            src={weatherIconSrc}
            alt={`current weather is ${description}`}
          />
          <span className={styles.weatherMain}>{main}</span>
        </div>

        <span className={styles.temp}>{Math.round(temp)}&deg;C</span>

        <div className={styles.additionalInfo}>
          <span>Perceptible: {Math.round(feelLike)}&deg;C</span>
          <span>Wind: {Math.round(speed)} kmph</span>
          <span>Pressure: {pressure} mb</span>
        </div>
      </div>
    </div>
  );
}

export default City;
