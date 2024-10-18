import styles from './BotaoHome.module.css'

function BotaoHome({ icon, text }) {  
    return (
        <div className={styles.botaohome}>
            {icon} 
            <h5 className={styles.textBotao}> {text} </h5>
        </div>
    )
}

export default BotaoHome
