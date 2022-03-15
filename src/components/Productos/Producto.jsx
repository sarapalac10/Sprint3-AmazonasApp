import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerProductoGrid } from '../../style/Producto'
import AgregarCarrito from './AgregarCarrito'
import FotoPrincipal from './FotoPrincipal'
import Miniaturas from './Miniaturas'
import Opiniones from './Opiniones'
import TituloYPrecio from './TituloYPrecio'

const Producto = ({producto}) => {
    const {imagenes, nombre, precio, lente, detalles, comentarios, marca }= producto.data
  return (
    <>
      <Link to='/' className='link-atras'> &lt; Volver a los resultados </Link>
      <ContainerProductoGrid>
        <Miniaturas imagenes={imagenes} />
        <FotoPrincipal imagenes={imagenes} />
        <TituloYPrecio titulo={nombre} precio={precio} marca={marca} lente={lente} detalles={detalles} />
        <AgregarCarrito precio={precio} />
      </ContainerProductoGrid>
      <Opiniones />
    </>
  )
}

export default Producto