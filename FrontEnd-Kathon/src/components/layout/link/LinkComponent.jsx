import styles from './LinkComponent.module.css';
import { Link } from 'react-router-dom';

function LinkComponent({ linkTo, text, children}) {
    return (
        <>
        
        <Link className={styles.LinkComponent} to={linkTo}>
        {children}
        <p>{text}</p> 
        </Link>
        
        </>
    );
}

export default LinkComponent;
