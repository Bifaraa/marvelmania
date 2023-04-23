import React from 'react'
import Home from './components/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Personajes from './components/Personajes'
import Comic from './components/Comic'
import Eventos from './components/Eventos'
import Login from './components/Login'
import Registro from './components/Registro'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Personajes' element={<Personajes />} />
        <Route path='/Comics' element={<Comic />} />
        <Route path='/Events' element={<Eventos />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Registro' element={<Registro />} />
      </Routes>
    </Router>
  )
}

export default App
