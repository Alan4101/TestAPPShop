import { ADD_NEW_PRODUCT, FETCH_PRODUCTS } from "./types";

const initialState = {
    products:[]
}

export const productReducer = (state = initialState, action ) => {

    switch(action.type){

        case FETCH_PRODUCTS: 
        return{
            ...state,
            products: action.payload
        }
       
        case ADD_NEW_PRODUCT: 
            return {
                ...state,
                products: action.payload
            } 

    default: return state
    }
    

}