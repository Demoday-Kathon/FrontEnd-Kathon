import Styles from './HeaderFeed.module.css'
import LogoKathon from '../../assets/imgs/LogoKathonCompleta.png'
import PersonalIcon from '../../assets/imgs/Personal-icon.png'
import AddIcon from '../../assets/imgs/add-icon.png'
import CartaIcon from '../../assets/imgs/carta-icon.png'
import UserProfile from '../../assets/imgs/ImageUser.png'
import HomeIcon from '../../assets/imgs/Home-icon.png'
import NavLateral from '../layout/NavLateral/NavLateral'
import Barra_grupo from '../../assets/imgs/Barra_grupo.png'
import ImageUser from '../layout/ImageUser/ImageUser'
import Mais from '../../assets/imgs/Adicional.png'

function HeaderFeed(){
    return(
        <>
        <NavLateral className={Styles.HeaderComunidade}>
            <div className={Styles.ContainerLinks}>
            <img className={Styles.LogoKathon} src={LogoKathon} alt="Logo Kathon" />
            <nav className={Styles.Links}>
                <a href=""><img className={Styles.Icon} src={HomeIcon} alt="" />Home</a>
                <a href=""><img className={Styles.Icon} src={CartaIcon} alt="" />Mensagem</a>
                <a href=""><img className={Styles.Icon} src={PersonalIcon} alt="" />Grupo</a>
            </nav>
                <img className={Styles.BarraBottom} src={Barra_grupo} alt="Barra Grupo" />
            </div>

            <div className={Styles.containerProfile}>
                <img  className={Styles.ProfileNav} src={UserProfile} alt="Imagem Perfil" />
                <div className={Styles.Dadosnav}>
                    <h3>Joana Pereira</h3>
                    <p>@Joana Pereira</p>
                </div>
                <img  className={Styles.AdiconalButton} src={Mais} alt="Adcional" />
            </div>
        </NavLateral>
        </>       
    )
}

export default HeaderFeed