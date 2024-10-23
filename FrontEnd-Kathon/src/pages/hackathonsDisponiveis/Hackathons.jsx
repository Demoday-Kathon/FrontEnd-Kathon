import styles from './Hackathons.module.css'
import banner from '../../assets/imgs/banner.png'
import accenture from '../../assets/imgs/accenture.png'
import Card from '../../components/layout/card/card'
import Button from "../../components/layout/button/button";
import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer'

function Hackathons() {

    return (
        <div className={styles.hackathons}>
            <Header />
            <container className={styles.homeTitulo}>

                <div className={styles.bg_container}>
                    <Card
                        banner={banner}
                        company_hackathon={accenture}
                        title_hackathon="Hackathon Desvendado: Uma Explanação em Tópicos"
                        acounter="+150 participantes"
                        timeline="20 dias restantes"
                    >
                        <Button text="Saiba Mais" customClass="buttonAzul1" />
                    </Card>
                    <Card
                        banner={banner}
                        company_hackathon={accenture}
                        title_hackathon="Hackathon Desvendado: Uma Explanação em Tópicos"
                        acounter="+150 participantes"
                        timeline="20 dias restantes"
                    >
                        <Button text="Saiba Mais" customClass="buttonAzul1" />
                    </Card>
                </div>
                <div className={styles.bg_container}>
                    <Card banner={banner} company_hackathon={accenture} title_hackathon='Hackathon Desvendado: Uma Explanação em Tópicos' acounter='+150 participantes' timeline='20 dias restantes' >
                        <Button text="Saiba Mais" customClass="buttonAzul1" />
                    </Card>
                    <Card banner={banner} company_hackathon={accenture} title_hackathon='Hackathon Desvendado: Uma Explanação em Tópicos' acounter='+150 participantes' timeline='20 dias restantes' >

                        <Button text="Saiba Mais" customClass="buttonAzul1" />
                    </Card>
                </div>
                <div className={styles.bg_container}>
                    <Card banner={banner} company_hackathon={accenture} title_hackathon='Hackathon Desvendado: Uma Explanação em Tópicos' acounter='+150 participantes' timeline='20 dias restantes' >
                        
                        <Button text="Saiba Mais" customClass="buttonAzul1" />
                    </Card>
                    <Card banner={banner} company_hackathon={accenture} title_hackathon='Hackathon Desvendado: Uma Explanação em Tópicos' acounter='+150 participantes' timeline='20 dias restantes' >

                        <Button text="Saiba Mais" customClass="buttonAzul1" />
                    </Card>
                </div>
            </container>

            <Footer />
        </div>
    )
}

export default Hackathons