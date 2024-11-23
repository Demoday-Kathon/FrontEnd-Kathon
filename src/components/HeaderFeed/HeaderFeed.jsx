import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { FaLessThan } from "react-icons/fa";
import Styles from './HeaderFeed.module.css';
import LogoKathon from '../../assets/imgs/LogoKathonCompleta.png';
import LinkComponent from '../layout/link/LinkComponent';
import NavLateral from '../layout/NavLateral/NavLateral';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function HeaderFeed({ onToggle }) {
    const location = useLocation(); // Para verificar a rota ativa
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const links = [
        { path: '/', name: 'Home' },
        { path: '/hackathons', name: 'Hackathons' },
        { path: '/empresas', name: 'Empresas' },
        { path: '/nivelDesafio', name: 'Desafios' },
        { path: '/sobre', name: 'Sobre Nós' },
    ];

    const OpenEClose = () => {
        setIsNavVisible(!isNavVisible);
        onToggle();
    };

    return (
        <>
            <section className={`${Styles.FeedNav} ${isNavVisible ? Styles.visible : Styles.hidden}`}>
                <NavLateral className={Styles.HeaderComunidade}>
                    <div className={Styles.ContainerLinks}>
                        <LinkComponent linkTo="/">
                            <img className={Styles.LogoKathon} src={LogoKathon} alt="Logo Kathon" />
                        </LinkComponent>
                        <nav className={Styles.Links}>
                            {links.map((link) => (
                                <LinkComponent
                                    key={link.path}
                                    linkTo={link.path}
                                    onMouseEnter={() => setHoveredLink(link.path)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                >
                                    <FaLessThan
                                        className={`${Styles.icon} ${(hoveredLink === link.path || location.pathname === link.path) ? Styles.iconVisible : ''}`}
                                        style={{ color: '#66c2fa', marginRight: '0.5em' }}
                                    />
                                    {link.name}
                                </LinkComponent>
                            ))}
                        </nav>
                    </div>
                    <div className={Styles.containerProfile}>
                        <Link to="/Perfil_aluno">
                            <button className={Styles.Loginb}>
                                <p>Login</p>
                                <FontAwesomeIcon
                                    className={Styles.iconSeta}
                                    icon={faCircleArrowRight}
                                    style={{ transform: 'rotate(-45deg)' }}
                                    size="lg"
                                />
                            </button>
                        </Link>
                    </div>
                </NavLateral>
                <div className={Styles.IconPlay}>
                    <button className={Styles.ButtonIconPlay} onClick={OpenEClose}>
                        <svg viewBox="0 0 100 80" width="40" height="40">
                            <rect width="100" height="20" rx="10"></rect>
                            <rect y="30" width="100" height="20" rx="10"></rect>
                            <rect y="60" width="100" height="20" rx="10"></rect>
                        </svg>
                    </button>
                </div>
            </section>
        </>
    );
}

export default HeaderFeed;
