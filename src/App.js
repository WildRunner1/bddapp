
import './App.css';
import React, { useState } from 'react';
import { Footer } from './components';
import {Home} from './components';
import {About} from './components';
import {Teory} from './components';
import {Diagrams} from './components';


function App() {
  
  const [page2, setPage2] = useState(<div className="container-fluid artic"><Home /></div>)

  const handleClick = (event) => {
    event.preventDefault()
    
      switch (event.currentTarget.id) {
        // eslint-disable-next-line
        case 'home': {
            setPage2(<div className="container-fluid artic"><Home /></div>)
        }
          break;
        // eslint-disable-next-line
        case 'about': {
            setPage2(<div className="container-fluid artic" ><About /></div>)
        }
          break;
        // eslint-disable-next-line
        case 'diagrams': {
            setPage2(<div className="container-fluid diagra"><Diagrams /></div>)
        }
          break;
        // eslint-disable-next-line
        case 'theory': {
            setPage2(<div className="container-fluid artic"><Teory /></div>)
        }
          break;
        default: {
          
            setPage2(<div className="container-fluid artic"><Home /></div>)
        }
      

    }

  }
 
  
  return (
    <div className="d-flex flex-column min-vh-100 App" >
      <header className=" navbar navbar-expand-lg navbar-dark bg-dark  justify-content-center fixed-top ">
        <div className="containerMenu">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            {/* <img src="bdd.png" className="bi me-2 " width="80"  role="img" aria-label="Bootstrap"/> */}
            
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><div id="home" onClick={handleClick} className="nav-link px-2 text-white display-6 aa">Start</div></li>
                <li><div id="diagrams" onClick={handleClick}  className="nav-link px-2 text-white display-6 aa">Diagramy</div></li>
                
                <li><div id="theory" onClick={handleClick} className="nav-link px-2 text-white display-6 aa">Teoria</div></li>
                <li><div id="about" onClick={handleClick} className="nav-link px-2 text-white display-6 aa">About</div></li>
              </ul>
              
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </header> 
        {/* <Header /> */}
        { page2 }
        
        
        <Footer />
        
    </div>
  );
}

export default App;
