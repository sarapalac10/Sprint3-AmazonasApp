import styled from "styled-components";
import '../style/BasicStyle.css'

export const ContainerProductoGrid = styled.div`
    display: grid;
    grid-template-columns: 0.25fr 1.8fr 2.5fr 1fr;
    grid-gap: 10px;
`
export const MiniaturasContainer =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
export const FotoPrincipalContainer = styled.div`
    margin: 0 5px 5px ;
`
export const DescripcionContainer = styled.div`
`
export const TituloYPrecioContainer =styled.div`
`
export const DescripcionProductoContainer =styled.div`
`
export const BotonesCarritoContainer =styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`
export const AgregarCarritoContainer = styled.div`
    border: 1px solid black;
    height: fit-content;
    padding: 0.5rem;
    border-radius: 10px;
    margin-right: 1rem;
`
export const OpinionesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-left: 2rem;
`
export const UsuarioContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 20%;
`
export const HistorialBusquedaContainer = styled.div`
    width:90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top:2rem;
    margin-bottom:1rem;
    margin-left: 2rem;
`
export const HistorialBusquedaContainerImagenes = styled.div`
    display: flex;
    margin-top:2rem;
`