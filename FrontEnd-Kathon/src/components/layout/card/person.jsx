import styles from './person.module.css'

function person ({person }){
    return(

        <>
                    <div className={styles.people}> 
                        <img src={person} alt="" />
                        <img src={person} alt="" />
                        <img src={person} alt="" />
                    </div>
        </>

    )
}

export default person