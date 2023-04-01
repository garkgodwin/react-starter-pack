/**
 * @author Gark
 * @returns {App} the main component of this project
 * This is the App component,
 * will contain the following:
 * 1. Checks everytime on mount the token saved in local storage.
 * 2. If authenticated, fetches all the data needed from API.
 * 3. All data fetched in API must be saved in the "STORE".
 * 4. Outlet to call all the children for this specific component
 * TODO: add/update comments
 */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

import "./pages/index.css";

import TestFormPage from "./components/forms/TestFormPage";

const App = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // AUTHENTICATE
  // FETCH DATA
  // SAVE TO STORE
  return (
    <div className={"App" + (auth.user ? " app-authed" : "")}>
      {auth.user ? <Sidebar /> : <Navbar />}
      <Outlet />
      <TestFormPage />
    </div>
  );
};

export default App;
