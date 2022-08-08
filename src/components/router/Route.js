import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Checkout } from '../Checkout';
import { Dashboard } from '../Dashboard';
import {Home } from '../Home';
import { SignIn } from '../Signin';
import { SignUp } from '../Signup';
import PrivateRoute from "./PrivateRouting";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route element={<PrivateRoute />}>
        <Route index path='/home' element={<Dashboard />} />
          <Route  path='/online' element={<Checkout />} /> 
           {/* <Route path='/homes' element={<Home />} /> 
          <Route path='/home' element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router



