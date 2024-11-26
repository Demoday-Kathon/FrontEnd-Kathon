import LogoKathon from '../../assets/imgs/LogoKathonCompleta.png'
import PersonalIcon from '../../assets/imgs/Personal-icon.png'
import AddIcon from '../../assets/imgs/add-icon.png'
import CartaIcon from '../../assets/imgs/carta-icon.png'
import UserProfile from '../../assets/imgs/imageUser.png'
import barraBottom from '../../assets/imgs/barra-bottom.png'
import HomeIcon from '../../assets/imgs/Home-icon.png'
import NavLateral from '../layout/NavLateral/NavLateral'
import ImageUser from '../layout/ImageUser/ImageUser'
import Styles from './HeaderComunidade.module.css'

function HeaderComunidade() {
    return(
        <>
        <NavLateral className={Styles.HeaderComunidade}>
            <div className={Styles.ContainerLinks}>
            <img className={Styles.LogoKathon} src={LogoKathon} alt="Logo Kathon" />
            <nav className={Styles.Links}>
                <a href=""><img className={Styles.Icon} src={HomeIcon} alt="" />Comunidades</a>
                <a href=""><img className={Styles.Icon} src={AddIcon} alt="" />Criar Comunidade</a>
                <a href=""><img className={Styles.Icon} src={CartaIcon} alt="" />Convidar</a>
                <a href=""><img className={Styles.Icon} src={PersonalIcon} alt="" />Grupos</a>
            </nav>
                <img className={Styles.BarraBottom} src={barraBottom} alt="" />
            </div>

            <div className={Styles.containerProfile}>
                <img src={UserProfile} alt="Imagem Perfil" />
                <div>
                    <h3>Joana Pereira</h3>
                    <p>@Joana Pereira</p>
                </div>
            </div>
        </NavLateral>
        </>       
    )
}

export default HeaderComunidade;