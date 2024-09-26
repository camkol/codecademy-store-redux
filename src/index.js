import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./app/App.js";
// Import the store here.
import { store } from "./app/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const render = () => {
  root.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch} />
    </React.StrictMode>
  );
};

render();

// Subscribe render to the store.
store.subscribe(render);
