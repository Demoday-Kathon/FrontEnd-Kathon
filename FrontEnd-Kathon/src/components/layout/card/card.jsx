import styles from '../card/card.module.css'
import Tags from './tag.jsx'
import Person from './person.jsx'
import person1 from '../../../assets/imgs/pessoa1.png'
import person2 from '../../../assets/imgs/pessoa2.png'
import person3 from '../../../assets/imgs/pessoa3.png'
import Button from '../button/button.jsx'

function card ({banner, company_hackathon, title_hackathon, acounter, timeline }){
    return(
        <>

        <div className={styles.card}>
            <img className={styles.banner} src={banner} alt="" />
            <img className={styles.company_hackathon} src={company_hackathon} alt="" />
            <div className={styles.container}>
                <h3 className={styles.title_hackathon}> {title_hackathon} </h3>
                <div className={styles.tags}>
                    <Tags text='Presencial'/>
                </div>
                <div className={styles.participants}>
                    <Person person={person1}/>
                    <Person person={person2}/>
                    <Person person={person3}/>
                    <p className={styles.acounter}> {acounter} </p>
                </div>
                <div className={styles.container2}>
                    <div className={styles.timeline}> 
                    <p className={styles.acounter2}> {timeline} </p>
                    </div>
                </div>
                <div className={styles.button_hackathon}>
                <Button text='Saiba Mais'/>
                </div>
            </div>
        </div>
        </>


    )
}

export default card