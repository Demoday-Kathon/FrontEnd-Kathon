import styles  from './ListLink.module.css';

import LinkComponent from './Links/LinkComponent'

function ListLink() {
    return (
        <ul>
            <li> <LinkComponent linkTo="/" text="Home"/> </li>
            <li> <LinkComponent linkTo="/hackathons" text="Hackathon"/> </li>
            <li> <LinkComponent linkTo="/empresas" text="Empresas"/> </li>
            <li> <LinkComponent linkTo="/comunidades" text="Comunidades"/> </li>
            <li> <LinkComponent linkTo="/sobre" text="Sobre a Kathon"/> </li>
        </ul>
    )
}

export default ListLink;
