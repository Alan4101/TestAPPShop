import { ADD_NEW_PRODUCT, FETCH_PRODUCTS, OPEN_MODAL } from './types';
import { apiConfig } from '../config.api';

import axios from "axios";

import { createNewPost } from '../API/RESTServise';

export function openModal(){
    return{
        type: OPEN_MODAL,
        payload: true
    }
}
export function closeModal(){
    return{
        type: OPEN_MODAL,
        payload: false
    }
}

export function fetchProducts(){
    return async (dispatch)=>{
        try{
            const responce = await axios.get(apiConfig.urlProducts);
            dispatch({
                type: FETCH_PRODUCTS,
                payload: responce.data
            })
        }catch(error){
            console.log(error)
        }
    }
}
export function createProduct(product){

    return async (dispatch)=>{
      
      
        const res = createNewPost(apiConfig.urlProducts, product)
        dispatch({
            type: ADD_NEW_PRODUCT,
            payload: res.data
        })
   
      
    
             
    
    } 
}

