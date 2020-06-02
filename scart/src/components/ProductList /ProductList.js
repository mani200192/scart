import React, { Component } from 'react';
import Product from '../Product/Product';
import './productList.css';



class ProductList extends Component
{
     
    constructor(props) {
        super(props);
        this.state = {
          data:[
            {
              id: 1,
              name: 'Brown Brim',
              imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
              price: 25
            },
            {
              id: 2,
              name: 'Blue Beanie',
              imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
              price: 18
            },
            {
              id: 3,
              name: 'Brown Cowboy',
              imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
              price: 35
            },
            {
              id: 4,
              name: 'Grey Brim',
              imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
              price: 25
            },
            {
              id: 5,
              name: 'Green Beanie',
              imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
              price: 18
            }
         ]
        };
      }
    
      render() 
      {
          const items = this.state.data;
        return (
          <div className='productlist'>
                {
                    items.map((item)=>(
                       <Product value={item}/>
                   )) 
                }
           </div>
        );
      }
    }
  
    export default ProductList;


