import seta from '../../../assets/imgs/seta.svg'
import styles from '../button/button.module.css'

function button({text, seta}){

    return(
        <div className={styles.button}> 
            <p> {text} </p>
            <img className={styles.seta} src={seta} alt="seta"/>
        </div>
    )
}

export default button