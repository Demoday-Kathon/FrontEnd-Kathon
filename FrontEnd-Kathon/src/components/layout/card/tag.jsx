import styles from './tag.module.css'

function tags ({text , CustomClass }){
    return(

        <>
               <button className={`${styles[CustomClass]} ${styles.roxo}`}> {text} </button>
        </>

    )
}

export default tags