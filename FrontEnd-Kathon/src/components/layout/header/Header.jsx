import styles from './Header.module.css'

import Navbar from './headerComponents/Navbar'
import logoKathonCompleta from '../../../../src/assets/imgs/logokathoncompleta.png'

function Header() {
    return (
        <header className={styles.header}>
             <img src={logoKathonCompleta} alt="imagem logo kathon" />
            <Navbar />
            {/*Botão de Login/Entrar */}
        
        </header>
    )
}

export default Header;