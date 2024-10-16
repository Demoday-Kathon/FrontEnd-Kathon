import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/layout/header/Header'
import Home from './pages/home/Home'
import Hackathons from './pages/hackathonsDisponiveis/Hackathons'
import Empresas from './pages/empresas/Empresas'
import Comunidades from './pages/comunidades/Comunidades'
import Sobre from './pages/sobre/Sobre'
import Perfil_aluno from './pages/perfilAluno/Perfil_aluno'
import Button from './components/layout/button/button'

import './App.css'

function App() {

  return (

    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/comunidades" element={<Comunidades />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/Perfil_aluno" element={<Perfil_aluno />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
