import styles from './Input.module.css'

function Input({text, type, customClass}) {
    return <input className={`${styles.inputFormsLogin} ${styles[customClass]}`} placeholder={text} type={type}/>
}

export default Input