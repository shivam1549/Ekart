import { createSlice } from "@reduxjs/toolkit";

export const productSLice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        // GET All
        getProductStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        getProductSuccess: (state, action) => {
            state.isFetching = true
            state.products = action.payload
        },
        getProductFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
        // Delete
        deleteProductStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        deleteProductSuccess: (state, action) => {
            state.isFetching = false
            state.products.splice(
                state.products.findIndex((item) => item._id === action.payload),
                1
            )

        },
        deleteProductFailure: (state) => {
            state.isFetching = false
            state.error = true
        },

        // Update
        updateProductStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        updateProductSuccess: (state, action) => {
            state.isFetching = false
            state.products[state.products.findIndex((item) => item._id === action.payload.id)] = action.payload.product
             

        },
        updateProductFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
        // Add
        addProductStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        addProductSuccess: (state, action) => {
            state.isFetching = false
            state.products.push(action.payload)
             

        },
        addProductFailure: (state) => {
            state.isFetching = false
            state.error = true
        }
    },
})

export const { getProductStart, getProductSuccess, getProductFailure, deleteProductStart, deleteProductSuccess, deleteProductFailure, updateProductStart, updateProductSuccess, updateProductFailure, addProductStart, addProductSuccess, addProductFailure } = productSLice.actions;
export default productSLice.reducer;