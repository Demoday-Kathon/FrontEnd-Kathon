import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hackathons from "./pages/hackathonsDisponiveis/Hackathons";
import Empresas from "./pages/empresas/Empresas";
import Comunidades from "./pages/comunidades/Comunidades";
import Sobre from "./pages/sobre/Sobre";
import Perfil_aluno from "./pages/perfilAluno/Perfil_aluno";
import HackathonVisaoGeral from "./pages/hackathonsVisaoGeral/HackathonsVisaoGeral";

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
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/Perfil_aluno" element={<Perfil_aluno />} />
          <Route
            path="/HackathonVisaoGeral"
            element={<HackathonVisaoGeral />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
