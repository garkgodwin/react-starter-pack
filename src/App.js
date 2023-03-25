/*
  This is the App component,
  will contain the following:
  1. Checks everytime on mount the token saved in local storage.
  2. If authenticated, fetches all the data needed from API.
  3. All data fetched in API must be saved in the "STORE".
*/

import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  // AUTHENTICATE
  // FETCH DATA
  // SAVE TO STORE
  return (
    <div className={"App" + (isLogged ? " app-authed" : "")}>
      {isLogged ? <Sidebar /> : <Navbar />}
      <Outlet />
    </div>
  );
};

export default App;
