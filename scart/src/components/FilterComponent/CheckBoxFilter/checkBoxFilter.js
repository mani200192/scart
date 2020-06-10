import React from 'react'
import './checkBoxFilter.css'



function CheckBoxFilter(props)
{

   
    return(
        
         <div className='checkBoxFilterLyout' >
         <span className='titleStyle' >{props.value.type}</span>
         <div  className='checkBodyMainBody' >
         { 
          
         <div className='checkBoxBody' >
            <input
               type="checkbox"

             />
          <span className='textStyle'>type</span>
    
         </div>

         }
         </div>
         
         </div>
    )

}

export default CheckBoxFilter;