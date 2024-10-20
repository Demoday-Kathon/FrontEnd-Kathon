import Styles from './HeaderRecrutamento.module.css';
import LogoKathon from '../../../assets/imgs/LogokathonCompleta.png';
import logoDashboard from '../../../assets/imgs/icones/dashboard.png'
import logoHack from '../../../assets/imgs/icones/hacker.png'
import logoAnalise from '../../../assets/imgs/icones/chart.png'
import logoRecruit from '../../../assets/imgs/icones/group.png'
import logoComunidades from '../../../assets/imgs/icones/HouseDoorFill.png'

function HeaderRecrutamento (){
    return (
        <>
            <div className={Styles.containerRecrutamento}>
                <div className={Styles.logo}>
                    <img src={LogoKathon} alt="logoKathon" className={Styles.LogoKathon}/>
                </div>
                <nav className={Styles.ContainerLinksNav}>
                    <a href="#">
                        <img src={logoDashboard} alt="icone"className={Styles.icons}/>
                        <span>Dashboard</span>
                    </a>
                    <a href="">
                        <img src={logoHack} alt="icone"className={Styles.icons}/>
                        <span>Hackathons</span>
                    </a>
                    <a href="">
                        <img src={logoAnalise} alt="icone"className={Styles.icons}/>
                        <span>Análise Geral</span>
                    </a>
                    <a href="">
                        <img src={logoRecruit} alt="icone"className={Styles.icons}/>
                        <span>Recrutamento</span>
                    </a>
                    <a href="">
                        <img src={logoComunidades} alt="icone"className={Styles.icons}/>
                        <span>Feeds</span>
                    </a>
                </nav>
            </div>
        </>
    )
}

export default HeaderRecrutamento;