import { apiSlice } from "../apiSlice";
const FILE_URL= "/api/file"

export const fileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addFile: builder.mutation({
      query: (data) => ({
        url: `${FILE_URL}/file`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    getFile: builder.query({
      query: (id) => ({
        url: `${FILE_URL}/file/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),
    deleteFile: builder.mutation({
      query: (id) => ({
        url: `${FILE_URL}/delete-file/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useAddFileMutation,
  useGetFileQuery,
  useDeleteFileMutation,
} = fileApiSlice;