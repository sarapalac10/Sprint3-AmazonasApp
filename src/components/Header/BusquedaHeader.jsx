import React from 'react'
import { Dropdown, DropdownButton  } from 'react-bootstrap'
import { BusquedaContainer, ButtonBusqueda, InputBusqueda } from '../../style/Header'


const BusquedaHeader = () => {
  return (
    <BusquedaContainer>
      
      <DropdownButton id="dropdown-basic-button" variant='Secondary' title="Todos los departamentos">
        <Dropdown.Item href="#/action-1">Arte y artesanías</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Belleza y cuidado personal</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Electrónicos</Dropdown.Item>
      </DropdownButton>

      <InputBusqueda type="text" placeholder='Ingresa un artículo para buscar' ></InputBusqueda>

      <ButtonBusqueda><img src='https://res.cloudinary.com/sarapalacio01/image/upload/v1647179505/ProyectoAmazonas-S3/search_bbcxxz.svg' alt='boton-busqueda' /></ButtonBusqueda>
    </BusquedaContainer>
  )
}

export default BusquedaHeader