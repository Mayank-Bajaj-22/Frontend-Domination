import React from 'react'
import { Link, Routes, Route } from "react-router-dom";
import Home from "../Components/Home"
import About from '../Components/About';
import User from '../Components/User';

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/User' element={<User/>} />
        <Route path='/About' element={<About/>} />
  </Routes>
  );
};

export default Routing;