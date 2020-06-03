import Axios from 'axios';
import {Get_Product_Filters,User_Login ,Product_Listing_Url,Product_Search_ByName} from '../Config/ServiceUrl';


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

//Service call to get all product on search text
export const GetProductListOnSearch = (searchtext) => 
{
    return Axios.get(`${Product_Search_ByName}`+ searchtext);
}


//Service call to get all product on search text
export const GetProductFilters = (searchtext) => 
{
    return Axios.get(`${Get_Product_Filters}`);
}

