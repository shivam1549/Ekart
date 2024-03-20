import { publicRequest, userRequest } from "../requestMethod";
import { addCategoryFailure, addCategoryStart, addCategorySuccess, deleteCategoryFailure, deleteCategoryStart, deleteCategorySuccess, getCategoryFailure, getCategoryStart, getCategorySuccess, updateCategoryFailure, updateCategoryStart, updateCategorySuccess } from "./categoryRedux";
import { getOrderFailure, getOrderStart, getOrderSuccess, updateOrderFailure, updateOrderStart, updateOrderSuccess } from "./orderRedux";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";
import { loginFailure, loginStart, loginSuccess, logoutAction } from "./userRedux";
import Swal from 'sweetalert2';

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
        
    } catch (err) {
        dispatch(loginFailure())
    }
}

export const logout = async (dispatch) => {
    dispatch(logoutAction());
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products")
        dispatch(getProductSuccess(res.data))
    } catch (err) {
        dispatch(getProductFailure())
    }
}

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
         await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
    } catch (err) {
        dispatch(deleteProductFailure())
    }
}

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        const res = await userRequest.put(`/products/${id}` ,product)
        dispatch(updateProductSuccess(res.data))
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Product updated successfully!',
          });

    } catch (err) {
        dispatch(updateProductFailure())
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to update product. Please try again.',
          });
    }
}

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await userRequest.post(`/products`, product)
        dispatch(addProductSuccess(res.data))
    } catch (err) {
        dispatch(addProductFailure())
    }
}


export const getOrders = async (dispatch) => {
    dispatch(getOrderStart());
    try {
        const res = await userRequest.get("/orders")
       
        dispatch(getOrderSuccess(res.data))
    } catch (err) {
        dispatch(getOrderFailure())
    }
}


export const updateOrder = async (orderId, orderstat, dispatch) => {
    dispatch(updateOrderStart());
    try {
        const res = await userRequest.put(`/orders/${orderId}`,  { orderstat })
        console.log('Update Order Response:', res.data);
        dispatch(updateOrderSuccess(res.data))
    } catch (err) {
        dispatch(updateOrderFailure())
    }
}


// Categories


export const addCategory = async (category, dispatch) => {
    dispatch(addCategoryStart());
    try {
        const res = await userRequest.post(`/categories`, category)
        dispatch(addCategorySuccess(res.data))
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Category Added successfully!',
          });
    } catch (err) {
        dispatch(addCategoryFailure())
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to Add Category. Please try again.',
          });
    }
}


export const getCategories = async (dispatch) => {
    dispatch(getCategoryStart());
    try {
        const res = await publicRequest.get("/categories")
        dispatch(getCategorySuccess(res.data))
    } catch (err) {
        dispatch(getCategoryFailure())
    }
}



export const updateCategory = async (id, category, dispatch) => {
    dispatch(updateCategoryStart());
    try {
        const res = await userRequest.put(`/categories/${id}` ,category)
        dispatch(updateCategorySuccess(res.data))
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Product updated successfully!',
          });

    } catch (err) {
        dispatch(updateCategoryFailure())
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to update product. Please try again.',
          });
    }
}

export const deleteCategory = async (id, dispatch) => {
    dispatch(deleteCategoryStart());
    try {
         await userRequest.delete(`/categories/${id}`)
        dispatch(deleteCategorySuccess(id))
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Deleted successfully!',
          });
    } catch (err) {
        dispatch(deleteCategoryFailure())
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to delete. Please try again.',
          });
    }
}
