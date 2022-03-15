import React from 'react'
import { DireccionContainer, DireccionLogoCont, DireccionP } from '../../style/Header'

const DireccionHeader = () => {
  return (
    <DireccionContainer>
        <DireccionP>Hola</DireccionP>
        <DireccionLogoCont>
          <img src='https://res.cloudinary.com/sarapalacio01/image/upload/v1647179505/ProyectoAmazonas-S3/gps_jbgoq7.png' alt='logo-ubicacion'/>
          <h3>Elige tu dirección</h3>
        </DireccionLogoCont>
        </DireccionContainer>
  )
}

export default DireccionHeader