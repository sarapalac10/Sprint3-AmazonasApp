import React from 'react'
import { CarritoContainer } from '../../style/Header'

const CarritoHeader = () => {
  return (
    <CarritoContainer>
      <img src='https://res.cloudinary.com/sarapalacio01/image/upload/v1647179505/ProyectoAmazonas-S3/shopping-cart_e9z7h9.png' alt='logo-carrito' width='40px' height='40px' />
      <h3>Carrito</h3>
    </CarritoContainer>
  )
}

export default CarritoHeader