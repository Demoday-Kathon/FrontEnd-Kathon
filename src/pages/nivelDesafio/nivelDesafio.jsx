import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderMobile from "../../components/HeaderFeed/HeaderFeed";
import HeaderInterno from "../../components/layout/header/Header";
import styles from "../nivelDesafio/nivelDesafio.module.css";
import largatixa from "../../assets/imgs/largatixa.svg";
import crocodilo from "../../assets/imgs/crocodilo.svg";
import dinossauro from "../../assets/imgs/dinossauro.svg";
import Footer from "../../components/layout/footer/Footer";
import Button from "../../components/layout/button/button";
import { FaExclamationTriangle } from "react-icons/fa";

function NivelDesafio() {
  const [isMobiles, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 868px)");
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <>
      {isMobiles ? <HeaderMobile /> : <HeaderInterno />}
      <div className={styles.caixaDesafio}>
        <div className={styles.titleDesafio}>
          <h1>
            <span>Desafios</span> para você <br></br> desenvolver suas{" "}
            <span>habilidades</span>
          </h1>
        </div>
        <div className={styles.sumariodesafio}>
          <p>
            Pensando em você que quer colocar em prática suas habilidades,
            criamos a KIA, uma Inteligência Artificial que cria desafios
            práticos baseado no seu nível de conhecimento. Clique, explore e
            pratique!
          </p>
        </div>
        <div className={styles.nivelDesafio}>
          <Link className={styles.desafio1} to="/login">
            <p>Modo Largatixa</p>
          </Link>
          <Link className={styles.desafio2} to="/login">
            <p>Modo Jacaré</p>
          </Link>
          <Link className={styles.desafio3} to="/login">
            <p>Modo Dinossauro</p>
          </Link>
        </div>
        <div className={styles.nivels}>
          <div className={styles.nivelIniciante}>
            <img src={largatixa} alt="" /> <br />
            <p className={styles.titleIniciante}>Nível Iniciante</p>
            <p className={styles.infosDesafios}>
              Para você que ainda <br />
              não sabe muito
            </p>
          </div>
          <div className={styles.nivelIntermediario}>
            <img src={crocodilo} alt="" />
            <p className={styles.titleIntermediario}>Nível Intermediário</p>
            <p className={styles.infosDesafios}>
              Para você que já tem <br /> uma certa experiência
            </p>
          </div>
          <div className={styles.nivelAvancado}>
            <img src={dinossauro} alt="" />
            <p className={styles.titleAvancado}>Nível Avançado</p>
            <p className={styles.infosDesafios}>
              Para você que sabe muito <br /> e quer se aprimorar
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default NivelDesafio;
