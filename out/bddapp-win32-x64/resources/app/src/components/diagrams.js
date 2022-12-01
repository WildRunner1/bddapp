import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faSave, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Bdd } from './';
import { Robdd } from './';
import { TruthTable } from './';
import {logFunctions} from '../data.json';


//get the variables from expressions
function Variables(strs) {
  let strs1 = []
  strs1.push(strs)
  const variables = []
  let func = []
  const rx = /\/?([A-Z]|[a-z])/g;
    const matches = [...strs.matchAll(rx)];
    func = Array.from(matches, m => m[1])
    func.forEach(y => {
      let g = String(y)
      for (let c of g) {
        if (c !== '*' && c !== '/' && c !== '+') {
          if (variables.includes(c)) {
          } else {
            variables.push(c)
          }
        }
      }
    })
 // });
  variables.sort() //sort variables A-Z order
  console.log("Zmienne")
  console.log(variables)
  
  return (variables)
}
// get expressions from given function
function Expressions(strs, functionType) {
  let rx
  if (functionType === "KPS") {
    rx = /(([\/A-Z a-z][*]*)+)/g;
    strs = "+" + strs + "+"
  } else {
    rx = /\(([^()]*)\)/g;
  }

  let strs1 = []
  strs1.push(strs)
  let func = []

  strs1.forEach(x => {
    const matches = [...x.matchAll(rx)];
    func = Array.from(matches, m => m[1])
  });

  console.log("Wyrażenia")
  console.log(func)
  return (func)
}
// genetare trutTable keys
function truthTable(variables) {
  var truthTable = []
  var truthTable2 = []

  for (var i = (Math.pow(2, variables.length) - 1); i >= 0; i--) {
    for (var j = (variables.length - 1); j >= 0; j--) {
      truthTable[j] = (i & Math.pow(2, j)) ? "1" : "0"
    }
    let s = String(truthTable)
    truthTable2.push(s.toString().replace(/,/g, ''))
  }
  truthTable2.sort()
  return (truthTable2)

}
// translate expression to truth table keys - inlude missing variables in expressions
function ExprTotrueKey(expressions, varMap, userVarMap, functionType) {
  let nextV01 = ""
  let nextV10 = ""
  if(functionType === "KPS"){
    nextV01="0"
    nextV10="1"
  } else {
    nextV01="1"
    nextV10="0"
  }

  const rx = /([A-Z])/g
  let i = 0
  const matches = []
  expressions.forEach(x => {
    matches[i] = [...x.matchAll(rx)];
    i++
  })
  let exptrue = []
  for (let i = 0; i < matches.length; i++) {
    for (let j = 0; j < matches[i].length; j++) {
      let index = matches[i][j].index - 1;
      let text = String(expressions[i])
      let subS = text.substring(index, index + 1)
      if (subS === '/') {
        if (exptrue[i] === undefined) {
          exptrue[i] = nextV01 //"0"
        } else {
          exptrue[i] = exptrue[i] + nextV01 //"0"
        }
      } else {
        if (exptrue[i] === undefined) {
          exptrue[i] = nextV10 //"1"
        } else {
          exptrue[i] = exptrue[i] + nextV10 //"1"
        }
      }
    }
  }
  const missingMap = new Map()
  for (let i = 0; i < expressions.length; i++) {
    let missing = []
    for (let j = 0; j < varMap.size; j++) {
      if (String(expressions[i]).includes(varMap.get(j + 1))) {
      } else {
        missing.push(j + 1)
        let key = String(i)
        let strMissing = String(missing).replace(/,/g, '')
        missingMap.set(key, strMissing)
      }
    }
  }
  let keysToSet = []
  missingMap.forEach(element => {

    let key = getByValue(missingMap, element)
    let value = exptrue[key]
    let miss = []
    for (var i = (Math.pow(2, String(element).length) - 1); i >= 0; i--) {
      let k = 0
      miss[i] = value
      for (var j = (String(element).length - 1); j >= 0; j--) {
        k = element[((j - String(element).length) * -1) - 1]
        let val = (i & Math.pow(2, j)) ? "1" : "0"
        miss[i] = String(miss[i]).slice(0, k - 1) + val + String(miss[i]).slice(k - 1, String(miss[i]).length)
      }
      keysToSet.push(miss[i])
    }
  })
  exptrue.forEach(element => {
    if (String(element).length === varMap.size) {
      keysToSet.push(element)
    }
  })
  let keysToSet2 = []
  for (let i = 0; i < keysToSet.length; i++) {
    let charArr = keysToSet[i].split('')
    let charArr2 = []

    for (let j = 0; j < charArr.length; j++) {
      let v2 = charArr[userVarMap.get(j + 1) - 1]
      charArr2[j] = v2
    }
    keysToSet2.push(String(charArr2).replace(/,/g, ''))
  }
  return (keysToSet2)
}
function getByValue(map, searchValue) {
  for (let [key, value] of map.entries()) {
    if (value === searchValue)
      return key;
  }
}
const Diagrams = React.memo(() => {

  const [truthMapToPass, setTruthMapToPass] = useState(new Map())
  const [newVarMapToPass, setNewVarMapToPass] = useState(new Map())
  const [exMessage, setExMessage] = useState("")
  const [exTitle, setExTitle] = useState("")
  const [page, setPage] = useState() 
  const [varItems, setVarItems] = React.useState([])
  const dragItem = React.useRef(null)
  const dragOverItem = React.useRef(null)
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleClose3 = () => setShow3(false);
  const handleClose4 = () => setShow4(false);
  const handleClose5 = () => setShow5(false);
  const handleClose6 = () => setShow6(false);
  const [valid, setValid] = useState(true)
  const localS = []
  //localStorage.clear()
  
  logFunctions.forEach( (element, index) => {
    if(localStorage.length < 3){
    localStorage.setItem(index,JSON.stringify(element))
    }
    //localS.push(JSON.stringify(element))
  })
  const locSort = []
  const locSort2 = new Map() 
  for (let i = 0; i < localStorage.length; i++){
    locSort.push(localStorage.key(i))
    locSort2.set(localStorage.key(i), localStorage.getItem(localStorage.key(i)))
  }
  locSort.sort()
  //console.log("locSort")
  //console.log(locSort)
  localStorage.clear()
  locSort.forEach(element =>{
    localStorage.setItem(element, locSort2.get(element))
  })
  for ( let i = 0; i < locSort.length; i++){
    localS.push(localStorage.getItem(locSort[i]));
    //console.log(localStorage.getItem(localStorage.key(locSort[i])))
  }
  
  
  //console.log("localS")
  //console.log(localS)
  const fucArr = []
  const handleGetSaved = (event) =>{
    event.preventDefault()
    let i = parseInt(event.currentTarget.id)
    let body = JSON.parse(localS[i]).body
    let type = JSON.parse(localS[i]).type
    document.getElementById("funkcjaLogiczna").value = body
    // if(type === "KPS"){
    //   document.getElementById("optionA").checked = true
    // } else {
    //   document.getElementById("optionB").checked = true
    // }
    
    setFormValues({logFunction : body})
    setShow3(false)
  }
  //console.log(localStorage)
  const handleDelete = (event) => {
    event.preventDefault()
    localStorage.removeItem(event.currentTarget.id)
    localS.length = 0
    for (var i = 0; i < locSort.length; i++){
      localS.push(localStorage.getItem(localStorage.key(locSort[i])));
    }
    
    setShow5(true)
  }
  
    localS.forEach((value, index) => {
    // Object.keys(localStorage).forEach( index => {
    //   let value = localStorage.getItem(index)
      value = JSON.parse(value)
      let bodyVal = value.body
      let descVal = value.desc
      let locIndex = value.locIndex
      if(String(bodyVal).length > 10){
        bodyVal = bodyVal.slice(0,10)+" ..."
      }
      if(String(descVal).length > 30){
        descVal = descVal.slice(0,30)+" ..."
      }
      fucArr.push(
        
        <div key={index} className="row ">
          <div className="col-6">
          <button title="Wczytaj" id={index} onClick={handleGetSaved} onChange={handleChange} className='btn btn-secondary modalPlusBtn'><FontAwesomeIcon icon={faPlus} /></button>
            <label title={value.body}>{bodyVal}</label>
          </div>
          <div className="col-5">
            <label title={descVal}>{value.type} - {value.desc}</label>
          </div>
          <div className="col-1 ">
          <button title="Usuń" id={locIndex} disabled={value.editable} onClick={handleDelete} className='btn btn-secondary modalMinusBtn'><FontAwesomeIcon icon={faMinus} /></button>
          </div>
        </div>
      )
    })

  const handleSave = (event) => {
    event.preventDefault()
    let body = document.getElementById("body").value
    let type = document.getElementById("type").value
    let desc = document.getElementById("desc").value
    let max = 0
    Object.keys(localStorage).forEach( index => {
      if(parseInt(index) > max){
        max = parseInt(index)
      }
    })
    max = max+1
    localS.push(JSON.stringify({"body":body, "type":type, "desc":desc, "editable":false, "locIndex": max}))
   
    localStorage.setItem(max, JSON.stringify({"body":body, "type":type, "desc":desc, "editable":false, "locIndex": max}))
    setShow4(true)
  }



  const [formValues, setFormValues] = useState({
    logFunction: "",
    logType: ""

  });

  const BDD = <div className="bddContainer"> <Bdd truthMap={truthMapToPass} newVarMap={newVarMapToPass} functionType={formValues.logType} /> </div>
  const ROBDD = <div className="bddContainer"> <Robdd truthMap={truthMapToPass} newVarMap={newVarMapToPass} functionType={formValues.logType} /> </div>
  const TrueTable = <div className="bddContainer"> <TruthTable truthMap={truthMapToPass} newVarMap={newVarMapToPass} functionType={formValues.logType} /> </div>
  


  const handleChange = (event) => {
    // event.preventDefault()
    
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    //console.log(({ ...formValues, [name]: value }))
    //console.log(formValues.logFunction)
    const strs = document.getElementById("funkcjaLogiczna").value
    //String(formValues.logFunction)//["(/A*B*C)+(/A*/B*C)+(/A*B*/C)+(/A*/B*/C)+(A*B*/C)"]
    
    
    const variables = Variables(strs)
    if(variables.length > 10){
      setShow6(true)
      ///setValid(false)
      setExTitle("UWAGA!!")
      setExMessage(<p>Funkcja zawiera {variables.length} zmiennyc,<br></br> program jest w stanie stabilnie obsłużyć fukcję zawierająca do 12 zmiennych<br></br>
      Generowanie fukcji powyżej 12 zmienny może spowodować zawieszenie programu</p>)
    } else {
    const varMap = new Map()
    for (let i = 1; i < variables.length + 1; i++) {
      varMap.set(i, variables[i - 1])
    }
    const dragVar = []
    varMap.forEach((value, key) => {
      dragVar.push(value)
    })
    setVarItems(dragVar)
   }
  };
 
  const handleSubmit = (event) => {
    setValid(false)
    event.preventDefault();
    truthMapToPass.clear()
    newVarMapToPass.clear()

    const functionType = formValues.logType//"KPS" / "KPI"
    const strs = document.getElementById("funkcjaLogiczna").value//String(formValues.logFunction)//["(/A*B*C)+(/A*/B*C)+(/A*B*/C)+(/A*/B*/C)+(A*B*/C)"]
    
    const variables = Variables(strs)
    const varMap = new Map()
    Variables(formValues.logFunction).forEach( (element, index) => {
      varMap.set(index+1,element)
    })
    
    let userVarMap = new Map()
    varItems.forEach((value, index) => {
      userVarMap.set(index + 1, getByValue(varMap, value))
    })
    let newVarMap = new Map()
    for (let i = 1; i < varMap.size + 1; i++) {
      newVarMap.set(i, varMap.get(parseInt(userVarMap.get(i))))
    }
    //truth table inicjalization
    let truthTable1 = truthTable(variables)
    let truthTable2 = []

    for (let i = 0; i < truthTable1.length; i++) {
      let charArr = truthTable1[i].split('')
      let charArr2 = []
      for (let j = 0; j < truthTable1[i].length; j++) {

        let v2 = charArr[userVarMap.get(j + 1) - 1]
        charArr2[j] = v2
      }
      truthTable2.push(String(charArr2).replace(/,/g, ''))

    }
    truthTable2 = truthTable2.sort()
    //console.log(truthTable2)
    // truth table map (kays and values) inicjalization - default values
    let thruMap = new Map()
    let keyT = ""
    for (let i = 0; i < truthTable2.length; i++) {
      keyT = truthTable2[i].toString().replace(/,/g, '')
      if (functionType === "KPS") {
        thruMap.set(keyT, "0")
      } else {
        thruMap.set(keyT, "1")
      }

    }
    const expressions = Expressions(strs, functionType)

    //Walidacja formularza
    let table = []
    let v1 = ""
    table = Array.from(strs)
    table.forEach((value1) => {
      setValid(true)
      if (v1 === value1) {
        setShow(true)
        setValid(false)
        setExTitle("Błąd składni")
        setExMessage("Podwójny znak lub zmienna np. ** lub // lub AA")
      } 
      v1 = value1
    })
    
      if ((valid === true && expressions.length === 0) || (valid === false && expressions.length === 0)) {
        setShow(true)
        setExTitle("Błąd składni")
        setExMessage("Nie zmapowano wyrażeń, sprawdź składnię.")
      } else {
        setValid(true)
      }

    // truth table map (kays and values) inicjalization - expresion values
    let keysToSet = ExprTotrueKey(expressions, newVarMap, userVarMap, functionType)

    keysToSet.forEach(element => {
      if (functionType === "KPS") {
        thruMap.set(element, "1")
      } else {
        thruMap.set(element, "0")
      }
    })
    thruMap.forEach((value, key) => {
      setTruthMapToPass(new Map(truthMapToPass.set(key, value)))
    })
    //console.log(truthMapToPass)
    newVarMap.forEach((value, key) => {
      setNewVarMapToPass(new Map(newVarMapToPass.set(key, value)))

    })

    if (formValues.logFunction !== "" && valid === true && formValues.logType !== "" ){
      //setPage(ROBDD)
      setPage(TrueTable)
      setClass("ROBDD", "button1")
      setDisable("ROBDD",false)
      setClass("TrueTable", "button2")
      setDisable("TrueTable", true)
      setClass("BDD", "button1")
      setDisable("BDD", false)
      console.log("Wartości z fromularza");
      console.log(formValues);
    } 

  }
  const setClass = (id, cssClass) =>{
    document.getElementById(id).className = cssClass
  }
  const setDisable = (id, isDisable) =>{
    document.getElementById(id).disabled = isDisable
  }

  const handleClickPage = (event) => {
    event.preventDefault()
    if (formValues.logFunction !== "") {
      switch (event.currentTarget.id) {
        case 'BDD': {
          if (page !== BDD) {
            setPage(BDD)
            setClass("ROBDD", "button1")
            setDisable("ROBDD",false)
            setClass("TrueTable", "button1")
            setDisable("TrueTable", false)
            setClass("BDD", "button2")
            setDisable("BDD", true)
          }
        }
          break;
        case 'ROBDD': {
          if (page !== ROBDD) {
            setPage(ROBDD)
            setClass("ROBDD", "button2")
            setDisable("ROBDD",true)
            setClass("TrueTable", "button1")
            setDisable("TrueTable", false)
            setClass("BDD", "button1")
            setDisable("BDD", false)
          }
        }
          break;
        case 'TrueTable': {
          if (page !== TrueTable) {
            setPage(TrueTable)
            setClass("ROBDD", "button1")
            setDisable("ROBDD",false)
            setClass("TrueTable", "button2")
            setDisable("TrueTable", true)
            setClass("BDD", "button1")
            setDisable("BDD", false)
          }
        }
          break;
        default: {
          if (page !== TrueTable) {
            setPage(TrueTable)
            setClass("ROBDD", "button1")
            setDisable("ROBDD",false)
            setClass("TrueTable", "button2")
            setDisable("TrueTable", true)
            setClass("BDD", "button1")
            setDisable("BDD", false)
          }
        }
      }

    }

  }

  const handleSort = () => {
    //duplicate items
    let _varItems = [...varItems]
    //remove and save the dragged item content
    const draggedItemContent = _varItems.splice(dragItem.current, 1)[0]
    //switch the position
    _varItems.splice(dragOverItem.current, 0, draggedItemContent)
    //reset the position ref
    dragItem.current = null
    dragOverItem.current = null
    //update the actual array
    setVarItems(_varItems)
  }

  const handleToolTip = () => {
    setShow2(true)
  }
  const storedFunctions = () => {
    setShow3(true)
  }


  let alertKPIKPS
  if (formValues.logType === "KPS") {
    alertKPIKPS = "ABC+/ABC"
  } else {
    alertKPIKPS = "(A+B+C)*(/A+B+C)"
  }

  return (
    <div>
      <div className="container px-5 my-5">
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" onClick={handleToolTip}>Funkcja Logiczna (<FontAwesomeIcon title="Instrukcja" icon={faQuestion} />)</label>
            <input className="form-control" name="logFunction" onChange={handleChange} id="funkcjaLogiczna" type="text" placeholder="Funkcja Logiczna" required/>
          </div>
          <div className="mb-3 ">
            <label className="form-label d-block">Typ Funkcji</label>
            <div className='ff'>
              <div className="form-check form-check-inline ">
                <input className="form-check-input" id="optionA" type="radio" value="KPS" onChange={handleChange} name="logType" required />
                <label className="form-check-label" >KPS</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" id="optionB" type="radio" value="KPI" onChange={handleChange} name="logType" required />
                <label className="form-check-label" >KPI</label>
              </div>
            </div>
          </div>
          <label>Zmień kolejność zmiennych (drag'n'drop)</label>
          <div className='d-flex justify-content-center ff' >
            {varItems.map((item, index) => (
              <div
                key={index}
                className="list-item"
                draggable
                onDragStart={(e) => {(dragItem.current = index)}}
                onDragEnter={(e) => {e.preventDefault()
                                    dragOverItem.current = index}}
                onDragEnd={handleSort}
                onDragOver={(e) => {e.preventDefault();}}>
                <h3>{item}</h3>
              </div>
            ))}

          </div>

          {/* <div className="d-grid"> */}
            <button title="Generuj" className="btn btn-secondary btn-lg button3" id="submitButton"  type="submit">Generuj</button>
            <button className="btn btn-success button4" title="Wyświetl zapisane funkcje" onClick={storedFunctions} type="submit"><FontAwesomeIcon icon={faSave}/></button>
          {/* </div> */}
        </form>
      </div>
      <div className='d-flex justify-content-center'>
        <button id='BDD' className="button1" onClick={handleClickPage}>BDD/OBDD</button>
        <button id='ROBDD'  className="button1" onClick={handleClickPage}>ROBDD</button>
        <button id='TrueTable'  className="button1" onClick={handleClickPage}>Tablica Prawdy</button>
      </div>
      {page}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{exTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{exMessage}<br></br>Składnia dla {formValues.logType} powinna wyglądać np: {alertKPIKPS}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose} onKeyUp={(e) => { if (e.key === "Enter" && !e.defaultPrevented) e.currentTarget.click(); }}>
            Zamknij
          </Button>

        </Modal.Footer>
      </Modal>
      <Modal show={show6} onHide={handleClose6}>
        <Modal.Header closeButton>
          <Modal.Title>{exTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{exMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose6} onKeyUp={(e) => { if (e.key === "Enter" && !e.defaultPrevented) e.currentTarget.click(); }}>
            Zamknij
          </Button>

        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Instrukcja</Modal.Title>
        </Modal.Header>
        <Modal.Body>Zmienne: <label className='inst1'>A-Z lub a-z</label> <br></br>
        Negacja: <label className='inst1'>/</label><br></br>
        Przykładowa funkcja KPS: <label className='inst1'>ABC+/ABC+A/BC</label><br></br>
        Przykładowa funkcja KPI: <label className='inst1'>(A+B+C)*(/A+B+C)*(A+/B+C)</label><br></br>
        
        {/* Kolejność zmiennych można zdefinować po wpisaniu funkcji przez mechanizm drag'n'drop<br></br> */}
        <label className='inst2'>*nie wszystkie przypdaki złej składni są uwzględnione, dla większej kontroli w konsoli przeglądarki (f12) wyswietlane są 
        zmapowane zmienne i wyrażenia</label>
        

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Zamknij
          </Button>

        </Modal.Footer>
      </Modal>
      <Modal dialogClassName="my_modal" show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Zapisz/Wczytaj fukcję</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form >
          <div className="mb-3">
          <p className='text-center'>----------  Zapisz  ----------</p>
            <label className="form-label" >Funkcja Logiczna</label>
            <input className="form-control" name="body" onChange={handleChange} defaultValue={formValues.logFunction} id="body" type="text" placeholder="Funkcja Logiczna" required/>
          </div>
          <div className="mb-3 ">
          <div className="form-floating mb-3">
            <select className="form-select" id="type" onChange={handleChange} defaultValue={formValues.logType} aria-label="New Field">
                <option value="KPI">KPI</option>
                <option value="KPS">KPS</option>
            </select>
            <label >Typ funkcji</label>
        </div>
          </div>
          <div className="mb-3">
            <label className="form-label" >Opis</label>
            <input className="form-control" name="desc" onChange={handleChange} id="desc" type="text" placeholder="Funkcja Logiczna" required/>
          </div>
            <input className='="btn btn-lg btnSave' type='submit' onClick={handleSave} value="Zapisz"/>
          </form>
          <p className='text-center'>----------  Wczytaj  ----------</p>
          {fucArr}
        
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose3} onKeyUp={(e) => { if (e.key === "Enter" && !e.defaultPrevented) e.currentTarget.click(); }}>
            Zamknij
          </Button>

        </Modal.Footer>
      </Modal>

      <Modal show={show4} onHide={handleClose4} >
        <Modal.Header  closeButton>
          <Modal.Title>Zapisano</Modal.Title>
        </Modal.Header>
        <Modal.Footer className="savedMod">
          <Button variant="secondary" onClick={handleClose4}>
            Zamknij
          </Button>

        </Modal.Footer>
      </Modal>
      <Modal show={show5} onHide={handleClose5} >
        <Modal.Header closeButton>
          <Modal.Title>Usunięto</Modal.Title>
        </Modal.Header>
        <Modal.Footer className="savedMod2">
          <Button variant="secondary" onClick={handleClose5}>
            Zamknij
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  )
})


export default Diagrams;

