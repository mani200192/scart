import React, { Component } from 'react';
import './HomePage.css';
import Productlist from '../../components/ProductList /productList'
import SearchBox from '../../components/SearchComponent/SearchBox'
import Loader from '../../components/Loader/Loader'

class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading:false
      };
    }

   async handleSearch(text){

       await console.log(text);

    }
  
    render() {
      return (
        <div className="mainContent">
            {this.state.loading?<div className="loaderLayout">
            <Loader/>
             </div>:null
            }
          
            <div className="topContent" >
            <div className="logoLayout">
            <span>Mani</span>
            </div>

            <div className="searchLayout">
            <SearchBox onChange={e => this.handleSearch(e.target.value)}/>
            </div>

            <div className="cartShowLayput">
            <span>mani</span>
            </div>
           
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