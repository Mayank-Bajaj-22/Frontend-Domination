import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SecondPage from "./components/SecondPage";

function App (){
  return (
    <div>
      <Navbar />
      <Hero />
      <SecondPage />
    </div>
  )
}

export default App;

// new - functional based
// old - class based