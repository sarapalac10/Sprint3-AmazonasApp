import React from 'react'
import { useSelector } from 'react-redux'
import ProductList from './ProductList'

const Body = () => {
    console.log("hola esto es el body", )
    const traerProductos = useSelector( store => store.agregarReducer )
    console.log('traerProductos', traerProductos)
  return (
    <>
        <ProductList />
    </>
  )
}

export default Body