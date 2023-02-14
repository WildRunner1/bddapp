import React, {  } from 'react';



function Home(){
   
      return (
        <div>
          
          <h3>GRAFICZNA PREZENTACJA FUNKCJI LOGICZNYCH W FORMIE DIAGRAMÓW BDD</h3>
          <div className='articleHeader'>Cel pracy</div>
            <div className='articleBody'>
            Projekt i implementacja oprogramowania przeznaczonego do graficznej prezentacji funkcji logicznych w formie diagramów BDD, OBDD i ROBDD.
            </div>
  
          <div className='articleHeader'>O aplikacji</div>
            <div className='articleBody'>
              Aplikacja powstała w ramach pracy dyplomowej inżynierskiej na kierunku Informatyka na
              Wydział Informatyki, Elektrotechniki i Automatyki - Uniwesytet Zielonogórski.
              Celem aplikacji jest budowa diagramów OBDD i ROBDD na podstwie podanej przez użytkownika funkcji logicznej w postaci KPS lub KPI.
              Wynikową działania jest również budowa tablicy prawdy w układzie kodu binarnego.
            </div>
            <br></br>
            <div className="container">
              <div className="row gx-1 ">
                <div className=" col-md-6">
                  <div className='auth1'>Autor: </div>
                </div>
                <div className=" col-md-6">
                  <div className='auth2'>Jakub Błaszyk</div>  
                </div>
              </div>
              <div className="row gx-1 ">
                <div className=" col-md-6">
                  <div className='auth1'>Kierunek studiów: </div>
                </div>
                <div className=" col-md-6">
                  <div className='auth2'>Informatyka</div>  
                </div>
              </div>
              <div className="row gx-1 ">
                <div className=" col-md-6">
                  <div className='auth1'>Promotor: </div>
                </div>
                <div className=" col-md-6">
                  <div className='auth2'>dr inż. Jacek Tkacz <a target="_blank" rel="noopener noreferrer" href="http://www.imei.uz.zgora.pl/">(IMEI)</a></div>  
                </div>
              </div>
              <div className="row gx-1 ">
                <div className=" col-md-6">
                  <div className='auth1'>Wydział: </div>
                </div>
                <div className=" col-md-6">
                  <div className='auth2'>Wydział Inforamtyki, Elektrotechniki i Automatyki <a target="_blank" rel="noopener noreferrer" href="https://www.wiea.uz.zgora.pl/">(WIEA)</a></div>  
                </div>
              </div>
              <div className="row gx-1 ">
                <div className=" col-md-6">
                  <div className='auth1'>Uczelnia: </div>
                </div>
                <div className=" col-md-6">
                  <div className='auth2'>Uniwersytet Zielonogórski<a target="_blank" rel="noopener noreferrer" href="https://www.uz.zgora.pl/">(UZ)</a></div>  
                </div>
              </div>
              <div className="row gx-1 ">
                <div className=" col-md-6">
                  <div className='auth1'>Obrona: </div>
                </div>
                <div className=" col-md-6">
                  <div className='auth2'>Semestr zimowy 2022-2023</div>  
                </div>
              </div>
              
            </div>
            <article>
            <br></br>
            <br></br>
            <div className='articleHeader'>Technologie / Biblioteki</div>
            <div className='articleBody'>
            <div class="row">
              <div class="col">
                <div className="techStackList"><img className="spinM" alt="*" src="icons/electron-icon.svg" width="50px"/><label className="labelTech"><h4>Electron.js</h4></label><br></br></div>
              </div>
              <div class="col">
                <div className="techStackList"><img alt="*" src="icons/html-file-format-icon.svg" width="50px"/><label className="labelTech"><h4>HTML</h4></label><br></br></div>
              </div>
              <div class="col">
                <div className="techStackList"><img alt="*" src="icons/css-file-format-icon.svg" width="50px"/><label className="labelTech"><h4>CSS</h4></label><br></br></div>
              </div>
              <div class="col">
                <div className="techStackList"><img alt="*" src="icons/javascript-programming-language-icon.svg" width="50px"/><label className="labelTech"><h4>JavaScript</h4></label><br></br></div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div className="techStackList"><img alt="*" src="icons/node-js-icon.svg" width="50px"/><label className="labelTech"><h4>NodeJS</h4></label><br></br></div>
              </div>
              <div class="col">
                <div className="techStackList"><img className="spinM" alt="*" src="icons/react-js-icon.svg" width="50px"/><label className="labelTech"><h4>React JS</h4></label><br></br></div>
              </div>
              <div class="col">
                <div className="techStackList"><img alt="*" src="icons/visjs_logo.png" width="50px"/><label className="labelTech"><h4>VisJs</h4></label><br></br></div>
              </div>
              <div class="col">
                <div className="techStackList"><img alt="*" src="icons/bootstrap-5-logo-icon.svg" width="50px"/><label className="labelTech"><h4>Bootstrap</h4></label><br></br></div>
              </div>
            </div>
            </div>
            <div className='articleHeader'>Narzędzia</div>
            <div className='articleBody'>
              <div class="row">
                <div class="col">
                  <div className="techStackList"><img alt="*" src="icons/vscode.svg" width="50px"/><label className="labelTech"><h4>VisualStudioCode</h4></label><br></br></div>
                </div>
                <div class="col">
                  <div className="techStackList"><img  alt="*" src="icons/github-logo-6532.svg" width="50px"/><label className="labelTech"><h4>GitHub</h4></label><br></br></div>
                </div>
                
                
              </div>
            </div>
            <div className='articleHeader'>Linki</div>
            <div className='articleBody'>
              <div className="techStackList">
                <label className="labelTech">
                  <h4>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/WildRunner1/bddapp">https://github.com/WildRunner1/bddapp</a>
                  </h4>
                </label>
              </div>
            </div>
          </article>
  
            
            
            
          <div></div>
        </div>
      )
   
}

export default Home;

