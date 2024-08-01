
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {  Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
      
        <NavBar tittle="NewsHub"/>



        
      <Routes>
              <Route exact path="/" element={<News key={""} category={"top"}/>}/>
                
                <Route exact path="/sports" element={<News key={"sports"}  category={"sports"}/>} />
                <Route  exact path="/technology" element={<News key={"technology"} category={"technology"}/>} />
                <Route  exact path="/business" element={<News key={"business"} category={"business"}/>} />
                <Route exact path="/eduction" element={<News key={"education"} category={"education"}/>} />
                <Route exact path="/politics" element={<News key={"politics"} category={"politics"}/>} />
               
          
         
      </Routes>
   
          
          
            
         
          
            
      </>
    )
  }
}

