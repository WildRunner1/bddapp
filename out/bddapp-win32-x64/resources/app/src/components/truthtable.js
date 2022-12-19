
import React, {useState ,useEffect} from 'react';
import { faExpand, faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function header(props){
  const varMap = new Map(props.newVarMap)
  const headerTable = []
  varMap.forEach((value, key) => {
    headerTable.push(value)
  })
  headerTable.push("f(x)")
  const inside = []
  const outside = []
  for(let i=0; i<headerTable.length; i++){
    let val = headerTable[i]
    inside.push(<th scope="col" key={i}>{val}</th>)
  }
  outside.push(<tr key='headers'>{inside}</tr>)
  return outside
}
function bodyValues(props){
  const truthM = new Map(props.truthMap)
  const valuesTable = []
  
  truthM.forEach((value, key)=>{
    const charArr = key.split('')
    charArr.push(value)
    valuesTable.push(charArr)
  })
  
  const outside = []
  
  for(let i=0; i<valuesTable.length; i++){
    const inside = []
    for(let j=0; j<valuesTable[0].length; j++){
      let id1 = String(i)+String(j)
      let val1 = valuesTable[i][j]
      if(j===valuesTable[0].length-1){
        inside.push(<td className='fx' id={id1} key={id1}>{val1}</td>) 
      } else {
      inside.push(<td id={id1} key={id1}>{val1}</td>)
      }    
    }
    outside.push(<tr id={i} key={i}>{inside}</tr>)    
  }
  return outside   
}
  


function TruthTable(props){
  
  const newVarMap = new Map(props.newVarMap)

  const headerTable = header(props)
  const valueTable = bodyValues(props)
  useEffect(() => {
    setTimeout( () => {
    props.setLoading(10)},2000)
  })
  const varNum = newVarMap.size
  const [fullIcon, setFullIcon] = useState(<FontAwesomeIcon icon={faExpand}/>)
  const [fullTitle, setFullTitle] = useState("Pełny ekran")
  const [sizeState, setSizeState] = useState("small")
    const fullScreen = (event) =>{
      event.preventDefault()
      
      if(sizeState === "small"){
        document.getElementById("truthTable").className = "full"
        document.getElementById("parent").className = "parent3"
        document.getElementById("min1").className = "min"
        document.getElementById("min2").className = "min"
        document.getElementById("min3").className = "min"
        document.getElementById("diagra").className = ""
        document.getElementById("body1").className = ""
        setFullTitle("Zamknij")
        
        setFullIcon(<FontAwesomeIcon icon={faRectangleXmark}/>)
        setSizeState("big")
      } else {
        
        document.getElementById("truthTable").className = "bddContainer"
        document.getElementById("parent").className = "parent4"
        document.getElementById("min1").className = "container diagra"
        document.getElementById("min2").className = "navbar navbar-expand-lg navbar-dark bg-dark  justify-content-center fixed-top"
        document.getElementById("min3").className = ""
        document.getElementById("diagra").className = "container-fluid diagra"
        document.getElementById("body1").className = "d-flex flex-column min-vh-100 App"
        setFullTitle("Pełny ekran")
        
        setFullIcon(<FontAwesomeIcon icon={faExpand}/>)
        setSizeState("small")
        
      }
      

    } 
  //console.log(headerTable)
  //console.log(valueTable)
  
  let tableWidhtClass = ""
  if(varNum > 10){
    if(sizeState === "small"){
      tableWidhtClass = "d-flex justify-content-center bigTable"
    } else {
      tableWidhtClass = "d-flex justify-content-center bigTable1"
    }
    
  } else if(varNum > 6){
    if(sizeState === "small"){
      tableWidhtClass = "d-flex justify-content-center middleTable"
    } else {
      tableWidhtClass = "d-flex justify-content-center middleTable1"
    }
  }
  else{ 
    if(sizeState === "small"){
      tableWidhtClass = "d-flex justify-content-center smallTable"
    } else {
      tableWidhtClass = "d-flex justify-content-center smallTable1"
    } }

      return (
       
          <div id="parent" className='parent4'>
            <div className="shorterFunction">
              <div className="row">
                <div className=" col-md-3">
                  
                </div>
                <div className=" col-md-8">
                
                  
                </div>
                <div className="col-md-1">
                  <button className="butSize" title={fullTitle} id="screen" onClick={fullScreen}>{fullIcon}</button>
                </div>
              </div>
            </div>
            <div id="table1" className={tableWidhtClass}>
              <table className='table table-light table-striped table-hover '>
                <thead>{headerTable}</thead>
                <tbody>{valueTable}</tbody>
              </table>
            </div>
          </div>
        
      );
    
}

export default TruthTable;

