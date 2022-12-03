import React, {useState} from 'react';
import Graph from "react-graph-vis";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function splitMap(map, side){
  const tempMap1 = new Map()
  const tempMap2 = new Map()
  tempMap1.clear()
  tempMap2.clear()

  let index = 0
  map.forEach((value,key) => {
    
    if(index<map.size/2){
      tempMap1.set(key, value)
    } else {
      tempMap2.set(key, value)
    }
    index ++
  });
  if(side === "left"){
    return tempMap1
  } else {
    return tempMap2
  }

}

function makeItShort(myGraph,map,orgMap,side,n,varM,parent,tree){
  const mapLeft = splitMap(map, "left")
  const mapRight = splitMap(map, "right")
  //  console.log("mapLeft")
  //  console.log(mapLeft)
  //  console.log("mapRight")
  //  console.log(mapRight)

  let same = true
  let iterator1 = mapLeft.values()
  let iterator2 = mapRight.values()
  let iterator3 = mapLeft.keys()
  let iterator4 = mapRight.keys()
  let leftValues = Array.from(iterator1)
  let rightValues = Array.from(iterator2)
  let leftKeys = Array.from(iterator3)
  let rightKeys = Array.from(iterator4)
  let position = 0
  let sum = 0
  let label = ""
  let type = ""
  let shape = ""
  let id = ""

  for( let j=0; j< leftValues.length; j++){
   sum = sum + parseInt(leftValues[j])
   if(leftValues[j] !== rightValues[j]){
    same = false
    position = j
    }
   } 
  if(same === false){
    if(side === "start"){
      let label = varM.get(n)
       id = label//String(n)
      myGraph.nodes.push({id: id, label: label,side: "start", n: n, tree: tree, hidden: false, cut: 0, type: "nonterminal",  shape: "eclipse",parent: String(parent),  font:{size:30}, borderWidth:2})
    } else if(side === "left"){
      if(n<=varM.size){
        type="nonterminal"
         label = varM.get(n)
         shape = "eclipse"
         id = label+String(parent).slice(1,String(parent).length)+"0"
       } 
        myGraph.nodes.push({id: id, label: label,side: "left", n: n, tree: tree, hidden: false, cut: 0, type: type,  shape: shape,parent: parent,  font:{size:30}, borderWidth:2})  
    } else if(side === "right"){
      if(n<=varM.size){
        type="nonterminal"
         label = varM.get(n)
         shape = "eclipse"
         id = label+String(parent).slice(1,String(parent).length)+"1"
       }
        myGraph.nodes.push({id: id, label: label,side: "right", n: n, tree: tree, hidden: false, cut: 0, type: type,  shape: shape,parent: parent,  font:{size:30}, borderWidth:2})  
    } 
    parent = id
    if(n<varM.size){
        makeItShort(myGraph,mapLeft,orgMap,"left",n+1,varM,parent,side)
        makeItShort(myGraph,mapRight,orgMap,"right",n+1,varM,parent,side)
    }
    if(n===varM.size){
      myGraph.nodes.push({id: String(leftKeys[position]),parent: parent, label: leftValues[0],side: "left", n: n, to: id, hidden: false, cut: 0, type: "terminal",  shape: "box",  font:{size:30}, borderWidth:2})
      myGraph.nodes.push({id: String(rightKeys[position]),parent: parent, label: rightValues[0],side: "right", n: n, hidden: false, cut: 0, type: "terminal",  shape: "box",  font:{size:30}, borderWidth:2})
    }
  }  else {
    if(parent === ""){
      parent = varM.get(1)
    }
    if(parseInt(sum)===0 || parseInt(sum)===mapLeft.size){
      myGraph.nodes.push({id: String(leftKeys[position]),parent: parent, label: leftValues[0],side: side, n: n, to: id, hidden: false, cut: 0, type: "terminal",  shape: "box",  font:{size:30}, borderWidth:2})
    } else {
      makeItShort(myGraph,mapLeft,orgMap,side,n+1,varM,parent,side)
    }
  }
}



function makeEdges(myGraph){
  myGraph.nodes.forEach(element => {
    let id = element.id
    let parent = element.parent
    let type = element.type
    let label = "1"
    if(element.side === "left"){
        label = "0"
    }
    if(parent !== '0'){
      myGraph.edges.push(
        { from: parent,
          type: type,
          physics: false,shadow:{
            enabled: true,
            color: 'rgba(0,0,0,0.5)',
            size:10,
            // x:5,
            // y:5
          },
          to: id,
          label:label,
          font:{size:30}})
        }
    })
}
// function getByValue(map, searchValue) {
//   for (let [key, value] of map.entries()) {
//     if (value === searchValue)
//       return key;
//   }
// }
function makeItColor(myGraph, functionType){
  let type = functionType
  myGraph.edges.forEach(element => {
    let to = element.to
    let label = element.label
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

function Robdd(props){
  const myGraph = { nodes:[], edges:[] }
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const [message, setMessage] = useState()
  const thruMap = props.truthMap
  const newVarMap = props.newVarMap
  const functionType = props.functionType
    let n = 1
    makeItShort(myGraph,thruMap,thruMap,"start",n,newVarMap,0)
    makeEdges(myGraph)
    myGraph.nodes.sort(function(a, b){
        return a.label - b.label;
      })
     
    makeItColor(myGraph,functionType)

   const events = {
      select: function(event) {
        var { nodes, edges } = event;
        // setMessage(nodes + " nodes")
        // setShow(true)
      },
      // click: ({nodes,edges}) =>{
      //   setShow(true)
      // }

      
      
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

    
    //console.log(myGraph.nodes)
      return (
        <div className="parent">
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Błąd składni</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose} onKeyUp={(e) => { if (e.key === "Enter" && !e.defaultPrevented) e.currentTarget.click(); }}>
            Zamknij
          </Button>

        </Modal.Footer>
      </Modal>
          <Graph
            graph={myGraph}
            options={options}
            events={events}
          />
          <div className="stats">
              <label className="stat1">STATYSTYKI </label>
              <label className="stat1">Ilość węzłów nieterminalowych: <label className='stat2'>{countNonTerminalNodes}</label></label>
              <label className="stat1">Ilość węzłów terminalowych: <label className='stat2'>{countTerminalNodes}</label></label>
              <label className="stat1">Ilość węzłów razem: <label className='stat2'>{countNodes}</label></label>
              <label className="stat1">Ilość węzłów terminalowych znaczących ({functionType}): <label className='stat2'>{countNodesTerminalImportant}</label></label>
              <label className="stat1">Ilość krawędzi: <label className='stat2'>{countEdges}</label></label>
            </div>
        </div>
      );
    
}

export default Robdd;

