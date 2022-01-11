import React from "react";
import ReactDOM from "react-dom";
import { root } from "./refs";
import App from "./App";

// reactDom.render(<App />, root);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

