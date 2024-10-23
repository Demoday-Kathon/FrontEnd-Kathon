import { Link } from 'react-router-dom';
import ImageUser from '../../components/layout/ImageUser/ImageUser';
import UserImage from '../../assets/imgs/imageUser.png';
import backgroundGDG from '../../assets/imgs/backgroundGDG.png';
import LogoKathon from '../../assets/imgs/LogoKathonCompleta.png';
import CardComunidades from '../../components/cardComunidades/CardComunidades';
import Styles from './ComunidadesVisaoGeral.module.css';

function ComunidadesVisaoGeral() {
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

            <section className={Styles.ContainerCardsComunidades}>
                <nav className={Styles.ContainerNav}>
                    <a href="#"><Link to={"/"}>Home</Link></a>
                    <a href="#"><Link to={"/feed"}>Criadas</Link></a>
                    <a href="#"><Link to={"/hackathons"}>Criar</Link></a>
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
        </div>
    )
}

export default ComunidadesVisaoGeral;