import React, { useEffect } from 'react';
import Graph from "react-graph-vis";

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
      // if(i%2===0){
        myGraph.nodes.push({type: "nonterminal",id: String(id), label: element, shape: "eclipse",parent: String(newVarMap.get(key-1))+String(value).slice(0,String(value).length-1),  font:{size:30}, borderWidth:2})
      // } else {
       // myGraph.nodes.push({type: "nonterminal",id: String(id), label: element, shape: "eclipse",parent: String(newVarMap.get(key-1))+String(value).slice(0,String(value).length-1), font:{size:30}, borderWidth:2})
      // } 
    }
  }
  // value nodes - terminal
  for (const [key, value] of thruMap.entries()) {
    myGraph.nodes.push({type: "terminal",id: String(key), label: String(value),parent: String(newVarMap.get(newVarMap.size))+String(key).slice(0,String(key).length-1), shape: "box", font:{size:30}})
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
          hoverWidth: 5,//1.5,
          physics: false,
          shadow:{
            enabled: true,
            color: 'rgba(0,0,0,0.5)',
            size:10,
            x:5,
            y:5 
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
   
   const events = {
        select: function(event) {
          //var { nodes, edges } = event;
        },
        
      };
  const options = {
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
          border: '#2B7CE9',
          background: '#D2E5FF'
        }
      },
  
  },
    height: "700px"
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

  countEdges = countEdges -1
  // console.log(myGraph.nodes)
  // console.log(myGraph.edges)
      return (
        <div className="parent" >
          
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

