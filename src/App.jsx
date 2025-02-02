import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hackathons from "./pages/hackathonsDisponiveis/Hackathons";
import HackathonsInterno from "./pages/hackathonsDisponiveisInterno/HackathonsInterno";
import Empresas from "./pages/empresas/Empresas";
import Sobre from "./pages/sobre/Sobre";
import Perfil_aluno from "./pages/perfilAluno/Perfil_aluno";
import Perfil_aluno_edit from "./pages/perfilAluno/Perfil_aluno_edit";
import Perfil_empresa from "./pages/perfilEmpresa/Perfil_empresa";
import Perfil_empresa_edit from "./pages/perfilEmpresa/Perfil_empresa_edit";
import HackathonVisaoGeral from "./pages/hackathonsVisaoGeral/HackathonsVisaoGeral";
import HackathonVisaoGeralCREA from "./pages/hackathonsVisaoGeralCREA/HackathonsVisaoGeralCREA";
import HackathonVisaoGeralHCG from "./pages/hackathonsVisaoGeralHCG/HackathonsVisaoGeralHCG";
import HackathonVisaoGeralBRASIL from "./pages/hackathonsVisaoGeralBRASIL/HackathonsVisaoGeralBRASIL";
import HackathonVisaoGeralSTART from "./pages/hackathonsVisaoGeralSTART/HackathonsVisaoGeralSTART";
import HackathonVisaoGeralSESI from "./pages/hackathonsVisaoGeralSESI/HackathonsVisaoGeralSESI";
import HackathonVisaoGeralInterno from "./pages/hackathonsVisaoGeralInterno/HackathonsVisaoGeralInterno";
import HackathonCalendario from "./pages/hackathonsCalendario/HackCalendario";
import HackathonCalendarioInterno from "./pages/hackathonsCalendarioInterno/HackCalendarioInterno";
import Planos from "./pages/planos/Planos";
import PlanosInternos from "./pages/planosInterno/PlanosInternos";
import HackathonsPremios from "./pages/hackathonsPremios/HackathonsPremios";
import HackathonsPremiosInterno from "./pages/hackathonsPremiosInterno/HackathonsPremiosInterno";
import DashBoardHome from "./pages/dashBoardHome/DashBoardHome";
import HackathonDashboard from "./pages/dashboardHackathons/HackathonDashBoard";
import DashboardAssistenteIA from "./pages/dashboardAssistenteIA/DashboardAssistenteIA";
import AnaliseCurriculo from "./pages/dashboardAnalise/AnaliseCurriculo";
import Login from "./pages/login/Login";
import CadastroEscolha from "./pages/cadastroEscolha/CadastroEscolha";
import CadastroEstudante from "./pages/cadastroEstudante/CadastroEstudante";
import CadastroEmpresa from "./pages/cadastroEmpresa/CadastroEmpresa";
import InscricaoHackathon from "./pages/inscricaoHackathon/InscricaoHackathon";
import Feed from "./pages/feed/Feed";
import NivelDesafio from "./pages/nivelDesafio/nivelDesafio";
import NivelDesafioInterno from "./pages/nivelDesafioInterno/nivelDesafioInterno";
import DesafiosCode from "./pages/DesafiosCode/DesafiosCode";
import DesafiosCodeAvancado from "./pages/DesafiosCodeAvancado/DesafioCodeAvancado";
import DesafiosCodeIntermediario from "./pages/DesafiosCodeIntermediario/DesafioCodeIntermediario";
import ModalGame from "./components/ModalGame/ModalGame";
import AnaliseGeral from "./pages/dashboardVisaoGeral/AnaliseGeral";
import HeaderFeed from "./components/HeaderFeed/HeaderFeed";
import HeaderFeedInterno from "./components/HeaderFeedInterno/HeaderFeedInterno";

import "./App.css";



function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/hackathonsinterno" element={<HackathonsInterno />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CadastroEscolha" element={<CadastroEscolha />} />
          <Route path="/CadastroEstudante" element={<CadastroEstudante />} />
          <Route path="/Perfil_aluno" element={<Perfil_aluno />} />
          <Route path="/Perfil_aluno_edit" element={<Perfil_aluno_edit />} />
          <Route path="/Perfil_empresa" element={<Perfil_empresa />} />
          <Route path="/desafioscode" element={<DesafiosCode />} />
          <Route path="/desafioscodeintermediario" element={<DesafiosCodeIntermediario />} />
          <Route path="/desafioscodeavancado" element={<DesafiosCodeAvancado />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/Perfil_empresa_edit" element={<Perfil_empresa_edit />} />
          <Route path="/HackathonVisaoGeral" element={<HackathonVisaoGeral />} />
          <Route path="/HackathonVisaoGeralCREA" element={<HackathonVisaoGeralCREA />} />
          <Route path="/HackathonVisaoGeralHCG" element={<HackathonVisaoGeralHCG />} />
          <Route path="/HackathonVisaoGeralBRASIL" element={<HackathonVisaoGeralBRASIL />} />
          <Route path="/HackathonVisaoGeralSTART" element={<HackathonVisaoGeralSTART />} />
          <Route path="/HackathonVisaoGeralSESI" element={<HackathonVisaoGeralSESI />} />
          <Route path="/HackathonVisaoGeralInterno" element={<HackathonVisaoGeralInterno />} />
          <Route path="/HackathonsPremios" element={<HackathonsPremios />} />
          <Route path="/Planos" element={<Planos />} />
          <Route path="/PlanosInternos" element={<PlanosInternos />} />
          <Route path="/dashboardhome" element={<DashBoardHome />} />
          <Route path="/dashboardhackathon" element={<HackathonDashboard />} />
          <Route path="/dashboardassistenteia" element={<DashboardAssistenteIA />}/>
          <Route path="/dashboardanalisegeral" element={<AnaliseGeral />} />
          <Route path="/analisecurriculo" element={<AnaliseCurriculo />} />
          <Route path="/HackathonsPremios" element={<HackathonsPremios />} />
          <Route path="/HackathonsPremiosInterno" element={<HackathonsPremiosInterno />} />
          <Route path="/hackathonsCalendario" element={<HackathonCalendario />}/>
          <Route path="/hackathonsCalendarioInterno" element={<HackathonCalendarioInterno />}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/CadastroEscolha" element={<CadastroEscolha />} />
          <Route path="/CadastroEstudante" element={<CadastroEstudante />} />
          <Route path="/CadastroEmpresa" element={<CadastroEmpresa />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/nivelDesafio" element={<NivelDesafio />} />
          <Route path="/nivelDesafioInterno" element={<NivelDesafioInterno />} />
          <Route path="/modalgame" element={<ModalGame />} />
          <Route path="/HeaderFeed" element={<HeaderFeed />} />
          <Route path="/HeaderFeedInterno" element={<HeaderFeedInterno />} />
          <Route path="/InscricaoHackathon" element={<InscricaoHackathon />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
