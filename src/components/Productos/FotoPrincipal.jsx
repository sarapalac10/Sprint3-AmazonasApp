import React from 'react'
import { FotoPrincipalContainer } from '../../style/Producto'

const FotoPrincipal = ({imagenes}) => {
  return (
    <FotoPrincipalContainer>
       <img className='imagen-principal' alt="productPicture" src={imagenes[0]} />
    </FotoPrincipalContainer>
  )
}

export default FotoPrincipal