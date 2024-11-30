import Styles from '../components/Perfil.module.css'

function Perfil( {nome, justificativa, score} ){
    return(
        <div className={Styles.caixaPerfilAnalise}>
            <span className={Styles.nome}>Candidato: <h1>{nome}</h1></span>
            <span className={Styles.sobre} >Justificativa: 
                <div className={Styles.justificativa}>
                    <p className={Styles.texto_just}>{justificativa.length > 80 ? `${justificativa.substring(0, 80)}...` : justificativa}</p>
                </div>
            </span>
            <span className={Styles.sobre}>Pontuação: <p className={Styles.score}>{score}</p></span>
        </div>
    )
}

export default Perfil