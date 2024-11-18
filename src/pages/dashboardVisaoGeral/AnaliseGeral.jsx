import Styles from '../dashboardVisaoGeral/AnaliseGeral.module.css'
import NavBar from '../dashBoardHome/components/NavBar'
import { motion } from "framer-motion";
import { fadein } from "../../variants";
import GraficoAnalise from './graficos/GraficoAnalise'
import GraficoPizzaAnalise from './graficos/GraficoPizzaAnalise'

function AnaliseGeral(){
    return(
        <div className={Styles.container}>
            <NavBar />
            <div className={Styles.conteudo}>
                <div className={Styles.ladoEsquerdo}>
                    <div className={Styles.pizzaGrafico}>
                        <GraficoPizzaAnalise />
                    </div>
                    <div className={Styles.graficoGeral}>
                        <GraficoAnalise />
                    </div>
                </div>
                <div className={Styles.ladoDireito}>
                    <motion.div 
                        variants={fadein("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        className={Styles.equipes}
                    >
                        <div className={Styles.total}>
                            <h1>21 Equipes</h1>
                        </div>
                        <div className={Styles.totalEquipes}>
                            <div className={Styles.btnEquipe}>
                                <p>Equipes</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        variants={fadein("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        className={Styles.projetos}>
                        <div className={Styles.total}>
                            <h1>21 Projetos</h1>
                        </div>
                        <div className={Styles.totalEquipes}>
                            <div className={Styles.btnEquipe}>
                                <p>Projetos</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AnaliseGeral