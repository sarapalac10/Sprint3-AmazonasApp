import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerProductoGrid } from '../../style/Producto'
import AgregarCarrito from './AgregarCarrito'
import FotoPrincipal from './FotoPrincipal'
import HistorialBusqueda from './HistorialBusqueda'
import Miniaturas from './Miniaturas'
import Opiniones from './Opiniones'
import TituloYPrecio from './TituloYPrecio'

const Producto = ({producto}) => {
    const {imagenes, nombre, precio, lente, detalles, marca }= producto.data
  return (
    <>
      <Link to='/' className='link-atras'> &lt; Volver a los resultados </Link>
      <ContainerProductoGrid>
        <Miniaturas imagenes={imagenes} />
        <FotoPrincipal imagenes={imagenes} />
        <TituloYPrecio titulo={nombre} precio={precio} marca={marca} lente={lente} detalles={detalles} />
        <AgregarCarrito precio={precio} />
      </ContainerProductoGrid>
      <HistorialBusqueda />
      <Opiniones />

    </>
  )
}

export default Producto