
import './App.css';
import React, { useState, useRef } from 'react';
import { Header } from './components';
import { Footer } from './components';
import {Home} from './components';
import {About} from './components';
import {Teory} from './components';
import { Diagrams } from './components';


function App() {
  
  let component
  
  switch (window.location.pathname) {
    case "/":{
      component = <div className="container-fluid artic"><Home /></div>
    }
      break;
    case "/diagrams":{
      component = <div className="container-fluid "><Diagrams /></div>
    }
      break;
    case "/about":
      component = <div className="container-fluid artic" ><About /></div>
      break;

    case "/theory":
      component = <div className="container-fluid artic"><Teory /></div>
      break;
  }
 
  
  return (
    <div className="d-flex flex-column min-vh-100 App" >
      
        <Header />
        
        { component }
        
        <Footer />
        
    </div>
  );
}

export default App;
