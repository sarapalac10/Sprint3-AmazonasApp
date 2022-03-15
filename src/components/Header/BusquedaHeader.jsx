import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { Dropdown, DropdownButton  } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { BusquedaContainer, ButtonBusqueda, InputBusqueda } from '../../style/Header'
import { searchAsync } from '../../redux/actions/actionLogin'

const BusquedaHeader = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      search: ''
    }, 
    validationSchema: Yup.object({
      search: Yup.string().required()
    }),
    onSubmit:({search}) => {
      dispatch(searchAsync(search))
  }})

  return (
    <BusquedaContainer>
      
      <DropdownButton id="dropdown-basic-button" variant='Secondary' title="Todos los departamentos">
        <Dropdown.Item href="#/action-1">Arte y artesanías</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Belleza y cuidado personal</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Electrónicos</Dropdown.Item>
      </DropdownButton>

      <form onSubmit={formik.handleSubmit}>
        <InputBusqueda name='search' value={formik.values.search} type="text" placeholder='Ingresa un artículo para buscar' onChange={formik.handleChange} ></InputBusqueda>

        <ButtonBusqueda><img src='https://res.cloudinary.com/sarapalacio01/image/upload/v1647179505/ProyectoAmazonas-S3/search_bbcxxz.svg' alt='boton-busqueda' /></ButtonBusqueda>
      </form>
     
    </BusquedaContainer>
  )
}

export default BusquedaHeader