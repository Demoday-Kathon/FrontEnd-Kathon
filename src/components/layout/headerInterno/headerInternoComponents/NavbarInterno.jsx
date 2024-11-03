import ListLink from '../../listlink/ListLinks.jsx';
import LinkComponent from '../../link/LinkComponent.jsx';
import { FaLessThan } from "react-icons/fa";

import  { Link, useLocation } from 'react-router-dom'




function Navbar({isHovered, isActive }) {

    const location =  useLocation();
    const link = [
        { path: '/feed', name: 'Feed' },
        { path: '/hackathonsinterno', name: 'Hackathons' },
        { path: '/nivelDesafioInterno', name: 'Desafios' },
        { path: '/Perfil_aluno', name: 'Perfil' }
    ] 


    return (
        <ListLink customClass="listLinks">
            {
                link.map((link) => (
                    <LinkComponent linkTo={link.path} text={link.name}>
                        {location.pathname ===  link.path && <FaLessThan style={{color:'#66c2fa'}} />}
                    </LinkComponent>

            ))}

        </ListLink>
    );
}

export default Navbar;
