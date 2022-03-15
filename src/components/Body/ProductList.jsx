import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ProductCard, ProductsContainer } from '../../style/HomeStyled'

const ProductList = () => {
  const productos = useSelector(store => store.agregarReducer)
  console.log("verificando...", productos)
  const [viewProducts, setViewProducts] = useState(productos)
  useState(() => {
    setViewProducts(productos)
  },[productos])
  return (
    <ProductsContainer>{
      productos.map((producto, index) =>{
          let nameLong = producto.data.nombre
          let name = nameLong.replace(/ /g, '')
          name = name.slice(0,10)
          let image = producto.data.imagenes[0]
          return (
            <Link to={`/productos/${name}`} state={producto} key={index}>
          <ProductCard>
            <h4 className='productlist-title'>{nameLong}</h4>
            <img alt="productPicture" src={image}/>
          </ProductCard>
          </Link>
          )
        }) 
      }</ProductsContainer>
  )
}

export default ProductList