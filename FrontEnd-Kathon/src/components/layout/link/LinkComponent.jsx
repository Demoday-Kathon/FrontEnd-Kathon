import styles from './LinkComponent.module.css';
import { Link } from 'react-router-dom';

function LinkComponent({ linkTo, text, isHovered, isActive }) {
    return (
        <>
        
        {text} {isHovered || isActive ? <span>&lt;</span> : null}
        <Link className={styles.LinkComponent} to={linkTo}>
        </Link>
        
        </>
    );
}

export default LinkComponent;
