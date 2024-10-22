import Styles from '../../pages/dashBoardHome/DashBoardHome.module.css'
import HeaderRecrutamento from '../../components/layout/HeaderRecrutamento/HeaderRecrutamento'
import CardBrancoBase from '../../components/CardBrancoBase/CardBrancoBase'
import TtlDash from '../../components/tittleDashBoard/TtlDash'

function DashBoardHome(text) {
    return (
        <div className={Styles.container}>
                <CardBrancoBase customClass='cardBrancoDashBoard'>
                    <div className={Styles.conteudo}>
                        <div className={Styles.navBar}>
                            <HeaderRecrutamento />
                        </div>
                        <div className={Styles.ladoDireito}>
                            <div className={Styles.top}>
                                <div className={Styles.topBarLeft}>
                                   <h1 className={Styles.empresa}>Olá, nome da empresa!</h1>
                                </div>
                                <div className={Styles.topBarRight}>
                                     <h2>Esq</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBrancoBase>
        </div>
    )
}

export default DashBoardHome