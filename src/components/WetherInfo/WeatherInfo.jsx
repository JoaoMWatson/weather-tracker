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
        <div className="humidade paragrafo">
          <p>Humidade: 23%</p>
        </div>
        <hr className="linha top-hr"></hr>
        <hr className="linha bottom-hr"></hr>
        <div className="vento paragrafo">
          <p>Velocidade: 20km/h</p>
          <p>Vento: teste</p>
          <p>Direcão: Leste</p>
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
