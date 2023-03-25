import React from "react";
import { createBrowserRouter } from "react-router-dom";

//? MAIN
import App from "./App";
import RootPage from "./pages/RootPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <RootPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
