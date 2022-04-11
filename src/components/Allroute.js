import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router";
import Checkout from './Checkout';
import Menu from './Menu';
import Page1 from './Page1'


export default function Allroute() {
  return (
    <Routes>
      <Route path="" element={<Page1/>}  /> 
    <Route path="/menu" element={<Menu/>} />
      <Route path="/checkout" element={<Checkout/>} />
    </Routes>
  )
}




