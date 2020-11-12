import React from "react";
import useSWR from "swr";
import fetch from "unfetch";

import logo from "./logo.svg";
import "./App.css";

const fetcher = (url) => fetch(url).then((r) => r.json());

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
    </div>
  );
}

export default App;
