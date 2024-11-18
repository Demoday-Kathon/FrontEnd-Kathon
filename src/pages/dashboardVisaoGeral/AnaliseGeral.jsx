import Styles from '../dashboardVisaoGeral/AnaliseGeral.module.css'
import NavBar from '../dashBoardHome/components/NavBar'

function AnaliseGeral(){
    return(
        <div className={Styles.container}>
            <NavBar />
            <div className={Styles.conteudo}>
                <div className={Styles.ladoEsquerdo}>
                    <div className={Styles.graficoPizza}>

                    </div>
                    <div className={Styles.graficoGeral}>

                    </div>
                </div>
                <div className={Styles.ladoDireito}>
                    <div className={Styles.equipes}>

                    </div>
                    <div className={Styles.projetos}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnaliseGeral