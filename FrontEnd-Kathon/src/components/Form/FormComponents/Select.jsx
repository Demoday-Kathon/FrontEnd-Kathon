import styles from './Select.module.css'

function Select({ children, customClass }) {
    return (
        <select className={`${styles.selectFormsLogin} ${styles[customClass]}`}>
            {children}
        </select>

    )

}

export default Select