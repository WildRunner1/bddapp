import React, {  } from 'react';

function About(){

    return (
        <div>
          
          <article>
            <h1>About</h1>
            <div className='articleHeader'>Tech Stack</div>
            <div className='articleBody'>
              <div className="techStackList"><img className="spinM" alt="*" src="icons/electron-icon.svg" width="50px"/><label className="labelTech"><h4>Electron.js</h4></label><br></br></div>
              <div className="techStackList"><img alt="*" src="icons/html-file-format-icon.svg" width="50px"/><label className="labelTech"><h4>HTML</h4></label><br></br></div>
              <div className="techStackList"><img alt="*" src="icons/css-file-format-icon.svg" width="50px"/><label className="labelTech"><h4>CSS</h4></label><br></br></div>
              <div className="techStackList"><img alt="*" src="icons/javascript-programming-language-icon.svg" width="50px"/><label className="labelTech"><h4>JavaScript</h4></label><br></br></div>
              <div className="techStackList"><img alt="*" src="icons/node-js-icon.svg" width="50px"/><label className="labelTech"><h4>NodeJS</h4></label><br></br></div>
              <div className="techStackList"><img className="spinM" alt="*" src="icons/react-js-icon.svg" width="50px"/><label className="labelTech"><h4>React JS</h4></label><br></br></div>
              <div className="techStackList"><img alt="*" src="icons/visjs_logo.png" width="50px"/><label className="labelTech"><h4>VisJs - React Graph Vis</h4></label><br></br></div>
              <div className="techStackList"><img alt="*" src="icons/bootstrap-5-logo-icon.svg" width="50px"/><label className="labelTech"><h4>Bootstrap</h4></label><br></br></div>
              
            </div>
            <div className='articleHeader'>Tools</div>
            <div className='articleBody'>
              <div className="techStackList"><img  alt="*" src="icons/github-logo-6532.svg" width="50px"/><label className="labelTech"><h4>GitHub</h4></label><br></br></div>
              <div className="techStackList"><img alt="*" src="icons/vscode.svg" width="50px"/><label className="labelTech"><h4>VisualStudioCode</h4></label><br></br></div>
              
            </div>
            <div className='articleHeader'>Links</div>
            <div className='articleBody'>
              <div className="techStackList"><label className="labelTech"><h4><a href="https://github.com/WildRunner1/bddapp">https://github.com/WildRunner1/bddapp</a></h4></label><br></br></div>
              
              
            </div>
           
          </article>
          
          
        </div>
    )
}

export default About;