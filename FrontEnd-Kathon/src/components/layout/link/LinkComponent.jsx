import styles from './LinkComponent.module.css'

import { Link } from 'react-router-dom'

function LinkComponent({linkTo, text}) {
    return <Link className={styles.LinkComponent} to={linkTo}> {text} </Link>
}

export default LinkComponent;