import styles from './Header.module.css'

import Navbar from './headerComponents/Navbar'
import LogoKathonCompleta from '../../../../src/assets/imgs/logokathoncompleta.png'

function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.imagemLogoKathon} src={<LogoKathonCompleta />} alt="imagem logo kathon" />
            <Navbar />
            {/*Botão de Login/Entrar */}
        
        </header>
    )
}

export default Header;