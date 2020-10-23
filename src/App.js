import React from "react";
import useSWR from "swr";
import fetch from "unfetch";

import logo from "./logo.svg";
import "./App.css";

const fetcher = (url) => fetch(url).then((r) => r.json());

function App() {
  const {
    data,
  } = useSWR(
    "https://api.github.com/repos/rubenguerrero/react-app-semantic-release/releases/latest",
    fetcher,
    { refreshInterval: 1000 }
  );

  const latestVersion = data?.tag_name;

  const currentVersion = `v${process.env.REACT_APP_VERSION}`;

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
        {latestVersion !== currentVersion && (
          <div style={{ color: "red" }}>You are outdated</div>
        )}
      </header>
    </div>
  );
}

export default App;
