/*
  This is the App component,
  will contain the following:
  1. Checks everytime on mount the token saved in local storage.
  2. If authenticated, fetches all the data needed from API.
  3. All data fetched in API must be saved in the "STORE".
  4. Outlet to call all the children for this specific component
*/

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

import "./pages/index.css";

import { authenticate } from "./features/authSlice";

const App = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isLogged, setIsLogged] = useState(false);
  // AUTHENTICATE
  // FETCH DATA
  // SAVE TO STORE

  // authenticate on mount
  useEffect(() => {
    authenticateToken();
  }, []);

  // if auth changes, isLogged state will change
  useEffect(() => {
    if (auth.user) setIsLogged(true);
    else setIsLogged(false);
  }, [auth]);

  // call "authenticate" from "auth reducers"
  const authenticateToken = () => {
    dispatch(authenticate());
  };
  return (
    <div className={"App" + (isLogged ? " app-authed" : "")}>
      {isLogged ? <Sidebar /> : <Navbar />}
      <Outlet />
    </div>
  );
};

export default App;
