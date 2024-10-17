import Styles from './Bloco2.module.css'

function Bloco2(){
    return(
        <section className={Styles.SobreAluno}>
            <h1 className={Styles.Titulo_sobre}>Sobre:</h1>
        <div className={Styles.Conteudo1}>
            <div className={Styles.Sobre}>
                <div className={Styles.SobreTexto}>
                <p className={Styles.TextoDesc}>Sou Joana, autodidata de 17 anos, com grande interesse por tecnologia. Passo horas explorando programação e design, sempre buscando novos desafios. Meu sonho é utilizar essas habilidades para criar projetos que possam impactar o mundo ao meu redor.</p>
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
        </section>
    )
}

export default Bloco2