import React, {useEffect, useState} from "react";
import styles from "./HackathonsInterno.module.css";
import banner from "../../assets/imgs/banner.png";
import accenture from "../../assets/imgs/accenture.png";
import Card from "../../components/layout/card/card";
import Button from "../../components/layout/button/button";
import Header from "../../components/layout/headerInterno/HeaderInterno";
import HeaderMobile from "../../components/HeaderFeedInterno/HeaderFeedInterno";
import Footer from "../../components/layout/footer/Footer";
import { Link } from "react-router-dom";
import VideoBack2 from "../../assets/imgs/video_back - kathon.mp4";
import Tag from "../../components/layout/card/tag";
import Person from "../../components/layout/card/person";
import person1 from "../../assets/imgs/pessoa1.png";
import person2 from "../../assets/imgs/pessoa2.png";
import person3 from "../../assets/imgs/pessoa3.png";

function Hackathons() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 868px)");
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div className={styles.hackathons}>
      {isMobile? <HeaderMobile /> : <Header />}
      {/* TESTE DO VIDEO */}
      <div className="App">
        <div className="video-background">
          <video autoPlay muted loop className={styles.video2}>
            <source src={VideoBack2} type="video/mp4" />
          </video>
          <h1 className={styles.hometitle}>
            Oportunidades para impulsionar sua carreira
          </h1>
          <div className={styles.caixadescricao}>
            <p className={styles.descricaodohack}>
              Os Hackathons ajudam a desenvolver suas habilidades técnicas e
              comportamentais{" "}
            </p>
          </div>
        </div>
      </div>
      {/* FIM DO TESTE */}
      <div className={styles.blurdovideo}></div>

      <div className={styles.verificacao}>
        <h1>
          Verifique os Hackathons <br /> disponíveis e se desenvolva
        </h1>
      </div>
      <container className={styles.homeTitulo}>
        <div className={styles.hackathonsDisponiveisHome}>
          <div className={styles.rowHackathonsDisp}>
            <Card
              customClass="cardHackathonDisponiveis"
              bannerHacka={banner}
              titleHacka="Hackathon Desvendado: Uma Explanação em Tópicos"
              locationHacka="São Paulo, SP"
              qtdparticipants="+150 participantes"
              timeline="20 dias restantes"
              children1={
                <div className={styles.tagsHacka}>
                  <Tag text="Presencial" customClass="roxoHacka" />
                  <Tag text="Inscrições Abertas" customClass="azulHacka" />
                  <Tag text="Impacto Social" customClass="verdeAguaHacka" />
                  <Tag text="Sustentabilidade" customClass="azulClaroHacka" />
                </div>
              }
              children3={
                <div className={styles.people}>
                  <Person person={person1} customClass="fotosHacka" />
                  <Person person={person2} customClass="fotosHacka" />
                  <Person person={person3} customClass="fotosHacka" />
                </div>
              }
              children2={
                <Button text="Saiba Mais" customClass="buttonAzulHacka" />
              }
            ></Card>

            <Card
              customClass="cardHackathonDisponiveis"
              bannerHacka={banner}
              titleHacka="Hackathon Desvendado: Uma Explanação em Tópicos"
              locationHacka="São Paulo, SP"
              qtdparticipants="+150 participantes"
              timeline="20 dias restantes"
              children1={
                <div className={styles.tagsHacka}>
                  <Tag text="Presencial" customClass="roxoHacka" />
                  <Tag text="Inscrições Abertas" customClass="azulHacka" />
                  <Tag text="Impacto Social" customClass="verdeAguaHacka" />
                  <Tag text="Sustentabilidade" customClass="azulClaroHacka" />
                </div>
              }
              children3={
                <div className={styles.people}>
                  <Person person={person1} customClass="fotosHacka" />
                  <Person person={person2} customClass="fotosHacka" />
                  <Person person={person3} customClass="fotosHacka" />
                </div>
              }
              children2={
                <Button text="Saiba Mais" customClass="buttonAzulHacka" />
              }
            ></Card>
          </div>
        </div>

        <div className={styles.hackathonsDisponiveisHome}>
          <div className={styles.rowHackathonsDisp}>
            <Card
              customClass="cardHackathonDisponiveis"
              bannerHacka={banner}
              titleHacka="Hackathon Desvendado: Uma Explanação em Tópicos"
              locationHacka="São Paulo, SP"
              qtdparticipants="+150 participantes"
              timeline="20 dias restantes"
              children1={
                <div className={styles.tagsHacka}>
                  <Tag text="Presencial" customClass="roxoHacka" />
                  <Tag text="Inscrições Abertas" customClass="azulHacka" />
                  <Tag text="Impacto Social" customClass="verdeAguaHacka" />
                  <Tag text="Sustentabilidade" customClass="azulClaroHacka" />
                </div>
              }
              children3={
                <div className={styles.people}>
                  <Person person={person1} customClass="fotosHacka" />
                  <Person person={person2} customClass="fotosHacka" />
                  <Person person={person3} customClass="fotosHacka" />
                </div>
              }
              children2={
                <Button text="Saiba Mais" customClass="buttonAzulHacka" />
              }
            ></Card>

            <Card
              customClass="cardHackathonDisponiveis"
              bannerHacka={banner}
              titleHacka="Hackathon Desvendado: Uma Explanação em Tópicos"
              locationHacka="São Paulo, SP"
              qtdparticipants="+150 participantes"
              timeline="20 dias restantes"
              children1={
                <div className={styles.tagsHacka}>
                  <Tag text="Presencial" customClass="roxoHacka" />
                  <Tag text="Inscrições Abertas" customClass="azulHacka" />
                  <Tag text="Impacto Social" customClass="verdeAguaHacka" />
                  <Tag text="Sustentabilidade" customClass="azulClaroHacka" />
                </div>
              }
              children3={
                <div className={styles.people}>
                  <Person person={person1} customClass="fotosHacka" />
                  <Person person={person2} customClass="fotosHacka" />
                  <Person person={person3} customClass="fotosHacka" />
                </div>
              }
              children2={
                <Button text="Saiba Mais" customClass="buttonAzulHacka" />
              }
            ></Card>
          </div>
        </div>

        <div className={styles.hackathonsDisponiveisHome}>
          <div className={styles.rowHackathonsDisp}>
            <Card
              customClass="cardHackathonDisponiveis"
              bannerHacka={banner}
              titleHacka="Hackathon Desvendado: Uma Explanação em Tópicos"
              locationHacka="São Paulo, SP"
              qtdparticipants="+150 participantes"
              timeline="20 dias restantes"
              children1={
                <div className={styles.tagsHacka}>
                  <Tag text="Presencial" customClass="roxoHacka" />
                  <Tag text="Inscrições Abertas" customClass="azulHacka" />
                  <Tag text="Impacto Social" customClass="verdeAguaHacka" />
                  <Tag text="Sustentabilidade" customClass="azulClaroHacka" />
                </div>
              }
              children3={
                <div className={styles.people}>
                  <Person person={person1} customClass="fotosHacka" />
                  <Person person={person2} customClass="fotosHacka" />
                  <Person person={person3} customClass="fotosHacka" />
                </div>
              }
              children2={
                <Button text="Saiba Mais" customClass="buttonAzulHacka" />
              }
            ></Card>

            <Card
              customClass="cardHackathonDisponiveis"
              bannerHacka={banner}
              titleHacka="Hackathon Desvendado: Uma Explanação em Tópicos"
              locationHacka="São Paulo, SP"
              qtdparticipants="+150 participantes"
              timeline="20 dias restantes"
              children1={
                <div className={styles.tagsHacka}>
                  <Tag text="Presencial" customClass="roxoHacka" />
                  <Tag text="Inscrições Abertas" customClass="azulHacka" />
                  <Tag text="Impacto Social" customClass="verdeAguaHacka" />
                  <Tag text="Sustentabilidade" customClass="azulClaroHacka" />
                </div>
              }
              children3={
                <div className={styles.people}>
                  <Person person={person1} customClass="fotosHacka" />
                  <Person person={person2} customClass="fotosHacka" />
                  <Person person={person3} customClass="fotosHacka" />
                </div>
              }
              children2={
                <Button text="Saiba Mais" customClass="buttonAzulHacka" />
              }
            ></Card>
          </div>
        </div>
        <div className={styles.bg_container}></div>
        <div className={styles.bg_container}></div>
      </container>

      <Footer />
    </div>
  );
}

export default Hackathons;
