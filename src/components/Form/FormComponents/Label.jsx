import styles from './Label.module.css'

function Label({text, customClass}) {
    return (
        <label className={`${styles[customClass]}`}>
            {text}

        </label>
        
    )
}

export default Label