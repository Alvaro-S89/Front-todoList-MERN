import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import { useAuth0 } from '@auth0/auth0-react'

const Router = () => {
  const {isLoading} = useAuth0()
    if(isLoading) return <h1>Loading...</h1>
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router