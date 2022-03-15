import React from 'react'
import { Link } from 'react-router-dom'

const LogoHeader = () => {
  return (
    <Link to='/'>
      <img className='imagen-logo-header' src='https://res.cloudinary.com/sarapalacio01/image/upload/v1647179505/ProyectoAmazonas-S3/logo-amazon_amigzy.png' alt='logo' width='125px' height='40px' />
    </Link>
  )
}

export default LogoHeader