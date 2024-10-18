import styles from './person.module.css'

function person ({person }){
    return(

        <>
                    <div className={styles.people}> 
                        <img className={styles.img_people} src={person} alt="" />
                    </div>
        </>

    )
}

export default person