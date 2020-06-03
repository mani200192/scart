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
         <span  className='name'>{props.value.title}
         </span>
         <div className='colorBody'>
         <span>Color</span>
         <div style={{backgroundColor:props.value.colour.color}} className="colorSquare"/>
         </div>
        
         </div>

         <div className="bottomFooter">
         <span style={{overflow: 'hidden', textOverflow: 'ellipsis'}}  className='brandName'>{props.value.brand}</span>
         <button onClick={props.onClicked(props.value.id)} className='addItemButton'>Add item
         </button>
         </div>
        </div>

    );
 }

 export default Product;

 