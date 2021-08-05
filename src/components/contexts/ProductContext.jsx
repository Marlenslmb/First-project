import axios from 'axios';
import React from 'react';
import { useReducer } from 'react';
import { API } from '../helpers/Helpers'

export const productContext = React.createContext()

const INIT_STATE = {
    products: [],
    detail: {},
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
    const getDetail = async (id) => {
        const {data} = await axios.get(`${API}/${id}`)
        dispatch({
            type: "GET_DETAIL_PRODUCT",
            payload: data
        })
    }




    return (
        <productContext.Provider value={{
            products: state.products,
            addProduct,
            getProducts,
            getDetail,
        }}
            >
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;