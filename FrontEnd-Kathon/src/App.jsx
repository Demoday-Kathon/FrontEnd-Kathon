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
import Perfil_empresa from "./pages/perfilEmpresa/Perfil_empresa";
import Perfil_empresa_edit from "./pages/perfilEmpresa/Perfil_empresa_edit";
import HackathonVisaoGeral from "./pages/hackathonsVisaoGeral/HackathonsVisaoGeral";
import Planos from "./pages/planos/Planos";
import HackathonsPremios from "./pages/hackathonsPremios/HackathonsPremios";
import HackCalendario from "./pages/hackathonsCalendario/HackCalendario";
import DashBoardHome from "./pages/dashBoardHome/DashBoardHome";
import DashboardRecrutamento from "./pages/dashboardRecrutamento/DashboardRecrutamento";
import DashboardAssistenteIA from "./pages/dashboardAssistenteIA/DashboardAssistenteIA";
import Login from "./pages/login/Login";
import CadastroEscolha from "./pages/cadastroEscolha/CadastroEscolha";
import CadastroEstudante from "./pages/cadastroEstudante/CadastroEstudante";
import CadastroEmpresa from "./pages/cadastroEmpresa/CadastroEmpresa";
import Feed from "./pages/feed/Feed";

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
          <Route
            path="/comunidadesVisaoGeral"
            element={<ComunidadesVisaoGeral />}
          />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CadastroEscolha" element={<CadastroEscolha />} />
          <Route path="/CadastroEstudante" element={<CadastroEstudante />} />
          <Route path="/Perfil_aluno" element={<Perfil_aluno />} />
          <Route path="/Perfil_aluno_edit" element={<Perfil_aluno_edit />} />
          <Route path="/Perfil_empresa" element={<Perfil_empresa />} />
          <Route path="/feed" element={<Feed />} />
          <Route
            path="/Perfil_empresa_edit"
            element={<Perfil_empresa_edit />}
          />
          <Route
            path="/HackathonVisaoGeral"
            element={<HackathonVisaoGeral />}
          />
          <Route path="/HackathonsPremios" element={<HackathonsPremios />} />
          <Route path="/Planos" element={<Planos />} />
          <Route path="/dashboardhome" element={<DashBoardHome />} />
          <Route
            path="/dashboardrecrutamento"
            element={<DashboardRecrutamento />}
          />
          <Route
            path="/dashboardassistenteia"
            element={<DashboardAssistenteIA />}
          />
          <Route path="/cadastroEmpresa" element={<CadastroEmpresa />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
