import React from 'react'
import  './Product.css';

 function Product(props){

    return(
        <div className='collection-item'>
        <div className='image'
        style={{backgroundImage:`url(${props.value.image})`
         }}
        />
        <div className='collection-footer'>
         <span className='name'>{props.value.title}
         </span>
         <div className='colorBody'>
         <span>Color</span>
         <div className="colorSquare"/>
         </div>
        
         </div>

         <div className="bottomFooter">
         <span   className='brandName'>{props.value.price.final_price}</span>
         <button className='addItemButton'>Add item
         </button>
         </div>
        </div>

    );
 }

 export default Product;

 