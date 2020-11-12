import React from "react";
import { Router, Link, useParams } from "@reach/router";

import logo from "./logo.svg";
import "./App.css";

const Home = () => (
  <div>
    <h1>Home</h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <Link to="/">Home</Link> | <Link to="dashboard">Dashboard failing</Link>{" "}
        | <Link to="dashboard/1">Dashboard</Link>
      </header>
    </div>
  </div>
);

const Dash = () => {
  const params = useParams();

  return (
    <div>
      <h1>Dashboard {params.id.toString()}</h1>
    </div>
  );
};

function App({ app }) {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Dash path="dashboard/:id" />
      </Router>
    </div>
  );
}

export default App;
