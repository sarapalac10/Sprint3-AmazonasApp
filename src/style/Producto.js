import styled from "styled-components";
import '../style/BasicStyle.css'

export const ContainerProductoGrid = styled.div`
    display: grid;
    grid-template-columns: 0.25fr 1.8fr 2.5fr 1fr;
    grid-gap: 10px;
`
export const MiniaturasContainer =styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
export const FotoPrincipalContainer = styled.div`
    margin: 0 5px 5px ;
    border: 1px solid blue;
`
export const DescripcionContainer = styled.div`
    border: 1px solid purple;
`
export const TituloYPrecioContainer =styled.div`
    border: 1px solid green;
`
export const DescripcionProductoContainer =styled.div`
    border: 1px solid purple;
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
    width: 20%
`