import styles from './BotaoHome.module.css'

function BotaoHome({ icon, text, customClass }) {  
    return (
        <div className={`${styles.botaohome} ${styles[customClass]}`}>
            {icon} 
            <h5 className={styles.textBotao}> {text} </h5>
        </div>
    )
}

export default BotaoHome
