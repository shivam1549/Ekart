import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        // GET All
        getOrderStart: (state) => {
           
            state.isFetching = true
            state.error = false
        },
        getOrderSuccess: (state, action) => {

            
            state.isFetching = false; // Corrected this line
            state.orders = action.payload
        },
        getOrderFailure: (state) => {
        
            state.isFetching = false
            state.error = true
        },


        // Update
        updateOrderStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        updateOrderSuccess: (state, action) => {
            state.isFetching = false;
          
            // Assuming action.payload is the entire updated order object
            const updatedOrder = action.payload;
          
            state.orders = state.orders.map((item) =>
              item._id === updatedOrder._id ? updatedOrder : item
            );
          },
        updateOrderFailure: (state) => {
            state.isFetching = false
            state.error = true
        },

    },
})

export const { getOrderStart, getOrderSuccess, getOrderFailure, updateOrderStart, updateOrderSuccess, updateOrderFailure } = orderSlice.actions;
export default orderSlice.reducer;