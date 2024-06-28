// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseApi } from './baseApi';


export const productsApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ limit, skip }) => `/products?limit=${limit}&skip=${skip}`,
        }),
        getProductById: builder.query({
            query: (id) => `/products/${id}`,
        }),
        updateProduct: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `/products/${id}`,
                method: 'PATCH',
                body: patch,
            }),
        }),
        getCategories: builder.query({
            query: () => '/products/categories',
            providesTags: ['products']
        }),
    }),
});

// export const { useGetCategoriesQuery } = productsApi