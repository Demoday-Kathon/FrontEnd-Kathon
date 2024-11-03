import { Link } from 'react-router-dom'
import styles from './HeaderInterno.module.css'
import Navbar from './headerInternoComponents/NavbarInterno'
import LinkComponent from '../link/LinkComponent'
import UserProfile from '../../../assets/imgs/ImageUser.png'
import Mais from '../../../assets/imgs/Adicional.png'

function HeaderInterno() {
    return (
        <header className={styles.header}>
            <LinkComponent linkTo="/" text={<div className={styles.logoHeader}></div>}/>
            <Navbar />
            <div className={styles.containerProfile}>
                        <Link to={"/Perfil_aluno"}>
                        </Link>
                        <img className={styles.ProfileNav} src={UserProfile} alt="Imagem Perfil" />
                        <div className={styles.Dadosnav}>
                            <h3>Joana Pereira</h3>
                            <p>@Joana Pereira</p>
                        </div>

                    </div>
        </header>
    )
}

export default HeaderInterno;