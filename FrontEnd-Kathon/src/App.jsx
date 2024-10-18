import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hackathons from "./pages/hackathonsDisponiveis/Hackathons";
import Empresas from "./pages/empresas/Empresas";
import Comunidades from "./pages/comunidades/Comunidades";
import ComunidadesEscolha from "./pages/comunidadesEscolha/ComunidadesEscolha";
import ComunidadesVisaoGeral from "./pages/comunidadesVisaoGeral/ComunidadesVisaoGeral";
import Sobre from "./pages/sobre/Sobre";
import Perfil_aluno from "./pages/perfilAluno/Perfil_aluno";
import Perfil_aluno_edit from "./pages/perfilAluno/Perfil_aluno_edit";
import HackathonVisaoGeral from "./pages/hackathonsVisaoGeral/HackathonsVisaoGeral";
import Planos from "./pages/planos/Planos"
import HackathonPremios from './pages/hackathonsPremios/HackathonsPremios'

import "./App.css";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/comunidades" element={<Comunidades />} />
          <Route path="/comunidadesEscolha" element={<ComunidadesEscolha />} />
          <Route path="/comunidadesVisaoGeral" element={<ComunidadesVisaoGeral />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/Perfil_aluno" element={<Perfil_aluno />} />
          <Route path="/Perfil_aluno_edit" element={<Perfil_aluno_edit />} />
          <Route
            path="/HackathonVisaoGeral"
            element={<HackathonVisaoGeral />}
          />
          <Route path="/Planos" element={<Planos />} />
          
          <Route path='/HackathonPremios'element={<HackathonPremios/>}
          />
        </Routes>
      </Router>
    </main>
  )
}

export default App;
