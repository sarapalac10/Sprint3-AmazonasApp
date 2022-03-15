import React from 'react'
import ReactImageMagnify from 'react-image-magnify';
import { FotoPrincipalContainer } from '../../style/Producto'

const FotoPrincipal = ({imagenes}) => {
  return (
    <FotoPrincipalContainer>
       {/* <img className='imagen-principal' alt="productPicture" src={imagenes[0]} /> */}
       <ReactImageMagnify {...{
        smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: imagenes[0]
        },
        largeImage: {
            src: imagenes[0],
            width: 500,
            height: 500
        }
       }} />
    </FotoPrincipalContainer>
  )
}

export default FotoPrincipal