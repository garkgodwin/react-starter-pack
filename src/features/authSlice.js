/*
  This slice will contain the authentication needed for this application
  reducers:
    1. login: gets the payload with user details and token, saves the token to local storage and details to state
    2. logout: removes the state from auth and clears local storage.
    3. authenticate: called by async authenticate
*/
import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { login, logout } from "../app/services/authServices";

const initialState = {
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2huZG9lQGV4YW1wbGUuY29tIiwidXNlcl9pZCI6IjQzNmEwZjI1LTI1YTgtNDkzNS05MWUzLWZiZDEzNjk0MWRhYyIsImV4cCI6MTY3OTg1NjgxNn0.G9BmOk2bTy6vjYcW_eTtJjWtJnL4Tk6rzJmpAV-o4AY",
  user: null,
};

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    tokenReceived: (state, action) => {
      state.token = action.payload;
    },
    loggedOut: () => initialState,
    authenticate: (state) => {
      const token = state.token;
      console.log({ token });
      if (token) {
        if (typeof token === "string") {
          if (token.length > 20) {
            state.user = {}; // fetch user if token is not null
          }
        }
      }
    },
  },
  extraReducers: (builders) => {
    builders.addMatcher(login.matchFulfilled, (state, action) => {
      //TODO updated the token value here 
      //get token value from action.payload = object struct from backend/server
      state.token = action.payload;
    });
    builders.addMatcher(logout.matchFulfilled, () => initialState);
  }
});

export default persistReducer(
  {
    key: slice.name,
    storage,
    whitelist: ["token"],
    // blacklist: [ ],
  },
  slice.reducer
);

// Action creators are generated for each case reducer function
export const { tokenReceived, loggedOut, authenticate } = slice.actions;
