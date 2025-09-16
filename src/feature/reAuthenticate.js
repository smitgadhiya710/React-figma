import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

function prepareHeaders(headers) {
  const token = JSON.parse(localStorage.getItem("token"));
  const refreshtoken = JSON.parse(localStorage.getItem("refreshtoken"));

  if (token || refreshtoken) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  headers.set("Content-Type", "application/json");
  headers.set("refreshtoken", refreshtoken);
  return headers;
}

const rawBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  credentials: "include",
  prepareHeaders: prepareHeaders,
});

export const baseQueryWithReauth = async (args, api) => {
  let result = await rawBaseQuery(args, api);

  if (result.error && result.error.status === 401) {
    const refreshResult = await rawBaseQuery(
      { url: "auth/refresh-token", method: "POST" },
      api
    );

    if (refreshResult.data) {
      const newToken = refreshResult.data.data;
      console.log(newToken);
      localStorage.setItem(
        "token",
        JSON.stringify(refreshResult.data.data.accessToken)
      );
      localStorage.setItem(
        "refreshtoken",
        JSON.stringify(refreshResult.data.data.refreshToken)
      );

      result = await rawBaseQuery(args, api);
    } else {
      localStorage.removeItem("token");
    }
  }

  return result;
};
