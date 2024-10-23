import { Link } from 'react-router-dom';
import ImageUser from '../../components/layout/ImageUser/ImageUser';
import UserImage from '../../assets/imgs/imageUser.png';
import LogoKathon from '../../assets/imgs/LogoKathonCompleta.png';
import Person from  '../../assets/imgs/person.png';
import Add from  '../../assets/imgs/add.png';
import Styles from './ComunidadesEscolha.module.css';

function ComunidadesEscolha() {
    return(
        <div className={Styles.ContainerComunidades}>
            <header className={Styles.ContainerHeader}>
                <img className={Styles.LogoKathon} src={LogoKathon} alt="Logo Kathon" />
                <h1 className={Styles.tituloComunidades}>Comunidades</h1>
                <ImageUser 
                    imagemUser={UserImage}
                    nameUser={"Joana Pereira"}
                />
            </header>

            <section className={Styles.ComunidadesEscolha}>
                <nav className={Styles.ContainerNav}>

                    <Link to={"/"}>
                    <a href="#">Home</a>
                    </Link>
                    <Link to={"/feed"}>
                    <a href="#">Feed</a>
                    </Link>

                    <Link to={"/hackathons"}>
                    <a href="#">Hackathons</a>
                    </Link>
                </nav>
                <section className={Styles.CardsEscolha}>

                    <Link to={'/comunidadesVisaoGeral'} className={Styles.Card}>
                        <p>Todas</p>
                        <p>Comunidades</p>
                        <img className={Styles.Icones} src={Person} alt="Icones" />
                    </Link>

                    <div className={Styles.Card}>
                        <p>Criar</p>
                        <p>Comunidade</p>
                        <img className={Styles.Icones} src={Add} alt="Icones" />
                    </div>
                </section>
            </section>
        </div>
    )
}

export default ComunidadesEscolha;