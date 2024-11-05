import styles from "./Home.module.css";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import Button from "../../components/layout/button/button";
import BotaoHome from "../../components/BotaozinhoHome/BotaoHome";
import Card_Recomendacao from "../../components/Perfil_aluno/Card_Recomedacao";
import Card from "../../components/layout/card/card";
import CardPretoBase from "../../components/CardPretoBase2/CardPretoBase";
import { Link } from "react-router-dom";

import banner from "../../assets/imgs/banner.png";
import leticia from "../../assets/imgs/Leticia.png";
import Abel from "../../assets/imgs/Abel.png";
import accenture from "../../assets/imgs/accenture.png";
import oracle from "../../assets/imgs/oracle.png";
import ibm from "../../assets/imgs/ibm.png";
import adidas from "../../assets/imgs/adidas.png";
import pagbank from "../../assets/imgs/pagbank.png";
import cardPlanosHome from "../../assets/imgs/cardPlanosHome.png";

import { IoIosAlarm } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { IoStatsChart } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { MdOutlineLaptopMac } from "react-icons/md";
import VideoBack from "../../assets/imgs/video_back.mp4";
import esmeralda from "../../assets/imgs/Esmeralda.svg";
import rubi from "../../assets/imgs/rubi.svg";
import diamante from "../../assets/imgs/diamante.svg";
import LinkComponent from "../../components/layout/link/LinkComponent";

import { motion } from "framer-motion";
import { fadein } from "../../variants";

function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.home}>
      <Header />
      <container className={styles.homeTitulo}>
        {/* teste do back */}
        <div className="App">
          <div className="video-background">
            <video autoPlay muted loop>
              <source src={VideoBack} type="video/mp4" />
            </video>
          </div>
        </div>
        {/* fim do teste */}
        <motion.h1
          className={styles.hometitle}
          variants={fadein("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
        >
          {" "}
          Desafios que{" "}
          <span>
            {" "}
            revelam <br />
          </span>{" "}
          soluções que <span>inovam</span>{" "}
        </motion.h1>
        <div className={styles.botoesHome}>
          <motion.div
            className={styles.cadastrarBtn}
            variants={fadein("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
          >
            <LinkComponent linkTo={"/CadastroEscolha"}>
              <Button customClass="buttonBaixo" text="Cadastre-se" />
            </LinkComponent>
          </motion.div>

          <motion.div
            className={styles.cadastrarBtn}
            variants={fadein("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
          >
            <Button customClass="buttonBaixo2" text="Seja parceiro" />
          </motion.div>
        </div>
        <hr
          style={{
            width: "75%",
            height: "1em",
            margin: "6em 6em ",
            filter: "blur(25px)",
            position: "absolute",
            zIndex: 112,
            opacity: "25%",
          }}
        />
        <hr
          style={{
            width: "75%",
            margin: "6em 6em",
            position: "absolute",
            zIndex: 111,
            opacity: "30%",
          }}
        />
        <motion.div
          className={styles.cardPretoHome}
          variants={fadein("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          <div className={styles.jobequip}>
            <p>Trabalho em equipe</p>
          </div>
          <h1 className={styles.tituloCardPreto}>O que é Hackathon?</h1>
          <p className={styles.descHackathonHome}>
            Hackathon é um evento no qual equipes colaboram para criar{" "}
            <span>soluções inovadoras</span> e criativas, para problemas reais
            ou fictícios de empresas, com <span>prêmios</span> aos vencedores.
          </p>
          <div className={styles.botoesHome1}>
            <BotaoHome
              icon={
                <IoIosAlarm style={{ color: "white", marginRight: "0.5em" }} />
              }
              alt="icone de alarme"
              text="Duração de 24h a 72h"
            />
            <BotaoHome
              icon={
                <FaDollarSign
                  style={{ color: "white", marginRight: "0.5em" }}
                />
              }
              alt="icone de sifrão"
              text="Premiações"
            />
          </div>
          <div className={styles.solucoes}>
            <p>Soluções inovadoras</p>
          </div>
        </motion.div>
        <div className={styles.areaBotao}>
          <LinkComponent linkTo={"/Hackathons"}>
            <Button customClass="buttonRoxo" text="Descobrir Hackathons" />
          </LinkComponent>
        </div>
        <motion.h1
          className={styles.homeTitulo2}
          variants={fadein("up", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          Explore suas{" "}
          <span className={styles.spanHabilidade}> habilidades </span>
        </motion.h1>
        <div className={styles.botoesHome2}>
          <BotaoHome
            customClass="iconCardSecundario"
            icon={
              <TbWorld style={{ color: "#ffffff", marginRight: "0.5em" }} />
            }
            alt="icone de alarme"
            text="Experiência"
          />
          <BotaoHome
            customClass="iconCardSecundario"
            icon={
              <IoStatsChart
                style={{ color: "#ffffff", marginRight: "0.5em" }}
              />
            }
            alt="icone de sifrão"
            text="Desenvolvimento de Habilidades"
          />
          <BotaoHome
            customClass="iconCardSecundario"
            icon={
              <FaUsers style={{ color: "#ffffff", marginRight: "0.5em" }} />
            }
            alt="icone de alarme"
            text="Networking"
          />
          <BotaoHome
            customClass="iconCardSecundario"
            icon={
              <MdOutlineLaptopMac
                style={{ color: "#ffffff", marginRight: "0.5em" }}
              />
            }
            alt="icone de sifrão"
            text="Oportunidades"
          />
        </div>
        <motion.h1
          className={styles.homeTitulo2}
          variants={fadein("up", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          {" "}
          HACKATHONS DISPONÍVEIS{" "}
        </motion.h1>

        <div className={styles.hackathonsDisponiveisHome}>
          <Card
            banner={banner}
            company_hackathon={accenture}
            title_hackathon="Hackathon Desvendado: Uma Explanação em Tópicos"
            acounter="+150 participantes"
            timeline="20 dias restantes"
            customClassPersons="cardHackathonHome"
          >
            <Link
              className={styles.BotaohackaVisaoGeral}
              to={"/HackathonVisaoGeral"}
            >
              <Button text="Saiba Mais" customClass="buttonAzulHome" />
            </Link>
          </Card>
          <Card
            banner={banner}
            company_hackathon={accenture}
            title_hackathon="Hackathon Desvendado: Uma Explanação em Tópicos"
            acounter="+150 participantes"
            timeline="20 dias restantes"
            customClassPersons="cardHackathonHome"
          >
            <Link
              className={styles.BotaohackaVisaoGeral}
              to={"/HackathonVisaoGeral"}
            >
              <Button text="Saiba Mais" customClass="buttonAzulHome" />
            </Link>
          </Card>
        </div>
        <Button text="Veja mais" customClass="vejahackahton" />
        <motion.h1
          className={styles.homeTitulo2}
          variants={fadein("up", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          {" "}
          QUEM JÁ PARTICIPOU, QUER MAIS
        </motion.h1>
        <div className={styles.coments}>
            <Card_Recomendacao
              Perfil_foto={leticia}
              Nome="Leticia Silva"
              Sub_titulo="“KATHON nos surpreendeu com a qualidade das soluções apresentadas pelos jovens. A experiência foi tão positiva que já estamos planejando o próximo hackathon.”"
            />
            <Card_Recomendacao
              Perfil_foto={Abel}
              Nome="João Carlos Pereira"
              Sub_titulo="“Participar do hackathon com a KATHON foi uma experiência incrível! Trabalhei com uma equipe talentosa, aprendi muito e me senti desafiado. Mal posso esperar pelo próximo!”"
            />
            {/* Adicione mais Cards aqui, se necessário */}
        </div>
        <motion.h1
          className={styles.homeTitulo2}
          variants={fadein("up", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          A conexão entre o{" "}
          <span className={styles.spanHabilidade2}> Talento Jovem </span> e a{" "}
          <span className={styles.spanHabilidade2}> Solução </span> dos seus
          desafios
        </motion.h1>
        <div className={styles.caixaCardsPreta}>
          <motion.div
            className={styles.cardPretoMenor}
            variants={fadein("right", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <CardPretoBase customClass="menor">
              <BotaoHome
                customClass="iconCardPreto"
                icon={
                  <IoStatsChart
                    style={{ color: "#A367EB", marginRight: "0.5em" }}
                  />
                }
                alt="icone de sifrão"
                text="Visibilidade"
              />
              <h1 className={styles.tituloCardPretoTalentos}>Visibilidade</h1>
              <p className={styles.descCardPretoTalentos}>
                Aumente a visibilidade da sua marca e atraia novos clientes e
                talentos.
              </p>
            </CardPretoBase>
          </motion.div>

          <motion.div
            className={styles.cardPretoMaior}
            variants={fadein("right", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <CardPretoBase customClass="maior">
              <BotaoHome
                customClass="iconCardPreto"
                icon={
                  <TbWorld style={{ color: "#A367EB", marginRight: "0.5em" }} />
                }
                alt="icone de alarme"
                text="Talentos"
              />
              <h1 className={styles.tituloCardPretoTalentos}>
                Descoberta de novos talentos
              </h1>
              <p className={styles.descCardPretoTalentos}>
                Identifique jovens com habilidades excepcionais e potencial para
                impulsionar seu negócio.
              </p>
            </CardPretoBase>
          </motion.div>

          <motion.div
            className={styles.cardPretoMaior}
            variants={fadein("left", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <CardPretoBase customClass="maior">
              <BotaoHome
                customClass="iconCardPreto"
                icon={
                  <MdOutlineLaptopMac
                    style={{ color: "#A367EB", marginRight: "0.5em" }}
                  />
                }
                alt="icone de sifrão"
                text="Inovação"
              />
              <h1 className={styles.tituloCardPretoTalentos}>
                Cultura de Inovação
              </h1>
              <p className={styles.descCardPretoTalentos}>
                Estimule a cultura de inovação dentro da sua empresa e inspire
                seus colaboradores
              </p>
            </CardPretoBase>
          </motion.div>

          <motion.div
            className={styles.cardPretoMenor4}
            variants={fadein("left", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <CardPretoBase customClass="menor">
              <BotaoHome
                customClass="iconCardPreto"
                icon={
                  <IoStatsChart
                    style={{ color: "#A367EB", marginRight: "0.5em" }}
                  />
                }
                alt="icone de sifrão"
                text="Visibilidade"
              />
              <h1 className={styles.tituloCardPretoTalentos}>
                Resolução de problemas
              </h1>
              <p className={styles.descCardPretoTalentos}>
                Obtenha soluções inovadoras para seus desafios.
              </p>
            </CardPretoBase>
          </motion.div>
        </div>
        <motion.h1
          className={styles.homeTitulo2}
          variants={fadein("up", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          {" "}
          Planos Empresariais
        </motion.h1>
        <motion.div
          className={styles.caixaplanos}
          variants={fadein("right", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          <motion.div
            className={styles.caixinhaplanos1}
            variants={fadein("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            {" "}
            <img src={esmeralda} alt="" className={styles.pedrinhas} />{" "}
            <p>Esmeralda</p>
          </motion.div>
          <motion.div
            className={styles.caixinhaplanos2}
            variants={fadein("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
          >
            <img src={rubi} alt="" className={styles.pedrinhas} />
            <p>Rubi</p>
          </motion.div>
          <motion.div
            className={styles.caixinhaplanos3}
            variants={fadein("up", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
          >
            <img src={diamante} alt="" className={styles.pedrinhas} />
            <p>Diamante</p>
          </motion.div>
        </motion.div>
        <Button text="Conheça os planos" customClass="buttonPlaninhos" />
        <motion.h1
          className={styles.homeTitulo2}
          variants={fadein("up", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          {" "}
          Empresas Parceiras
        </motion.h1>
        <ul className={styles.listCompanyHome}>
          <motion.li
            className={styles.patrociEmpresas}
            variants={fadein("right", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <img src={accenture} alt="" className={styles.empresinhas} />
          </motion.li>
          <motion.li
            className={styles.patrociEmpresas}
            variants={fadein("right", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <img src={pagbank} alt="" className={styles.empresinhas} />
          </motion.li>
          <motion.li
            className={styles.patrociEmpresas}
            variants={fadein("right", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <img src={oracle} alt="" className={styles.empresinhas} />
          </motion.li>
          <motion.li
            className={styles.patrociEmpresas}
            variants={fadein("right", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <img src={ibm} alt="" className={styles.empresinhas} />
          </motion.li>
          <motion.li
            className={styles.patrociEmpresas}
            variants={fadein("right", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <img src={adidas} alt="" className={styles.empresinhas} />
          </motion.li>
        </ul>
      </container>
      <Footer />
    </div>
  );
}

export default Home;
