import React, { Component } from 'react';
import './HomePage.css';
import Productlist from '../../components/ProductList /productList'
import SearchBox from '../../components/SearchComponent/SearchBox'
import Loader from '../../components/Loader/Loader';
import {GetProductList,GetProductListOnSearch} from '../../services/AppService';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Filter from '../../components/FilterComponent/filterlayout';


class HomePage extends Component {

    // default state set
    constructor(props) {
      super(props);
      this.state = {
        isLoading:false,
         data:[],
         searchText:"",
         addProductCount:0
      };
      this.ProductList = this.ProductList.bind(this)
    }

    // on page load
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

    // Get product on search text by calling api

   async handleSearch(searchtext)
   {
      // await console.log(text);
        this.setState({searchText:searchtext})
       this.GetSearchProduct(searchtext);
       
   }

   /// hitting of search api after user typing stop
  async GetSearchProduct(searchtext)
   {
        if(this.state.searchText)
        { 
            clearTimeout(this.typingTimer);
            this.typingTimer = setTimeout(() => {
                this.SearchApiCall(searchtext)
              }, 0);
        }

   }

   // search Api call && data[] updation
  async SearchApiCall(searchtext)
   {
        this.setState({isLoading:true})
        await GetProductListOnSearch(searchtext)
        .then(response => {
            this.setState({data:[]})
            console.log(response.data);
            this.setState({isLoading:false,data:response.data})
        console.log(this.data);
        })
        .catch(error => {
            console.log(error);
            this.setState({isLoading:false,data:[]})
        })
   }

   componentWillUnmount() 
   {
    clearTimeout(this.typingTimer);
    }

    addItem(e)
    {
      console.log(e);

      this.setState({addProductCount:this.state.addProductCount+1})

    }
  
    // rendering of page
    render() {
       
      return (
        <div className="mainContent">
            {this.state.isLoading?<div className="loaderLayout">
            <Loader/>
             </div>:null
            }
            <div className="topContent" >
            <div className="logoLayout">
            <h1 className="logoText">sCart</h1>
            </div>
            <div className="searchLayout">
            <SearchBox onChange={e => this.handleSearch(e.target.value)}/>
            </div>

            <div className="cartShowLayput">
            
            <div className='profileLayout'>
            <PersonIcon  />
            <span className='profileNameStyle' >amigo</span>
            </div>
            <div className='addCartItemLayout'>
            <ShoppingCartIcon/>
            <span className='cartItemStyle'>{this.state.addProductCount}</span>
            </div>
            </div>
           
            </div>
            <div className="leftFilterContent">
            <Filter/>
            </div>
            <div className="productListContent">
            <Productlist onClick={(e)=>this.addItem(e)} value={this.state} />
            </div>
         </div>
      );
    }
  }

  export default HomePage;