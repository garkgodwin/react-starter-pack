/*
  This is the App component,
  will contain the following:
  1. Checks everytime on mount the token saved in local storage.
  2. If authenticated, fetches all the data needed from API.
  3. All data fetched in API must be saved in the "STORE".
*/

import React, { useEffect, useState } from "react";

import GuestPages from "./pages/guest-pages";
import AuthedPages from "./pages/authed-pages";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  // AUTHENTICATE
  // FETCH DATA
  // SAVE TO STORE
  return (
    <main className={"App" + (isLogged ? " app-authed" : "")}>
      {isLogged ? (
        <>
          <Sidebar />
          <AuthedPages />
        </>
      ) : (
        <>
          <Navbar />
          <GuestPages />
        </>
      )}
    </main>
  );
};

export default App;
