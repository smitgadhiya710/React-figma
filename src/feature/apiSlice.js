import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TAG_TYPES } from "./tagType";
import { baseQueryWithReauth } from "./reAuthenticate";

function prepareHeaders(headers) {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  headers.set("Content-Type", "application/json");
  return headers;
}

export const api = createApi({
  // reducerPath: "api",
  // baseQuery: fetchBaseQuery({
  //   baseUrl: import.meta.env.VITE_API_BASE_URL,
  //   credentials: "include",
  //   prepareHeaders: prepareHeaders,
  // }),

  reducerPath: "api",
  baseQuery: baseQueryWithReauth,

  tagTypes: Object.values(TAG_TYPES),
  endpoints: (builder) => ({
    getAll: builder.query({
      query: ({ resource, search }) => {
        let url = `api/${resource}`;
        if (search) {
          url += `?search=${search}`;
        }
        return url;
      },
      providesTags: (result, error, { resource, tag }) => [
        { type: tag, id: resource },
      ],
    }),

    getById: builder.query({
      query: ({ resource, id }) => `api/${resource}/${id}`,
      providesTags: (result, error, { resource, id, tag }) => [
        { type: tag, id: `${resource}-${id}` },
      ],
    }),

    create: builder.mutation({
      query: ({ resource, data }) => ({
        url: `api/${resource}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, { resource, tag }) => [
        { type: tag, id: resource },
      ],
    }),

    update: builder.mutation({
      query: ({ resource, id, data }) => ({
        url: `api/${resource}/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { resource, id, tag }) => [
        { type: tag, id: `${resource}-${id}` },
        { type: tag, id: resource },
      ],
    }),

    delete: builder.mutation({
      query: ({ resource, id }) => ({
        url: `api/${resource}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { resource, tag }) => [
        { type: tag, id: resource },
      ],
    }),
  }),
});

export const {
  useGetAllQuery,
  useGetByIdQuery,
  useLazyGetByIdQuery,
  useCreateMutation,
  useUpdateMutation,
  useDeleteMutation,
} = api;
