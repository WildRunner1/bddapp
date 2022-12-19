import React, { useEffect, useState } from 'react';
import Graph from "react-graph-vis";
import { faExpand, faRectangleXmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function getByValue(map, searchValue) {
  for (let [key, value] of map.entries()) {
    if (value === searchValue)
      return key;
  }
}

function makeItColor(myGraph, functionType){
  let type = functionType
  myGraph.edges.forEach(element => {
    let to = element.to
    let type1 = element.type
    const index = myGraph.nodes.findIndex(object => {
      return object.id === to;
     });
    let terminalNodeLabel = myGraph.nodes[index].label
    
    if(type === "KPS"){
      if(type1 === "terminal" && terminalNodeLabel === "1" ){
        element.color = "#cc0000"
      } 
      if(type1 === "terminal" && terminalNodeLabel === "0" ){
        element.dashes = true
      }
    } else {
      if(type1 === "terminal" && terminalNodeLabel === "0" ){
        element.color = "#cc0000"
      } 
      if(type1 === "terminal" && terminalNodeLabel === "1" ){
        element.dashes = true
      }
    }
  })
  myGraph.nodes.forEach(element => {
    if(type === "KPS"){
      if(element.type === "terminal" && element.label === "1" ){
        element.color = "#86df76"
      } 
      if(element.type === "terminal" && element.label === "0" ){
      }
    } else {
      if(element.type === "terminal" && element.label === "0" ){
        element.color = "#86df76"
      } 
      if(element.type === "terminal" && element.label === "1" ){
      }
    }
  })
}
function makeExpressions(myGraph, functionType, varM){

  for(let i=0; i<varM.size ;i++){
    myGraph.nodes.forEach(element => {
      let parentExp = "varM.get(1)"
      let parentLabel = ""
      if(element.parent !== undefined){
        const index6 = myGraph.nodes.findIndex(object => {
          return object.id === element.parent;
        });
        
        if(index6 >= 0){
          parentExp = myGraph.nodes[index6].exp
          parentLabel = myGraph.nodes[index6].label
        } else {
        }
        
      } else {
        parentLabel = varM.get(1)
      }

      if(functionType === "KPS"){
          if(element.id.slice(element.id.length-1,element.id.length) === "0"){
            element.exp = parentExp +"/"+ parentLabel
            element.title = element.exp
          } else if(element.id.slice(element.id.length-1,element.id.length) === "1") { //element.side==="right"
            element.exp = parentExp + parentLabel
            element.title = element.exp
          }
      } else { //function.type==="KPI"
        if(String(element.id.slice(element.id.length-1,element.id.length)) === "0"){
          if(parentExp.length === 0){
            element.exp = parentExp + parentLabel
          }else {
            element.exp = parentExp +"+"+ parentLabel
          }
          element.title = element.exp
        } else if(element.id.slice(element.id.length-1,element.id.length) === "1") { //element.side==="right"
          if(parentExp.length === 0){
            element.exp = parentExp +"/"+ parentLabel
          }else {
            element.exp = parentExp +"+/"+ parentLabel
          }
          element.title = element.exp
        }
      } 
    })
  }
 
}
function Bdd(props){
  
  const myGraph = { nodes:[], edges:[] }
  const thruMap = props.truthMap
  const newVarMap = props.newVarMap
  const functionType = props.functionType
  
  
  useEffect(() => {
    setTimeout( () => {
    props.setLoading(10)},2000)
  })
  

  // variable nodes - nonterminal
  for(let i=Math.pow(2,(newVarMap.size-1)); i>=0; i--){
    let id = ""
    let element = newVarMap.get(i)
    let key = getByValue(newVarMap, element)
    for(let j=Math.pow(2,(key-1)); j>=1; j--){
      let value = "" 
      for(let k=0; k<key-1; k++){
        let val = (j & Math.pow(2,k)) ? "1" : "0"
        value = String(value+val)
      }
      id = String(element+value)
        myGraph.nodes.push({type: "nonterminal",exp:"",  id: String(id), label: element, shape: "eclipse",parent: String(newVarMap.get(key-1))+String(value).slice(0,String(value).length-1),  font:{size:30}, borderWidth:2})
    }
  }
  // value nodes - terminal
  for (const [key, value] of thruMap.entries()) {
    myGraph.nodes.push({type: "terminal", exp:"", id: String(key), label: String(value),parent: String(newVarMap.get(newVarMap.size))+String(key).slice(0,String(key).length-1), shape: "box", font:{size:30}})
  }

  myGraph.nodes.sort(function(a, b){
    return a.parent - b.parent;
  })
  // edges
  myGraph.nodes.forEach(element => {
    let id = element.id
    let parent = element.parent
    let type = element.type
    let value = element.label
    if(parent !== '0'){
     
      myGraph.edges.push(
        { from: parent,
          hoverWidth: 3,//1.5,
          physics: false,
          shadow:{
            enabled: true,
            color: 'rgba(0,0,0,0.5)',
            size:10
            // x:5,
            // y:5 
          },
          to: id,
          type: type,
          value1: value,
          label:String(id).slice(String(id).length-1, String(id).length),
          font:{size:30}})
        }
  })
  makeItColor(myGraph, functionType)
  
  myGraph.edges.sort(function(a, b){
    return a.to.slice(1) - b.to.slice(1)
  })
  const [size, setSize] = useState("680px")
   
   const events = {
        select: function(event) {
          //var { nodes, edges } = event;
        },
        
      };
  const options = {
    interaction:{hover:true},
    physics:{
      enabled: true
    },
    autoResize: true,
    layout: {
        randomSeed: undefined,
        improvedLayout:true,
        clusterThreshold: 150,
        hierarchical: {
          treeSpacing: 300,
          nodeSpacing: 150,
          edgeMinimization: true,
          parentCentralization: true,
          shakeTowards: "leaves",
          direction: "UD",
          sortMethod: "directed",
        }
      },
    edges: {
      color: "#000000"
    },
    nodes: {
      //color: "#FFFFFF",
      borderWidth: 1,
      color: {
        border: '#a6a6a6',
        background: '#FFFFFF',
        highlight: {
          border: '#cc0000',
          background: '#DF7676'
        },
        hover: {
          border: '#cc0000',
          background: '#DF7676'
        }
      },
  
  },
  height: size
  };
  let important
  if(functionType === "KPS"){
    important = "1"
  } else { important = "0"}
  let countTerminalNodes = 0
  let countNonTerminalNodes = 0
  let countNodes = 0
  let countNodesTerminalImportant = 0
  let countEdges = 0
  myGraph.nodes.forEach( e =>{
    if(e.type === "terminal"){countTerminalNodes+=1}
    if(e.type === "nonterminal"){countNonTerminalNodes+=1}
    if(e.type === "terminal" && e.label === important){countNodesTerminalImportant+=1}
    countNodes=countNodes+1
  })
  myGraph.edges.forEach( e =>{
    countEdges=countEdges+1
  })
  
  const [fullIcon, setFullIcon] = useState(<FontAwesomeIcon icon={faExpand}/>)
  const [fullTitle, setFullTitle] = useState("Pełny ekran")
  const [sizeState, setSizeState] = useState("small")
    const fullScreen = (event) =>{
      event.preventDefault()
      
      if(sizeState === "small"){
        document.getElementById("bdd").className = "full"
        document.getElementById("parent").className = "parent2"
        document.getElementById("min1").className = "min"
        document.getElementById("min2").className = "min"
        document.getElementById("min3").className = "min"
        document.getElementById("diagra").className = ""
        document.getElementById("body1").className = ""
        setFullTitle("Zamknij")
        setSize("1200px")
        setFullIcon(<FontAwesomeIcon icon={faRectangleXmark}/>)
        setSizeState("big")
      } else {
        
        document.getElementById("bdd").className = "bddContainer"
        document.getElementById("parent").className = "parent"
        document.getElementById("min1").className = "container diagra"
        document.getElementById("min2").className = "navbar navbar-expand-lg navbar-dark bg-dark  justify-content-center fixed-top"
        document.getElementById("min3").className = ""
        document.getElementById("diagra").className = "container-fluid diagra"
        document.getElementById("body1").className = "d-flex flex-column min-vh-100 App"
        setFullTitle("Pełny ekran")
        setSize("680px")
        setFullIcon(<FontAwesomeIcon icon={faExpand}/>)
        setSizeState("small")
        
      }
      

    }
  countEdges = countEdges -1
  makeExpressions(myGraph, functionType, newVarMap)
  // console.log(myGraph.nodes)
  // console.log(myGraph.edges)
      return (
        <div id="parent" className="parent" >
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
          <Graph
            graph={myGraph}
            options={options}
            events={events}
          />
         
            <div className="stats" >
              <label className="stat1">STATYSTYKI </label>
              <label className="stat1">Ilość węzłów nieterminalowych: {countNonTerminalNodes}</label>
              <label className="stat1">Ilość węzłów terminalowych: {countTerminalNodes}</label>
              <label className="stat1">Ilość węzłów razem: {countNodes}</label>
              <label className="stat1">Ilość węzłów terminalowych znaczących ({functionType}): {countNodesTerminalImportant}</label>
              <label className="stat1">Ilość krawędzi: {countEdges}</label>
            </div>
            
          
        </div>
      );
    
}

export default Bdd;

