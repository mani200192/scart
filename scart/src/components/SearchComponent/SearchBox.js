import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => (

    <div className="searchBody">
    <input className='search'
    type='Search' 
     placeholder="Search Products"
     onChange={props.onChange}
     />
     </div>
)

export default SearchBox;