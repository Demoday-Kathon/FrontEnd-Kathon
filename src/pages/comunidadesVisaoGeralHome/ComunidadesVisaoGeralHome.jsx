import { Link } from 'react-router-dom';
import ImageUser from '../../components/layout/ImageUser/ImageUser';
import UserImage from '../../assets/imgs/imageUser.png';
import backgroundGDG from '../../assets/imgs/backgroundGDG.png';
import LogoKathon from '../../assets/imgs/LogoKathonCompleta.png';
import CardComunidades from '../../components/cardComunidadesHome/CardComunidadesHome';
import Styles from './ComunidadesVisaoGeralHome.module.css';
import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer';

function ComunidadesVisaoGeralHome() {
    return(
        <div className={Styles.ContainerComunidades}>
            <Header/>

            <section className={Styles.ContainerCardsComunidades}>

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

export default ComunidadesVisaoGeralHome;