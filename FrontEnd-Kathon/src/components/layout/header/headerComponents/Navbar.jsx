import { useState } from 'react';
import styles from './Navbar.module.css';
import ListLink from '../../listlink/ListLinks.jsx';
import LinkComponent from '../../link/LinkComponent.jsx';

function Navbar() {
    const [hoveredLink, setHoveredLink] = useState(null);
    const currentPath = window.location.pathname; // Para verificar o caminho atual

    const links = [
        { to: "/", text: "Home" },
        { to: "/hackathons", text: "Hackathon" },
        { to: "/empresas", text: "Empresas" },
        { to: "/comunidades", text: "Comunidades" },
        { to: "/sobre", text: "Sobre a Kathon" },
    ];

    return (
        <ListLink customClass="listLinks">
            {links.map(link => (
                <li key={link.to}
                    onMouseEnter={() => setHoveredLink(link.to)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <LinkComponent
                        linkTo={link.to}
                        text={link.text}
                        isHovered={hoveredLink === link.to}
                        isActive={currentPath === link.to}
                    />
                </li>
            ))}
        </ListLink>
    );
}

export default Navbar;
