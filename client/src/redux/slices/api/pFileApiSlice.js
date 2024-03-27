import { apiSlice } from "../apiSlice";
const FILE_URL= "/api/file"

export const publicFileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPublicFiles: builder.query({
      query: () => ({
        url: `${FILE_URL}/p-file`,
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetPublicFilesQuery } = publicFileApiSlice;