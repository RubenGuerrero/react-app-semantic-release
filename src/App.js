import React from "react";

import logo from "./logo.svg";
import "./App.css";

function App({ app }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {app.aa.toString()}
    </div>
  );
}

export default App;
