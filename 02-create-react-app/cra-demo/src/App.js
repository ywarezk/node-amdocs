import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import FooterYair, { /*hello, sayHello*/ } from './components/Footer';

function App() {
  return (
    <div className="App">
		<Header />	
		
		<Login />
		
		<FooterYair />
    </div>
  );
}

export default App;
