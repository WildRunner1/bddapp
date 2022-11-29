import React, {  } from 'react';

function Header(props){
    return (
      <header className=" navbar navbar-expand-lg navbar-dark bg-dark  justify-content-center fixed-top ">
        <div className="containerMenu">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            {/* <img src="bdd.png" className="bi me-2 " width="80"  role="img" aria-label="Bootstrap"/> */}
            
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/" className="nav-link px-2 text-white display-6">Start</a></li>
                <li><a href="/diagrams" className="nav-link px-2 text-white display-6">Diagramy</a></li>
                
                <li><a href="/theory" className="nav-link px-2 text-white display-6">Teoria</a></li>
                <li><a href="/about" className="nav-link px-2 text-white display-6">About</a></li>
              </ul>
              
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </header> 

      
       
    )
}

export default Header;

