import React, { Component } from "react";

import "./WeatherInfo.css";

class WeatherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="weather-info">
        <div className="temperatura-atual paragrafo">
          <p>Atual: 24°C</p>
          <p>Sensacão termina: 20°C</p>
        </div>
        <hr className="linha top-hr"></hr>
        <hr className="linha bottom-hr"></hr>
        <div className="humidade paragrafo">
          <p>Humidade: 23%</p>
        </div>
        <hr className="linha top-hr"></hr>
        <hr className="linha bottom-hr"></hr>
        <div className="vento paragrafo">
          <p>Velocidade: 3,6km/h</p>
          <p>Direcão: 123 graus</p>
        </div>
        <hr className="linha top-hr"></hr>
        <hr className="linha bottom-hr"></hr>
        <div className="sol paragrafo">
          <p>Nascer do sol: 6:05</p>
          <p>Por do sol: 18:23</p>
        </div>
      </div>
    );
  }
}

export default WeatherInfo;
