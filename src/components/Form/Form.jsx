import styles from './Form.module.css';

function Form({ children, customClass, onSubmit }) {
    return (
        <form className={`${styles.formBase} ${styles[customClass]}`} onSubmit={onSubmit}>
            {children}
        </form>
    );
}

export default Form;
