/**
 * @author   Brixter, Gark
 * @param    {createApi} api  the base api
 * api.js is our Base API
 * 1. calls the received token in baseQuery
 * 2. returns a header depending on the token
 * 3. calls the baseQuery in baseQueryWithReauth
 * TODO: add/update comments
 */

import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
// import { io } from "socket.io-client";
import {
  resetAuthState,
  tokenReceived,
} from "../../features/auth/authSlice";

const hostname = window.location.hostname;

export const server = `http://${hostname}:5000`;
export const baseUrl = `${server}/api`;
// export const socket = io(server);

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
  credentials: "include",
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.data === "Unauthorized") {
    // try to get a new token
    const refreshResult = await baseQuery(
      "/auth/refreshToken",
      api,
      extraOptions
    );

    if (refreshResult.data) {
      const { accessToken } = refreshResult.data;
      // store the new token
      api.dispatch(tokenReceived(accessToken));
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(resetAuthState());
    }
  }
  return result;
};

export const api = createApi({
  reducerPath: "baseAPI",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
