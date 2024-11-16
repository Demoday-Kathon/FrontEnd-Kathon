import NavBar from "../dashBoardHome/components/navBar"
import '../dashboardHackathons/Hackathon.css'
import GraficoMenor from "./graficos/GraficoMenor"

function HackathonDashboard(){
    return(
        <div className="content">
            <NavBar />
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