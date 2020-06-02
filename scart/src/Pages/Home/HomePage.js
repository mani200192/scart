import React, { Component } from 'react';
import './HomePage.css';
import Productlist from '../../components/ProductList /productList'



class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }
  
    render() {
      return (
        <div className="mainContent">
            <div className="topContent" >
            <span>mani</span>
            </div>
            <div className="leftFilterContent">
            <span>BHUSHAN</span>
            </div>
            <div className="productListContent">
            <Productlist/>
            </div>
         </div>
      );
    }
  }

  export default HomePage;