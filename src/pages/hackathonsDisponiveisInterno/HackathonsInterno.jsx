import styles from './HackathonsInterno.module.css'
import banner from '../../assets/imgs/banner.png'
import accenture from '../../assets/imgs/accenture.png'
import Card from '../../components/layout/card/card'
import Button from "../../components/layout/button/button";
import HeaderInterno from '../../components/layout/headerInterno/HeaderInterno'
import Footer from '../../components/layout/footer/Footer'
import VideoBack2 from "../../assets/imgs/video_back2.mp4";
import { Link } from 'react-router-dom';

function Hackathons() {

    return (
        <div className={styles.hackathons}>
            <HeaderInterno />
            <div className="App">
                <div className="video-background">
                <video autoPlay muted loop className={styles.video2}>
                    <source src={VideoBack2} type="video/mp4" />
                </video>
                <h1 className={styles.hometitle}>
                    Oportunidades para <br/> impulsionar sua carreira
                </h1>
                <div className={styles.caixadescricao}>
                    <p className={styles.descricaodohack}>
                    Os Hackathons ajudam a desenvolver suas habilidades técnicas e
                    comportamentais{" "}
                    </p>
                </div>
                </div>
            </div>

            <container className={styles.homeTitulo}>
                <div className={styles.bg_container}>
                    <Card
                        banner={banner}
                        company_hackathon={accenture}
                        title_hackathon="Hackathon Desvendado: Uma Explanação em Tópicos"
                        acounter="+150 participantes"
                        timeline="20 dias restantes"
                    >
                        <Link className={styles.BotaohackaVisaoGeral} to={"/HackathonVisaoGeralInterno"}>
                            <Button text="Saiba Mais" customClass="buttonAzul1" />
                        </Link>
                    </Card>
                    <Card
                        banner={banner}
                        company_hackathon={accenture}
                        title_hackathon="Hackathon Desvendado: Uma Explanação em Tópicos"
                        acounter="+150 participantes"
                        timeline="20 dias restantes"
                    >
                        <Link className={styles.BotaohackaVisaoGeral} to={"/HackathonVisaoGeralInterno"}>
                            <Button text="Saiba Mais" customClass="buttonAzul1" />
                        </Link>
                    </Card>
                </div>
                <div className={styles.bg_container}>
                    <Card banner={banner} company_hackathon={accenture} title_hackathon='Hackathon Desvendado: Uma Explanação em Tópicos' acounter='+150 participantes' timeline='20 dias restantes' >
                    <Link className={styles.BotaohackaVisaoGeral} to={"/HackathonVisaoGeralInterno"}>
                        <Button text="Saiba Mais" customClass="buttonAzul1" />
                     </Link>
                    </Card>
                    <Card banner={banner} company_hackathon={accenture} title_hackathon='Hackathon Desvendado: Uma Explanação em Tópicos' acounter='+150 participantes' timeline='20 dias restantes' >
                    <Link className={styles.BotaohackaVisaoGeral} to={"/HackathonVisaoGeralInterno"}>
                        <Button text="Saiba Mais" customClass="buttonAzul1" />
                    </Link>
                    </Card>
                </div>
                <div className={styles.bg_container}>
                    <Card banner={banner} company_hackathon={accenture} title_hackathon='Hackathon Desvendado: Uma Explanação em Tópicos' acounter='+150 participantes' timeline='20 dias restantes' >
                        
                    <Link className={styles.BotaohackaVisaoGeral} to={"/HackathonVisaoGeralInterno"}>
                            <Button text="Saiba Mais" customClass="buttonAzul1" />
                    </Link>
                    </Card>
                    <Card banner={banner} company_hackathon={accenture} title_hackathon='Hackathon Desvendado: Uma Explanação em Tópicos' acounter='+150 participantes' timeline='20 dias restantes' >

                    <Link className={styles.BotaohackaVisaoGeral} to={"/HackathonVisaoGeralInterno"}>
                            <Button text="Saiba Mais" customClass="buttonAzul1" />
                    </Link>
                    </Card>
                </div>
            </container>

            <Footer />
        </div>
    )
}

export default Hackathons