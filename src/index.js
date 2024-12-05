import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import AuthProvider from "./context/AuthProvider.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
