import React from 'react';


import  pl from '../translations/polski.json'
import  en from '../translations/english.json'

function Teory(props){
  const language = props.language
  let lang
  if(language === 'pl'){
    lang = pl
  }else{
    lang = en
  }
    return (
        <div>
            <article>
                <h1>{lang.translation.teory.teory}</h1>
            </article>
            <nav>
            <a className='teoryNav' href="#logika">{lang.translation.teory.teoryNav1}</a>
            <a className='teoryNav' href="#bool">{lang.translation.teory.teoryNav2}</a>
            <a className='teoryNav' href="#kpi">{lang.translation.teory.teoryNav3}</a>
            <a className='teoryNav' href="#bdd">{lang.translation.teory.teoryNav4}</a>
            <a className='teoryNav' href="#robdd">{lang.translation.teory.teoryNav5}</a>
            <a className='teoryNav' href="#shannon">{lang.translation.teory.teoryNav6}</a></nav> 

           
            <div id="logika">
              <div className='headsd'></div>
              <div className="articleHeader">{lang.translation.teory.article1Title}</div>
              <div className="articleBody">
              <br></br>
              {lang.translation.teory.article1_1}
              <br></br>
              <br></br>
              {lang.translation.teory.article1_2}
              <br></br>
              <br></br>
              {lang.translation.teory.article1_3}
              <br></br>
              <br></br>
              {lang.translation.teory.article1_4}
              <br></br>
              {lang.translation.teory.article1_5}
              <br></br>
              {lang.translation.teory.article1_6}
              <br></br>
              {lang.translation.teory.article1_7}
              <br></br>
              {lang.translation.teory.article1_8}
 
              </div>
            </div>   

            <div id="bool">
              <div className='headsd'></div>
              <div className="articleHeader">{lang.translation.teory.article2Title}</div>
              <div className="articleBody">
              <br></br>
              {lang.translation.teory.article2_1}
              <br></br>
              <br></br>
              {lang.translation.teory.article2_2}
              <br></br>
              <br></br>
              {lang.translation.teory.article2_3}
              <br></br>
              <br></br>              
              {lang.translation.teory.article2_4}
              <br></br>
              <br></br>              
              {lang.translation.teory.article2_5}
              <br></br>
              <br></br>
              {lang.translation.teory.article2_6}
              <br></br>
              {lang.translation.teory.article2_7}
              <br></br>
              {lang.translation.teory.article2_8}
              <br></br>
              {lang.translation.teory.article2_9}

           
              </div>
            {/* </div>
            <div id="kpi">
              <div className='headsd'></div>
              <div className="articleHeader">KPS i KPI</div>
              <div className="articleBody">
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Kanoniczna postać sumy (ang. canonical sum-of-products form) i kanoniczna postać iloczynu (ang. canonical product-of-sums form) to dwie standardowe formy reprezentacji funkcji logicznych.
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Kanoniczna postać sumy jest reprezentacją funkcji logicznej jako sumy iloczynów (OR-ów i AND-ów) poszczególnych mintermów (podstawowych termów logicznych). 
              <br></br>
              Przykład:
              <br></br>
              F(A,B,C) = A'B'C + A'BC' + AB'C'
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Kanoniczna postać iloczynu jest reprezentacją funkcji logicznej jako iloczynów sum (AND-ów i OR-ów) poszczególnych maxtermów (komplementary terms).              <br></br>
              Przykład:
              <br></br>
              F(A,B,C) = (A+B+C')(A+B'+C)(A'+B+C)
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Obie formy są równoważne, oznacza to że jeśli znamy jedną reprezentację to możemy przekształcić ją na drugą.
              Przedstawienie funkcji logicznej w kanonicznej postaci sumy lub kanonicznej postaci iloczynu jest przydatne w celu uproszczenia i minimalizacji układów logicznych oraz w celu ich testowania.
              </div>
            </div>
            <div id="bdd">
              <div className='headsd'></div>
              <div className="articleHeader">BDD i OBDD</div>
              <div className="articleBody">
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Diagram BDD (ang. Binary Decision Diagram) jest graficzną reprezentacją funkcji logicznej, która pozwala na łatwą analizę i minimalizację funkcji. 
              Struktura diagramu BDD składa się z węzłów i krawędzi. Każdy węzeł reprezentuje stan logiczny dla jednej zmiennej z wyjątkiem węzła terminującego, 
              który oznacza wartość końcową dla danego ciągu wartości zmiennych. Krawędzie reprezentują przejście pomiędzy węzłami. 
              Krawędzie oznaczone "0" oznaczają przejście po wartości "false" dla danej zmiennej, 
              natomiast krawędzie oznaczone "1" oznaczają przejście po wartości "true" dla danej zmiennej. 
              Struktura diagramu BDD składa się z węzłów i krawędzi. Każdy węzeł reprezentuje stan logiczny dla jednej zmiennej z wyjątkiem węzła terminującego,
               który oznacza wartość końcową dla danego ciągu wartości zmiennych.
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Uporządkowaną wersją diagramu BDD jest diagram OBDD. 
              W przypadku opisywanego programu, będzie to główny model jakim będziemy się posługiwać. 
              OBDD jest podobny do BDD, ale posiada dodatkową funkcjonalność w postaci uporządkowania zmiennych według ich indeksów.
              OBDD jest bardziej skuteczny w reprezentacji funkcji logicznych o dużej liczbie zmiennych, 
              ponieważ pozwala na eliminację niepotrzebnych kombinacji zmiennych i redukuje rozmiar grafu, 
              w wyniku tych operacji otrzymamy opisany poniżej diagram ROBDD. W skrócie BDD reprezentuje funkcje logiczne, 
              a OBDD jest bardziej wydajną reprezentacją tych funkcji.
 
              </div>
            </div>
            <div id="robdd">
              <div className='headsd'></div>
              <div className="articleHeader">ROBDD</div>
              <div className="articleBody">
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Diagram ROBDD to specjalny rodzaj OBDD, w którym są uwzględnione korelacje między zmiennymi. 
              W ROBDD, jeśli dwie gałęzie diagramu reprezentują tę samą funkcję logiczną, to tylko jeden z nich jest zachowywany,
              reszta jest odrzucana. Dzięki temu pozwala na dalsze skompresowanie reprezentacji funkcji logicznej. 
              To pozwala na zredukowanie ilości pamięci potrzebnej do przechowywania diagramu, a także przyspiesza operacje na nim.
              </div>
            </div>
            
            
            <div id="shannon">
              <div className='headsd'></div>
              <div className="articleHeader">Rozwinięcie Shanonna</div>
              <div className="articleBody">
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Rozwinięcie Shannona, inaczej nazywany teorią dekompozycji funkcji logicznych, to metoda polegająca na podzieleniu funkcji logicznej na mniejsze, prostsze podfunkcje, które mogą być łatwiej zrozumiałe i zoptymalizowane. Metoda ta zoształa opracowana przez Claude'a Shannon'a, amerykańskiego matematyka i inżyniera, który jest uważany za ojca teorii informacji.
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Rozwinięcie Shannona polega na rozdzieleniu funkcji logicznej na dwie części: podstawowy term logiczny (minterm) i komplementarny term (maxterm). Następnie, pozwala na skonstruowanie nowej funkcji logicznej jako sumy iloczynów minermów (KPS) lub iloczynów sum maxtermów (KPI).
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Rozwinięcie Shannona pozwala na uproszczenie i minimalizację funkcji logicznych poprzez znalezienie i usunięcie zbędnych termów. Jest to przydatne w projektowaniu układów logicznych, szczególnie tych składających się z dużej liczby bramek logicznych, ponieważ pozwala na zwiększenie wydajności i zmniejszenie złożoności układu. 
              <br></br>
              <br></br>
              Rozwinięcie Shannona opisujemy wzorem (7): 
              <br></br>
              <div className="containerMenu"><img alt="*" src="shannon.png" width="1000px"/></div>
              
              </div> */}
            
          </div>
        </div>
    )
}

export default Teory;

