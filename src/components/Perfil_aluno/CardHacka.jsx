import Styles from './CardHacka.module.css'
import Tags from '../layout/card/tag.jsx'
import Person from '../layout/card/person.jsx'
import person1 from '../../assets/imgs/pessoa1.png'
import person2 from '../../assets/imgs/pessoa2.png'
import person3 from '../../assets/imgs/pessoa3.png'
import Button from '../layout/button/button.jsx'
import styles from '../layout/card/card.jsx'


function CardHacka({banner, title_hackathon,Icone_menor }){
    return(

        <div className={Styles.card}>
            <img className={Styles.banner} src={banner} alt="Banner Hackathon" />
            <div className={Styles.container}>
                <img className={Styles.Icone_menor} src={Icone_menor} alt="Icone" />
                <div className={Styles.title_hackathon}>
                    {title_hackathon}
                </div>
            </div>
        </div>
      

    )
}


export default CardHacka