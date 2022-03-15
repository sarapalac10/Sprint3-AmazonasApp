import styled from "styled-components";
import '../style/BasicStyle.css'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: var(--blue1);
    color: var(--white);
    width: 100%;
    height: 65px;
    @media only screen and (max-width: 366px) {
        flex-direction: column;
    }
`
export const DireccionContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
`
export const DireccionP = styled.p`
    margin-top: 5px;
    margin-bottom: 0;
    font-size: 15px;
`
export const DireccionLogoCont = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
`
export const BusquedaContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const InputBusqueda = styled.input`
    border-top-left-radius: none;
    border-top-right-radius: none;
    height: 35px;
    margin-right: 0;
`
export const ButtonBusqueda = styled.button`
    height: 35px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: var(--yellowSecondary)
`
export const CuentaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`
export const PedidosContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const CarritoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center
`