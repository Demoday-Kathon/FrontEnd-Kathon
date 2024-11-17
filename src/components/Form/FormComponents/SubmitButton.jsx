import styles from './SubmitButton.module.css'

function SubmitButton({text}) {
    return <button type='submit' className={styles.buttonSubmit}>{text}</button>
        
       
        

}

export default SubmitButton