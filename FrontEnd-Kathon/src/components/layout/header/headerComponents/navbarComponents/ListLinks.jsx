import styles  from './ListLink.module.css';

import LinkComponent from '../../../link/LinkComponent'

function ListLink() {
    return (
        <ul className={styles.listLinks}>
            <li> <LinkComponent linkTo="/" text="Home"/> </li>
            <li> <LinkComponent linkTo="/hackathons" text="Hackathon"/> </li>
            <li> <LinkComponent linkTo="/empresas" text="Empresas"/> </li>
            <li> <LinkComponent linkTo="/comunidades" text="Comunidades"/> </li>
            <li> <LinkComponent linkTo="/sobre" text="Sobre a Kathon"/> </li>
            <li> <LinkComponent linkTo="/Perfil_aluno" text="Perfil_aluno"/> </li>
        </ul>
    )
}

export default ListLink;
