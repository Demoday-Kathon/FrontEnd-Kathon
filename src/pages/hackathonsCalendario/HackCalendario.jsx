import Styles from '../../pages/hackathonsCalendario/HackCalendario.module.css'
import IconTempo from '../../assets/imgs/backgrounds/iconTempo.png'
import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer'
import TimelineVertical from '../../components/Timeline/TimeLineVertical'

function HackCalendario(){
    return(
        <>
            <Header />
                <div className={Styles.container}>
                    <div className={Styles.content}>
                        <div className="navBar">
                        </div>
                        <div className={Styles.titulo}>
                            < img src={IconTempo} alt="icone de ampulheta"/>
                            <h1>Linha do tempo</h1>
                        </div>
                        <div className={Styles.timeline}>
                            <TimelineVertical />
                        </div>
                    </div>
                </div> 
            <Footer />
        </>
    ) 
}

export default HackCalendario

