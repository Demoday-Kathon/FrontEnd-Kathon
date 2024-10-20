import Styles from '../../pages/dashBoardHome/DashBoardHome.module.css'
import HeaderRecrutamento from '../../components/layout/HeaderRecrutamento/HeaderRecrutamento'
import TtlDash from '../../components/tittleDashBoard/TtlDash'

function DashBoardHome(text){
    return(
        <div className={Styles.container}>
            <div className={Styles.containerCinza}>
                <HeaderRecrutamento />
                <div className={Styles.titulo}>
                    <TtlDash
                        texto="Hackathons"
                    />
                </div>
            </div>
        </div>
    )
}

export default DashBoardHome