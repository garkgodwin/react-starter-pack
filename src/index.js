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

// ? redux persist for autosaving state to localstorage
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export const persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading={
        <div>
          {/* TODO! add loader for persistor */}
          Loading
        </div>
      }
    >
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
