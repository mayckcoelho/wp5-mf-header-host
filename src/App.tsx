import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";

import "./index.css";

const App = () => (
  <div>
    <Header />
    <h1>Olá, estou na aplicação Header</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
