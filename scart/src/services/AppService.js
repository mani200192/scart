import Axios from 'axios';
import {User_Login } from '../Config/ServiceUrl';


//Service call to check login authentication?
export const userLogin = (userName) => {
    console.log(userName);
    return Axios.get(`${User_Login}`+userName);
}

