import React from "react";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  function convert(timeStamp) {
    let date = new Date(timeStamp * 1000);

    let hours = date.getHours();

    let minutes = "0" + date.getMinutes();

    let seconds = "0" + date.getSeconds();

    let formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

    return formattedTime;
  }

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
        <p>Velocidade: {props.speed}km/h</p>
        <p>Direcão: {props.direction}°</p>
      </div>
      <hr className="linha top-hr"></hr>
      <hr className="linha bottom-hr"></hr>
      <div className="sol paragrafo">
        <p>Nascer do sol: {convert(props.sunrise)}</p>
        <p>Por do sol: {convert(props.sunset)}</p>
      </div>
    </div>
  );
}
