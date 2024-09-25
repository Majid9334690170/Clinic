import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Header from './components/Header'
import About from './components/About'
import Service from './components/Service'


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/service' element={<Service/>}/>
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App