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
          <p>Humidade: </p>
        </div>
        <hr className="linha top-hr"></hr>
        <hr className="linha bottom-hr"></hr>
        <div className="vento paragrafo">
          <p>Velocidade: </p>
          <p>Vento: </p>
          <p>Direcão: </p>
        </div>
        <hr className="linha top-hr"></hr>
        <hr className="linha bottom-hr"></hr>
        <div className="sol paragrafo">
          <p>Nascer do sol: </p>
          <p>Por do sol: </p>
        </div>
      </div>
    );
  }
}

export default WeatherInfo;
