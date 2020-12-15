import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";

import "./index.css";

const App = () => (
  <div>
    <Header />
    Estou na aplicação Header
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
