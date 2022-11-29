import React, {  } from 'react';


function About(){

    return (
        <div>
          
          <article>
            <h1>About</h1>
            <div className='articleHeader'>Tech Stack</div>
            <div className='articleBody'>
              {/* <div className="techStackList"><img src="icons/electron-icon.svg" width="50px"/><label className="labelTech"><h4>Electron.js</h4></label><br></br></div> */}
              <div className="techStackList"><img src="icons/html-file-format-icon.svg" width="50px"/><label className="labelTech"><h4>HTML</h4></label><br></br></div>
              <div className="techStackList"><img src="icons/css-file-format-icon.svg" width="50px"/><label className="labelTech"><h4>CSS</h4></label><br></br></div>
              <div className="techStackList"><img src="icons/javascript-programming-language-icon.svg" width="50px"/><label className="labelTech"><h4>JavaScript</h4></label><br></br></div>
              <div className="techStackList"><img src="icons/node-js-icon.svg" width="50px"/><label className="labelTech"><h4>NodeJS</h4></label><br></br></div>
              <div className="techStackList"><img src="icons/react-js-icon.svg" width="50px"/><label className="labelTech"><h4>React JS</h4></label><br></br></div>
              <div className="techStackList"><img src="icons/visjs_logo.png" width="50px"/><label className="labelTech"><h4>VisJs - React Graph Vis</h4></label><br></br></div>
              <div className="techStackList"><img src="icons/bootstrap-5-logo-icon.svg" width="50px"/><label className="labelTech"><h4>Bootstrap</h4></label><br></br></div>
              
              

             
            </div>
           
          </article>
          
          
        </div>
    )
}

export default About;