import {React, useEffect, useState} from "react";
import CardInscricao from "../../components/cardInscricao/CardInscricao";
import CardPreto from "../../components/layout/cardPreto/CardPreto";
import Bann from "../../components/Banner/Bann";
import Styles from "../hackathonsVisaoGeralSESI/HackathonVisaoGeralSESI.module.css";
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
import sesi from "../../assets/imgs/sesi.png";

function HackathonVisaoGeralSESI() {

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
        <Bann fotobanner = {sesi} />
        <CardInscricao 
        
          inicio="Início"
          dates="13 dez, 2024"
          termino="Vencedor"
          expired="15 dez, 2024"
          subsc="Inscrições acabam em:"
          dat="14 dias | 15h:13m"
        
        
        />
      </div>

      <div className={Styles.containersubprincipal}>
        <CardPreto
          title="Soluções inovadoras para cidades satélites do DF"
          context="A competição visa trazer oportunidades e incentivos para jovens em vulnerabilidade social - tanto aqueles em idade escolar como aqueles que já estejam no momento pós ensino médio. O critério para seleção das cidades escolhidas para participar da competição foi os de regiões de renda média-baixa ou baixa do DF que menos visitaram o museu no ano.
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

export default HackathonVisaoGeralSESI;
