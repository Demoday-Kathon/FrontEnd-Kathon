import styles from '../perfilAluno/Perfil_aluno.module.css'
import CardPerfil from '../../components/Perfil_aluno/CardPerfil'
import HeaderInterno from '../../components/layout/headerInterno/HeaderInterno'
import Footer from '../../components/layout/footer/Footer'
function Perfil_aluno(){
    return(
            <>
            <HeaderInterno />
        <section className={styles.Page}>
            <CardPerfil />
        </section>
            <Footer />
        </>
    )
}

export default Perfil_aluno;