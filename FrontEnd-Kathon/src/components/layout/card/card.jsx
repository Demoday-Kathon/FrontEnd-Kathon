import styles from '../card/card.module.css'
import Tags from './tag.jsx'
import Person from './person.jsx'

function card ({banner, company, title, acounter, }){
    return(

        <>
        <div className={styles.card}>
            <img className={styles.banner} src={banner} alt="" />
            <img className={styles.company} src={company} alt="" />
            <div className={styles.container}>
                <h3 className={styles.title}> {title} </h3>
                <div className={styles.tags}>
                    <Tags/>
                    <Tags/>
                    <Tags/>
                </div>
                <div className={styles.participants}>
                    <Person/>
                    <Person/>
                    <Person/>
                    <p> {acounter} </p>
                </div>
            </div>
        </div>
        </>


    )
}

export default card