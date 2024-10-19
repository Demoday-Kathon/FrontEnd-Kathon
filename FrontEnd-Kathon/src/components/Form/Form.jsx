import styles from './Form.module.css'

function Form ({children, customClass}) {
    return (
        <div className={`${styles.formBase} ${styles[customClass]}`}>
            {children}
        </div>
    )
}

export default Form;