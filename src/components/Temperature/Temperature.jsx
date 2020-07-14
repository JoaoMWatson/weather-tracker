import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="temperature-wrapper">
      <p className="temp">
        <span className="material-icons md-blue md-48">arrow_downward</span>
        {props.tempMin}
        <small>°C</small>
      </p>
      <div weather-state>
        <img
          className="weather-image"
          src="https://i.ya-webdesign.com/images/youtube-diamond-play-button-png-7.png"
        />
      </div>
      <p className="temp">
        <span className="material-icons md-red md-48">arrow_upward</span>
        {props.tempMax}
        <small>°C</small>
      </p>
    </div>
  );
}
