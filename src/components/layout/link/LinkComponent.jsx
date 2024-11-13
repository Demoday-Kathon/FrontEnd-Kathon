import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LinkComponent.module.css';

function LinkComponent({ linkTo, text, children, onMouseEnter, onMouseLeave}) {
    return (
        <div 
            className={styles.containerLink}
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <Link 
                to={linkTo} 
                className={styles.linkText}
            >
            {children}
                {text}
            </Link>
        </div>
    );
}

export default LinkComponent;