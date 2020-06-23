import React, { Component } from "react";

import "./Header.css"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Header">
        <h1>São Paulo</h1>
      </div>
    );
  }
}

export default Header;
