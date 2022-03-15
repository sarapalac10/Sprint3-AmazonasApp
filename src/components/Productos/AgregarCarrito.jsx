import React from 'react'
import { AgregarCarritoContainer, BotonesCarritoContainer } from '../../style/Producto'

const AgregarCarrito = ({precio}) => {
  return (
    <AgregarCarritoContainer>
        <h2 className="precio-producto"> {precio}</h2>
        <h2 className="titulo-precio" >Envio GRATIS <span className='marca-producto'>Detalles</span></h2> 
        <h2>Llega: <strong>dic 15 - 28</strong></h2>
        <h3 className="precio-producto" >Puede que lo recibas después de Navidad</h3>
        <BotonesCarritoContainer>
            <img src='https://res.cloudinary.com/sarapalacio01/image/upload/v1647179505/ProyectoAmazonas-S3/button_lo3kmh.png' alt='boton-carrito' />
            <img src='https://res.cloudinary.com/sarapalacio01/image/upload/v1647319065/ProyectoAmazonas-S3/Frame_47_g0rros.png' alt='boton-comprar' />
        </BotonesCarritoContainer>
        <h3 className='transaccion-producto' >Transacción segura</h3>
    </AgregarCarritoContainer>
  )
}

export default AgregarCarrito