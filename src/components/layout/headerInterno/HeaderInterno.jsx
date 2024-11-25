import { Link } from 'react-router-dom';
import styles from './HeaderInterno.module.css';
import Navbar from './headerInternoComponents/NavbarInterno';
import LinkComponent from '../link/LinkComponent';
import UserProfile from '../../../assets/imgs/imageUser.png';  
import { useUser } from '../../contexts/UserContext'; 

function HeaderInterno() {

    const { user } = useUser();

    return (
        <header className={styles.header}>
            <LinkComponent linkTo="/" text={<div className={styles.logoHeader}></div>} />
            <Navbar />
            <div className={styles.containerProfile}>
                <Link to="/Perfil_aluno">
                    <img className={styles.ProfileNav} src={"data:image/jpeg;base64," + user?.fotoPerfil || UserProfile} alt="Imagem Perfil" />
                </Link>
                <div className={styles.Dadosnav}>
                  
                    <h3>{user?.nomeCompleto || 'Nome do Usuário'}</h3>
                    <p>@{user?.nomeCompleto || 'Username'}</p>
                </div>
            </div>
        </header>
    );
}

export default HeaderInterno;
