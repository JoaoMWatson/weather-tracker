import React, { Component } from "react";

import "./Temperature.css";

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="temperature-wrapper">
        <p className="temp">
          <span className="material-icons md-blue md-48">arrow_downward</span>18
          <small>C</small>
        </p>

        <p className="temp">
          <span className="material-icons md-red md-48">arrow_upward</span>22
          <small>C</small>
        </p>
      </div>
    );
  }
}

export default Temperature;
