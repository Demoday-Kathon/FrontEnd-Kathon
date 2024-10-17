import styles from './Navbar.module.css'

import ListLink from '../../listlink/ListLinks.jsx'
import LinkComponent from '../../link/LinkComponent.jsx';
function Navbar() {
    return (
        <ListLink customClass="listLinks">
            <li> <LinkComponent linkTo="/" text="Home"/> </li>
            <li> <LinkComponent linkTo="/hackathons" text="Hackathon"/> </li>
            <li> <LinkComponent linkTo="/empresas" text="Empresas"/> </li>
            <li> <LinkComponent linkTo="/comunidades" text="Comunidades"/> </li>
            <li> <LinkComponent linkTo="/sobre" text="Sobre a Kathon"/> </li>
        </ListLink>
    )
}

export default Navbar;