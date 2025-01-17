import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const furnishApi = createApi({
    reducerPath: 'furnishApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:6060/' }),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => `furnish`,
        }),
        getDataById: builder.query({
            query: (id) => `furnish/${id}`,
        }),
        postData: builder.mutation({
            query: (newData) => ({
                url: `furnish/`,
                method: "POST",
                body: newData,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
        }),
        deleteData: builder.mutation({
            query: (id) => ({
                url: `furnish/${id}`,
                method: "Delete"
            })
        }),

    }),
})

export const { useGetDataQuery, useGetDataByIdQuery,usePostDataMutation,useDeleteDataMutation } = furnishApi