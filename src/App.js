/*
  This is the App component,
  will contain the following:
  1. Checks everytime on mount the token saved in local storage.
  2. If authenticated, fetches all the data needed from API.
  3. All data fetched in API must be saved in the "STORE".
*/

import React, { useEffect } from "react";

import GuestPages from "./pages/guest-pages";
import AuthedPages from "./pages/authed-pages";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

const App = () => {
  // AUTHENTICATE
  // FETCH DATA
  // SAVE TO STORE
  useEffect(() => {}, []);

  return (
    <div>
      <Sidebar />
      <Navbar />
      <main>
        <GuestPages />
        <AuthedPages />
      </main>
    </div>
  );
};

export default App;
