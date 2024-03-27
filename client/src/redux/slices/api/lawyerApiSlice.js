import { apiSlice } from "../apiSlice";

const LAWYER_URL = "/api/lawyer";

export const lawyerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLawyers: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),

    addLawyer: builder.mutation({
      query: (data) => ({
        url: `${LAWYER_URL}/add-lawyer`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    getLawyer: builder.query({
      query: (id) => ({
        url: `${LAWYER_URL}/get-lawyer/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),

    updateLawyer: builder.mutation({
      query: (data) => ({
        url: `${LAWYER_URL}/${data.id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),

    deleteLawyer: builder.mutation({
      query: (id) => ({
        url: `${LAWYER_URL}/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useGetLawyersQuery,
  useAddLawyerMutation,
  useGetLawyerQuery,
  useUpdateLawyerMutation,
  useDeleteLawyerMutation,
} = lawyerApiSlice;
