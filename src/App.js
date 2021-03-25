import React from "react"
import './App.css';
//COMPONENTS:
import "./Header"
import Header from "./Header";
import MemeGenerator from "./MemeGenerator"

function App() {
  return (
    <div>
      <Header/>  
      <MemeGenerator/>    
    </div>
  );
}

export default App;
