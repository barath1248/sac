// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // or HashRouter
import App from "./App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>        {/* <-- provides router context */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
