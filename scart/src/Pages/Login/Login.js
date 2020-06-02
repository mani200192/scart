import React from 'react';
import './login.css';
import {userLogin} from '../../services/AppService';
import Loader from '../../components/Loader/Loader'


class Login extends React.Component{

    constructor(props){

        super(props);
        this.state =
        {
            userName:"",
            password:"",
            isButtonDisabled:false,
            isLoading:false,
            responseData:[]
        }

        this.onLoginClicked = this.onLoginClicked.bind(this)
    }

  async  userNameInput(evt)
    {
      await  this.setState(
            { userName: evt.target.value });
        console.log(evt);
    }

   async userPasswordnput(evt)
    {
       await this.setState(
            { password: evt.target.value });

    }

   async onLoginClicked()
    {
        const userNameText = this.state.userName
        // to check userName by calling user Api from app service
        this.setState({isLoading:true})
        await userLogin(userNameText)
            .then(response => {
                console.log(response,"1");
                if(response.length){
                this.setState({responseData:response[0]})
                console.log(this.state.data,"Mani");
                this.setState({isLoading:false})
                }
                else
                {
                    this.setState({isLoading:false})
                }
            })
            .catch(error => {
                console.log(error);
                this.setState({isLoading:false})
            })
    }



    render() {

        return (

          <div className='mainBody'>
          {this.state.isLoading?<div className="loaderLayout">
          <Loader/>
           </div>:null
          }
          <div className='loginContent'>
           
            <h1 className="logoText">sCart</h1>
            <input value={this.state.userName} onChange={e=> this.userNameInput(e)} className='userInput' name="user name" type="text" placeholder="Enter your username" />
            <input value={this.state.password} onChange={e=>this.userPasswordnput(e)} className='passwordInput'
                name="password"
                type="password"
                placeholder="Enter your password"
             />

             <button  onClick={this.onLoginClicked} className='loginButton'>Login
             </button>

          </div>
          </div>
        )
    }
}

export default Login;