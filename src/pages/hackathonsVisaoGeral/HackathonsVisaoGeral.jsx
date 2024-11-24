import {React, useEffect, useState} from "react";
import CardInscricao from "../../components/cardInscricao/CardInscricao";
import CardPreto from "../../components/layout/cardPreto/CardPreto";
import Bann from "../../components/Banner/Bann";
import Styles from "../hackathonsVisaoGeral/HackathonVisaoGeral.module.css";
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

function HackathonVisaoGeral() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 868px)");
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);


  return (
    <div className={Styles.ContentPrincipal}>
      {isMobile? <HeaderMobile /> : <Header />}
      <div className={Styles.containerprincipal}>
        <Bann />
        <CardInscricao />
      </div>

      <div className={Styles.containersubprincipal}>
        <CardPreto
          title="Rede ou Aplicativo para Conectar Fornecedores Locais"
          context="Como parte de nossa visão de promover a economia local e garantir sustentabilidade, desenvolvemos um aplicativo que conecta diretamente o Terra Vermelha a fornecedores locais de materiais de construção, móveis e serviços relacionados. Esse aplicativo cria uma plataforma de mercado eficiente, reduzindo custos logísticos e fortalecendo a economia regional, ao mesmo tempo em que assegura uma cadeia de suprimentos mais sustentável e personalizada.
"
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
                <Button text="Saiba Mais" customClass="buttonAzulHacka" />
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
                <Button text="Saiba Mais" customClass="buttonAzulHacka" />
              }
            ></Card>
        
      </div>
      <Footer />
    </div>
  );
}

export default HackathonVisaoGeral;
