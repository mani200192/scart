import React, { Component } from 'react';
import './HomePage.css';



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
            <span>SINGH</span>
            </div>
         </div>
      );
    }
  }

  export default HomePage;