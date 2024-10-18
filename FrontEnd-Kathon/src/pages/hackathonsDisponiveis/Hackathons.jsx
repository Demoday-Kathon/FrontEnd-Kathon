import styles from './Hackathons.module.css'
import banner from '../../assets/imgs/banner.png'
import accenture from '../../assets/imgs/accenture.png'
import Card from '../../components/layout/card/card'
import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer'

function Hackathons() {
    
    return (
        <>
            <Header/>
             <Card banner={banner} company_hackathon={accenture} title_hackathon='Hackathon Desvendado: Uma Explanação em Tópicos'  acounter='+150 participantes' timeline='20 dias restantes'/>
             <Footer/>
        </>
    )
}

export default Hackathons