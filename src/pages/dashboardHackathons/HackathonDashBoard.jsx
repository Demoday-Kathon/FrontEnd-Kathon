import NavBar from '../dashBoardHome/components/NavBar';
import TtlDash from '../dashBoardHome/components/titulo/TtlDash';
import Styles from '../dashboardHackathons/Hackathon.module.css'
import GraficoMenor from "./graficos/GraficoMenor"
import { register } from "swiper/element/bundle"
import GraficoAnalise from '../../pages/dashboardVisaoGeral/graficos/GraficoAnalise'


register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function HackathonDashboard() {
  return (
    <div className={Styles.content}>
      <div className={Styles.nav}>
        <NavBar />
        <TtlDash 
        texto="Hackathons" 
        customClass="containerSessão1" 
        />
      </div>
      <div className={Styles.conteudo}>
        <div className={Styles.top}>
          <div className={Styles.hackas}>
            <GraficoAnalise />
          </div>
          <div className={Styles.criar}>
            <div className={Styles.btn_criar}>
              <span>Criar</span>
            </div>
          </div>
        </div>
        <div className={Styles.low}>
          <h2>Ultimos Hackathons</h2>
          <div className={Styles.low_content}>
            <div className={Styles.ultimos}>
              <h2>Imersão Back-End</h2>
              <p>Uma explanação em tópicos</p>
            </div>
            <div className={Styles.grafico}>
              <GraficoMenor />
            </div>
            <div className={Styles.grafico}>
            <GraficoMenor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HackathonDashboard;
