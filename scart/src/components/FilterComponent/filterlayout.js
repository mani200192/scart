import React,{Component} from 'react';
import './filterLayout.css'




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
                <span>mani1</span>
            </div>

            <div className='brandFilterLayout' >
            
            <span className='brandFilterLayout'>brandFilter</span>
            
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
