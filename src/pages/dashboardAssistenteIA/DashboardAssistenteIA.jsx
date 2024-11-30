import Styles from  './DashboardAssistenteIA.module.css';
import NavBar from '../dashBoardHome/components/NavBar';
import TtlDash from '../dashBoardHome/components/titulo/TtlDash';
import imgPerfil from '../../assets/imgs/perfil_menina1.png'
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import iconAnalytics from '../../assets/imgs/icones/bar-chart.png'
import Hackas from './Components/Hackas';
import img from '../../assets/imgs/Leonardo_Phoenix_A_futuristic_hightech_illustration_of_a_citys_2.jpg'

function DashboardAssistenteIA() {
  return (
    <div className={Styles.ContainerPrincipal}>
      <div className={Styles.nav}>
        <NavBar />
        <TtlDash 
          texto='Recrutamento'
          customClass='containerSessão1'
        />
      </div>
      <div className={Styles.conteudo}>
        <div className={Styles.conteudoLeft}>
          <div className={Styles.hackasSwipper}>

          </div>
          <div className={Styles.toppics}>
            <div className={Styles.comentarios}>
              <div className={Styles.leftPerfil}>
                <div className={Styles.perfil}>
                  <img src={imgPerfil} alt="foto_perfil" className={Styles.foto_perfil}/>
                  <div className={Styles.text}>
                    <span>Nome</span>
                    <p>@estudante</p>
                  </div>
                </div>
                <Link to='/Perfil_aluno' className={Styles.contatar}>Perfil</Link>
              </div>
              <div className={Styles.performance}>
                <div className={Styles.total}>
                  <span>+8000XP</span>
                  <span className={Styles.curtidas}>+10K</span>
                </div>
                <img src={iconAnalytics} alt="performance"/>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.conteudoRight}>
          <div className={Styles.todosHackas}>
            <div className={Styles.search}>
              <input type="text" placeholder='Procurar Hackathon' size="20"/>
              <FaIcons.FaSearch className={Styles.icon}/>
            </div>
            <div className={Styles.hackathons}>
              <Hackas 
              logo={img}
              desc='Nome do Hackathon'
              />
              <Hackas 
              logo={img}
              desc='Nome do Hackathon'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAssistenteIA