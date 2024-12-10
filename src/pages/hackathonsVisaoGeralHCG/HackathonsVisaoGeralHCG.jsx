import {React, useEffect, useState} from "react";
import CardInscricao from "../../components/cardInscricao/CardInscricao";
import CardPreto from "../../components/layout/cardPreto/CardPreto";
import Bann from "../../components/Banner/Bann";
import Styles from "../hackathonsVisaoGeralHCG/HackathonVisaoGeralHCG.module.css";
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
import gov from "../../assets/imgs/gov.png";

function HackathonVisaoGeralHCG() {

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
        <Bann fotobanner = {gov} />
        <CardInscricao 
        
        inicio="Inicio"
        dates="20 jul,2022"
        termino="Vencedor"
        expired="25 jul, 2022"
        subsc="Inscrições acabam em:"
        dat="Encerrado"
        
        
        
        />
      </div>

      <div className={Styles.containersubprincipal}>
        <CardPreto
          title="Racionalizar recursos, desburocratizar processos, dar mais autonomia e transparência à sociedade"
          context="Buscamos soluções tecnológicas que contribuam com o desafio do governo federal de digitalização de seus serviços, visando facilitar a vida do cidadão, dos gestores públicos e de empresas prestadoras de serviço. Esse Hackathon visa tornar mais ágil o acesso às contratações governamentais, o credenciamento e a participação efetiva das empresas, evoluindo os serviços prestados
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

export default HackathonVisaoGeralHCG;
