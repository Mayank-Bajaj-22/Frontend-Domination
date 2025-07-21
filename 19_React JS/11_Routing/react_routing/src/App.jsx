import React from 'react';
import Nav from './Components/Nav';
import Routing from './utils/routing';

const App = () => {
  return (
    <>

    <Nav/>

    <Routing />
    </>
    
  ); 
};

export default App;


// a tag ki jagah ham Link tag use karte hai by changing href - to hem it will stop your page from scrolling
// npm run dev

// Home 
// Route ke andar 2 attribute ya props pass karte hai apan

// Routes wrap Route
//! nav tag is static 