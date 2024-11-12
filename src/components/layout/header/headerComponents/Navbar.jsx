import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaLessThan } from "react-icons/fa";
import styles from './Navbar.module.css'; // Importe os estilos
import ListLink from '../../listlink/ListLinks.jsx';
import LinkComponent from '../../link/LinkComponent.jsx';

function Navbar() {
    const location = useLocation();
    const [hoveredLink, setHoveredLink] = useState(null);

    const links = [
        { path: '/', name: 'Home' },
        { path: '/hackathons', name: 'Hackathons' },
        { path: '/empresas', name: 'Empresas' },
        { path: '/nivelDesafio', name: 'Desafios' },
        { path: '/sobre', name: 'Sobre Nós' },
    ];

    return (
        <ListLink customClass="listLinks">
            {links.map((link) => (
                <LinkComponent
                    key={link.path}
                    linkTo={link.path}
                    text={link.name}
                    onMouseEnter={() => setHoveredLink(link.path)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <FaLessThan
                        className={`${styles.icon} ${(hoveredLink === link.path || (hoveredLink === null && location.pathname === link.path)) ? styles.iconVisible : ''}`}
                        style={{ color: '#66c2fa' }}
                    />
                </LinkComponent>
            ))}
        </ListLink>
    );
}

export default Navbar;