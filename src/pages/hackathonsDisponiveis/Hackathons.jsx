import { React, useEffect, useState } from "react";
import styles from "./Hackathons.module.css";
import banner from "../../assets/imgs/banner.png";
import brasil from "../../assets/imgs/hack_brasil.png";
import ideathon from "../../assets/imgs/ideathon.png";
import gov from "../../assets/imgs/gov.png";
import sesi from "../../assets/imgs/sesi.png";
import start from "../../assets/imgs/start.png";
import accenture from "../../assets/imgs/accenture.png";
import Card from "../../components/layout/card/card";
import Button from "../../components/layout/button/button";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import LinkComponent from "../../components/layout/link/LinkComponent";
import VideoBack2 from "../../assets/imgs/video_back - kathon.mp4";
import Tag from "../../components/layout/card/tag";
import HeaderMobile from "../../components/HeaderFeed/HeaderFeed";
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

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div className={styles.hackathons}>
      {isMobile ? <HeaderMobile /> : <Header />}
      {/* TESTE DO VIDEO */}
      <div className={styles.App}>
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
              bannerHacka={ideathon}
              titleHacka="Ideathon CREA-SP 2024"
              locationHacka="Coworking Crea-SP, São Paulo - SP"
              qtdparticipants="+620 participantes"
              timeline="Finalizado"
              children1={
                <div className={styles.tagsHacka}>
                  <Tag text="Presencial" customClass="roxoHacka" />
                  <Tag text="Inscrições Encerradas" customClass="azulHacka" />
                  <Tag
                    text="Impacto Empresarial"
                    customClass="verdeAguaHacka"
                  />
                  <Tag text="Engajamento" customClass="azulClaroHacka" />
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
                <LinkComponent linkTo={"/HackathonVisaoGeralCREA"}>
                  <Button text="Saiba Mais" customClass="buttonAzulHacka" />
                </LinkComponent>
              }
            ></Card>

            <Card
              customClass="cardHackathonDisponiveis"
              bannerHacka={gov}
              titleHacka="Hackathon Compras Governamentais"
              locationHacka="São Paulo, SP"
              qtdparticipants="+200 participantes"
              timeline="Finalizado"
              children1={
                <div className={styles.tagsHacka}>
                  <Tag text="Online" customClass="roxoHacka" />
                  <Tag text="Inscrições Encerradas" customClass="azulHacka" />
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
                <LinkComponent linkTo={"/HackathonVisaoGeralHCG"}>
                  <Button text="Saiba Mais" customClass="buttonAzulHacka" />
                </LinkComponent>
              }
            ></Card>
          </div>
        </div>

        <div className={styles.hackathonsDisponiveisHome}>
          <div className={styles.rowHackathonsDisp}>
            <Card
              customClass="cardHackathonDisponiveis"
              bannerHacka={brasil}
              titleHacka="Hackathon Rede +Brasil"
              locationHacka="Brasil"
              qtdparticipants="+200 participantes"
              timeline="Finalizado"
              children1={
                <div className={styles.tagsHacka}>
                  <Tag text="Online" customClass="roxoHacka" />
                  <Tag text="Inscrições Encerradas" customClass="azulHacka" />
                  <Tag text="Setor Público" customClass="verdeAguaHacka" />
                  <Tag text="Tecnologia" customClass="azulClaroHacka" />
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
                <LinkComponent linkTo={"/HackathonVisaoGeralBRASIL"}>
                  <Button text="Saiba Mais" customClass="buttonAzulHacka" />
                </LinkComponent>
              }
            ></Card>

            <Card
              customClass="cardHackathonDisponiveis"
              bannerHacka={start}
              titleHacka="START Hack 2025"
              locationHacka="St. Gallen, Suiça"
              qtdparticipants="+600 participantes"
              timeline="3 meses restantes"
              children1={
                <div className={styles.tagsHacka}>
                  <Tag text="Online" customClass="roxoHacka" />
                  <Tag text="Inscrições Abertas" customClass="azulHacka" />
                  <Tag text="Inovação" customClass="verdeAguaHacka" />
                  <Tag text="Tecnologia" customClass="azulClaroHacka" />
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
                <LinkComponent linkTo={"/HackathonVisaoGeralSTART"}>
                  <Button text="Saiba Mais" customClass="buttonAzulHacka" />
                </LinkComponent>
              }
            ></Card>
          </div>
        </div>

        <div className={styles.hackathonsDisponiveisHome}>
          <div className={styles.rowHackathonsDisp}>
            <Card
              customClass="cardHackathonDisponiveis"
              bannerHacka={sesi}
              titleHacka="Hackathon SESI Lab"
              locationHacka="SESI Lab, Brasília"
              qtdparticipants="+330 participantes"
              timeline="5 dias restantes"
              children1={
                <div className={styles.tagsHacka}>
                  <Tag text="Online" customClass="roxoHacka" />
                  <Tag text="Inscrições Abertas" customClass="azulHacka" />
                  <Tag text="Inovação" customClass="verdeAguaHacka" />
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
                <LinkComponent linkTo={"/HackathonVisaoGeralSESI"}>
                  <Button text="Saiba Mais" customClass="buttonAzulHacka" />
                </LinkComponent>
              }
            ></Card>

            <Card
              customClass="cardHackathonDisponiveis"
              bannerHacka={banner}
              titleHacka="Hackathon: Uma Explanação em Tópicos"
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
                <LinkComponent linkTo={"/HackathonVisaoGeral"}>
                  <Button text="Saiba Mais" customClass="buttonAzulHacka" />
                </LinkComponent>
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
