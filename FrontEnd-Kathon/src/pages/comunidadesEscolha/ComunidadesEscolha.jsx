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
                    <a href="#">Feeds</a>
                    <a href="#">Hackathons</a>
                    <a href="#">Comunidades</a>
                </nav>
                <section className={Styles.CardsEscolha}>

                    <div className={Styles.Card}>
                        <p>Todas</p>
                        <p>comunidades</p>
                        <img className={Styles.Icones} src={Person} alt="Icones" />
                    </div>

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