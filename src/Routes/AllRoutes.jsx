import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';

const AllRoutes = () => {
  return (
    <>
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/skills" element={<Skills />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>
     </Routes>  
    </>
  )
}

export default AllRoutes;