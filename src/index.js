import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import reportWebVitals from "./reportWebVitals";
import {  Routes, Route, HashRouter } from "react-router-dom";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/space-website" exact element={<Home />} />
      <Route path="/space-website/destination" exact element={<Destination/>} />
      <Route path="/space-website/crew" exact element={<Crew />} />
      <Route path="/space-website/tech" exact element={<Technology />} />
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
