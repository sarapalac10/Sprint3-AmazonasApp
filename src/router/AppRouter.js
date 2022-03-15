import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContainer from '../components/containers/AppContainer';
import Login from '../components/Login';
import ProductoRender from '../components/ProductoRender';

const AppRouter = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppContainer/>} />
      <Route path='/productos/:name' element={<ProductoRender/>} />
      <Route path='/login' element={<Login/>} />   
    </Routes>
   </BrowserRouter>
  )
}

export default AppRouter