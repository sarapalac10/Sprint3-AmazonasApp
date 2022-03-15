import React from 'react'
import { HeaderContainer } from '../style/Header';
import BusquedaHeader from './Header/BusquedaHeader';
import CarritoHeader from './Header/CarritoHeader';
import CuentaHeader from './Header/CuentaHeader';
import DireccionHeader from './Header/DireccionHeader';
import InfoPedidosHeader from './Header/InfoPedidosHeader';
import LogoHeader from './Header/LogoHeader';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoHeader />
      <DireccionHeader />
      <BusquedaHeader />
      <CuentaHeader />
      <InfoPedidosHeader />
      <CarritoHeader />
    </HeaderContainer>
  )
}

export default Header;