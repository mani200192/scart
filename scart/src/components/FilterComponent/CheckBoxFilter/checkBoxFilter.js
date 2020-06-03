import React from 'react'
import './checkBoxFilter.css'



function CheckBoxFilter(props)
{

   
    return(

         <div className='checkBoxFilterLyout' >
         <span className='titleStyle' >Color</span>
         <div className='checkBoxBody' >
          <input
            type="checkbox"
    
          />
          <span className='textStyle'>Label Text</span>
    
         </div>
         </div>
    )


}

export default CheckBoxFilter;