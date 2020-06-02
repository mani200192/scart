import React, { Component } from 'react';
import Product from '../Product/Product';
import './productList.css';




function ProductList(props)
{
     
        return (
            
          <div className='productlist'>
                
                {
                    (props.value.data.map((item)=>(
                       <Product key={item.id} value={item}/>
                   )) )
                }
           </div>
        );
      
    }
  
    export default ProductList;


