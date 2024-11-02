import styles from './person.module.css'

function person ({person, customClass }){
    return(

        <>
                    <div className={styles.people}> 
                        <img className={`${styles.img_people} ${styles[customClass]}`} src={person} alt="" />
                    </div>
        </>

    )
}

export default person