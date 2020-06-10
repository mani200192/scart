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
            this.setState({collection:response.data})
        })
        .catch(error => {
            console.log(error);
           
        })
    }

    render()
     {
         const collections = this.state.collection;
         console.log(collections);
        return (

            <div className='filterLayoutBody'>
            <div className='colorFilterLayout' >
            {collections?collections.map((items, index) => (
                <CheckBoxFilter key={items.type} value={items} />
                )):null
             }      
            </div>
           
            </div>
        )
    }
}

export default Filter;
