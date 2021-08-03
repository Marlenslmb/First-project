import axios from 'axios';
import React from 'react';
import { useReducer } from 'react';
import { API } from '../helpers/Helpers'

export const productContext = React.createContext()

const INIT_STATE = {
    products: [],
}

const reducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case "GET_PRODUCT": return {
            ...state, 
            products: action.payload
        }
        default: return state
    }
}


const ProductContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getProducts = async () => {
        let {data} = await axios(`${API}`)
        dispatch({
            type: "GET_PRODUCT",
            payload: data
        })
    }

    const addProduct = async (newProduct) => {
        try{
            let res = await axios.post(`${API}`, newProduct)
            return res
        }catch(error){
            console.log(error);
            return error
        }
    }







    return (
        <productContext.Provider value={{
            products: state.products,
            addProduct,
        }}
            >
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;