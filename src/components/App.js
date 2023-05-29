import React from "react";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Header from '../components/Header'
import Home from "../components/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signIn } from "../App/userSlice";



const App = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       dispatch(signIn(user));
  //     }
  //   });
  // });
  return (
    <div id="main">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/user"
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
