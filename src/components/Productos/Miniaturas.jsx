import React from 'react'
import { MiniaturasContainer } from '../../style/Producto'

const Miniaturas = ({imagenes}) => {
  return (
    <MiniaturasContainer>
       <img className='imagen-mini' alt="productPicture" src={imagenes[0]} />
       <img className='imagen-mini' alt="productPicture" src={imagenes[1]} />
       <img className='imagen-mini' alt="productPicture" src={imagenes[2]} />
       <img className='imagen-mini' alt="productPicture" src={imagenes[3]} />
    </MiniaturasContainer>
  )
}

export default Miniaturas