import React from "react";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>
      <div className="footer">
        <Search />
      </div>
    </div>
  );
}

export default App;
