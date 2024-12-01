import Styles from '../../pages/dashBoardHome/DashBoardHome.module.css'
import iconAnalytics from '../../assets/imgs/icones/bar-chart.png'
import NavBar from './components/NavBar'
import GraficoGeral from './components/graficos/GraficoGeral'
import GraficoPizza from './components/graficos/GraficoPizza'
import GraficoInscritos from './components/graficos/GraficoInscritos'
import * as FaIcons from 'react-icons/fa'
import { motion } from "framer-motion";
import { fadein } from '../../variants'
import { Link } from 'react-router-dom'
import TtlDash from './components/titulo/TtlDash'
import { useUser } from '../../components/contexts/UserContext';

function DashBoardHome() {

    const { user } = useUser;

    return (
        <div className={Styles.container}>
            <div className={Styles.navbar}>
                <NavBar />
                <TtlDash 
                texto={`Olá, ${user.nomeEmpresa}`}
                />
            </div>
            <div className={Styles.conteudo}>
                <div className={Styles.conteudoLeft}>
                    <div className={Styles.cardMaior}>
                        <GraficoGeral />
                    </div>
                    <div className={Styles.cardsMenores}>
                        <div className={Styles.cardUm}>
                            <GraficoInscritos />
                        </div>
                        <div className={Styles.cardDois}>
                            <img src={iconAnalytics}/>
                                <Link to='/' className={Styles.info}>
                                    <h1>Analisar Ultimo Hackathon</h1>
                                    <FaIcons.FaArrowAltCircleRight className={Styles.Arrow}/>
                                </Link>
                        </div>
                    </div>
                </div>
                <div className={Styles.conteudoRight}>
                    <div className={Styles.graficoPizza}>
                        <GraficoPizza />
                    </div>
                    <div className={Styles.percentual}>
                        <h1>+20K Estudantes</h1>
                        <img src={iconAnalytics} alt="icone-de-progresso" className={Styles.iconAnl}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoardHome