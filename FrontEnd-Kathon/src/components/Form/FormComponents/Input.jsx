import styles from './Input.module.css'

function Input({text, type}) {
    return <input className={styles.inputFormsLogin} placeholder={text} type={type}/>
}

export default Input