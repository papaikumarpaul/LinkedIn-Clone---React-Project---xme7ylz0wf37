import React from "react";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import { useEffect } from "react";

import Header from "./Header";

const App = () => {
  return (
    <div id="main">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
