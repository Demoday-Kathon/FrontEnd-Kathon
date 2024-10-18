
import styles from './Navbar.module.css';
import ListLink from '../../listlink/ListLinks.jsx';
import LinkComponent from '../../link/LinkComponent.jsx';
import { FaLessThan } from "react-icons/fa";

import  { Link, useLocation } from 'react-router-dom'




function Navbar({isHovered, isActive }) {

    const location =  useLocation();
    const link = [
        { path: '/', name: 'Home' },
        { path: '/hackathons', name: 'Hackathons' },
        { path: '/empresas', name: 'Empresas' },
        { path: '/comunidades', name: 'Comunidades' },
        { path: '/sobre', name: 'Sobre' },

    ] 


    return (
        <ListLink customClass="listLinks">
            {
                link.map((link) => (
                    <LinkComponent linkTo={link.path} text={link.name}>
                        {location.pathname ===  link.path && <FaLessThan style={{color:'#66c2fa'}} />}
                    </LinkComponent>

            ))}
            {/* <FaLessThan style={{color:'#66c2fa', marginRight:'0.1em'}}/> <LinkComponent linkTo="/" text="Home" />
            <FaLessThan style={{color:'#66c2fa', marginRight:'0.1em'}}/> <LinkComponent linkTo="/hackathons" text="Hackathons" />
            <FaLessThan style={{color:'#66c2fa', marginRight:'0.1em'}}/> <LinkComponent linkTo="/empresas" text="Empresas" />
            <FaLessThan style={{color:'#66c2fa', marginRight:'0.1em'}}/> <LinkComponent linkTo="/comunidades" text="Comunidades" />
            <FaLessThan style={{color:'#66c2fa', marginRight:'0.1em'}}/> <LinkComponent linkTo="/sobre" text="Sobre" /> */}


        </ListLink>
    );
}

export default Navbar;
