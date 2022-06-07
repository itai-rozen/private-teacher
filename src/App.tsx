import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav/Nav';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Home from './views/Home/Home';

function App() {
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
