import styles from './CardPretoBase.module.css'

function CardPretoBase({customClass, children}) {
    return (
        <div className={`${styles.cardPretoBase} ${styles[customClass]}`}>
            {children}
        </div>
    )
}

export default CardPretoBase;