import React from "react";
import { DescripcionContainer, DescripcionProductoContainer, TituloYPrecioContainer } from "../../style/Producto";

const TituloYPrecio = ({ titulo, precio, marca, lente, detalles }) => {

  return (
    <DescripcionContainer>
      <TituloYPrecioContainer>
        <h1>{titulo}</h1>
        <p className="marca-producto">Marca {marca}</p>
        <p className="precio-producto"> <span className="titulo-precio">Precio</span> {precio}</p>
        <p className="titulo-precio" >Envio GRATIS</p>
        <p className="link marca-producto">Detalles</p>
        <p>
          Hasta <strong>18 meses sin intereses de $5.592</strong>.{" "}
          <i className="link marca-producto" >Ver mensualidades</i>{" "}
        </p>
        <p>
          <span className="marca-producto" >Solicita tu tarjeta Amazon Recargable</span> y obtén $100 de descuento en tu
          primera compra mayor a $500
        </p>
        <p>
          Color: <strong>Negro</strong>
        </p>
        <p>
          Estilo: <strong>{lente}</strong>
        </p>
      </TituloYPrecioContainer>

      <DescripcionProductoContainer>
      <h4><strong>Acerca de este artículo</strong></h4>
      <ul>
        {detalles.map((detalle, i) => (<li key={i}>{detalle}</li>))}
      </ul>
      </DescripcionProductoContainer>
    </DescripcionContainer>
  );
};

export default TituloYPrecio;
