import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routerConfig";

//? STYLES
import "./main.css";
//? FONTS
import "./fonts/Roboto/Roboto-Regular.ttf";
//? STORE
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
