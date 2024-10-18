import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LinkComponent.module.css';

function LinkComponent({ text, linkTo, isActive }) {
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleMouseEnter = () => setHoveredLink(linkTo);  // Quando o mouse entra, muda o estado de hover
    const handleMouseLeave = () => setHoveredLink(null);    // Quando o mouse sai, reseta o estado de hover

    return (
        <Link
            className={styles.LinkComponent}
            to={linkTo}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Exibe o "<" */}
            {hoveredLink === linkTo ? <span>&lt;</span> : null}
            {text}
        </Link>
    );
}

export default LinkComponent;
