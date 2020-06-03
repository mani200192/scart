import React,{Component} from 'react';
import './filterLayout.css'
import CheckBoxFilter from './/CheckBoxFilter/checkBoxFilter'
import {GetProductFilters} from '../../services/AppService';


class Filter extends Component
{
    
        constructor(props)
        {
            super(props);
            this.state =
            {
               collection:[] 
            }
        }

    componentDidMount()
    {
        // get all filter products
        this.GetFilterProducts();

    }   
    
   async GetFilterProducts()
    {
        this.setState({isLoading:true})
        await GetProductFilters()
        .then(response => {
            console.log(response.data);
            this.setState({collections:response.data})
        })
        .catch(error => {
            console.log(error);
           
        })
    }

    render()
     {
         const {collections} = this.state.collection;
        return (

            <div className='filterLayoutBody'>

            <div className='colorFilterLayout' >
            {
                 <CheckBoxFilter value={this.state.collections}/>
            }
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
