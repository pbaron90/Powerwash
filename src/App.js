import React from 'react'
import './app.scss'
import { Route, Routes } from 'react-router-dom';
import { Navbar, Hero, Footer } from './components';
import { Home, About, Services, Faq, Contact } from './pages';

const App = () => {
  return (
    <div>
      <Navbar />
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
    
    </div>
    
  )
}

export default App