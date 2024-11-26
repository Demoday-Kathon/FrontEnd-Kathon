import styles from './CardBrancoBase.module.css'

function CardBrancoBase({children, customClass}) {
    return (
        <div className={`${styles.cardBrancoBase} ${styles[customClass]}`}>
            {children}
        </div>
    )
}

export default CardBrancoBase;