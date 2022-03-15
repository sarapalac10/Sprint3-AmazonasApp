import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { CuentaContainer, DireccionP } from '../../style/Header'
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';

const CuentaHeader = () => {
  const {displayname} = useSelector(store => store.login)
  return (
    <div>
      <CuentaContainer>
        <DireccionP>Hola, {displayname}</DireccionP>

        <Dropdown>
          <Dropdown.Toggle  variant='Secondary' id="dropdown-basic" className='drop-drown-cuenta'>
            Cuentas y Listas
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <LinkContainer to="/login"><Dropdown.Item >Login</Dropdown.Item></LinkContainer>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </CuentaContainer>
    </div>
  )
}

export default CuentaHeader