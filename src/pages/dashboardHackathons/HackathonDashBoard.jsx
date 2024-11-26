<<<<<<< HEAD
import NavBar from '../dashBoardHome/components/NavBar';
import TtlDash from '../dashBoardHome/components/titulo/TtlDash';
=======
import NavBar from "../dashBoardHome/components/NavBar"
>>>>>>> d28a266311a902837c976ca753a6364d82935c47
import '../dashboardHackathons/Hackathon.css'
import GraficoMenor from "./graficos/GraficoMenor"
import { register } from "swiper/element/bundle"

register();
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function HackathonDashboard(){
    return(
        <div className="content">
            <div className="nav">
                <NavBar />
                <TtlDash 
                texto='Hackathons'
                customClass='containerSessão'
                />
            </div>
            <div className="conteudo">
                <div className="top">
                    <div className="hackas">

                    </div>
                    <div className="criar">
                        <div className="btn-criar">
                            <span>Criar</span>
                        </div>
                    </div>
                </div>
                <div className="low">
                    <h2>Ultimos Hackathons</h2>
                    <div className="low-content">
                        <div className="ultimos">
                            <h2>Imersão Back-End</h2>
                            <p>Uma explanação em tópicos</p>
                        </div>
                        <div className="grafico">
                            <GraficoMenor />
                        </div>
                        <div className="calendario">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default HackathonDashboard