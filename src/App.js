import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import TextForm from './component/TextForm';
import About from './component/About';
import Alert from './component/Alert';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
 const [mode,setMode] = useState('light');//weather dark mode
 const [alert, setAlert] = useState(null);


 const showAlert =(message,type)=>{
   setAlert({
   message:message,
   type:type
   })
   setTimeout(() => {
     setAlert(null);
   }, 2000);

 }
  const toggleMode =() =>{
   if(mode==='light'){
     setMode('dark');
     document.body.style.backgroundColor ='#042743';
     showAlert("Dark Mode has been enabled","success");
     
   }
   else{
    setMode('light');
    document.body.style.backgroundColor ='white';
    showAlert("Light Mode has been enabled","success");
  }
 }
  
  return (
    
   <>
   <Router>
   <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode}  about="About Us"/>
   <Alert alert={alert}/>

   <Switch>
          <Route  exact path="/about">
            <About />
          </Route>
          {/* exact is used to fully match the file name */}
          
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter The Text To Analyze :" mode={mode}/>
          
          </Route>
        </Switch>
        </Router>
   
   




  

   </>
   
  );
}

export default App;
