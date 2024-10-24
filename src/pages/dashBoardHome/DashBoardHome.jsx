import Styles from '../../pages/dashBoardHome/DashBoardHome.module.css'
import HeaderRecrutamento from '../../components/layout/HeaderRecrutamento/HeaderRecrutamento'
import SearchBar from '../../components/searchBar/SearchBar'
import Notification from '../../assets/imgs/icones/notification.png'
import Pessoa from '../../assets/imgs/icones/pessoa.png'
import iconProgress from '../../assets/imgs/icones/progress.png'
import iconTime from '../../assets/imgs/icones/work-in-progress.png'
import iconCheck from '../../assets/imgs/icones/checked.png'
import Grafico from '../../assets/imgs/icones/grafico.png'
import GraficoPizza from '../../assets/imgs/icones/graficoPizza.png'
import iconGroup from '../../assets/imgs/icones/group.png'
import notfWhite from '../../assets/imgs/icones/notfiWhite.png'
import notfBlack from '../../assets/imgs/icones/notfiBlack.png'
import card from '../../assets/imgs/icones/creditCard.png'
import iconePlus from '../../assets/imgs/icones/iconePlus.png'
import graficoPorcentagem from '../../assets/imgs/icones/graficoPorcentagem.png'

import { style } from 'framer-motion/client'

function DashBoardHome() {
    return (
        <div className={Styles.container}>
            <div className={Styles.containerBranco}>
                <div className={Styles.conteudo}>
                    <div className={Styles.navBar}>
                        <HeaderRecrutamento />
                    </div>
                    <div className={Styles.ladoDireito}>
                       <div className={Styles.top}>
                            <div className={Styles.topBarLeft}>
                               <h1 className={Styles.empresa}>Olá, Kathon!</h1>
                            </div>
                            <div className={Styles.topBarRight}>
                                 <SearchBar />
                                 <div className={Styles.icon}>
                                     <div className={Styles.iconNotfy}>
                                        <img src={Notification} alt="icone notificação" className={Styles.iconeNotfi}/>
                                    </div>
                                    <img src={Pessoa} alt="icone perfil" className={Styles.icones}/>
                                 </div>
                            </div>
                        </div>
                        <div className={Styles.primeiraInf}>
                            <div className={Styles.containerEsq}>
                                <div className={Styles.containerPreto}>
                                    <div className={Styles.conteudo}>
                                        <h2>Informações Gerais</h2>
                                        <div className={Styles.total}>
                                            <div className={Styles.info}>
                                                <span className={Styles.quant}>20</span>
                                                <p>Desafios ao todo</p>
                                            </div>
                                            <div className={Styles.divisoria}></div>
                                            <div className={Styles.info}>
                                                <span className={Styles.quant}>3</span>
                                                <p>Desafios parado</p>
                                            </div>
                                        </div>
                                        <div className={Styles.bar}>
                                            <div className={Styles.progress}></div>
                                        </div>
                                        <div className={Styles.quantDesafios}>
                                            <div className={Styles.quantTotal}>
                                                <div className={Styles.topTotal}>
                                                    <img src={iconProgress} alt="icone de progresso" />
                                                    <p>30 Desafios</p>
                                                </div>
                                                <div className={Styles.lowTotal}>
                                                    <img src={iconTime} alt="icone de progresso com relogio" />
                                                    <p>2 em andamento</p>
                                                </div>
                                            </div>
                                            <div className={Styles.concluidos}>
                                                <img src={iconCheck} alt="icone de check" />
                                                <p>15 concluido</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.containerGraf}>
                                <div className={Styles.topGraf}>
                                    <h2>Alcance</h2>
                                    <div className={Styles.btnleft}>
                                        <p>Mensal</p>
                                    </div>
                                    <div className={Styles.btnRight}>
                                        <p>Anual</p>
                                    </div>
                                </div>
                                <div className={Styles.grafCont}>
                                    <img src={Grafico} alt="grafico" className={Styles.grafico}/>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.segundaInfo}>
                            <div className={Styles.cardAnalise}>
                                <h1>Análise Geral</h1>
                                <div className={Styles.parteBaixoGrafico}>
                                    <div className={Styles.sbtitle}>
                                        <p className={Styles.sbtitleRoxo}>Inscritos</p>
                                        <p className={Styles.sbtitleVerde}>Equipes</p>
                                    </div>
                                    <img src={GraficoPizza} alt="grafico pizza"/>
                                </div>
                            </div>
                            <div className={Styles.cardBranco}>
                                <img src={iconGroup} alt="icone em grupo"/>
                                <h2>Equipes Contatadas +500</h2>
                            </div>
                            <div className={Styles.cardBranco}>
                                <img src={card} alt="icone em grupo"/>
                                <h2>Pagamentos realizados +20</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoardHome