import React, { useEffect } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Temperature from "./components/Temperature/Temperature";
import WeatherInfo from "./components/WetherInfo/WeatherInfo";

import "./App.css";

function App() {

  useEffect(
    function() {
      load()
    }, []
    )
 
  async function load(){
    try{
      const resposta = await axios.get("api.openweathermap.org/data/2.5/weather?q=São Paulo,br&units=metric&lang=pt_br&appid=b5a672b8851da776d23772baee6eac92")
      console.log(resposta)
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row1">
          <Header />
        </div>
        <div className="row2">
          <WeatherInfo />
          <Temperature />
        </div>
      </div>

      <div className="footer">
        <Search />
      </div>
    </div>
  );
}

export default App;
