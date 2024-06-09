// import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux"; //get createStore method so we can make redux store
import { Provider } from "react-redux"; //Provide wraps and bind our entire react app with redux
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>,
);
