import Styles from "./Planos.module.css";
import Esmeralda from "../../assets/imgs/esmeralda.svg";
import Rubi from "../../assets/imgs/rubi.svg";
import Diamante from "../../assets/imgs/diamante.svg";
import CardsPlanos from "../../components/layout/props.planos/CardsPlanos";
import CardBeneficios from "../../components/layout/props.planos/CardBeneficios";
import Botton from "../../components/layout/props.planos/Botton";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import { React, useEffect, useState } from "react";
import HeaderMobile from "../../components/HeaderFeed/HeaderFeed";

function Planos() {
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
    <section className={Styles.paidoplano}>
      {isMobile ? <HeaderMobile /> : <Header />}
      <div className={Styles.fundoplano}>
        <h1>Planos Empresariais</h1>
        <div className={Styles.benebox}>
          <CardsPlanos
            title="Esmeralda"
            img={Esmeralda}
            alt="Esmeralda"
            customtitle="titlegreen"
          >
            <CardBeneficios
              text="Acesso a Comunidade"
              customClass="bordergreen"
            ></CardBeneficios>
            <CardBeneficios
              text="Relatórios Simplificados de Feedback"
              customClass="bordergreen"
            ></CardBeneficios>
            <h3 className={Styles.preco1}>Free</h3>
            <Botton text="Contratado" customBotton="bottongreen"></Botton>
          </CardsPlanos>
          <CardsPlanos
            title="Rubi"
            img={Rubi}
            alt="Rubi"
            customtitle="titlepink"
          >
            <CardBeneficios
              text="Acesso a Comunidade"
              customClass="borderpink"
            ></CardBeneficios>
            <CardBeneficios
              text="Relatórios Simplificados de Feedback"
              customClass="borderpink"
            ></CardBeneficios>
            <CardBeneficios
              text="Perfis Básicos Estudantes"
              customClass="borderpink"
            ></CardBeneficios>
            <h3 className={Styles.preco2}>R$ 49,90</h3>
            <Botton text="Quero esse plano" customBotton="bottonpink"></Botton>
          </CardsPlanos>
          <CardsPlanos
            title="Diamante"
            img={Diamante}
            alt="Diamante"
            customtitle="titleblue"
          >
            <CardBeneficios
              text="Destaque a Comunidade"
              customClass="borderblue"
            ></CardBeneficios>
            <CardBeneficios
              text="Relatórios Elaborados de Feedback"
              customClass="borderblue"
            ></CardBeneficios>
            <CardBeneficios
              text="Perfis Completos Estudantes"
              customClass="borderblue"
            ></CardBeneficios>
            <CardBeneficios
              text="Assistência de RH por IA"
              customClass="borderblue"
            ></CardBeneficios>
            <h3 className={Styles.preco3}>R$ 59,90</h3>
            <Botton text="Quero esse plano" customBotton="bottonblue"></Botton>
          </CardsPlanos>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Planos;
