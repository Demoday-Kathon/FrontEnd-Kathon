import styles from './tag.module.css'

function tags ({text , customClass }){
    return(

        <>
               <button className={`${styles.base} ${styles[customClass]} `}> {text} </button>
        </>

    )
}

export default tags