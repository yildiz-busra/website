import React from "react";
import ReactDOM from "react-dom/client"; // Use `react-dom/client` instead of `react-dom`
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Find the root element
const rootElement = document.getElementById("root");

// Create a React root
const root = ReactDOM.createRoot(rootElement);

// Render the application
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
