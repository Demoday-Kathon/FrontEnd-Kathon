
import styles from './Footer.module.css'

import logoCompletaKathon from '../../../assets/imgs/logokathoncompleta.png'

import ListLink from '../listlink/ListLinks';
import LinkComponent from '../link/LinkComponent';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.cimaFooter}>
                <div className={styles.esquerdoFooter}>
                    <div className={styles.logoFooter}></div>
                    <p> Desafios que revelam talentos, Soluções que moldam o futuro</p>

                </div>
                <div className={styles.direitoFooter}>
                    <p> Desafios que revelam talentos soluções que moldam o futuro</p>
                </div>
            </div>

            <hr />

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