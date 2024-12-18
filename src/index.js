import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MyProvider from "./MyProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyProvider>
        <App />
      </MyProvider>  
    </BrowserRouter>
  </React.StrictMode>
);
