import React from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

import Home from './pages/Home';
import Addtenant from './pages/Addtenant';
import Login from './pages/login/Login.jsx';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Orders from './pages/order/Orders';
import OrderSingle from './pages/ordersingle/OrderSingle';
import { Navigate } from 'react-router-dom';
import NewCategory from './pages/newCategory/NewCategory.jsx';
import CategoryList from './pages/categoryList/CategoryList.jsx';
import Category from './pages/category/Category.jsx';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Route element={<Home />} />,
//   },
// ]);

function App() {

  
  // Retrieve user data from local storage
  const localStorageData = JSON.parse(localStorage.getItem("persist:root"));

  // Check if user data exists and has the expected structure
  const isAdmin =
    localStorageData && localStorageData.user
      ? JSON.parse(localStorageData.user).currentUser?.isAdmin || false
      : false;

      return (
        <Router>
          <Routes>
            {isAdmin ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Addtenant />} />
                <Route path="/newUsers" element={<Addtenant />} />
                <Route path="/user/:userId" element={<Addtenant />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/categories" element={<CategoryList />} />
                <Route path="/newcategory" element={<NewCategory />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/category/:categoryId" element={<Category />} />
                <Route path="/newproduct" element={<NewProduct />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/order/:orderId" element={<OrderSingle />} />
            
              </>
            ) : (
              // Redirect to login page if not authenticated
              () => <Navigate to="/login" />
            )}
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      );
}

export default App;
