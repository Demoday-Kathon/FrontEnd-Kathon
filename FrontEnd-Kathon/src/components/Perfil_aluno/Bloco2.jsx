import Styles from './Bloco2.module.css'
import button1 from '../layout/button/button'

function Bloco2({TextoDesc}){
    return(
        <section className={Styles.SobreAluno}>
            <h1 className={Styles.Titulo_sobre}>Sobre:</h1>
        <div className={Styles.Conteudo1}>
            <div className={Styles.Sobre}>
                <div className={Styles.SobreTexto}>
                <p className={Styles.TextoDesc}>{TextoDesc}</p>
                </div>
            </div>
        </div>

            <h1 className={Styles.Titulo_sobre}>Principais Habilidades</h1>
        <div className={Styles.Conteudo1}>
            <div className={Styles.Sobre}>
                <div className={Styles.Habilidades}>
                    <button className={Styles.ButtonAlunos}>Desing</button>
                </div>
            </div>
        </div>

            <h1 className={Styles.Titulo_Participacao}>Participações</h1>
        <div className={Styles.Conteudo1}>
            <div className={Styles.Sobre2}>
                <div className={Styles.Participaçoes}>
                    
                </div>
            </div>
        </div>
        </section>
    )
}

export default Bloco2