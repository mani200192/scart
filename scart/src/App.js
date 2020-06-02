import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import Login from './Pages/Login/Login'

function App() {
  return (
    <div className="App">
    <Route exact path='/' component={Login} />
    <Route exact path='/Home' component={HomePage} />
    </div>
  );
}

export default App;
