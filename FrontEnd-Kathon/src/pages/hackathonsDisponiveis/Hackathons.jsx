import styles from './Hackathons.module.css'
import banner from '../../assets/imgs/banner.png'
import accenture from '../../assets/imgs/accenture.png'
import Card from '../../components/layout/card/card'

function Hackathons() {
    return (
        <>
             <Card banner={banner} company={accenture} tittle='Hackathon Desvendado: Uma Explanação em Tópicos' tags='Presencial' />
        
        </>
    )
}

export default Hackathons