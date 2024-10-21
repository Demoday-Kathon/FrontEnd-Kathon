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
import LinkComponent from '../layout/link/LinkComponent'

function HeaderFeed() {
    return (
        <>
            <section className={Styles.FeedNav}>
                <NavLateral className={Styles.HeaderComunidade}>
                    <div className={Styles.ContainerLinks}>
                        <img className={Styles.LogoKathon} src={LogoKathon} alt="Logo Kathon" />
                        <nav className={Styles.Links}>
                             <LinkComponent linkTo="/"><a href=""><img className={Styles.Icon} src={HomeIcon} alt="" />Home</a></LinkComponent>
                            <a href=""><img className={Styles.Icon} src={CartaIcon} alt="" />Mensagem</a>
                            <a href=""><img className={Styles.Icon} src={PersonalIcon} alt="" />Grupo</a>
                        </nav>
                        <img className={Styles.BarraBottom} src={Barra_grupo} alt="Barra Grupo" />
                    </div>

                    <div className={Styles.containerProfile}>
                        <img className={Styles.ProfileNav} src={UserProfile} alt="Imagem Perfil" />
                        <div className={Styles.Dadosnav}>
                            <h3>Joana Pereira</h3>
                            <p>@Joana Pereira</p>
                        </div>
                        <img className={Styles.AdiconalButton} src={Mais} alt="Adcional" />
                    </div>
                </NavLateral>
                <div className={Styles.IconPlay}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="73" viewBox="0 0 32 73" fill="none">
                        <path d="M0 0H12C23.0457 0 32 8.95431 32 20V53C32 64.0457 23.0457 73 12 73H0V0Z" fill="#D9D9D9" />
                        <path d="M22.0893 37.7326L12.8073 45.5914C11.7135 46.5189 10 45.7651 10 44.3575V28.64C9.99972 28.325 10.0933 28.0166 10.2695 27.7517C10.4456 27.4868 10.697 27.2767 10.9934 27.1465C11.2898 27.0163 11.6187 26.9716 11.9407 27.0176C12.2627 27.0637 12.5642 27.1985 12.809 27.4061L22.0876 35.2649C22.2695 35.4187 22.4153 35.6084 22.5151 35.8212C22.615 36.034 22.6667 36.265 22.6667 36.4988C22.6667 36.7325 22.615 36.9635 22.5151 37.1764C22.4153 37.3892 22.2695 37.5788 22.0876 37.7326H22.0893Z" fill="#A367EB" transform="rotate(180 15 36.5)"/>
                    </svg>
                </div>
            </section>
        </>
    )
}

export default HeaderFeed