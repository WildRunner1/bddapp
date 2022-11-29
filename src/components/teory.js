import React from 'react';

function Teory(props){
    return (
        <div>
            <article>
                <h1>Teoria</h1>
            </article>
            <nav>
            <a className='teoryNav' href="#bdd">BDD</a>
            <a className='teoryNav' href="#robdd">ROBDD</a>
            <a className='teoryNav' href="#KodGraya">Kod Graya</a>
            <a className='teoryNav' href="#shannon">Rozkład Shanonna</a>
            
          </nav>  
          
         
          <div id="bdd">
            <div className="articleHeader">BDD</div>
            <div className="articleBody"></div>
          </div>
          <div id="robdd">
            <div className="articleHeader">ROBDD</div>
            <div className="articleBody"></div>
          </div>
          <div id="KodGraya">
            <div className="articleHeader">Kod Graya</div>
            <div className="articleBody"></div>
          </div>
          <div id="shannon">
            <div className="articleHeader">Rozkład Shanonna</div>
            <div className="articleBody"></div>
          </div>
        </div>
    )
}

export default Teory;

