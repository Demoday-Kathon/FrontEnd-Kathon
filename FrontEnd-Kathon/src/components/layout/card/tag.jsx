import styles from './tag.module.css'

function tags ({text }){
    return(

        <>
                    <div className={styles.square}> 
                        <p className={styles.text}> {text} </p> 
                    </div>
        </>

    )
}

export default tags