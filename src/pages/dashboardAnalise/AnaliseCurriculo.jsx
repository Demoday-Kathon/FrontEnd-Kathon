import './AnaliseCurriculo.css'
import NavBar from '../dashBoardHome/components/navBar'
import TtlDash from '../dashBoardHome/components/titulo/TtlDash'
import Perfil from './components/Perfil'
import { useState } from 'react'

function AnaliseCurriculo(){

    return(
        <div className="conteudo">
            <div className="nav">
                <NavBar />
                <TtlDash 
                texto='Análise de Currículo'
                customClass='containerKia'
                />
            </div>
            <div className="content">
               <div className="ladoEsq">
                <div className="topLeft">
                    <input type="text" className='nome-vaga' placeholder='Digite o tipo de vaga'/>
                    <div className="diretorio">
                        <label htmlFor="input">Selecione um arquivo: </label>
                        <input type="file" id='fileInput'/>
                    </div>
                </div>
                <div className="lowLeft">
                    <button className='adicionar'>Adicionar Curriculo</button>
                    <button className='iniciar'>Iniciar Análise</button>
                </div>
               </div>
               <div className="ladoDir">
                <Perfil 
                    nome='Nome do Candidato'
                    justificativa='Justificativa da pontuação'
                    score='Pontuação'
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