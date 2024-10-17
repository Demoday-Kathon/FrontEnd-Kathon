import styles from '../perfilAluno/Perfil_aluno.module.css'
import CardPerfil from '../../components/Perfil_aluno/CardPerfil'
import Card_Recomendacao from '../../components/Perfil_aluno/Card_Recomedacao';
import Header from '../../components/layout/header/Header'

function Perfil_aluno(){
    return(
            <>
            <Header />
        <section className={styles.Page}>
            <CardPerfil />
        </section>
        </>
    )
}

export default Perfil_aluno;