import React from "react";
import something from "./something.svg";

const App = () => {
  return (
    <div>
      <img src={something} alt="Something" />
      <h1>Welcome {new Date().toString()}</h1>
    </div>
  );
};

export default App;
