import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import { useState  } from 'react';
import Nav from './components/Nav/Nav';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Home from './views/Home/Home';
import { loginUser } from './firestore'

function App() {
  console.log(process.env.REACT_APP_ADMIN_EMAIL)
return <>
    <Router>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  </>
}

export default App;
