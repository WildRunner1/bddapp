import React, {  } from 'react';

import  pl from '../translations/polski.json'
import  en from '../translations/english.json'



function Home(props){
  const language = props.language
  let lang
  if(language === 'pl'){
    lang = pl
  }else{
    lang = en
  }
   
      return (
        <div>
          
          <h3>{lang.translation.about.title}</h3>
          <div className='articleHeader'>{lang.translation.about.purposeOfWork}</div>
            <div className='articleBody'>
            {lang.translation.about.purposeOfWorkText1}
            </div>
  
          <div className='articleHeader'>{lang.translation.about.about}</div>
            <div className='articleBody'>
            {lang.translation.about.aboutText1}
            </div>
            <br></br>
            <div className="container">
              <div className="row gx-1 ">
                <div className=" col-md-6">
                  <div className='auth1'>{lang.translation.about.author} </div>
                </div>
                <div className=" col-md-6">
                  <div className='auth2'>Jakub Błaszyk</div>  
                </div>
              </div>
              <div className="row gx-1 ">
                <div className=" col-md-6">
                  <div className='auth1'>{lang.translation.about.study} </div>
                </div>
                <div className=" col-md-6">
                  <div className='auth2'>Informatyka</div>  
                </div>
              </div>
              <div className="row gx-1 ">
                <div className=" col-md-6">
                  <div className='auth1'>{lang.translation.about.supervisor} </div>
                </div>
                <div className=" col-md-6">
                  <div className='auth2'>dr inż. Jacek Tkacz <a target="_blank" rel="noopener noreferrer" href="http://www.imei.uz.zgora.pl/">(IMEI)</a></div>  
                </div>
              </div>
              <div className="row gx-1 ">
                <div className=" col-md-6">
                  <div className='auth1'>{lang.translation.about.faculty} </div>
                </div>
                <div className=" col-md-6">
                  <div className='auth2'>Wydział Inforamtyki, Elektrotechniki i Automatyki <a target="_blank" rel="noopener noreferrer" href="https://www.wiea.uz.zgora.pl/">(WIEA)</a></div>  
                </div>
              </div>
              <div className="row gx-1 ">
                <div className=" col-md-6">
                  <div className='auth1'>{lang.translation.about.college} </div>
                </div>
                <div className=" col-md-6">
                  <div className='auth2'>{lang.translation.about.collageName}<a target="_blank" rel="noopener noreferrer" href="https://www.uz.zgora.pl/">(UZ)</a></div>  
                </div>
              </div>
              <div className="row gx-1 ">
                <div className=" col-md-6">
                  <div className='auth1'>{lang.translation.about.defense} </div>
                </div>
                <div className=" col-md-6">
                  <div className='auth2'>Semestr zimowy 2022-2023</div>  
                </div>
              </div>
              
            </div>
            <article>
            <br></br>
            <br></br>
            <div className='articleHeader'>{lang.translation.about.tech}</div>
            <div className='articleBody'>
            <div className="row">
              <div className="col">
                <div className="techStackList"><img className="spinM" alt="*" src="icons/electron-icon.svg" width="50px"/><label className="labelTech"><h4>Electron.js</h4></label><br></br></div>
              </div>
              <div className="col">
                <div className="techStackList"><img alt="*" src="icons/html-file-format-icon.svg" width="50px"/><label className="labelTech"><h4>HTML</h4></label><br></br></div>
              </div>
              <div className="col">
                <div className="techStackList"><img alt="*" src="icons/css-file-format-icon.svg" width="50px"/><label className="labelTech"><h4>CSS</h4></label><br></br></div>
              </div>
              <div className="col">
                <div className="techStackList"><img alt="*" src="icons/javascript-programming-language-icon.svg" width="50px"/><label className="labelTech"><h4>JavaScript</h4></label><br></br></div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="techStackList"><img alt="*" src="icons/node-js-icon.svg" width="50px"/><label className="labelTech"><h4>NodeJS</h4></label><br></br></div>
              </div>
              <div className="col">
                <div className="techStackList"><img className="spinM" alt="*" src="icons/react-js-icon.svg" width="50px"/><label className="labelTech"><h4>React JS</h4></label><br></br></div>
              </div>
              <div className="col">
                <div className="techStackList"><img alt="*" src="icons/visjs_logo.png" width="50px"/><label className="labelTech"><h4>VisJs</h4></label><br></br></div>
              </div>
              <div className="col">
                <div className="techStackList"><img alt="*" src="icons/bootstrap-5-logo-icon.svg" width="50px"/><label className="labelTech"><h4>Bootstrap</h4></label><br></br></div>
              </div>
            </div>
            </div>
            <div className='articleHeader'>{lang.translation.about.tools}</div>
            <div className='articleBody'>
              <div className="row">
                <div className="col">
                  <div className="techStackList"><img alt="*" src="icons/vscode.svg" width="50px"/><label className="labelTech"><h4>VisualStudioCode</h4></label><br></br></div>
                </div>
                <div className="col">
                  <div className="techStackList"><img  alt="*" src="icons/github-logo-6532.svg" width="50px"/><label className="labelTech"><h4>GitHub</h4></label><br></br></div>
                </div>
                
                
              </div>
            </div>
            <div className='articleHeader'>{lang.translation.about.links}</div>
            <div className='articleBody'>
              <div className="techStackList">
                <label className="labelTech">
                  <h4>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/WildRunner1/bddapp">https://github.com/WildRunner1/bddapp</a>
                  </h4>
                </label>
              </div>
            </div>
          </article>
  
            
            
            
          <div></div>
        </div>
      )
   
}

export default Home;

