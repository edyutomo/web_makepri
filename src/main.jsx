// src/main.jsx atau src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client"; // Perhatikan impor ReactDOM dari 'react-dom/client'
import App from "./App";

// Menggunakan createRoot untuk React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
