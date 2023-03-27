import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// TODO update the server hostname
const hostname = window.location.hostname;

export const Server = `http://${hostname}:5000/api/v1`;

const baseQuery = fetchBaseQuery({
  baseUrl: Server + "/",
  prepareHeaders(headers, { getState }) {
    // ? To include token to headers
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
  credentials: "include",
});

// token interceptor
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  // TODO add or update here the authentication logic
  // if (result.error && result.error.originalStatus === 401) {
  //   api.dispatch(setUserId(null));
  // }

  // if (!Boolean(api.getState().auth.userId)) {
  //   const userSession = await baseQuery("/user", api, extraOptions);
  //   console.log("state loading...");
  //   if (userSession.data) {
  //     api.dispatch(setUserId(userSession.data._id));
  //   } else {
  //     api.dispatch(setUserId(null));
  //   }
  // }

  return result;
};

export default createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: [
    "todo",
  ],
  endpoints: () => ({}),
});
