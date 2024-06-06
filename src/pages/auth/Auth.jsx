import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
    let isLogin = true || localStorage.getItem("x-auth-token")
    return isLogin ? <Outlet /> : <Navigate replace to="/login" />
}

export default Auth