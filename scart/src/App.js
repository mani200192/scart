import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'

function App() {
  return (
    <div className="App">
    <Route exact path='/' component={HomePage} />
    </div>
  );
}

export default App;
