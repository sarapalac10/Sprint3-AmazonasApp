import styled from "styled-components";
import './BasicStyle.css'

export const ProductCard = styled.div`
  width: 150px;
  height: 300px;
  img{
    width: 100%;
  }
`
export const ProductsContainer = styled.div`
  display: flex; 
  flex-direction: row;
  gap: 20px;
  justify-content: space-evenly;
  height: max-content;
`