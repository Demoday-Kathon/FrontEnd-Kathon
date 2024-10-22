import styles from './Home.module.css'
import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer'
import Button from '../../components/layout/button/button'
import BotaoHome from '../../components/BotaozinhoHome/BotaoHome'
import Card_Recomendacao from '../../components/Perfil_aluno/Card_Recomedacao'
import Card from '../../components/layout/card/card'
import CardPretoBase from '../../components/CardPretoBase2/CardPretoBase'


import banner from '../../assets/imgs/banner.png'
import leticia from '../../assets/imgs/Leticia.png'
import Abel from '../../assets/imgs/Abel.png'
import accenture from '../../assets/imgs/accenture.png'
import oracle  from '../../assets/imgs/oracle.png'
import ibm from  '../../assets/imgs/ibm.png'
import adidas from  '../../assets/imgs/adidas.png'
import pagbank from   '../../assets/imgs/pagbank.png'
import cardPlanosHome from  '../../assets/imgs/cardPlanosHome.png'


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

                <hr style={{ width: "75%", height: "1em", margin: "6em 6em ", filter: "blur(25px)", position: "absolute", zIndex: 112, opacity: "25%" }} />
                <hr style={{ width: "75%", margin: "6em 6em", position: "absolute", zIndex: 111, opacity: "30%" }} />



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
                    <BotaoHome customClass="iconCardSecundario" icon={<TbWorld style={{ color: '#ffffff', marginRight: '0.5em' }} />} alt="icone de alarme" text="Experiência" />
                    <BotaoHome customClass="iconCardSecundario" icon={<IoStatsChart style={{ color: '#ffffff', marginRight: '0.5em' }} />} alt="icone de sifrão" text="Desenvolvimento de Habilidades" />
                    <BotaoHome customClass="iconCardSecundario" icon={<FaUsers style={{ color: '#ffffff', marginRight: '0.5em' }} />} alt="icone de alarme" text="Networking" />
                    <BotaoHome customClass="iconCardSecundario" icon={<MdOutlineLaptopMac style={{ color: '#ffffff', marginRight: '0.5em' }} />} alt="icone de sifrão" text="Oportunidades" />
                </div>



                <h1 className={styles.homeTitulo2}> HACKATHONS DISPONÍVEIS </h1>
                <div className={styles.hackathonsDisponiveisHome}>
                    <Card banner={banner} company_hackathon={accenture} title_hackathon='Hackathon Desvendado: Uma Explanação em Tópicos' acounter='+150 participantes' timeline='20 dias restantes' />
                    <Card banner={banner} company_hackathon={accenture} title_hackathon='Hackathon Desvendado: Uma Explanação em Tópicos' acounter='+150 participantes' timeline='20 dias restantes' />

                </div>



                <h1 className={styles.homeTitulo2}> QUEM JÁ PARTICIPOU, QUER MAIS</h1>
                <div className={styles.coments}>
                    <Card_Recomendacao customClass="cardRecomendacaoHome" Perfil_foto={leticia} Nome="Accenture " Sub_titulo="“KATHON nos surpreendeu com a qualidade das soluções apresentadas pelos jovens. A experiência foi tão positiva que já estamos planejando o próximo hackathon.”">

                        <Button customClass="buttonBaixo3" text="Seja parceiro" />
                    </Card_Recomendacao>


                    <Card_Recomendacao customClass="cardRecomendacaoHome" Perfil_foto={Abel} Nome="João Carlos Pereira" Sub_titulo="O KATHON foi uma oportunidade única de colocar em prática tudo o que aprendi e ainda conhecer profissionais incríveis. Recomendo a todos ">
                        <Button customClass="buttonBaixo3" text="Iniciar" />
                    </Card_Recomendacao>
                </div>

                <h1 className={styles.homeTitulo2}>A conexão entre o <span className={styles.spanHabilidade2}> Talento Jovem </span> e a <span className={styles.spanHabilidade2}> Solução </span> dos seus desafios</h1>

                <div className={styles.caixaCardsPreta}>
                    <CardPretoBase customClass="menor">
                        <BotaoHome customClass="iconCardPreto" icon={<IoStatsChart style={{ color: '#A367EB', marginRight: '0.5em' }} />} alt="icone de sifrão" text="Visibilidade" />
                        <h1 className={styles.tituloCardPretoTalentos}>Visibilidade</h1>
                        <p className={styles.descCardPretoTalentos}>
                            Aumente a visibilidade da sua marca e atraia novos clientes e talentos.
                        </p>
                    </CardPretoBase>


                    <CardPretoBase customClass="maior">
                        <BotaoHome customClass="iconCardPreto" icon={<TbWorld style={{ color: '#A367EB', marginRight: '0.5em' }} />} alt="icone de alarme" text="Talentos" />
                        <h1 className={styles.tituloCardPretoTalentos}>Descoberta de novos talentos</h1>
                        <p className={styles.descCardPretoTalentos}>
                            Identifique jovens com habilidades excepcionais e potencial para impulsionar seu negócio.
                        </p>
                    </CardPretoBase>



                    <CardPretoBase customClass="maior">
                        <BotaoHome customClass="iconCardPreto" icon={<MdOutlineLaptopMac style={{ color: '#A367EB', marginRight: '0.5em' }} />} alt="icone de sifrão" text="Inovação" />
                        <h1 className={styles.tituloCardPretoTalentos}>Cultura de Inovação</h1>
                        <p className={styles.descCardPretoTalentos}>
                            Estimule a cultura de inovação dentro da sua empresa e inspire seus colaboradores
                        </p>
                    </CardPretoBase>



                    <CardPretoBase customClass="menor">

                        <BotaoHome customClass="iconCardPreto" icon={<FaUsers style={{ color: '#A367EB', marginRight: '0.5em' }} />} alt="icone de alarme" text="Resolução" />
                        <h1 className={styles.tituloCardPretoTalentos}>Resolução rápida de problemas</h1>
                        <p className={styles.descCardPretoTalentos}>
                            Obtenha soluções inovadoras para seus desafios.
                        </p>
                    </CardPretoBase>



                </div>

                <h1 className={styles.homeTitulo2}> Planos Empresariais</h1>

                <div className={styles.planosEmpresariaisDiv}>
                    <img src={cardPlanosHome} alt="" />
                    <Button customClass='buttonPlanosEmpresarias' text="Conheça os planos" />
                </div>


                <h1 className={styles.homeTitulo2}> Empresas Parceiras</h1>
                <ul className={styles.listCompanyHome}>
                    <li>
                        <img src={accenture} alt="" />
                    </li>
                    <li>
                        <img src={pagbank} alt="" />
                    </li>
                    <li>
                        <img src={oracle} alt="" />
                    </li>
                    <li>
                        <img src={ibm} alt="" />
                    </li>
                    <li>
                        <img src={adidas} alt="" />
                    </li>
                </ul>



            </container>
            <Footer />
        </div>
    )
}

export default Home