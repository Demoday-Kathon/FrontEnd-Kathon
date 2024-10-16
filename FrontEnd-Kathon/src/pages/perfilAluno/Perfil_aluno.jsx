import styles from '../perfilAluno/Perfil_aluno.module.css'
import CardPerfil from '../../components/Perfil_aluno/CardPerfil'
import Card_Recomendacao from '../../components/Perfil_aluno/Card_Recomedacao';

function Perfil_aluno(){
    return(
        <section className={styles.fundo}>
            <CardPerfil />
            <section className={styles.conteudo}>

            </section>
        </section>
    )
}

export default Perfil_aluno;