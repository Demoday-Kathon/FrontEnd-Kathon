import styles from '../perfilAluno/Perfil_aluno.module.css'
import CardPreto from '../../components/layout/cardPreto/CardPreto'
import Card_Recomendacao from '../../components/Perfil_aluno/Card_Recomedacao';

function Perfil_aluno(){
    return(
        <section className={styles.fundo}>
            <CardPreto />
            <div className={styles.header}>
            </div>
            <section className={styles.conteudo}>

            </section>
        </section>
    )
}

export default Perfil_aluno;