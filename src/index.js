import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

//? COMPONENTS
import App from "./App";
//? STYLES
import "./main.css";
//? FONTS
import "./fonts/Roboto/Roboto-Regular.ttf";
//? STORE
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
