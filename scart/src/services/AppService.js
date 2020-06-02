import Axios from 'axios';
import {User_Login ,Product_Listing_Url} from '../Config/ServiceUrl';


//Service call to check login authentication?
export const userLogin = (userName) => {
    console.log(userName);
    return Axios.get(`${User_Login}`+userName);
}

//Service call to get all product
export const GetProductList = () => 
{
    return Axios.get(`${Product_Listing_Url}`);
}

