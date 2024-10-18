import styles from './Home.module.css'
import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer'
import Button from '../../components/layout/button/button'
import BotaoHome from '../../components/BotaozinhoHome/BotaoHome'
import Card_Recomendacao from '../../components/Perfil_aluno/Card_Recomedacao'


import leticia from '../../assets/imgs/Leticia.png'
import Abel from '../../assets/imgs/Abel.png'

import { IoIosAlarm } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { IoStatsChart } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { MdOutlineLaptopMac } from "react-icons/md";

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
                        <BotaoHome icon={<IoIosAlarm style={{ color: '#553375', marginRight: '0.5em' }} />} alt="icone de alarme" text="Duração de 24h a 72h" />
                        <BotaoHome icon={<FaDollarSign style={{ color: '#553375', marginRight: '0.5em' }} />} alt="icone de sifrão" text="Premiações" />
                    </div>

                </div>

                <div className={styles.areaBotao}>
                    <Button customClass='buttonRoxo' text="Descobrir Hackathons" />
                </div>

                <h1 className={styles.homeTitulo2}>Explore suas <span className={styles.spanHabilidade}> habilidades </span></h1>

                <div className={styles.botoesHome2}>
                    <BotaoHome customClass = "iconCardSecundario" icon={<TbWorld style={{ color: '#ffffff', marginRight: '0.5em' }} />} alt="icone de alarme" text="Experiência" />
                    <BotaoHome customClass = "iconCardSecundario" icon={<IoStatsChart style={{ color: '#ffffff', marginRight: '0.5em' }} />} alt="icone de sifrão" text="Desenvolvimento de Habilidades" />
                    <BotaoHome customClass = "iconCardSecundario" icon={<FaUsers style={{ color: '#ffffff', marginRight: '0.5em' }} />} alt="icone de alarme" text="Networking" />
                    <BotaoHome customClass = "iconCardSecundario" icon={<MdOutlineLaptopMac style={{ color: '#ffffff', marginRight: '0.5em' }} />} alt="icone de sifrão" text="Oportunidades" />
                </div>



                <h1 className={styles.homeTitulo2}> HACKATHONS DISPONÍVEIS </h1>

                <h1 className={styles.homeTitulo2}> QUEM JÁ PARTICIPOU, QUER MAIS</h1>
                <div className={styles.coments}>
                    <Card_Recomendacao  customClass="cardRecomendacaoHome" Perfil_foto={leticia} Nome="Accenture " Sub_titulo="“KATHON nos surpreendeu com a qualidade das soluções apresentadas pelos jovens. A experiência foi tão positiva que já estamos planejando o próximo hackathon.”">

                        <Button customClass="buttonBaixo3" text="Seja parceiro" />
                    </Card_Recomendacao>


                    <Card_Recomendacao customClass="cardRecomendacaoHome" Perfil_foto={Abel} Nome="João Carlos Pereira" Sub_titulo="O KATHON foi uma oportunidade única de colocar em prática tudo o que aprendi e ainda conhecer profissionais incríveis. Recomendo a todos ">
                        <Button customClass="buttonBaixo3" text="Iniciar" />
                    </Card_Recomendacao>
                </div>


            </container>
            <Footer />
        </div>
    )
}

export default Home