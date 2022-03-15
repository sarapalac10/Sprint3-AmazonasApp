import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'
import Producto from './Productos/Producto'

const ProductoRender = () => {
    const location = useLocation();
    const producto = location.state;
  return (
    <div>
        <Header />
        <NavBar />
        <Producto  producto = {producto} />
        <Footer />
    </div>
  )
}

export default ProductoRender