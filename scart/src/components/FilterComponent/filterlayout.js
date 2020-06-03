import React,{Component} from 'react';
import './filterLayout.css'
import CheckBoxFilter from './/CheckBoxFilter/checkBoxFilter'



class Filter extends Component
{
    
        constructor(props)
        {

            super(props);
            this.state =
            {
                
            }
        }

    render()
     {
        return (

            <div className='filterLayoutBody'>

            <div className='colorFilterLayout' >
             <CheckBoxFilter/>
            </div>

            <div className='brandFilterLayout' >
            
            <CheckBoxFilter/>
            </div>

            <div className='priceFilterLayout' >
            <span>priceFilter</span>
            </div>

            <div className='discountFilterLayout' >
            <span>discountFilter</span>
            </div>

            </div>
        )
    }

}

export default Filter;
