import styles from './Input.module.css';

function Input({ text, type, customClass, onChange }) {
    return (
        <input
            className={`${styles.inputFormsLogin} ${styles[customClass]}`}
            placeholder={text}
            type={type}
            onChange={onChange}
        />
    );
}

export default Input;
