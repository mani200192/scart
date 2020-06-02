import React, { Component } from 'react';
import './HomePage.css';
import Productlist from '../../components/ProductList /productList'
import SearchBox from '../../components/SearchComponent/SearchBox'
import Loader from '../../components/Loader/Loader';
import {GetProductList} from '../../services/AppService';


class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading:false,
         data:[],
         searchText:"", 
      };
      this.ProductList = this.ProductList.bind(this)
    }

    componentDidMount()
    {
        this.ProductList();
    }

    // Get api call Product_Listing_Url
    async ProductList()
    {
        this.setState({isLoading:true})
        await GetProductList()
        .then(response => {
            console.log(response.data);
            this.setState({isLoading:false,data:response.data})
           console.log(this.data);
        })
        .catch(error => {
            console.log(error);
            this.setState({isLoading:false})
        })
    }

   async handleSearch(text)
   {
       await console.log(text);
   }
  
    render() {
      return (
        <div className="mainContent">
            {this.state.isLoading?<div className="loaderLayout">
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
            <Productlist value={this.state} />
            </div>
         </div>
      );
    }
  }

  export default HomePage;