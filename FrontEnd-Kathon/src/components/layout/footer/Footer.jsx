
import styles from './Footer.module.css'

import logoCompletaKathon from '../../../assets/imgs/logokathoncompleta.png'

import ListLink from '../listlink/ListLinks';
import LinkComponent from '../link/LinkComponent';

import { FaGoogle, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.cimaFooter}>
                <div className={styles.esquerdoFooter}>
                    <div className={styles.logoFooter}></div>
                    <p> Desafios que revelam talentos, Soluções que moldam o futuro</p>

                    <ListLink customClass="listLinkRowSocial">
                        <li><FaGoogle /></li>
                        <li><FaLinkedin /></li>
                        <li><FaXTwitter /></li>
                        <li><FaInstagram /></li>
                    </ListLink>

                </div>
                <div className={styles.direitoFooter1}>
                    <ListLink customClass="listLinkCollum">
                        <li><h3>Kathon</h3></li>
                        <li> <LinkComponent linkTo="/" text="Home" /> </li>
                        <li> <LinkComponent linkTo="/hackathons" text="Hackathon" /> </li>
                        <li> <LinkComponent linkTo="/empresas" text="Empresas" /> </li>
                        <li> <LinkComponent linkTo="/comunidades" text="Comunidades" /> </li>
                        <li> <LinkComponent linkTo="/sobre" text="Sobre a Kathon" /> </li>
                    </ListLink>

                    <ListLink customClass="listLinkCollum2">
                        <li><h3>Contato</h3></li>
                        <li> (11) 2632-4489 </li>
                        <li> kathon@outlook.com </li>
                    </ListLink>
                </div>
            </div>

            <hr className={styles.linhaFooter}/>

            <div className={styles.baixoFooter}>
                <div className={styles.esquerdoFooter}>
                    <span> © 2024 Kathon Inc. Todos os direitos reservados.</span>
                </div>


                <div className={styles.direitoFooter}>
                    <ListLink customClass="listLinkRow">
                        <li> Política de Privacidade </li>
                        <li> Legal </li>
                        <li> Termos de Uso Legal </li>
                        <li> Mapa do Site </li>
                    </ListLink>
                </div>
            </div>

        </footer>
    )
}

export default Footer;