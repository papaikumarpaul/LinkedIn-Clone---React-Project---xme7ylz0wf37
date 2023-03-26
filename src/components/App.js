import React from "react";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
const App = () => {
  return (
    <div id="main">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
