import React from 'react';
import './login.css';
import {userLogin} from '../../services/AppService';
import Loader from '../../components/Loader/Loader';
import {Redirect,Link} from 'react-router-dom';


class Login extends React.Component{

    constructor(props){

        super(props);
        this.state =
        {
            userName:"",
            password:"",
            isButtonDisabled:false,
            isLoading:false,
            isSuccess:false,
            responseData:[{}]
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
                const object = response.data;
                console.log(response.data,"data")
                if(object){
                this.setState({responseData:response.data[0]})
                console.log(this.state.responseData,"Mani");
                
                if(this.CheckResponseData())
                {
                    this.props.history.push('/Home');
                    this.setState({isLoading:false,isSuccess:true});
                }
                this.setState({isLoading:false});
                }
                else
                {
                    this.setState({isLoading:false})
                    alert("Please valid credential!");
                }
            })
            .catch(error => {
                console.log(error);
                this.setState({isLoading:false})
            })
    }

    CheckResponseData(responseData)
    {
        const username = this.state.responseData.username;
        const password =this.state.responseData.password;
        if(username === this.state.userName && this.state.password === password){

            return true;
        }
        else{
            alert("Please enter valid credential!")
            return false;
        }
    
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