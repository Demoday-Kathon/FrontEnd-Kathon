import styles from './Header.module.css'
import seta from '../../../assets/imgs/seta.svg'
import Button from '../button/button'
import Navbar from './headerComponents/Navbar'
import logoKathonCompleta from '../../../../src/assets/imgs/logokathoncompleta.png'

function Header() {
    return (
        <header className={styles.header}>
             <img src={logoKathonCompleta} alt="imagem logo kathon" />
            <Navbar />
            <Button text="Entrar" seta= {seta} />
        </header>
    )
}

export default Header;