import seta from '../../../assets/imgs/seta.png'
import styles from '../button/button.module.css'

function button(){

    return(
        <div className={styles.button}> 
            <p> Entrar </p>
            <img className={styles.seta} src={seta} alt="seta"/>
        </div>

    )
}

export default button