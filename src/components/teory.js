import React from 'react';

function Teory(props){
    return (
        <div>
            <article>
                <h1>Teoria</h1>
            </article>
            <nav>
            <a className='teoryNav' href="#logika">Logika</a>
            <a className='teoryNav' href="#bool">Algebra Boole'a</a>
            <a className='teoryNav' href="#kpi">KPS i KPI</a>
            <a className='teoryNav' href="#bdd">BDD i OBDD</a>
            <a className='teoryNav' href="#robdd">ROBDD</a>
            <a className='teoryNav' href="#shannon">Rozkład Shanonna</a></nav> 

           
            <div id="logika">
              <div className='headsd'></div>
              <div className="articleHeader">Logika i logika w informatyce</div>
              <div className="articleBody">
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Logika jest dziedziną filozofii, matematyki i nauk formalnych, która zajmuje się badaniem i
              formalizowaniem myślenia oraz jego struktur. Logika jest narzędziem do analizy i rozumowania,
              pozwala na formalne opisanie i badanie różnych systemów poznawczych, takich jak języki naturalne,
              myślenie ludzkie, a także systemów formalnych, takich jak języki programowania czy logika matematyczna.
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Głównym celem logiki jest zrozumienie i opisanie reguł i zasad rządzących myśleniem,
              rozumowaniem i argumentowaniem. Logika pozwala na weryfikację i ocenę poprawności argumentów i twierdzeń.
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Logika w informatyce to dziedzina, która zajmuje się badaniem i stosowaniem logiki matematycznej w informatyce. 
              Jest używana do projektowania i analizy algorytmów, a także do opracowywania i weryfikacji systemów 
              formalnych, takich jak języki programowania, systemy baz danych czy systemy wykonawcze. Logika jest również ważna w 
              dziedzinie sztucznej inteligencji, gdzie jest stosowana do badania problemów poznawczych i planowania oraz w teorii 
              komputacji jako podstawy teorii automatów.
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Logika w informatyce związana jest również z takimi dziedzinami jak teoria formalnych systemów, teoria algorytmów, teoria komunikacji i kryptografia.
              <br></br>
              Logika znajduje zastosowanie między innymi w:
              <br></br>
              &nbsp;&nbsp;●	Projektowaniu algorytmów
              <br></br>
              &nbsp;&nbsp;●	Tworzeniu systemów formalnych
              <br></br>
              &nbsp;&nbsp;●	Analizie i optymalizacja systemów
 
              </div>
            </div>   

            <div id="bool">
              <div className='headsd'></div>
              <div className="articleHeader">Algebra Boole'a</div>
              <div className="articleBody">
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Algebra Boole'a to dziedzina matematyki zajmująca się operacjami na zmiennych logicznych,
              czyli zmiennych przyjmujących wartości prawda (ang. true) lub fałsz (ang. false). Nazwa pochodzi
              od imienia matematyka George'a Boole'a, który jako pierwszy opracował system algebraiczny dla operacji 
              logicznych. W Algebrze Boole'a używa się operatorów AND, OR i NOT, które pozwalają na modelowanie różnych sytuacji logicznych.
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Algebra Boole'a jest używana w różnych dziedzinach, takich jak elektronika, komputeryzacja, 
              automatyka i teoria obwodów. W elektronice i automatyce jest ona stosowana do opracowywania układów logicznych,
              które służą do przetwarzania sygnałów elektrycznych na sygnały logiczne. W komputeryzacji 
              jest ona podstawą działania układów scalonych, które służą do przetwarzania informacji.
              
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Algebra Boole'a jest także podstawą logiki matematycznej, gdzie pozwala na formułowanie i 
              rozwiązywanie twierdzeń logicznych. Służy do też do reprezentacji teoretycznej komputera i 
              pozwala na analizę algorytmów za pomocą pojęcia formalnego.
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Funkcja logiczna w algebrze Boole'a jest to matematyczna funkcja, 
              która przypisuje każdemu możliwemu ciągowi wartości prawdy lub fałszu dla danych zmiennych logicznych.
              W algebrze Boole'a, zmienne logiczne mają tylko dwie możliwe wartości: prawda (1) i fałsz (0).
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Funkcja logiczna jest reprezentowana przez wielomiany, 
              w których zmienne logiczne są reprezentowane przez zmienne binarne, 
              a operacje logiczne są reprezentowane przez operatory algebraiczne.
              <br></br>
              <br></br>
              W algebrze Boole'a istnieją trzy podstawowe operacje logiczne:
              <br></br>
              ●	koniunkcja (˄,AND, &, &&, *) 
              <br></br>
              ●	alternatywa (˅,OR, |, ||, +)
              <br></br>
              ●	negacja (¬,NOT, !, ‘, /)

           
              </div>
            </div>
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
              
              </div>
            
          </div>
        </div>
    )
}

export default Teory;

