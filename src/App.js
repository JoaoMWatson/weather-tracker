import React from "react";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Temperature from "./components/Temperature/Temperature";

import "./App.css";
import WeatherInfo from "./components/WetherInfo/WeatherInfo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <WeatherInfo />
        <Temperature/>
      </div>

      <div className="footer">
        <Search />
      </div>
    </div>
  );
}

export default App;
