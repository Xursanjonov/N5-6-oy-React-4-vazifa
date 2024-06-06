import React, { Fragment } from "react"
import { Route, Routes } from "react-router-dom";
// components
import Layout from './layout'
import Home from './pages/home/Home'
import Login from './pages/auth/login/Login'
import Wishlist from './pages/wishlist'
import Cart from './pages/cart'
import ProductDetails from "./pages/product-details";
import Auth from './pages/auth/Auth'
import Admin from './pages/admin/Admin'
import Manage from './pages/admin/manage'
import Create from './pages/admin/create-product/Create'
import NotFound from './pages/not-founud/NotFound'
// toastify
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

// npm create vite
function App() {

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
          <Route path="cart/:id" element={<ProductDetails />} />
        </Route>

        <Route path="/" element={<Auth />}>
          <Route path="admin/" element={<Admin />} >
            <Route path="create" element={<Create />} />
            <Route path="manage" element={<Manage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer />
    </Fragment>
  )
}

export default App
