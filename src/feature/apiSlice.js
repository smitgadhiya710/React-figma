import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TAG_TYPES } from "./tagType";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),

  tagTypes: Object.values(TAG_TYPES),
  endpoints: (builder) => ({
    // getAll: builder.query({
    //   query: ({ resource }) => `/${resource}`,
    //   providesTags: (result, error, { resource, tag }) => [
    //     { type: tag, id: resource },
    //   ],
    // }),

    getAll: builder.query({
      query: ({ resource, search }) => {
        let url = `/${resource}`;
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
      query: ({ resource, id }) => `/${resource}/${id}`,
      providesTags: (result, error, { resource, id, tag }) => [
        { type: tag, id: `${resource}-${id}` },
      ],
    }),

    create: builder.mutation({
      query: ({ resource, data }) => ({
        url: `/${resource}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, { resource, tag }) => [
        { type: tag, id: resource },
      ],
    }),

    update: builder.mutation({
      query: ({ resource, id, data }) => ({
        url: `/${resource}/${id}`,
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
        url: `/${resource}/${id}`,
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
