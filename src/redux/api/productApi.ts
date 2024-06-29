import { baseApi } from './baseApi';


export const productsApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ limit, skip }) => `/products?limit=${limit}&skip=${skip}`,
        }),
        getProductById: builder.query({
            query: (id) => `/products/${id}`,
        }),
        editProduct: builder.mutation({
            query: ({ id, data }) => ({
                url: `/products/${id}`,
                method: 'PATCH',
                body: data,
            }),
        }),
        getCategories: builder.query({
            query: () => '/products/categories',
            providesTags: ['products']
        }),
    }),
});

// export const { useGetCategoriesQuery } = productsApi