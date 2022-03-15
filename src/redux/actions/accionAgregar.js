import { AddProductType } from "../types/AddProductType"

const accionAgregar = (productos) => {
    return{
        type: AddProductType.agregar,
        payload: productos
    }
}

export default accionAgregar;
