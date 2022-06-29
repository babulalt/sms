import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
           <Route path='/homes' element={<Home />} /> 
          <Route path='/home' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router



