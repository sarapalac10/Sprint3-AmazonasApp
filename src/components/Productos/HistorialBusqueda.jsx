import React from 'react'
import { HistorialBusquedaContainer, HistorialBusquedaContainerImagenes } from '../../style/Producto'

const HistorialBusqueda = () => {
  return (
      <HistorialBusquedaContainer>
        <h2><strong>Inspirado por tu historial de búsqueda</strong></h2>
        <HistorialBusquedaContainerImagenes>
            <img src='https://res.cloudinary.com/sarapalacio01/image/upload/v1647349410/ProyectoAmazonas-S3/card_xcgmuk.png' alt='' />
            <img src='https://res.cloudinary.com/sarapalacio01/image/upload/v1647349410/ProyectoAmazonas-S3/card2_ntbwwb.png' alt='' />
            <img src='https://res.cloudinary.com/sarapalacio01/image/upload/v1647349410/ProyectoAmazonas-S3/card3_soet5v.png' alt='' />
            <img src='https://res.cloudinary.com/sarapalacio01/image/upload/v1647349410/ProyectoAmazonas-S3/card4_meqlgt.png' alt='' />
        </HistorialBusquedaContainerImagenes>
      </HistorialBusquedaContainer>
  )
}

export default HistorialBusqueda