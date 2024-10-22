import styles from './LinkComponent.module.css';
import { Link } from 'react-router-dom';

function LinkComponent({ linkTo, text, children, customClass}) {
    return (
        <>
        
        <Link className={styles.LinkComponent} to={linkTo}>
        {children}
        <p className={`${styles[customClass]}`}>{text}</p> 
        </Link>
        
        </>
    );
}

export default LinkComponent;
