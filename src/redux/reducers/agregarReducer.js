import { AddProductType } from "../types/AddProductType";

const initialState = []

export const agregarReducer = ( state = initialState, action ) => {
    switch(action.type){
        case AddProductType.agregar :
            return action.payload;
        case AddProductType.search:
            return action.payload;
        default:
            return state;   
    }
}

