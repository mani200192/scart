import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => (

    <input className='search'
    type='Search' 
     placeholder="Search Products"
     onChange={props.onChange}
     />
)

export default SearchBox;