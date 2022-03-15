import styled from "styled-components";
import '../style/BasicStyle.css'

export const ContainerBanner = styled.div`
    height: 40px;
    width: 100%;
    background-color: var(--blue2);
    color: var(--white);
    
`
export const ContainerNavBar = styled.div`
    width: 55%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-end;
    padding: 10px;
`
export const ContainerTodoNavBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start
`