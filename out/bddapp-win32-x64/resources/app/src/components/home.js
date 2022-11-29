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
              Wydział Informatyki, Elektrotechniki i Automatyki - Uniwesytet Zielonogórski.<br></br>
              Celem aplikacji jest budowa diagramów BDD i ROBDD na podstwie podanej przez użytkownika funkcji logicznej w postaci KPS lub KPI.
              <br></br>Wynikową działania jest również budowa tablicy prawdy w układzie kodu Greya.
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
                  <div className='auth2'>dr inż. Jacek Tkacz <a href="http://www.imei.uz.zgora.pl/">(IMEI)</a></div>  
                </div>
              </div>
              <div className="row gx-1 ">
                <div className=" col-md-6">
                  <div className='auth1'>Wydział: </div>
                </div>
                <div className=" col-md-6">
                  <div className='auth2'>Wydział Inforamtyki, Elektrotechniki i Automatyki <a href="https://www.wiea.uz.zgora.pl/">(WIEA)</a></div>  
                </div>
              </div>
              <div className="row gx-1 ">
                <div className=" col-md-6">
                  <div className='auth1'>Uczelnia: </div>
                </div>
                <div className=" col-md-6">
                  <div className='auth2'>Uniwersytet Zielonogórski<a href="https://www.uz.zgora.pl/">(UZ)</a></div>  
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
  
            
            
            
          <div></div>
        </div>
      )
   
}

export default Home;

