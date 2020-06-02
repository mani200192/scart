import React from 'react'
import  './Product.css';

 function Product(props){

    return(
        <div className='collection-item'>
        <div className='image'
        style={{backgroundImage:`url(${props.value.imageUrl})`
         }}
        />
        <div className='collection-footer'>
         <span className='name'>{props.value.name}
         </span>
         <div className='colorBody'>
         <span>Color</span>
         <div className="colorSquare"/>
         </div>
        
         </div>

         <div className="bottomFooter">
         <span   className='brandName'>{props.value.price}</span>
         <button className='addItemButton'>Add item
         </button>
         </div>
        </div>

    );
 }

 export default Product;

 