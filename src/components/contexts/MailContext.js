import axios from 'axios';
import React from 'react';
import { AUTHOR_API } from '../helpers/Helpers';

export const mailContext = React.createContext()

const MailContext = ({children}) => {

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
            alert("Такой логин уже есть!")
        }
    }
    async function clientLogin (e, history) {
        e.preventDefault();
        const clientLogin = {
            email: e.target[0].value,
            password: e.target[2].value
        }
        console.log(clientLogin)
        try{
            let datas = await axios.post(`${AUTHOR_API}/login`, clientLogin)
            localStorage.setItem('user', clientLogin.email)
            history.push('/')
        }catch(e){
            alert('Неправильный Login или Пароль...')
        }
    }

    async function clientLogout(e, history){
        e.preventDefault();
        const clientLogout = {
            
        }
        try{
            let data = await axios.get(`${AUTHOR_API}/login`, clientLogout)
            localStorage.removeItem('user', clientLogout)
            history.push('/')
        }catch(e){
            alert('Неправильно')
        }
    }


    const storeToken = (token) => {
        localStorage.setItem('jwt-token', token);
    }
    

    return (
        <mailContext.Provider value = {{
            clientLogin,
            clientRegister,
            clientLogout
        }}>
            {children}
        </mailContext.Provider>
    );
};

export default MailContext;