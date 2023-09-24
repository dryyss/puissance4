import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { GridProvider } from "./Context/useGrid";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GridProvider>
      <App />
    </GridProvider>{" "}
  </React.StrictMode>,
);
