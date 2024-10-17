import styles from '../card/card.module.css'
import Tags from './tag.jsx'
import Person from './person.jsx'

function card ({banner, company_hackathon, title_hackathon, acounter, }){
    return(
        <>
            <img className={styles.banner} src={banner} alt="" />
            <img className={styles.company_hackathon} src={company_hackathon} alt="" />
            <div className={styles.container}>
                <h3 className={styles.title_hackathon}> {title_hackathon} </h3>
                <div className={styles.tags}>
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
        </>


    )
}

export default card