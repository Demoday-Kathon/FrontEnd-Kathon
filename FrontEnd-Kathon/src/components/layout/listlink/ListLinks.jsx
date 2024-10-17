import styles  from './ListLink.module.css';

import LinkComponent from '../link/LinkComponent'


function ListLink(props) {
    return (
        <ul className={`${styles[props.customClass]}`}>
            {props.children}
        </ul>
    )
}

export default ListLink;
