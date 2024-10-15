import styles from './Header.module.css'

import Navbar from './HeaderComponents/Navbar'
import LogoKathonCompleta from '../../../assets/imgs/LogoKathonCompleta.png'

function Header() {
    return (
        <>
            <img src={<LogoKathonCompleta />} alt="Logotipo Kathon completa" />
            <Navbar />
            {/*Botão de Login/Entrar */}
        
        </>
    )
}

export default Header;