import {React, useEffect, useState} from "react";
import CardInscricaoInterno from "../../components/cardInscricao/CardInscricaoInterno";
import CardPreto from "../../components/layout/cardPreto/CardPreto";
import Bann from "../../components/Banner/Bann";
import Styles from "../hackathonsVisaoGeralInterno/HackathonVisaoGeralInterno.module.css";
import Card from "../../components/layout/card/card";
import HeaderInterno from "../../components/layout/headerInterno/HeaderInterno";
import Footer from "../../components/layout/footer/Footer";
import HeaderMobile from "../../components/HeaderFeedInterno/HeaderFeedInterno";

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
      {isMobile? <HeaderMobile /> : <HeaderInterno />}
      <div className={Styles.containerprincipal}>
        <Bann />
        <CardInscricaoInterno />
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
          title_hackathon="Hackathon Desvendado: Uma Explanação em Tópicos"
          acounter="+150 participantes"
          timeline="20 dias restantes"
          customClass="cardHackscustom"
        />
        <Card
          title_hackathon="Hackathon Desvendado: Uma Explanação em Tópicos"
          acounter="+150 participantes"
          timeline="20 dias restantes"
          customClass="cardHackscustom"
        />
      </div>
      <Footer />
    </div>
  );
}

export default HackathonVisaoGeral;
