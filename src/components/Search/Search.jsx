import React, { Component } from "react";

import "./Search.css";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form className="input-wrapper" action="">
        <input
          className="Search"
          placeholder="Procurar... "
          type="text"
          name="city"
        />
        <button href="#" type="submit" className=" link">
          <i className="material-icons md-48">search</i>
        </button>
      </form>
    );
  }
}

export default Search;
