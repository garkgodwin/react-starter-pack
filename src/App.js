import React from "react";
import something from "./something.svg";

import PagesForGuests from "./pages/guest-pages";

const App = () => {
  return (
    <div>
      <img src={something} alt="Something" />
      <h1>Welcome {new Date().toString()}</h1>
      <PagesForGuests />
    </div>
  );
};

export default App;
