import HeaderComunidade from '../../components/HeaderComunidade/HeaderComunidade'
import BannerIMG from '../../assets/imgs/background-comunity.png'
import styles from './Comunidades.module.css'

function Comunidades() {
    return (
        <div className={styles.containerComunidadeVisao}>

        <HeaderComunidade />

        <div className={styles.Bloco}>

            <div className={styles.blocoInterno}>
                <img className={styles.BannerIMG} src={BannerIMG} alt="" />
            </div>

        </div>
        </div>
    )
}

export default Comunidades