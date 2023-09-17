import React from "react";
import Header from './components/Header';
import Frame from './components/Frame';
import User from './components/User';

function App() {
  

  return (
    <div  className="app">
         <Header /> 
         <div className="inner-app">
            <Frame />
            
            <User/>

         </div>
    </div>
  )
}

export default App
