import Styles from './AnaliseCurriculo.module.css'
import NavBar from '../dashBoardHome/components/NavBar'
import TtlDash from '../dashBoardHome/components/titulo/TtlDash'
import Perfil from './components/Perfil'

function AnaliseCurriculo(){

    return(
        <div className={Styles.conteudo}>
            <div className={Styles.nav}>
                <NavBar />
                <TtlDash 
                texto='Análise de Currículo'
                customClass='containerKia'
                />
            </div>
            <div className={Styles.content}>
               <div className={Styles.ladoEsq}>
                <div className={Styles.topLeft}>
                    <input type="text" className={Styles.nome_vaga} placeholder='Digite o tipo de vaga'/>
                    <div className={Styles.diretorio}>
                        <label htmlFor="input">Selecione um arquivo: </label>
                        <input type="file" id='fileInput'/>
                    </div>
                </div>
                <div className={Styles.lowLeft}>
                    <button className={Styles.adicionar}>Adicionar Curriculo</button>
                    <button className={Styles.iniciar}>Iniciar Análise</button>
                </div>
               </div>
               <div className={Styles.ladoDir}>
                <Perfil 
                    nome='Lucas Carvalho'
                    justificativa='iakhjdiadahndakudhasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
                    score='20'
                />
                <Perfil 
                    nome='Nome do Candidato'
                    justificativa='Justificativa da pontuação'
                    score='Pontuação'
                />
               </div>
            </div>
        </div>
    )
}

export default AnaliseCurriculo