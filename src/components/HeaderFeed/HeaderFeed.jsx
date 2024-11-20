import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import Styles from './HeaderFeed.module.css'
import LogoKathon from '../../assets/imgs/LogoKathonCompleta.png'
import PersonalIcon from '../../assets/imgs/Personal-icon.png'
import HackalIcon from '../../assets/imgs/Objetivo.png'
import UserProfile from '../../assets/imgs/ImageUser.png'
import HomeIcon from '../../assets/imgs/Home-icon.png'
import NavLateral from '../layout/NavLateral/NavLateral'
import Barra_grupo from '../../assets/imgs/Barra_grupo.png'
import Mais from '../../assets/imgs/Adicional.png'
import LinkComponent from '../layout/link/LinkComponent'

function HeaderFeed({onToggle}) {

    const [isNavVisible, setIsNavVisible] = useState(true);
    
    const OpenEClose = () => {
        setIsNavVisible(!isNavVisible);
        onToggle();
    };
    return (
        <>
            <section className={`${Styles.FeedNav} ${isNavVisible ? Styles.visible : Styles.hidden}`}>
                <NavLateral className={Styles.HeaderComunidade}>
                    <div className={Styles.ContainerLinks}>
                        <LinkComponent linkTo={"/"}>
                            <img className={Styles.LogoKathon} src={LogoKathon} alt="Logo Kathon" />
                        </LinkComponent>
                        <nav className={Styles.Links}>
                             <LinkComponent linkTo="/"><a href=""><img className={Styles.Icon} src={HomeIcon} alt="" />Home</a></LinkComponent>
                            <LinkComponent linkTo="/hackathons">
                                <a href="">Hackathons</a>
                            </LinkComponent>
                            <LinkComponent linkTo="/empresas">
                                <a href="">Empresas</a>
                            </LinkComponent>
                            <LinkComponent linkTo="/nivelDesafio">
                                <a href="">Desafios</a>
                            </LinkComponent>
                            <LinkComponent linkTo="/sobre">
                                <a href="">Sobre Nós</a>
                            </LinkComponent>
                        </nav>
                        
                    </div>

                    <div className={Styles.containerProfile}>
                        <img className={Styles.ProfileNav} src={UserProfile} alt="Imagem Perfil" />
                        <div className={Styles.Dadosnav}>
                            <h3>Joana Pereira</h3>
                            <p>@Joana Pereira</p>
                        </div>

                        <Link to={"/Perfil_aluno"}>
                            <button>
                                <img className={Styles.AdiconalButton} src={Mais} alt="Adicional" />
                            </button>
                        </Link>
                    </div>
                </NavLateral>
                <div className={Styles.IconPlay}>

                    <button className={Styles.ButtonIconPlay} onClick={OpenEClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="73" viewBox="0 0 32 73" fill="none">
                        <path d="M0 0H12C23.0457 0 32 8.95431 32 20V53C32 64.0457 23.0457 73 12 73H0V0Z" fill="#D9D9D9" />
                        <path className={isNavVisible ? Styles.rotate_180 : ''} d="M22.0893 37.7326L12.8073 45.5914C11.7135 46.5189 10 45.7651 10 44.3575V28.64C9.99972 28.325 10.0933 28.0166 10.2695 27.7517C10.4456 27.4868 10.697 27.2767 10.9934 27.1465C11.2898 27.0163 11.6187 26.9716 11.9407 27.0176C12.2627 27.0637 12.5642 27.1985 12.809 27.4061L22.0876 35.2649C22.2695 35.4187 22.4153 35.6084 22.5151 35.8212C22.615 36.034 22.6667 36.265 22.6667 36.4988C22.6667 36.7325 22.615 36.9635 22.5151 37.1764C22.4153 37.3892 22.2695 37.5788 22.0876 37.7326H22.0893Z" fill="#A367EB" />
                    </svg>
                    </button>
                </div>
            </section>
        </>
    )
}

export default HeaderFeed