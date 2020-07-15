import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Temperature from "./components/Temperature/Temperature";
import WeatherInfo from "./components/WetherInfo/WeatherInfo";

import "./App.css";

let url =
  "https://api.openweathermap.org/data/2.5/weather?q=São Paulo,br&units=metric&lang=pt_br&appid=b5a672b8851da776d23772baee6eac92";

function App() {
  const [weather, setWeather] = useState({ main: {}, wind: {}, sys: {} , weather: {}});

  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(url);
      setWeather(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {console.log("aaaa", weather)}
      <div className="container">
        <div className="row1">
          <Header name={weather.name} />
        </div>
        <div className="row2">
          <WeatherInfo
            mainTemp={weather.main.temp}
            feelsLike={weather.main.feels_like}
            humidity={weather.main.humidity}
            speed={weather.wind.speed}
            direction={weather.wind.deg}
            sunrise={weather.sys.sunrise}
            sunset={weather.sys.sunset}
          />
          <Temperature
            desc={weather.weather.description}
            icon={weather.weather.icon}
            tempMin={weather.main.temp_min}
            tempMax={weather.main.temp_max}
          />
        </div>
      </div>

      <div className="footer">
        <Search />
      </div>
    </div>
  );
}

export default App;
