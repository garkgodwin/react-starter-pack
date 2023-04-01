/**
 * authServices.js is our authentication
 * @author Brixter
 * @returns { authApi } auth api injected to api
 * @returns {useLoginMutation} api react hook of auth
 * @returns {useLogoutMutation} another api react hook of auth
 * @returns { endpoints } the enpoints will have "login" amd "logout"
 * 1. endpoints for authentication
 * 2. login receives a credential
 * 3. logout removes the token
 * TODO: add/update comments
 */

import { api } from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: build.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;

export const {
  endpoints: { login, logout },
} = authApi;
