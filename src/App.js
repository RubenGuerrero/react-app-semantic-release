import React from "react";
import { Router } from "@reach/router";

import { Home, Dash } from "./modules";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Dash path="dashboard/:id" />
        <Dash path="dashboard" />
      </Router>
    </div>
  );
}

export default App;
