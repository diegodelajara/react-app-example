import React from 'react';
import logo from './logo.svg';
import './App.css';

import  Login from './components/Login'

function App() {
  const labels = {
    label1: 'Usuario',
    label2: 'Contraseña'
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login labels={labels}/>
      </header>
    </div>
  );
}

export default App;
