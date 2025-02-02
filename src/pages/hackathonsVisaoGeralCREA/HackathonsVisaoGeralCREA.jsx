import {React, useEffect, useState} from "react";
import CardInscricao from "../../components/cardInscricao/CardInscricao";
import CardPreto from "../../components/layout/cardPreto/CardPreto";
import Bann from "../../components/Banner/Bann";
import Styles from "../hackathonsVisaoGeralCREA/HackathonVisaoGeralCREA.module.css";
import Card from "../../components/layout/card/card";
import Header from "../../components/layout/header/Header";
import HeaderMobile from "../../components/HeaderFeed/HeaderFeed";
import Footer from "../../components/layout/footer/Footer";
import Person from "../../components/layout/card/person";
import person1 from "../../assets/imgs/pessoa1.png";
import person2 from "../../assets/imgs/pessoa2.png";
import person3 from "../../assets/imgs/pessoa3.png";
import Tag from "../../components/layout/card/tag";
import Button from "../../components/layout/button/button";
import Banner from "../../assets/imgs/banner.png";
import LinkComponent from "../../components/layout/link/LinkComponent";
import ideathon from "../../assets/imgs/ideathon.png";

function HackathonVisaoGeralCREA() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 868px)");
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);


  return (
  <>
      {isMobile? <HeaderMobile /> : <Header />}
    <div className={Styles.ContentPrincipal}>
      <div className={Styles.containerprincipal}>
        <Bann fotobanner = {ideathon} />
        <CardInscricao 
        
        inicio="Inicio"
        dates="06 out,2024"
        termino="Vencedor"
        expired="7 dez, 2024"
        subsc="Inscrições acabam em:"
        dat="Encerrado"
        
        />
      </div>

      <div className={Styles.containersubprincipal}>
        <CardPreto
          title="Como podemos aumentar a interação e o engajamento dos profissionais"
          context="Um Ideathon é uma maratona de ideias, onde mentes brilhantes se juntam para solucionar desafios e gerar soluções inovadoras! É um evento imersivo e colaborativo que reúne profissionais de diversas áreas, com o objetivo de estimular a criatividade, o trabalho em equipe e a geração de ideias disruptivas. No Ideathon do CREA-SP, vocês irão mergulhar em uma proposta imersiva e colaborativa, com o objetivo de gerar e desenvolver ideias inovadoras em torno de desafios específicos do CREA SP"

          mentors="Mentores"
          sponsors="Patrocinadores"
        />
      </div>
      <div className={Styles.hackthonsmais}>
        <h3>Mais Hackathons:</h3>
      </div>
      <div className={Styles.cardHacks}>
      <Card
              customClass="cardHackathonDisponiveis"
              bannerHacka={Banner}
              titleHacka="Hackathon Desvendado: Uma Explanação em Tópicos"
              locationHacka="São Paulo, SP"
              qtdparticipants="+150 participantes"
              timeline="20 dias restantes"
              children1={
                <div className={Styles.tagsHacka}>
                  <Tag text="Presencial" customClass="roxoHacka" />
                  <Tag text="Inscrições Abertas" customClass="azulHacka" />
                  <Tag text="Impacto Social" customClass="verdeAguaHacka" />
                  <Tag text="Sustentabilidade" customClass="azulClaroHacka" />
                </div>
              }
              children3={
                <div className={Styles.people}>
                  <Person person={person1} customClass="fotosHacka" />
                  <Person person={person2} customClass="fotosHacka" />
                  <Person person={person3} customClass="fotosHacka" />
                </div>
              }
              children2={
                <LinkComponent linkTo={"/Login"}>
                    <Button text="Saiba Mais" customClass="buttonAzulHacka" />
                   </LinkComponent>
              }
            ></Card>
      <Card
              customClass="cardHackathonDisponiveis"
              bannerHacka={Banner}
              titleHacka="Hackathon Desvendado: Uma Explanação em Tópicos"
              locationHacka="São Paulo, SP"
              qtdparticipants="+150 participantes"
              timeline="20 dias restantes"
              children1={
                <div className={Styles.tagsHacka}>
                  <Tag text="Presencial" customClass="roxoHacka" />
                  <Tag text="Inscrições Abertas" customClass="azulHacka" />
                  <Tag text="Impacto Social" customClass="verdeAguaHacka" />
                  <Tag text="Sustentabilidade" customClass="azulClaroHacka" />
                </div>
              }
              children3={
                <div className={Styles.people}>
                  <Person person={person1} customClass="fotosHacka" />
                  <Person person={person2} customClass="fotosHacka" />
                  <Person person={person3} customClass="fotosHacka" />
                </div>
              }
              children2={
                <LinkComponent linkTo={"/Login"}>
                    <Button text="Saiba Mais" customClass="buttonAzulHacka" />
                   </LinkComponent>
              }
              ></Card>
        
      </div>
    </div>
    <Footer />
              </>
  );
}

export default HackathonVisaoGeralCREA;
