import React from 'react'
import { ContainerBanner, ContainerNavBar, ContainerTodoNavBar } from '../../style/NavBar'

const NavBarBanner = () => {
  return (
    <ContainerBanner>
        <ContainerNavBar>
            <ContainerTodoNavBar>
                <img src='https://res.cloudinary.com/sarapalacio01/image/upload/v1647179505/ProyectoAmazonas-S3/menu_imsv4m.png' alt='menu-hamburguesa' />
                <h5>Todo</h5>
            </ContainerTodoNavBar>
            <h4>Tarjetas de regalo</h4>
            <h4>Prime</h4>
            <h4>Los más vendidos</h4>
            <h4>AmazonBasics</h4>
            <h4>Cómputo y Tabletas</h4>
            <h4>Los Más Regalados</h4>
        </ContainerNavBar>
    </ContainerBanner>
  )
}

export default NavBarBanner