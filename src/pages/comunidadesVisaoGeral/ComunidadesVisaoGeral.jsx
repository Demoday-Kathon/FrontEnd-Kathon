import LinkComponent from '../../components/layout/link/LinkComponent';
import ImageUser from '../../components/layout/ImageUser/ImageUser';
import UserImage from '../../assets/imgs/imageUser.png';
import backgroundGDG from '../../assets/imgs/backgroundGDG.png';
import LogoKathon from '../../assets/imgs/LogoKathonCompleta.png';
import CardComunidades from '../../components/cardComunidades/CardComunidades';
import Styles from './ComunidadesVisaoGeral.module.css';
import Footer from '../../components/layout/footer/Footer';

function ComunidadesVisaoGeral() {
    return(
        <div className={Styles.ContainerComunidades}>
            <header className={Styles.ContainerHeader}>
                <LinkComponent  linkTo={"/"}>
                    <img className={Styles.LogoKathon} src={LogoKathon} alt="Logo Kathon" />
                </LinkComponent>
                <h1 className={Styles.tituloComunidades}>Comunidades</h1>
                <ImageUser 
                    imagemUser={UserImage}
                    nameUser={"Joana Pereira"}
                />
            </header>

            <section className={Styles.ContainerCardsComunidades}>
                <nav className={Styles.ContainerNav}>
                    <LinkComponent linkTo={"/feed"}>
                        <a href="#">Feed</a>
                    </LinkComponent>
                    <LinkComponent linkTo={"/Hackathons"}>
                        <a href="#">Hackathons</a>
                    </LinkComponent>
                    <LinkComponent linkTo={"/Perfil_aluno"}>
                        <a href="#">Perfil</a>
                    </LinkComponent>
                </nav>

            <div className={Styles.Cards}>
                <CardComunidades 
                    imagemComunidade={backgroundGDG}
                    nomeComunidade={"#CodeNation"}
                    descricaoComunidade={"1.000 Membros"}
                />
                <CardComunidades 
                    imagemComunidade={backgroundGDG}
                    nomeComunidade={"#OsEstagiários"}
                    descricaoComunidade={"2.000 Membros"}
                />
                <CardComunidades 
                    imagemComunidade={backgroundGDG}
                    nomeComunidade={"#PyData"}
                    descricaoComunidade={"4.000 Membros"}
                />
            </div>
            <div className={Styles.Cards}>
                <CardComunidades 
                    imagemComunidade={backgroundGDG}
                    nomeComunidade={"#CodeNation"}
                    descricaoComunidade={"1.000 Membros"}
                />
                <CardComunidades 
                    imagemComunidade={backgroundGDG}
                    nomeComunidade={"#OsEstagiários"}
                    descricaoComunidade={"2.000 Membros"}
                />
                <CardComunidades 
                    imagemComunidade={backgroundGDG}
                    nomeComunidade={"#PyData"}
                    descricaoComunidade={"4.000 Membros"}
                />
            </div>
            <div className={Styles.Cards}>
                <CardComunidades 
                    imagemComunidade={backgroundGDG}
                    nomeComunidade={"#CodeNation"}
                    descricaoComunidade={"1.000 Membros"}
                />
                <CardComunidades 
                    imagemComunidade={backgroundGDG}
                    nomeComunidade={"#OsEstagiários"}
                    descricaoComunidade={"2.000 Membros"}
                />
                <CardComunidades 
                    imagemComunidade={backgroundGDG}
                    nomeComunidade={"#PyData"}
                    descricaoComunidade={"4.000 Membros"}
                />
            </div>
            <div className={Styles.Cards}>
                <CardComunidades 
                    imagemComunidade={backgroundGDG}
                    nomeComunidade={"#CodeNation"}
                    descricaoComunidade={"1.000 Membros"}
                />
                <CardComunidades 
                    imagemComunidade={backgroundGDG}
                    nomeComunidade={"#OsEstagiários"}
                    descricaoComunidade={"2.000 Membros"}
                />
                <CardComunidades 
                    imagemComunidade={backgroundGDG}
                    nomeComunidade={"#PyData"}
                    descricaoComunidade={"4.000 Membros"}
                />
            </div>
            
            </section>
            <Footer></Footer>
        </div>
    )
}

export default ComunidadesVisaoGeral;