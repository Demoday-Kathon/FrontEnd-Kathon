import Styles from './HeaderRecrutamento.module.css';
import LogoKathon from '../../../assets/imgs/LogokathonCompleta.png';

function HeaderRecrutamento (){
    return (
        <>
        <div className={Styles.containerRecrutamento}>
            <img className={Styles.LogoKathon} src={LogoKathon} alt="Logo Kathon" />
            <nav className={Styles.ContainerLinksNav}>
                <a href="">Dashboard</a>
                <a href="">Hackathons</a>
                <a href="">Análise Geral</a>
                <a href="">Recrutamento</a>
                <a href="">Feeds</a>
            </nav>
      </div>
        </>
    )
}

export default HeaderRecrutamento;