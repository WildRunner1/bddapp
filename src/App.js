
import './App.css';
import React, { useState } from 'react';
import { Footer } from './components';
import {Home} from './components';
import {Contact} from './components';
import {Diagrams} from './components';
import Dropdown from 'react-bootstrap/Dropdown';
import "../node_modules/flag-icons/css/flag-icons.min.css";

import  pl from './translations/polski.json'
import  en from './translations/english.json'


function App() {
  
  const [page2, setPage2] = useState(<div className="container-fluid artic"><Diagrams /></div>)
  const [langSe, setLangSe] = useState(<div><span className="fi fi-gb"></span>&nbsp;EN</div>)
  const[language, setLanguage] = useState('en')
  let lang
  if(language === 'pl'){
    lang = pl
  }else{
    lang = en
  }
  const handleClick = (event) => {
    event.preventDefault()
    
      switch (event.currentTarget.id) {
        // eslint-disable-next-line
        case 'home': {
            setPage2(<div className="container-fluid artic"><Home language={language}/></div>)
        }
          break;        
        // eslint-disable-next-line
        case 'diagrams': {
            setPage2(<div id="diagra" className="container-fluid artic"><Diagrams language={language}/></div>)
        }
          break;
        // eslint-disable-next-line
        case 'contact': {
            setPage2(<div className="container-fluid artic"><Contact language={language}/></div>)
        }
          break;
        default: {
          
            setPage2(<div className="container-fluid artic"><Home language={language}/></div>)
        }
      

    }

  }
  const handleLang = (event) => {
    event.preventDefault()
    
      switch (event.currentTarget.id) {
        // eslint-disable-next-line
        case 'pl': {
            setLangSe(<div><span className="fi fi-pl"></span>&nbsp;PL</div>);
            setLanguage('pl');
            
        }
          break;
        // eslint-disable-next-line
        case 'en': {
          setLangSe(<div><span className="fi fi-gb"></span>&nbsp;EN</div>);
          setLanguage('en');
          
        }
        break;
        default: {
          
          setPage2(<div><span className="fi fi-gb"></span>&nbsp;EN</div>)
      }
      

    }
  }
  
  return (
    <div id="body1" className="d-flex flex-column min-vh-100 App" >
      
      <header id="min2" className=" navbar navbar-expand-lg navbar-dark bg-dark  justify-content-center fixed-top ">
      <img src="android-chrome-192x192.png" className="bi me-2" width="80"   aria-label="Bootstrap" alt="B" id="B" />
        <div className="containerMenu">
        
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          
            
            <nav className="collapse navbar-collapse shift " id="navbarSupportedContent">
              
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                
                <li></li>
                <li><div id="diagrams" onClick={handleClick}  className="nav-link px-2 text-white display-6 aa">{lang.translation.menu.diagrams}</div></li>
                <li className='nav-link px-2 text-white display-6 '>|</li>
                {/* <li><div id="theory" onClick={handleClick} className="nav-link px-2 text-white display-6 aa">{lang.translation.menu.theory}</div></li>
                <li className='nav-link px-2 text-white display-6 '>|</li> */}
                <li><div id="home" onClick={handleClick} className="nav-link px-2 text-white display-6 aa">{lang.translation.menu.about}</div></li>
                <li className='nav-link px-2 text-white display-6 '>|</li>
                <li><div id="contact" onClick={handleClick} className="nav-link px-2 text-white display-6 aa">{lang.translation.menu.contact}</div></li>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                      {langSe}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item ><div onClick={handleLang} id='pl'><span className="fi fi-pl"></span>&nbsp;PL</div></Dropdown.Item>
                      <Dropdown.Item ><div onClick={handleLang} id='en'><span className="fi fi-gb"></span>&nbsp;EN</div></Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                
              </ul>
             
              
            
            </nav>
            
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </header> 
      
        {/* <Header /> */}
        { page2 }
        
      <div id="min3">
        <Footer />
      </div>   
    </div>
  );
}

export default App;
