import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import CounterProvider from "./contexts/Counter";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>,
  rootElement
);
