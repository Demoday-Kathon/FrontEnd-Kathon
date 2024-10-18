import styles from './Home.module.css'
import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer'
import Button from '../../components/layout/button/button'
import BotaoHome from '../../components/BotaozinhoHome/BotaoHome'

import { IoIosAlarm } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa6";

function Home() {
    return (
        <div className={styles.home}>
            <Header />
            <container className={styles.homeTitulo}>
                <h1 className={styles.homeTitulo}> Desafios que  <span> revelam</span> soluções que <span>inovam</span> </h1>
                <div className={styles.botoesHome}>
                    <Button customClass="buttonBaixo" text="Cadastre-se" />
                    <Button customClass="buttonBaixo2" text="Seja parceiro" />
                </div>

                <div className={styles.cardPretoHome}>
                    <h1 className={styles.tituloCardPreto}>O que é hackathon?</h1>
                    <p className={styles.descHackathonHome}>
                        Hackathon é um evento no qual equipes colaboram para criar <span>soluções inovadoras</span> e criativas, para problemas reais ou fictícios de empresas, com <span>prêmios</span> aos vencedores.
                    </p>
                    <div className={styles.botoesHome1}>
                        <BotaoHome icon={<IoIosAlarm style={{color:'#553375', marginRight:'0.5em'}}/>} alt="icone de alarme" text="Duração de 24h a 72h"/>
                        <BotaoHome icon={<FaDollarSign style={{color:'#553375', marginRight:'0.5em'}}/>} alt="icone de sifrão" text="Premiações"/>
                    </div>

                </div>

                <div className={styles.areaBotao}>
                    <Button customClass='buttonRoxo' text="Descobrir Hackathons"/>
                </div>


            </container>
            <Footer />
        </div>
    )
}

export default Home