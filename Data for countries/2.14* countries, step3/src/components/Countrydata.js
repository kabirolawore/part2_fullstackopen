import { useState, useEffect } from "react";
import axios from "axios";

//
const CountryData = ({ country }) => {
  //
  const [weather, setWeather] = useState({});

  const countryName = country.name.common;
  const capital = country.capital[0];
  const area = country.area;
  const languages = Object.values(country.languages);
  const temp = weather.main?.temp - 273.15;
  const wind = weather.wind?.speed;
  const lat = country.latlng.at(0);
  const lon = country.latlng.at(1);
  const weatherIcon = `http://openweathermap.org/img/wn/${
    weather.weather?.at(0).icon
  }@2x.png`;

  // console.log(lat, lon);
  const api_key = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
      )
      .then((response) => setWeather(response.data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        <h2>{countryName}</h2>
        <p>capital {capital}</p>
        <p>area {area}</p>
      </div>
      <div>
        <h3>languages:</h3>
        <ul>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
      <img src={country.flags.png} alt="flag" />
      <div>
        <h2>Weather in {capital}</h2>
        <p>temperature {(Math.round(temp * 100) / 100).toFixed(2)} Celcius</p>
        <img src={weatherIcon} alt="weather" />
        <p>wind {wind} m/s</p>
      </div>
    </div>
  );
};

export default CountryData;
