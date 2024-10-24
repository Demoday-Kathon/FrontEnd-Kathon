import Styles from './HeaderRecrutamento.module.css';
import LogoKathon from '../../../assets/imgs/LogokathonCompleta.png';
import logoDashboard from '../../../assets/imgs/icones/dashboard.png'
import logoHack from '../../../assets/imgs/icones/hacker.png'
import logoAnalise from '../../../assets/imgs/icones/chart.png'
import logoRecruit from '../../../assets/imgs/icones/group.png'
import logoComunidades from '../../../assets/imgs/icones/HouseDoorFill.png'

import { Link } from 'react-router-dom'
import { style } from 'framer-motion/client';

function HeaderRecrutamento (){
    return (
        <>
            <div className={Styles.containerRecrutamento}>
                <div className={Styles.logo}>
                    <img src={LogoKathon} alt="logoKathon" className={Styles.LogoKathon}/>
                </div>
                <nav className={Styles.ContainerLinksNav}>
                    <Link to='/dashboardhome' className={Styles.a}>
                        <img src={logoDashboard} alt="icone"className={Styles.icons}/>
                        <span>Dashboard</span>
                    </Link>
                    <Link to='#' className={Styles.a}>
                        <img src={logoHack} alt="icone"className={Styles.icons}/>
                        <span>Hackathons</span>
                    </Link>
                    <Link to='#' className={Styles.a}>
                        <img src={logoAnalise} alt="icone"className={Styles.icons}/>
                        <span>Análise Geral</span>
                    </Link>
                    <Link to='/dashboardassistenteia' className={Styles.a}>
                        <img src={logoRecruit} alt="icone"className={Styles.icons}/>
                        <span>Recrutamento</span>
                    </Link>
                    <Link to='#' className={Styles.a}>
                        <img src={logoComunidades} alt="icone"className={Styles.icons}/>
                        <span>Feeds</span>
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default HeaderRecrutamento;