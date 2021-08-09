import axios from 'axios';
import React, { useReducer } from 'react';
import { AUTHOR_API } from '../helpers/Helpers';

export const mailContext = React.createContext()

const INIT_STATE = {}

const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        default: return state
    }
}

const MailContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    async function clientRegister(e, history){
        e.preventDefault();
        const newClient = {
            email: e.target[4].value,
            password: e.target[6].value,
        }
        try{
            const res = await axios.post(`${AUTHOR_API}/registration`, newClient)
            if(res.data && res.data.token){
                storeToken(res.data.token)
            }
            history.push('/login')
        }catch(e){
            alert("Ошибка...")
        }
    }
    async function clientLogin (e, history) {
        e.prevenDefault();
        const clientLogin = {
            email: e.target[0].value,
            password: e.target[2].value
        }
        try{
            let datas = await axios.post(`${AUTHOR_API}/login`, clientLogin)
            history.push('/')
            return datas
        }catch(e){
            alert('ERRRROORRR')
        }
    }


    const storeToken = (token) => {
        localStorage.setItem('jwt-token', token);
    }
    

    return (
        <mailContext.Provider value = {{
            clientLogin,
            clientRegister 
        }}>
            {children}
        </mailContext.Provider>
    );
};

export default MailContext;