import React from "react";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <div className="temperatura-atual paragrafo">
        <p>Atual: {props.mainTemp}°C</p>
        <p>Sensacão termina: {props.feelsLike}°C</p>
      </div>
      <hr className="linha top-hr"></hr>
      <hr className="linha bottom-hr"></hr>
      <div className="humidade paragrafo">
        <p>Humidade: {props.humidity}%</p>
      </div>
      <hr className="linha top-hr"></hr>
      <hr className="linha bottom-hr"></hr>
      <div className="vento paragrafo">
  <p>Velocidade: {props.speed} km/h</p>
  <p>Direcão: {props.direction} graus</p>
      </div>
      <hr className="linha top-hr"></hr>
      <hr className="linha bottom-hr"></hr>
      <div className="sol paragrafo">
  <p>Nascer do sol: {props.sunrise}</p>
        <p>Por do sol: {props.sunset}</p>
      </div>
    </div>
  );
}
